<?php
//https://github.com/laminas/laminas-xml/blob/1.5.x/src/Security.php
namespace Backbank\;

interface ExceptionInterface{}
// extends \RuntimeException implements ExceptionInterface 
class RuntimeException implements ExceptionInterface{}

class InvalidArgumentException implements ExceptionInterface{}

class Security
{
    public static function isPhpFpm()
    {
        $isVulnerableVersion = version_compare(PHP_VERSION, '5.6', 'ge')
            && version_compare(PHP_VERSION, '5.6.6', 'lt');
        if (0 === strpos(php_sapi_name(), 'fpm') && $isVulnerableVersion) {
            return true;
        }
        return false;// php-fpm threading libxml should use heuristic but for PHP versions 5.6.6+
    }
    protected static function getEntityComparison($xml)
    {
        $encodingMap = self::getAsciiEncodingMap();
        return array_map(function ($encoding) use ($encodingMap) {
            $generator = isset($encodingMap[$encoding]) ? $encodingMap[$encoding] : $encodingMap['UTF-8'];
            return $generator('<!ENTITY');
        }, self::detectXmlEncoding($xml, self::detectStringEncoding($xml)));
    }
    protected static function detectStringEncoding($xml) {


        return self::detectBom($xml) ?: self::detectXmlStringEncoding($xml);//BOM or heuristic string File encoding
    }
    protected static function detectBom($string)
    {
        foreach (self::getBomMap() as $criteria) {
            if (0 === strncmp($string, $criteria['bom'], $criteria['length'])) {
                return $criteria['encoding'];
            }
        }
        return false;// getBomMap() filter for when initial bytes == BOM && return encoding
    }
    protected static function detectXmlStringEncoding($xml)
    {
        foreach (self::getAsciiEncodingMap() as $encoding => $generator) {
            $prefix = $generator('<' . '?xml');
            if (0 === strncmp($xml, $prefix, strlen($prefix))) {
                return $encoding;
            }
        }
        return 'UTF-8';// Fallback
    }
    protected static function detectXmlEncoding($xml, $fileEncoding)
    {
        $encodingMap = self::getAsciiEncodingMap();
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
    protected static function getBomMap()
    {
        return [
            ['encoding' => 'UTF-32BE','bom' => pack('CCCC', 0x00, 0x00, 0xfe, 0xff),'length'   => 4,],
            ['encoding' => 'UTF-32LE','bom' => pack('CCCC', 0xff, 0xfe, 0x00, 0x00),'length'   => 4,],
            ['encoding' => 'GB-18030','bom' => pack('CCCC', 0x84, 0x31, 0x95, 0x33),'length'   => 4,],
            ['encoding' => 'UTF-16BE','bom' => pack('CC', 0xfe, 0xff),'length'   => 2,],
            ['encoding' => 'UTF-16LE','bom' => pack('CC', 0xff, 0xfe),'length'   => 2,],
            ['encoding' => 'UTF-8','bom' => pack('CCC', 0xef, 0xbb, 0xbf),'length'   => 3,]
        ];// common encoding (list) ->BOM maps, character length https://en.wikipedia.org/wiki/Byte_order_mark
    }
    protected static function getAsciiEncodingMap()
    {
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
    protected static function substr($string, $start, $end)
    {
        $substr = '';
        for ($i = $start; $i < $end; $i += 1) {
            $substr .= $string[$i];
        }
        return $substr;// loop by character to aggregate multi-byte characters
    }
}
