<?php

$comps = $_GET['comps'];
error_log('comp = ' . $comps);

$src = file_get_contents('app.js');

echo $src;

