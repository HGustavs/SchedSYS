<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"> 
	
<script src="canvas.js"></script> 
			
<style>
	
body{
		font-family: Arial Narrow,Arial,sans-serif; 
		font-size:20px;
		cursor: none;
}

table{
	font-family: Arial Narrow,Arial,sans-serif; 
	font-size:20px;
	font-style: normal;
	font-variant: normal;
	font-weight: 700;
	border-collapse: collapse;
	border:1px solid black;
}		

	th{
		color:white;
		background-color:#816;
		padding:4px;
	}
	
	.dayte {
		color:white;
		background-color:#816;
		padding:4px;
		font-size:16px;
		text-align:center;
	
	}
	
	td{
		border-left:2px solid #816; 
		border-right:2px solid #816; 	
	}
	
	.sched {
			width:180px;
			height:300px;
			position:relative;
	}
	
	.weekno{
			color:navy;
	}
	
	tr{
		border-bottom:2px solid #816; 	
	}

	.curr {
			background-color:#f8e8f8;
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
			left:0px;
			overflow:hidden;
			position:absolute;
			width:180px;
			background-color:#def;
			color:black;
			font-size:12px;
	}

	.lunch {
			overflow:hidden;
			position:absolute;
			left:0px;
			width:180px;
			background-image: url(lineback.svg);
			color:black;
			font-size:12px;
			border:1px solid black;
			box-shadow:2px 2px 4px rgba(0,0,0,0.2) inset;
	}	
	
	#canvas{
			border:1px solid red;
			bottom:0px;
			width:900px;
			height:250px;
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
	
		// echo "/*".$source['Starttid']."###".$desto['Starttid']."###".($source['Starttid']==$desto['Starttid'])."###".$score."*/\n";
	
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

//							echo "\n /* ";
//							echo "Slot";
//							print_r($dbarr[$datumet]);
//							echo "\n";
//							print_r($slot);
//							echo "\n";
//							echo $foundcnt;
//							echo "*/ \n";
						
							if($foundcnt==11){
						  		// 11 is considered perfect match - so no database update													
							}else if($foundcnt>9){
									// 8-10 is considered an updated match
									$slot['changed']=date("Y-m-d");
									$dbarr[$datumet][$foundno]=$slot;
									$changed=true;
							}else if($foundcnt<=9){
									// 0-7 is considered a new entry
									array_push($dbarr[$datumet],$slot);
									$changed=true;
							}

					}
				
//					if($changed){
//						echo "\n /* ";
//						echo "Change";
//						print_r($dbarr[$datumet]);
//						echo "*/ \n";
//					}
				
					if($changed){
							// Update database - using updated data
							$query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
							$query->bindParam(':datum', $datumet);
							$cont=json_encode($dbarr[$datumet]);
							$query->bindParam(':datan', $cont);
							$query->execute();
					}else{
//							echo "No Change";
					}				
				
					
					// Check if different
			}else{
//					echo "NOT IN DB: ";

					$dayy=json_encode($day);
					$query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
					$query->bindParam(':datum', $datumet);
					$query->bindParam(':datan', $dayy);
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
	
function decleanup(str)
{
		var retstr=decodeURIComponent(str.replace(/__/g, "&").replace(/\.\./g, ";"));
		retstr=retstr.replace(/\+/g, " ");
		return retstr;
}
	
function showdata()
{
		var today=new Date();

		// Show last update time in top of schedule!
		var currh=today.getHours();
		if (currh<10) currh="0"+currh;
		var currm=today.getMinutes()
		if (currm<10) currm="0"+currm;
		document.getElementById("feedback").innerHTML=currh+":"+currm;		
	
		var currDay=new Date();
		today.setHours(12,00,00);
		currDay.setHours(12,00,00);
	
		var weekno=getWeekNumber(today);
    var day = (today.getUTCDay()||7)-1;
    var firstDayOfWeek = new Date(today);
		firstDayOfWeek.setDate(today.getDate() - day);
		var weekStart=-1;
		var weekEnd=3;
	
		var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
		currDay.setTime(firstDayOfWeek.getTime() + (weekInMilliseconds*weekStart));
			
		var str="";
	
		// List of benamning
		var belist=[];
		var collist=["#fed","#fde","#dfe","#efd","#edf","#ffd","#dff","#fdf"];
			
		// A table to fit the full calendar
		str+="<table>";
		str+="<tr><th>week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th>";
		for(var i=weekno+weekStart;i<=weekno+weekEnd;i++){
			
				if(i==weekno){
						str+="<tr class='curr' >";				
				}else{
						str+="<tr>";						
				}


				str+="<td>";
				str+="<div class='weekno' >";
				// End of year handling
				if(i>52){
						str+=(i-52);				
				}else{
						str+=i;
				}
				str+="</div>";
				str+="</td>";
			
				var startlunch=(timetopix("12:00")*30);
				var endlunch=(timetopix("13:00")*30)-startlunch;
			
				for(var j=0;j<5;j++){
						
						var month=(currDay.getMonth()+1);
						if(month<10) month="0"+month;
						var day=currDay.getDate();
						if(day<10) day="0"+day;
						var datumet=currDay.getFullYear()+"-"+month+"-"+day;
						
						// Advance to next day in calendar
						currDay.setDate(currDay.getDate()+1);
					
						str+="<td>";
						str+="<div class='dayte'>"+day+"/"+month+"</div>";
						str+="<div class='sched' id='s"+datumet+"' >";
					

						str+="<div class='lunch' style='top:"+startlunch+"px;height:"+endlunch+"px'></div>";
					
						if(typeof dataarr[datumet] != "undefined"){
								for(var k=0;k<dataarr[datumet].length;k++){
										var ditem=dataarr[datumet][k];
										
										var starty=timetopix(ditem['Starttid'])*30;
										var endy=(timetopix(ditem['Sluttid'])*30)-starty;
									
										var benamning=decleanup(ditem['Benamning']);
									
										colno=belist.indexOf(benamning);
										if(colno==-1){
												if(benamning.indexOf("andl")==-1) belist.push(benamning);
												colno=belist.indexOf(benamning);
										}
										
										var colnamn="#def";
										if((colno<collist.length)&&(colno>0)){
											 colnamn=collist[colno];
										}

										str+="<div class='timeslot' style='background:"+colnamn+";top:"+starty+"px;height:"+endy+"px'>";
										str+=benamning;
										str+="<br>";
										str+=decodeURIComponent(ditem['Lokal']).replace("+"," ");									
										str+="</div>"
								}
						}
					
						str+="</div>";
						str+="</td>";
				}
			
				// Advance two days for week-end
				currDay.setDate(currDay.getDate()+2);
				
				str+="</tr>";
		}
		str+="</table>";
	
		if (typeof startupCanvas == 'function') { 
			// startupCanvas(); 
		}
	
		document.getElementById("datedisp").innerHTML=str;
		
}
	
// Refresh function in case we need to add some type of house-keeping such as up-time keeping...
function refreshit()
{
		 location.reload();
}
	
</script>
				
</head>

<body onload="setTimeout(function(){ refreshit(); }, 600000);showdata();">
<div class='wrkap'>
	MAKE IT HAPPEN <span id='feedback'></span><br><hr><br>
	<div id="datedisp">

	</div>

</div>
	
<canvas id="canvas" width="450" height="125">
</canvas>
	
</body>
</html>