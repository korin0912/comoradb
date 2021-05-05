<?php

$json = json_decode(file_get_contents($argv[1]), true);

function key_cmp($a, $b)
{
  return intval($a) - intval($b);
}

uksort($json, "key_cmp");

file_put_contents($argv[2], json_encode($json, JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES));
