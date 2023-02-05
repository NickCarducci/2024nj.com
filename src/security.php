<?php
//https://github.com/laminas/laminas-xml/blob/1.5.x/src/Security.php
namespace Backbank\;

interface ExceptionInterface{}
// extends \RuntimeException implements ExceptionInterface 
class RuntimeException implements ExceptionInterface{}

class InvalidArgumentException implements ExceptionInterface{}

class Utils {
  protected static function getBomMap() {
      return [
          ['encoding' => 'UTF-32BE','bom' => pack('CCCC', 0x00, 0x00, 0xfe, 0xff),'length'   => 4,],
          ['encoding' => 'UTF-32LE','bom' => pack('CCCC', 0xff, 0xfe, 0x00, 0x00),'length'   => 4,],
          ['encoding' => 'GB-18030','bom' => pack('CCCC', 0x84, 0x31, 0x95, 0x33),'length'   => 4,],
          ['encoding' => 'UTF-16BE','bom' => pack('CC', 0xfe, 0xff),'length'   => 2,],
          ['encoding' => 'UTF-16LE','bom' => pack('CC', 0xff, 0xfe),'length'   => 2,],
          ['encoding' => 'UTF-8','bom' => pack('CCC', 0xef, 0xbb, 0xbf),'length'   => 3,]
      ];// common encoding (list) ->BOM maps, character length https://en.wikipedia.org/wiki/Byte_order_mark
  }
  protected static function asciimap() {
      return [
          'UTF-32BE'   => function ($ascii) {return preg_replace('/(.)/', "\0\0\0\\1", $ascii);},
          'UTF-32LE'   => function ($ascii) {return preg_replace('/(.)/', "\\1\0\0\0", $ascii);},
          'UTF-32odd1' => function ($ascii) {return preg_replace('/(.)/', "\0\\1\0\0", $ascii);},
          'UTF-32odd2' => function ($ascii) {return preg_replace('/(.)/', "\0\0\\1\0", $ascii);},
          'UTF-16BE'   => function ($ascii) {return preg_replace('/(.)/', "\0\\1", $ascii);},
          'UTF-16LE'   => function ($ascii) {return preg_replace('/(.)/', "\\1\0", $ascii);},
          'UTF-8'      => function ($ascii) {return $ascii;},
          'GB-18030'   => function ($ascii) {return $ascii;},
      ];// byte order sequence of that string for the encoding.
  }
}

class Security {
    $utils = new Utils;

    const ENTITY_DETECT = 'Detected use of ENTITY in XML, disabled to prevent XXE/XEE attacks';

    // Heuristic expansion or external declaration
    protected static function heuristicScan($xml)
    {
        foreach (self::getEntityComparison($xml) as $compare) {
            if (strpos($xml, $compare) !== false) {
                throw new Exception\RuntimeException(self::ENTITY_DETECT);
            }
        }
    }
    private static function scanString($xml, DOMDocument $dom = null, $libXmlConstants, callable $cbdom)
    {
        // If running with PHP-FPM we perform an heuristic scan
        // We cannot use libxml_disable_entity_loader because of this bug
        // @see https://bugs.php.net/bug.php?id=64938
        if (self::isPhpFpm()) {
            self::heuristicScan($xml);
        }

        if (null === $dom) {
            $simpleXml = true;
            $dom = new DOMDocument();
        }

        if (! self::isPhpFpm()) {
            if (\PHP_VERSION_ID < 80000) {
                $loadEntities = libxml_disable_entity_loader(true);
            }
            $useInternalXmlErrors = libxml_use_internal_errors(true);
        }

        // Load XML with network access disabled (LIBXML_NONET)
        // error disabled with @ for PHP-FPM scenario
        set_error_handler(function ($errno, $errstr) {
            if (substr_count($errstr, 'DOMDocument::loadXML()') > 0) {
                return true;
            }
            return false;
        }, E_WARNING);

        $result = $cbdom($xml, $dom, LIBXML_NONET | $libXmlConstants);

        restore_error_handler();

        if (! $result) {
            // Entity load to previous setting
            if (! self::isPhpFpm()) {
                if (\PHP_VERSION_ID < 80000) {
                    libxml_disable_entity_loader($loadEntities);
                }
                libxml_use_internal_errors($useInternalXmlErrors);
            }
            return false;
        }

        // Scan for potential XEE attacks using ENTITY, if not PHP-FPM
        if (! self::isPhpFpm()) {
            foreach ($dom->childNodes as $child) {
                if ($child->nodeType === XML_DOCUMENT_TYPE_NODE) {
                    if ($child->entities->length > 0) {
                        throw new Exception\RuntimeException(self::ENTITY_DETECT);
                    }
                }
            }
        }

        // Entity load to previous setting
        if (! self::isPhpFpm()) {
            if (\PHP_VERSION_ID < 80000) {
                libxml_disable_entity_loader($loadEntities);
            }
            libxml_use_internal_errors($useInternalXmlErrors);
        }

        if (isset($simpleXml)) {
            $result = simplexml_import_dom($dom);
            if (! $result instanceof SimpleXMLElement) {
                return false;
            }
            return $result;
        }
        return $dom;
    }
    public static function scan($xml, DOMDocument $dom = null, $libXmlConstants = 0)
    {
        $cbdom = function ($xml, $dom, $constants) {
            return $dom->loadXml($xml, $constants);
        };
        return self::scanString($xml, $dom, $libXmlConstants, $cbdom);
    }
    public static function scanHtml($html, DOMDocument $dom = null, $libXmlConstants = 0)
    {
        $cbdom = function ($html, $dom, $constants) {
            return $dom->loadHtml($html, $constants);
        };
        return self::scanString($html, $dom, $libXmlConstants, $cbdom);
    }
    public static function scanFile($file, DOMDocument $dom = null)
    {
        if (! file_exists($file)) {
            throw new Exception\InvalidArgumentException(
                "The file $file specified doesn't exist"
            );
        }
        return self::scan(file_get_contents($file), $dom);
    }

    /**
     * 
     * edited
     */
    public static function isPhpFpm()
    {
        $isVulnerableVersion = version_compare(PHP_VERSION, '5.6', 'ge')
            && version_compare(PHP_VERSION, '5.6.6', 'lt');
        if (0 === strpos(php_sapi_name(), 'fpm') && $isVulnerableVersion) return true;
        return false;// php-fpm threading libxml should use heuristic but for PHP versions 5.6.6+
    }
    protected static function getEntityComparison($xml)
    {
        $encodingMap = $utils.asciimap();
        return array_map(function ($encoding) use ($encodingMap) {
            $generator = isset($encodingMap[$encoding]) ? $encodingMap[$encoding] : $encodingMap['UTF-8'];
            return $generator('<!ENTITY');
        }, self::xml($xml, self::string($xml)));
    }

    protected static function string($xml) {
        function bom($string) {
            foreach ($utils.getBomMap() as $criteria) {
                int lng = strncmp($string, $criteria['bom'], $criteria['length']);
                if (0 === lng) return $criteria['encoding'];}
            return false;// getBomMap() filter for when initial bytes == BOM && return encoding
        }
        function xmlstring($xml) {
            foreach ($utils.asciimap() as $encoding => $generator) {
                $prefix = $generator('<' . '?xml');
                if (0 === strncmp($xml, $prefix, strlen($prefix))) return $encoding;}
            return 'UTF-8';// Fallback
        }
        return bom($xml) ?: xmlstring($xml);//BOM or heuristic string File encoding
    }

    protected static function xml($xml, $fileEncoding) {
        static function substr($string, $start, $end) {
            $substr = '';
            for ($i = $start; $i < $end; $i += 1) {
                $substr .= $string[$i];
            }
            return $substr;// loop by character to aggregate multi-byte characters
        }
        $encodingMap = $utils.asciimap();
        $generator   = $encodingMap[$fileEncoding];
        $encAttr     = $generator('encoding="');
        $quote       = $generator('"');
        $close       = $generator('>');

        $closePos    = strpos($xml, $close);
        if (false === $closePos)return[$fileEncoding];

        $encPos = strpos($xml, $encAttr);
        if (false===$encPos||$encPos>$closePos)return[$fileEncoding];

        $encPos   += strlen($encAttr);//declarations as ASCII or file encoding if not declared (well-formed and present)
        $quotePos = strpos($xml, $quote, $encPos);
        if(false === $quotePos)return[$fileEncoding];

        $encoding = self::substr($xml, $encPos, $quotePos);
        //8-bit safe 
        return [str_replace('\0', '', $encoding), $fileEncoding,];
    }
}
