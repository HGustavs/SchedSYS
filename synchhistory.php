<html>
 
<head>
			
<style>
	
body{
		font-family: Arial Narrow,Arial,sans-serif; 
		font-size:16px;
}

</style>

<script>
</script>

</head>
<body>
		
<?php			
	date_default_timezone_set('Europe/Stockholm');
	
	$log_db = new PDO('sqlite:./scheduledata.db');
	$sql = 'CREATE TABLE IF NOT EXISTS sched(id INTEGER PRIMARY KEY,datum varchar(10), datan TEXT);';
	$log_db->exec($sql);	
	
function explodecsv($delimiter,$instr)
{
  $csvarr=array();
  $workstr="";
  $quotemode=false;
	$length = strlen($instr);
	
  for($cnt=0;$cnt<$length;$cnt++){
      $chr = $instr[$cnt];
			if($quotemode){
          if($chr=='"'){
              $quotemode=false;
          }else{
              $workstr.=$chr;
          }
      }else{
          if($chr=='"'){
              $quotemode=true;
          }else if($chr==$delimiter){
              array_push($csvarr,trim($workstr));
              $workstr="";	
          }else{
              $workstr.=$chr;
          }
      }
  }
  if($workstr!=""){
      array_push($csvarr,trim($workstr));
  }
  return $csvarr;
}
	
function scoreItems($source,$desto)
{
		$score=0;

		if($source['Startdatum']==$desto['Startdatum']) $score++;
		if($source['Starttid']==$desto['Starttid']) $score++;	
		if($source['Slutdatum']==$desto['Slutdatum']) $score++;
		if($source['Sluttid']==$desto['Sluttid']) $score++;
		if($source['Lokal']==$desto['Lokal']) $score++;	
		if($source['Benamning']==$desto['Benamning']) $score++;
		if($source['Grupp']==$desto['Grupp']) $score++;
		if($source['Tillfalle']==$desto['Tillfalle']) $score++;
		if($source['Signatur']==$desto['Signatur']) $score++;
		if($source['Aktivitet']==$desto['Aktivitet']) $score++;
		if($source['Kommentar']==$desto['Kommentar']) $score++;
	
		return $score;
}
		
	// Combine with historical data
	// Cases -- Exists in data and database (identical ?)
	//       -- Exists in database but not in data (deleted)
	//       -- Exists in data but not in database (new)
	// Fast check for changes is important... we work by DAYS -- Each database entry is a json object containing the data items for the day.
	// The current day may have an item that has already passed, so it may be omitted for that reason
	// If DAY not in database -- create new database day 
	// If DAY in database -- compare to see if it is a duplicate, if there are changes update database
		
	// General Config Stuff
	$signature="S_GUSH";
	$csvcontent=file_get_contents ("history.csv");
	$content=explode("\n",$csvcontent);
	$itemarr=array();
	$dayarr=array();
	$items=0;
	$skip=0;
	
	// If days are identical we 
	$currentday="";
	$currentdata=array();
	for($i=3;$i<sizeof($content);$i++){
			$cont=$content[$i];	
			$cont=explodecsv(",",$cont);
		
			if($i==3){
					$cont[5]="Benamning";				
					$cont[7]="Tillfalle";
					$cont[9]="Aktivitet";
					$names=$cont;
			}else{
					$elem=array();
					if(sizeof($cont)>8){
							for($j=0;$j<sizeof($cont);$j++)
							{
									$elem[$names[$j]]=$cont[$j];
							}
							if($elem['Startdatum']!=$currentday){
									// Other day
									if($currentday!=""){
											$dayarr[$currentday]=$itemarr;
											$itemarr=array();
									}
									$currentday=$elem['Startdatum'];
									array_push($itemarr,$elem);
							}else{
									// Same day - keep pushing
									array_push($itemarr,$elem);
							}					
					}
			}
	}
	if(!empty($itemarr)){
			$dayarr[$currentday]=$itemarr;
	}

	// Retrieve full database and swizzle into associative array for each day
	$result = $log_db->query('SELECT * FROM sched;');
	$rows = $result->fetchAll();	
	$dbarr= array();
	foreach($rows as $row){	
			$dbarr[$row['datum']]=json_decode($row['datan'],true);
	}
	
	// Synchronize each of the days with database - handle first day like partially complete
	foreach($dayarr as $datumet=>$day){
			
			// Un-comment to view schedule data in source code
			// echo "\n /* ";
			// print_r($day);
			//echo "*/ \n";
			
			if(isset($dbarr[$datumet])){
//					echo "IN DB: ".$datumet."\n";
					$dbday=$dbarr[$datumet];
					$changed=false;
					
					// For each slot in current day
					foreach($day as $slot){
						
							$foundno=-1;
							$foundcnt=0;
							for($i=0;$i<sizeof($dbday);$i++){
									$dbslot=$dbday[$i];
									$score=scoreItems($dbslot,$slot);
									if($score>$foundcnt){
											$foundno=$i;
											$foundcnt=$score;
									}
							}
						
							if($foundcnt==11){
						  		// 11 is considered perfect match - so no database update													
									$skip++;
							}else if($foundcnt>7){
									// 8-10 is considered an updated match
									$slot['changed']=date("Y-m-d");
									$dbarr[$datumet][$foundno]=$slot;
									$changed=true;
									$item++;
							}else if($foundcnt<=7){
									// 0-7 is considered a new entry
									array_push($dbarr[$datumet],$slot);
									$changed=true;
									$item++;
							}
					}
				
//					if($changed){
//							echo "\n /* ";
//							echo "Change";
//							print_r($dbarr[$datumet]);
//							echo "*/ \n";
//					}
				
					if($changed){
							// Update database - using updated data
							$query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
							$query->bindParam(':datum', $datumet);
							$query->bindParam(':datan', json_encode($dbarr[$datumet]));
							$query->execute();
					}else{
//							echo "No Change";
					}				
				
					
					// Check if different
			}else{
//					echo "NOT IN DB: ";

					$query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
					$query->bindParam(':datum', $datumet);
					$query->bindParam(':datan', json_encode($day));
					$query->execute();
				
					$dbarr[$datumet]=$day;
			}
	}
		
	echo "Imported ".$items." of historical data and skipped ".$skip." items.";
		
?>
		
</body>

</html>