<?php			

require "config.php";

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
$alldata=array();

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

// If you have an old DB you need to update once with SQL below.
// $sql = 'ALTER TABLE sched ADD COLUMN canceled VARCHAR(20) DEFAULT NULL;';
// $log_db->exec($sql);	

$pathurl=substr($_SERVER['HTTP_REFERER'],0,strrpos($_SERVER['HTTP_REFERER'],"/"));

//-------------------------------------------------------------------------------------------------
// getNames - function for reading a txt files and return name -> sign array
//-------------------------------------------------------------------------------------------------

function getNames()
{
		global $debug;

		$url=$_SERVER['REQUEST_SCHEME'] .'://'. $_SERVER['HTTP_HOST'] . explode('?', $_SERVER['REQUEST_URI'], 2)[0];
		$url=trim(substr($url,0,strrpos($url,'/')+1));
		$url.='json_export_sign.php';
		$jsontext = file_get_contents($url);
		$jsondata = json_decode($jsontext);
		if(json_last_error()!=JSON_ERROR_NONE){
				$debug="Error:\nJson error for import!";
		}	
		return $jsondata;
}

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

function createElement($id,$datum,$element,$op)
{
		global $debug;
		global $log_db;
	
		if($op=="i"){
			$query = $log_db->prepare('INSERT INTO sched(id,datum,datan) VALUES (:id,:datum,:datan)');
		}else{
			$query = $log_db->prepare('UPDATE sched SET datum=:datum,datan=:datan WHERE id=:id');			
		}
			
		$jsonelement = json_encode($element);
		$query->bindParam(':datum', $datum);
		$query->bindParam(':datan', $jsonelement);
		$query->bindParam(':id', $id);
		if(!$query->execute()) {
			$error=$query->errorInfo();
			$debug="Error:\nImporting schedule element from history!\n".$error[2];
		}	
}

function deleteElement($id)
{
		global $debug;
		global $log_db;
	
		$query = $log_db->prepare("UPDATE sched SET canceled=strftime('%Y-%m-%d %H:%M:%S','now') WHERE id=:id");
			
		$query->bindParam(':id', $id);
		if(!$query->execute()) {
			$error=$query->errorInfo();
			$debug="Error:\nRemoving meeting from DB!\n".$error[2];
		}	
}

function syncData($dataset,$dbarr)
{
		global $debug;
		global $alldata;
		// Parse each of the elements in json array and insert into database
		foreach ($dataset as $element) {
				$id=$element->id;
				$datum=$element->startdatum;
				$alldata[$id]=$element;
				// If element with id does not exist in database, Make it so, if element in database is changed compared to data, Update it!
				if(isset($dbarr[$id])){

					// Clever way to check if only comment has changed if so, keep unmodified
					$tmp_element=$element;
					$tmp_db_element=json_decode($dbarr[$id]);
					

					// Only repair exjobbsmöte
					if($tmp_element->kursben=="Exjobbsmöte"){
							$tmp_element->kommentar=$tmp_db_element->kommentar;
					}
					
					//$debug.="\n\nSee if only comment differ: " . ($dbarr[$id] != json_encode($tmp_element)) . "\n\n" . json_encode($tmp_db_element). "\n\n" . json_encode($tmp_element) . "!!\n\n" . $dbarr[$id] . "!!"."\n";
					// If more than comment has changed ... do update
					if ($dbarr[$id] != json_encode($tmp_element)){
						createElement($id, $datum, $element, "u");	
					}
				}else{
						createElement($id,$datum,$element,"i");
						$dbarr[$id]=json_encode($element);
				}
		}
		// Go through all elements from now and forward in $dbarr, 
		// if an element in $dbarr do not occur in $alldata this means that the element has been canceled
		$now=time();
		foreach($dbarr as $key => $dbelement){
				$dbelement = json_decode($dbelement,true);

				if($now < strtotime($dbelement["startdatum"]." ".$dbelement["starttid"])){
						if(!isset($alldata[$key])){
								deleteElement($key);				
						}
				}
		}
}

/*--------------------------------------------------------------------------------
	 Import history
----------------------------------------------------------------------------------*/	

// Retrieve full config and swizzle into associative array for each config id
$cdbarr=Array();
$icals=array();
$result = $log_db->query('SELECT * FROM conf;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		$cdbarr[$row['id']]=$row;
}

/*--------------------------------------------------------------------------------
	 Synchronize
----------------------------------------------------------------------------------*/	
// Check if no history, if so, read history by default. select count(*) from sched if count is zero import history
// Create array for synchronization of database

$dbarr=Array();
$result = $log_db->query('SELECT * FROM sched;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
				$dbarr[$row['id']]=$row['datan'];
}

$rowcnt=count($dbarr);
if ($rowcnt==0){
		// Import history and other data for first execution
		foreach($cdbarr as $url){
					if($url["kind"]=="URL"){
							$jsondata=readJson($pathurl."/json_export_xml.php?inurl=".$url["link"]);
					}else{
							$jsondata=readJson($pathurl."/json_export_ical.php?inurl=".$url["link"]);
					}
					// Parse each of the elements in json array and insert into database
					foreach ($jsondata as $element) {
							$id=$element->id;
							$datum=$element->startdatum;
							if(!isset($dbarr[$id])){
									createElement($id,$datum,$element,"i");
									$dbarr[$id]=json_encode($element);
							}
					}
		}
} else {
		foreach($cdbarr as $url){
			
				if(strlen($url["link"])<=6 && $url["kind"]=="URL"){
						$jsondata=readJson($pathurl."/json_export_xml.php?inurl=".$url["link"]);
						syncData($jsondata,$dbarr);
				}
		}
}

// Synchronize data from calendar with database
foreach($cdbarr as $ical){
    if($ical['kind']=="ICAL"){
				// Read data from calendar json
				$calendar=readJson($pathurl."/json_export_ical.php?inurl=".$ical["link"]);
				syncData($calendar,$dbarr);
    }
}
// End foreach ical

/*--------------------------------------------------------------------------------
	 Re-Read synchronized database
----------------------------------------------------------------------------------*/	

// Retrieve full database and swizzle into associative array for each day
$dbarr=Array();
$result = $log_db->query('SELECT * FROM sched WHERE canceled IS NULL;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		if(isset($dbarr[$row['datum']])){
				array_push($dbarr[$row['datum']], json_decode($row['datan'],true));
		}else{
				$dbarr[$row['datum']]=Array();
				array_push($dbarr[$row['datum']], json_decode($row['datan'],true));
		}
}

$called_service="Gladpack";
$ret = array(
    "debug" => $debug,
    "data" => $dbarr,
    "confdata" => $cdbarr,	
		"called_service" => $called_service,
		"deleted" => $deletedItemsArr
);

header('Content-Type: application/json');
echo json_encode($ret);
?>