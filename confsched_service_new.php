<?php			

session_start();
require "config.php";
if(!isset($_SESSION['adminpass'])) $_SESSION['adminpass']="UNK";

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


if($_SESSION['adminpass']==adminpass){
		//------------------------------------==========############==========----------------------------------------
		//                                  Startup Create Database & Read Config
		//------------------------------------==========############==========----------------------------------------

		date_default_timezone_set('Europe/Stockholm');
		$debug="NONE!";

		$link=getOP('link');
		$kind=getOP('kind');
		$aux=getOP('aux');
		$id=getOP('id');
		$op=getOP('op');

		// Updated database! - id is varchar 32 so we can store uuids of different kinds if need be
		// New feature: Each row contains one element not one day - this is so we can synch more effectively using ids
		$log_db = new PDO('sqlite:./scheduledata.db');
		$log_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$log_db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
		$sql = 'CREATE TABLE IF NOT EXISTS sched(id VARCHAR(32) PRIMARY KEY,datum varchar(10), datan TEXT);';
		$log_db->exec($sql);	
		$sql = 'CREATE TABLE IF NOT EXISTS conf(id INTEGER PRIMARY KEY,link text,kind varchar(32),aux text);';
		$log_db->exec($sql);	

		// Retrieve config from database
		$cdbarr=Array();
		$result = $log_db->query('SELECT * FROM conf;');
		$rows = $result->fetchAll();
		foreach ($rows as $row) {
				$cdbarr[$row['id']]=$row;
		}

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
		// Retrieve config from database
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

		header('Content-Type: application/json');
		echo json_encode($ret);

}

?>