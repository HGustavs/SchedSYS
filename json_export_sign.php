<?php

// ------------------------------------------------------------------------------------------------------------
// -----------=============######## Second version Kiosk System with XML ########=============-----------
// ------------------------------------------------------------------------------------------------------------
//  Copyright a97marbr / HGustavs
//
//        (\ /)
//        (. .)           
//       c(")(")  ∴ 
//-------------------------------------------------------------------------------------------------------------

$file="signatures.txt";

$raw = file_get_contents($file);
$arr=explode("\n",$raw);

$json=array();
foreach($arr as $row){
		if (substr($row, 0, 1) !== '#') {
				$sign=trim(substr($row,strrpos($row,',')+1));
				$name=trim(substr($row,0,strrpos($row,',')));
				$json[$name]=$sign;
		}
}

echo json_encode($json);