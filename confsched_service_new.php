<?php			

session_start();
require "config.php";
$is_admin=0;
if(!isset($_SESSION['adminpass'])) $_SESSION['adminpass']="UNK";
date_default_timezone_set('Europe/Stockholm');
$debug="NONE!";

// ------------------------------------------------------------------------------------------------------------
// -----------=============######## Second version Kiosk System with JSON/ICAL ########=============-----------
// ------------------------------------------------------------------------------------------------------------
//  Copyright a97marbr / HGustavs
//
//        (\ /)
//        (. .)           
//       c(")(")  ∴ 
//-------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// getOP
//------------------------------------------------------------------------------------------------

function getOP($name)
{
		if(isset($_POST[$name]))	return urldecode($_POST[$name]);
		else return "UNK";
}

function base64url_encode($input)
{
    return strtr(base64_encode($input), '+/=', '._-');
}

function base64url_decode($input)
{
    return base64_decode(strtr($input, '._-', '+/='));
}

$op=getOP('op');

//------------------------------------==========############==========----------------------------------------
//                                  Startup Create Database & Read Config
//------------------------------------==========############==========----------------------------------------

$link=getOP('link');
$kind=getOP('kind');
$aux=getOP('aux');
$id=getOP('id');

// Updated database! - id is varchar 32 so we can store uuids of different kinds if need be
// New feature: Each row contains one element not one day - this is so we can synch more effectively using ids
$log_db = new PDO('sqlite:./scheduledata.db');
$log_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$log_db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
$sql = 'CREATE TABLE IF NOT EXISTS sched(id VARCHAR(32) PRIMARY KEY,datum varchar(10), datan TEXT);';
$log_db->exec($sql);	
$sql = 'CREATE TABLE IF NOT EXISTS conf(id INTEGER PRIMARY KEY,link text,kind varchar(32),aux text);';
$log_db->exec($sql);	
$sql = 'CREATE TABLE IF NOT EXISTS tokens(id VARCHAR(64) PRIMARY KEY,aux text);';
$log_db->exec($sql);	


//$sql = 'DELETE FROM tokens;';
//$log_db->exec($sql);	

// Retrieve config from database
$cdbarr=Array();
$result = $log_db->query('SELECT * FROM conf;');
$rows = $result->fetchAll();
foreach ($rows as $row) {
		$cdbarr[$row['id']]=$row;
}

if($_SESSION['adminpass']==adminpass){
		$is_admin=1;

		//------------------------------------==========############==========----------------------------------------
		//                                               Operations
		//------------------------------------==========############==========----------------------------------------
		if($op=="DEL"){
				$query = $log_db->prepare('DELETE FROM conf WHERE id=:id');
				$query->bindParam(':id', $id);
				if(!$query->execute()) {
							$error=$query->errorInfo();
							$debug="Error:\nError deleting config entry from config database!\n".$error[2];
				}	
		}else if($op=="ADD"){
				// Change detection (so we can avoid over-updating sqlite file)
				if(!isset($cdbarr[$id])){
						// Make insert
						if($link!="UNK"&&$kind!="UNK"&&$aux!="UNK"){
								$query = $log_db->prepare('INSERT INTO conf(link,kind,aux) VALUES (:link,:kind,:aux)');
								$query->bindParam(':link', $link);
								$query->bindParam(':kind', $kind);
								$query->bindParam(':aux', $aux);
								if(!$query->execute()) {
											$error=$query->errorInfo();
											$debug="Error:\nError saving config to database!\n".$error[2];
								}	
						}
				}else{
						if($link!="UNK"&&$kind!="UNK"&&$aux!="UNK"){
								$query = $log_db->prepare('UPDATE conf SET link=:link,kind=:kind,aux=:aux WHERE id=:id');
								$query->bindParam(':link', $link);
								$query->bindParam(':kind', $kind);
								$query->bindParam(':aux', $aux);
								$query->bindParam(':id', $id);
								if(!$query->execute()) {
														$error=$query->errorInfo();
														$debug="Error:\nError saving config to database!\n".$error[2];
								}	
						}
				}
		}

		//------------------------------------==========############==========----------------------------------------
		//                                     Re-Read synchronized database
		//------------------------------------==========############==========----------------------------------------
		// Retrieve config from databasemet
		$cdbarr=Array();
		$result = $log_db->query('SELECT * FROM conf;');
		$rows = $result->fetchAll();
		foreach ($rows as $row) {
				$cdbarr[$row['id']]=$row;
		}

		$called_service="Gladslack";
		$ret = array(
				"debug" => $debug,
				"confdata" => $cdbarr,
				"called_service" => $called_service
		);

}

if($op=="MEET"){
		$meettoken="UNK";
		$mid=getOP('meetid');
		$mname=getOP('meetname');

		$query = $log_db->prepare('SELECT * FROM sched WHERE id=:id');			
		$query->bindParam(':id', $mid);
		$query->execute();
		$rows = $query->fetchAll();
		$element="UNK";
		foreach ($rows as $row) {
				$element=json_decode($row['datan']);
		}
		if($element!="UNK"){
				if($element->kommentar == "" || $is_admin){
						$element->kommentar=$mname;
						$jsonelement = json_encode($element);
						$query = $log_db->prepare('UPDATE sched SET datan=:datan WHERE id=:id');			
						$query->bindParam(':datan', $jsonelement);
						$query->bindParam(':id', $mid);
						if(!$query->execute()) {
									$error=$query->errorInfo();
									$debug="Error:\nError writing to history!\n".$error[2];
						}
						if($is_admin){
								// Remove any tokens now that admin has made the booking
								$query = $log_db->prepare('DELETE FROM tokens WHERE id=:id');			
								$query->bindParam(':id', $mid);
								if(!$query->execute()) {
											$error=$query->errorInfo();
											$debug="Error:\nError deleting token!\n".$error[2];
								}
						}else{
								$meettoken=base64url_encode(random_bytes(16));				
								$query = $log_db->prepare('INSERT INTO tokens (id,aux) VALUES(:id,:aux)');			
								$query->bindParam(':id', $mid);
								$query->bindParam(':aux', $meettoken);
								if(!$query->execute()) {
											$error=$query->errorInfo();
											$debug="Error:\nError inserting token!\n".$error[2];
								}		
						}
				}else{
						$debug="Denna tid är redan bokad!";
						$mid="UNK";		
				}
		}else{
				$debug="Meeting id: ".$mid." not found!";
				$mid="UNK";
		}
		$ret = array(
				"debug" => $debug,
				"meetid" => $mid,
				"meettoken" => $meettoken,
				"called_service" => basename(__FILE__),
		);		
}

if($op=="DELMEET"){
	$mid=getOP('meetid');
	$token=getOP('meettoken');

	$query = $log_db->prepare('SELECT * FROM tokens WHERE id=:id');			
	$query->bindParam(':id', $mid);
	$query->execute();
	$rows = $query->fetchAll();
	$element="UNK";
	$is_deleted=false;
	$is_found=false;
	foreach ($rows as $row) {
			$is_found=true;
			if($row["aux"]==$token || $_SESSION['adminpass']==adminpass){
					$qquery = $log_db->prepare('SELECT * FROM sched WHERE id=:id');			
					$qquery->bindParam(':id', $mid);
					$qquery->execute();
					$qrows = $qquery->fetchAll();
					foreach ($qrows as $qrow) {
							$element=json_decode($qrow['datan']);
					}
					if($element!="UNK"){
							$element->kommentar="";
							$jsonelement = json_encode($element);
							$pquery = $log_db->prepare('UPDATE sched SET datan=:datan WHERE id=:id');			
							$pquery->bindParam(':datan', $jsonelement);
							$pquery->bindParam(':id', $mid);
							if(!$pquery->execute()) {
										$error=$pquery->errorInfo();
										$debug="Error:\nError deleting meeting!\n".$error[2];
							}
							$is_deleted=true;
					}else{
							$debug="Meeting id: ".$mid." not found!";
							$mid="UNK";		
					}
			}else{
					$debug="Tokens does not match!";
					$mid="UNK";
			}
	}
	if($is_deleted || !$is_found){
			$query = $log_db->prepare('DELETE FROM tokens WHERE id=:id');			
			$query->bindParam(':id', $mid);
			if(!$query->execute()) {
						$error=$query->errorInfo();
						$debug="Error:\nError deleting token!\n".$error[2];
			}
			$mid="UNK";
	}
	$ret = array(
			"debug" => $debug,
			"admin" => $is_admin,
			"meetid" => $mid,
			"meettoken" => $meettoken,
			"called_service" => basename(__FILE__),
	);		
}


header('Content-Type: application/json');
echo json_encode($ret);
?>