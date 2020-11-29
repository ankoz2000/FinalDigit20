<?php
$uri = $_SERVER['REQUEST_URI'];

if($uri === '/')
    require './s/index.html';
/*elseif($uri === '/find')
    require 'pages/about.php';
else
    require 'pages/error404.php';*/
?>