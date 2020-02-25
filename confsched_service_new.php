<?php			

// ------------------------------------------------------------------------------------------------------------
// -----------=============######## Second version Kiosk System with JSON/ICAL ########=============-----------
// ------------------------------------------------------------------------------------------------------------
//  Copyright a97marbr / HGustavs
//
//        (\ /)
//        (. .)           
//       c(")(")  ∴ 
//-------------------------------------------------------------------------------------------------------------

date_default_timezone_set('Europe/Stockholm');
$debug="NONE!";

//------------------------------------------------------------------------------------------------
// getOP
//------------------------------------------------------------------------------------------------

function getOP($name)
{
		if(isset($_POST[$name]))	return urldecode($_POST[$name]);
		else return "UNK";
}
	
/*--------------------------------------------------------------------------------
	 Create Database
----------------------------------------------------------------------------------*/	

// Updated database! - id is varchar 32 so we can store uuids of different kinds if need be
// New feature: Each row contains one element not one day - this is so we can synch more effectively using ids
$log_db = new PDO('sqlite:./scheduledata.db');
$log_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$log_db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$sql = 'CREATE TABLE IF NOT EXISTS sched(id VARCHAR(32) PRIMARY KEY,datum varchar(10), datan TEXT);';
$log_db->exec($sql);	
$sql = 'CREATE TABLE IF NOT EXISTS conf(id INTEGER PRIMARY KEY,link text,kind varchar(32),aux text);';
$log_db->exec($sql);	

$link=getOP('link');
$kind=getOP('kind');
$aux=getOP('aux');
$id=getOP('id');

/*--------------------------------------------------------------------------------
	 Re-Read synchronized database
----------------------------------------------------------------------------------*/	

// Retrieve full database and swizzle into associative array for each day
$cdbarr=Array();
$result = $log_db->query('SELECT * FROM conf;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		$cdbarr[$row['id']]=$row;
}

// Change detection (so we can avoid over-updating sqlite file)
if(!isset($cdbarr[$id])){
		// Make insert
//		if($link!="UNK"&&$kind!="UNK"&&$aux!="UNK"){
				$query = $log_db->prepare('INSERT INTO conf(link,kind,aux) VALUES (:link,:kind,:aux)');
				$query->bindParam(':link', $link);
				$query->bindParam(':kind', $kind);
				$query->bindParam(':aux', $aux);
				if(!$query->execute()) {
							$error=$query->errorInfo();
							$debug="Error:\nError saving config to database!\n".$error[2];
				}	
//		}
}else{
		// Check if changed, if so, make update
}

$called_service="Gladslack";
$ret = array(
    "debug" => $debug,
    "confdata" => $cdbarr,
    "called_service" => $called_service
);

header('Content-Type: application/json');
echo json_encode($ret);
?>