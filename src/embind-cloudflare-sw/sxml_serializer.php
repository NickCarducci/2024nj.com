<?PHP

error_reporting(E_ALL);

require_once 'XML/Serializer.php';

$index = new stdClass();
$index->error = PEAR::raiseError('error',123);
$index->app = require_once 'sxml_index.php';//new Index();

$serializer = new XML_Serializer(array(
    XML_SERIALIZER_OPTION_INDENT      => '    ',
    XML_SERIALIZER_OPTION_LINEBREAKS  => "\n",
    XML_SERIALIZER_OPTION_DEFAULT_TAG => 'unnamedItem',
    XML_SERIALIZER_OPTION_TYPEHINTS   => true
  ));

if($serializer-> serialize($index)) 
    $xml = $serializer-> getSerializedData();

echo '<pre>';
echo htmlspecialchars($xml);
echo '</pre>';