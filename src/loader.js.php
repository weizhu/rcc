<?php

$comps = $_GET['comps'];

class ResourceMap {

  public function __construct($file) {
    $docInfo = json_decode(file_get_contents($file), true);
    $this->map = array();
    $modules = $docInfo['modules'];
    foreach ($modules as $comp => $info) {
      $this->map[$comp] = array(
        'name' => $comp,
        'file' => $info['fullPath'],
        'requires' => self::getCompsFromString($info['requires'])
      );
    }

  }

  public static function getCompsFromString($s) {
    $comps = array();
    // $a = explode(' ', $s);
    $a = preg_split('/[ |,]/', $s);
    foreach ($a as $req) {
      $req = trim($req);
      if (strlen($req) > 0) {
        $comps[] = $req;
      }
    }

    return $comps;
  }

  public function getRequiredResources($comps) {
    $map = array();
    $list = array();
    foreach( $comps as $comp) {
      $this->resolveDependency($comp, $map, $list);
    }

    return $list;
  }

  public function render($resList) {
    $result = array();
    foreach ($resList as $res) {
      $result[] = file_get_contents($res['file']);
    }

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

$comps = ResourceMap::getCompsFromString($comps);

$resList = $resMap->getRequiredResources($comps);

echo $resMap->render($resList);

