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

//-------------------------------------------------------------------------------------------------
// readjson - function for reading a json from a link and saving it to array incl error correction
//-------------------------------------------------------------------------------------------------

function readJson($filename)
{
		global $debug;

		$jsontext = file_get_contents($filename); 
		$jsondata = json_decode($jsontext);
		if(json_last_error()!=JSON_ERROR_NONE){
				$debug="Error:\nJson error for import!";
		}	
		return $jsondata;
}

//----------------------------------------------------------------------------------
// updateElement - function for updating element using sql ported over from old kiosk
//----------------------------------------------------------------------------------

function createElement($id,$datum,$element)
{
		global $debug;
		global $log_db;
	
		$jsonelement = json_encode($element);
		$query = $log_db->prepare('INSERT INTO sched(id,datum,datan) VALUES (:id,:datum,:datan)');
		$query->bindParam(':datum', $datum);
		$query->bindParam(':datan', $jsonelement);
		$query->bindParam(':id', $id);
		if(!$query->execute()) {
			$error=$query->errorInfo();
			$debug="Error:\nImporting schedule element from history!\n".$error[2];
		}	
}

/*--------------------------------------------------------------------------------
	 Import history
----------------------------------------------------------------------------------*/	

// Check if no history, if so, read history by default. select count(*) from sched if count is zero import history
$res=$log_db->query("SELECT COUNT(*) FROM sched;");
if(!$res) {
	$error=$res->errorInfo();
	$debug="Error:\nImporting schedule element from history!\n".$error[2];
}

$rowcnt=$res->fetchColumn();
if ($rowcnt==0){
	$jsondata=readJson('history.json');
	
	// Parse each of the elements in json array and insert into database
	foreach ($jsondata as $element) {
			$id=$element->id;
			$datum=$element->startdatum;
			createElement($id,$datum,$element);
	}
}else{
//		echo "Rows in history:".$rowcnt;
}

/*--------------------------------------------------------------------------------
	 Synchronize
----------------------------------------------------------------------------------*/	

// Create array for synchronization of database
$dbarr=Array();
$result = $log_db->query('SELECT * FROM sched;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		$dbarr[$row['id']]=$row['datan'];
}

// Foreach ical entry
// Read data from calendar json
//$calendar=readJson('ical.json');
//$calendar=readJson('json_export_ical.php?inurl='.$ical);

// Synchronize data from calendar with database
foreach ($calendar as $element) {
		$id=$element->id;
		$datum=$element->startdatum;

		// If element with id does not exist in database, Make it so, if element in database is changed compared to data, Update it!
		if(isset($dbarr[$id])){
				if($dbarr[$id]!=json_encode($element)){
						echo "Change detected: ".$id." ".$datum."\n";
						// modifElement($id,$datum,$element);
				}
		}else{
				createElement($id,$datum,$element);
		}
}

// End foreach ical

/*--------------------------------------------------------------------------------
	 Re-Read synchronized database
----------------------------------------------------------------------------------*/	

// Retrieve full config and swizzle into associative array for each config id
$cdbarr=Array();
$result = $log_db->query('SELECT * FROM conf;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		$cdbarr[$row['id']]=$row;
}

// Retrieve full database and swizzle into associative array for each day
$dbarr=Array();
$result = $log_db->query('SELECT * FROM sched;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		if(isset($dbarr[$row['datum']])){
				array_push($dbarr[$row['datum']], $row['datan']);
		}else{
				$dbarr[$row['datum']]=Array();
				array_push($dbarr[$row['datum']], $row['datan']);
		}
}

$called_service="Gladpack";
$ret = array(
    "debug" => $debug,
    "data" => $dbarr,
    "confdata" => $cdbarr,	
    "called_service" => $called_service
);

header('Content-Type: application/json');
echo json_encode($ret);
?>