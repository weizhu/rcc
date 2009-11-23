<?php

$comps = $_GET['comps'];
$excludes = $_GET['exclude'];

class ResourceMap {

  public function __construct($file) {
    $docInfo = json_decode(file_get_contents($file), true);
    $this->map = array();
    $modules = $docInfo['modules'];
    foreach ($modules as $comp => $info) {
      $this->map[$comp] = array(
        'name' => $info['provides'],
        'file' => $info['fullPath'],
        'requires' => self::getCompsFromString($info['requires'])
      );
    }
    error_log('maps ' . var_export($this->map, true));
  }

  public static function getCompsFromString($s, $prefix = null) {
    $comps = array();
    // $a = explode(' ', $s);
    $a = preg_split('/[ |,]/', $s);
    foreach ($a as $req) {
      $req = trim($req);
      if (strlen($req) > 0) {
        if ($prefix && strpos($req, $prefix) === false) {
          $req = $prefix . $req;
        }
        $comps[] = $req;
      }
    }

    return $comps;
  }

  public function getRequiredResources($comps, $exclude_comps) {
    $map = array();
    $list = array();

    // First, fill $map with comps that will be excluded
    $exclude_list = array();
    foreach( $exclude_comps as $exclude_comp) {
      $this->resolveDependency($exclude_comp, $map, $exclude_list);
    }

    foreach( $comps as $comp) {
      $this->resolveDependency($comp, $map, $list);
    }

    return $list;
  }

  public function render($resList) {
    $result = array();
    $comps = array();
    foreach ($resList as $res) {
      $result[] = file_get_contents($res['file']);
      $comps[] = '"' . $res['name'] . '"';
    }
    $result[] = 'FB.Loader.onScriptLoaded([' . implode(',', $comps) . ']);';
    header('Content-type: text/javascript');
    echo implode("\n", $result);
  }

  private function resolveDependency($comp, &$map, &$list) {
    if (!isset($this->map[$comp])) {
      error_log("Unknown comp = $comp");
      return;
    }

    if (!isset($map[$comp])) {
      $map[$comp] = true;
      $requires = $this->map[$comp]['requires'];
      foreach ($requires as $req) {
        $this->resolveDependency($req, $map, $list);
      }

      $list[] = $this->map[$comp];
    }
  }
  private $map;
};

$resMap = new ResourceMap('../docs/parser/parsed.json');

$comps = ResourceMap::getCompsFromString($comps, 'FB.');
$comps[] = 'FB.Loader';
$exclude_comps = ResourceMap::getCompsFromString($excludes, 'FB.');


$resList = $resMap->getRequiredResources($comps, $exclude_comps);

echo $resMap->render($resList);

