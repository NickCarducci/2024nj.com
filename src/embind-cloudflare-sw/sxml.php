<?php
//old https://github.com/laminas/laminas-xmlrpc/blob/2.14.x/src/Generator/DomDocument.php

namespace Backbank\;

/**
 * "You use an interface when you need to 
 * define a contract in your program but you 
 * don't really care about the rest of the 
 * properties of the class that fulfills that 
 * contract." //https://stackoverflow.com/a/240183/11711280
 * 
 * "The interface contains only the declaration of the 
 * methods and fields, but not the implementation. We cannot use it to build anything."
 * //https://www.javatpoint.com/typescript-class-vs-interface
 */
// XML generator adapter interface
interface API
{
    public function getEncoding();
    public function setEncoding($encoding);
    public function openElement($name, $value = null);
    public function closeElement($name);
    public function saveXml();
    public function stripDeclaration($xml);
    public function flush();
    public function __toString();
}
//assertInstanceOf(API::class, $generator);
use function preg_replace;

// abstract can be subclassed
abstract class Generator implements API {
    protected $encoding;
    public function __construct($encoding = 'UTF-8') {
        $this->setEncoding($encoding);
        $this->init();
    }
    abstract protected function init();//internal objs
    public function getEncoding() return $this->encoding;
    public function setEncoding($encoding) {
        $this->encoding = $encoding;
        return $this;//AbstractGenerator
    }
    public function openElement($name, $value = null) {
        $this->openXmlElement($name);
        if ($value !== null) $this->writeTextData($value);
        return $this;
    }
    // in, tag name & optional-value; out, AbstractGenerator "Fluent interface"
    public function closeElement($name) {
        $this->closeXmlElement($name);
        return $this;
    }
    public function flush() {
        $xml = $this->saveXml();// flush internal buffers
        $this->init();
        return $xml;
    }
    public function __toString() return $this->stripDeclaration($this->saveXml());// strip document declaration
    public function stripDeclaration($xml) return preg_replace('/<\?xml version="1.0"( encoding="[^\"]*")?\?>\n/u', 
                                                    '', $xml); // Remove XML declaration
    abstract protected function openXmlElement($name);
    abstract protected function writeTextData($text);
    abstract protected function closeXmlElement($name);
}


class XmlWriter extends Generator {
    protected $xmlWriter;//XML generator adapter based on XMLWriter

    protected function init() {
        $this->xmlWriter = new \XMLWriter();// constructor
        $this->xmlWriter->openMemory();
        $this->xmlWriter->startDocument('1.0', $this->encoding);
    }
    protected function openXmlElement($name) {
        $this->xmlWriter->startElement($name);
    }
    protected function writeTextData($text) {
        $this->xmlWriter->text($text);
    }
    protected function closeXmlElement($name) {
        $this->xmlWriter->endElement();
        return $this;
    }   
    public function saveXml() {
        return $this->xmlWriter->flush(false); // emit
    }
}