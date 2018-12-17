<html>
 
<head>
			
<style>
	
body{
		font-family: Arial Narrow,Arial,sans-serif; 
		font-size:16px;
}

table{
	font-family: Arial Narrow,Arial,sans-serif; 
	font-size:16px;
	font-style: normal;
	font-variant: normal;
	font-weight: 100;
	border-collapse: collapse;
	border:1px solid black;
}		

	th{
		color:white;
		background-color:#816;
		padding:4px;
	}
	
	td{
		border-left:2px solid #816; 
		border-right:2px solid #816; 	
	}
	
	.sched {
			width:150px;
			height:300px;
			position:relative;
	}
	
	.weekno{
			color:navy;
	}
	
	tr{
		border-bottom:2px solid #816; 	
	}

.wrap{
    transform: rotate(-90deg);
    transform-origin:top left;
    
    position:absolute;
    top: 600px;
    left: 0;
    
    height:1000px;
    width:600px;
    
    background-color:#000;
    color:#fff;

    overflow:auto;
}
	
	.timeslot {
			overflow:hidden;
			position:absolute;
			width:140px;
			background-color:#def;
			color:black;
			font-size:12px;
	}

	.lunch {
			overflow:hidden;
			position:absolute;
			width:140px;
			background-image: url(lineback.svg);
			color:black;
			font-size:12px;
	}	
	
</style>

<script>
	
var dataarr=	
		
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
	$csvcontent=file_get_contents ("https://cloud.timeedit.net/his/web/timeedit/p/pss/schedule/schema.csv?tab=33&object=".$signature);
	$content=explode("\n",$csvcontent);
	$itemarr=array();
	$dayarr=array();
	
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
							}else if($foundcnt>7){
									// 8-10 is considered an updated match
									$slot['changed']=date("Y-m-d");
									$dbarr[$datumet][$foundno]=$slot;
									$changed=true;
							}else if($foundcnt<=7){
									// 0-7 is considered a new entry
									array_push($dbarr[$datumet],$slot);
									$changed=true;
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
		
	echo json_encode($dbarr);

?>;	
		
</script>
	
<script>

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}
	
function timetopix(tidstr)
{
		var h=(parseInt(tidstr.substr(0,2))-8);
		var m=(parseInt(tidstr.substr(3,2)));

		if(m==15) m=0;
		m=m/60;
		h+=m;
	
		return h;
}

var result = getWeekNumber(new Date());
	
function showdata()
{
		var today=new Date();
		var currDay=new Date();
		today.setHours(12,00,00);
		currDay.setHours(12,00,00);
			
		var weekno=getWeekNumber(today);
    var day = (today.getUTCDay()||7)-1;
		alert(day);
    var firstDayOfWeek = new Date(today);
		firstDayOfWeek.setDate(today.getDate() - day);
		var weekStart=-1;
		var weekEnd=1;
	
		currDay.setDate(firstDayOfWeek.getDate() + (weekStart*7));
		
		var str="";
		
		// A table to fit the full calendar
		str+="<table>";
		str+="<tr><th>week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>";
		for(var i=weekno+weekStart;i<=weekno+weekEnd;i++){
			
				str+="<tr>";

				str+="<td>";
				str+="<div class='weekno' >";
				str+=i;
				str+="</div>";
				str+="</td>";
			
				var startlunch=(timetopix("12:00")*30);
				var endlunch=(timetopix("13:00")*30)-startlunch;
			
				for(var j=0;j<7;j++){
						
						var month=(currDay.getMonth()+1);
						if(month<10) month="0"+month;
						var day=currDay.getDate();
						if(day<10) day="0"+day;
						var datumet=currDay.getFullYear()+"-"+month+"-"+day;
						currDay.setDate(currDay.getDate()+1);
					
						str+="<td>";
						str+="<div class='sched' id='s"+datumet+"' >";
					

						str+="<div class='lunch' style='top:"+startlunch+"px;height:"+endlunch+"px'></div>";
					
						if(typeof dataarr[datumet] != "undefined"){
								for(var k=0;k<dataarr[datumet].length;k++){
										var ditem=dataarr[datumet][k];
										
										var starty=timetopix(ditem['Starttid'])*30;
										var endy=(timetopix(ditem['Sluttid'])*30)-starty;

										str+="<div class='timeslot' style='top:"+starty+"px;height:"+endy+"px'>";
										str+=ditem['Benamning'];
										str+="<br>";
										str+=ditem['Lokal'];									
										str+="</div>"
								}
						}
					
						str+="</div>";
						str+="</td>";
				}
				
				str+="</tr>";
		}
		str+="</table>";
	
		document.getElementById("datedisp").innerHTML=str;
		
}

</script>
				
</head>

<body onload="showdata();">
<div class='wrkap'>
DO IT JUST DO IT<br><hr><br>

<div id="datedisp">

</div>

	</div>
</body>

</html>