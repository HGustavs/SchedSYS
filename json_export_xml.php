<html>
<body>
<pre>
<?php

function isprog($str)
{
		if (strlen($str)==11&&is_numeric(substr($str,-6,2))) return true;
		if (strlen($str)==9&&is_numeric(substr($str,-4,2))) return true;
		if (strlen($str)==8&&is_numeric(substr($str,-3,2))) return true;
		return false;
}

function isgroup($str)
{
	if($str=="1"||$str=="2"||$str=="3"||$str=="4"||$str=="8"||$str=="A"||$str=="B"||$str=="C"||$str=="D") return true;
	return false;
}

function iscourse($str)
{
	if (strlen($str)==6&&is_numeric(substr($str,-4,3))) return true;	
	return false;
}

function islokal($str)
{
	$letter=substr($str,0,1);
	$number=substr($str,1,3);	
	if(($letter=="A"||$letter=="B"||$letter=="C"||$letter=="G"||$letter=="E"||$letter=="H")&&is_numeric($number)) return true;
	return false;
}

function issign($str)
{
		$capstr=preg_replace("/[^A-Z]/","",$str);
	
		if ((strlen($capstr)==4)&&(strcmp($str,$capstr)==0)) return true;
		if ((strcmp($str,"GTS")==0)||(strcmp($str,"Gäst")==0)||(strcmp($str,"Alice Carlström")==0)||(strcmp($str,"Admir Sahman")==0)) return true;
		return false;
}

$oentries=Array();
$oentry=Array();

// $file = 'https://cloud.timeedit.net/his/web/schema/ri107565X25Z03Q5Z56g2Yh0yZ026Y18Q0AgQY6Q5675c570nyu2Qu.xml';

$file = 'https://cloud.timeedit.net/his/web/schema/ri107475X45Z03Q0Z56g2Y00y6026Y11Q02gQY6Q56757.xml';

$dom = new DomDocument;
$dom->preserveWhiteSpace = FALSE;
$dom->load($file);

$entries = $dom->documentElement;
foreach ($entries->childNodes as $entry){
		$oentry=Array();
		if($entry->tagName=="entry"){
				foreach ($entry->childNodes as $gentry){
						if($gentry->tagName=="title"){
								$oentry['startdatum']=substr($gentry->nodeValue,0,10);
								$oentry['starttid']=substr($gentry->nodeValue,11,5);
								$oentry['sluttid']=substr($gentry->nodeValue,19,5);
								if(islokal(substr($gentry->nodeValue,-4,4))) $oentry['lokal']=substr($gentry->nodeValue,-4,4);
						}else if($gentry->tagName=="id"){
								$inneritems=explode(":",$gentry->nodeValue);
								$oentry['id']=$inneritems[2];						
						}else if($gentry->tagName=="updated"){							
								$oentry['updated']=$gentry->nodeValue;
						}else if($gentry->tagName=="summary"){
								$inneritems=explode("§§",$gentry->nodeValue);
								$sign=Array();
								$prog=Array();
								$spec="";
								foreach($inneritems as $key=>$inneritem){
										$inneritem=trim($inneritem);
										if(isprog($inneritem)){
												array_push($prog,$inneritem);
										}else if(isgroup($inneritem)||iscourse(substr($inneritem,-6,6))){
												// Ignore stray stuff
										}else if(issign($inneritem)){
												array_push($sign,$inneritem);
										}else if(issign(substr($inneritem,-4,4))&&($key==0)){
												$oentry['kursben']=substr($inneritem,0,-4);
												array_push($sign,substr($inneritem,-4,4));
										}else if(isprog(substr($inneritem,-8,8))){
												$oentry['kursben']=substr($inneritem,0,-8);
												array_push($prog,substr($inneritem,-8,8));
										}else if(isgroup(substr($inneritem,-1,1))&&$key==0){
												$oentry['kursben']=substr($inneritem,0,-1);
												$oentry['grupp']=substr($inneritem,-1,1);
										}else{
												if($inneritem=="Dugga"||$inneritem=="Undervisning"||$inneritem=="Föreläsning"||$inneritem=="Handledning"||$inneritem=="Möte"||$inneritem=="Forskning"||$inneritem=="Seminarium"||$inneritem=="Examinatorsmöte"||$inneritem=="Programträff"||$inneritem=="Tentamen"||$inneritem=="Omtentamen"||$inneritem=="Introduktion"||$inneritem=="Lab"||$inneritem=="Övrigt"||$inneritem=="Redovisning"||$inneritem=="Lektion"){
														$oentry['aktivitet']=$inneritem;
												}else if($key==(count($inneritems)-1)){
														$oentry['kommentar']=$spec.$inneritem;
												}else{
														$spec.=$inneritem;
//														echo "<div style='color:orange'>".$inneritem." ".$key." ".count($inneritems)." ".substr($inneritem,-6,6)."</div>";		
												}
										}
								}
								$oentry['signatur']=$sign;
								$oentry['program']=$prog;							
						}
				}
				array_push($oentries,$oentry);
		}else{
				// echo "<br>".$entry->tagName;
		}
}

print_r($oentries);

?>
</pre>
</body>
</html>