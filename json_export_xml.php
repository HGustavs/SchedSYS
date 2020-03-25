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

$names=array();

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
		$jsondata = json_decode($jsontext,true);
		if(json_last_error()!=JSON_ERROR_NONE){
				$debug="Error:\nJson error for import!";
		}	
		return $jsondata;
}


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
		global $debug;	
		global $names;
		$capstr=preg_replace("/[^A-Z]/","",$str);
		if (isset($names[$str])){return true;}
		if ((strlen($capstr)==4)&&(strcmp($str,$capstr)==0)) return true;
		if ((strcmp($str,"GTS")==0)||(strcmp($str,"Gäst")==0)||(strcmp($str,"Alice Carlström")==0)||(strcmp($str,"Admir Sahman")==0)) return true;
		return false;
}

$oentries=Array();
$oentry=Array();

$names=getNames();

// Signature or cached history
if(strlen($_GET['inurl'])==6){
		$file="https://cloud.timeedit.net/his/web/timeedit/p/pss/schedule/schema.xml?tab=33&object=".$_GET['inurl'];
}else{
		$file="https://cloud.timeedit.net/his/web".$_GET['inurl'];
}

$dom = new DomDocument;
$dom->preserveWhiteSpace = FALSE;
$dom->load($file);

$entries = $dom->documentElement;
foreach ($entries->childNodes as $entry){
		$oentry=Array();
		if($entry->tagName=="entry"){
				foreach ($entry->childNodes as $gentry){
						if($gentry->tagName=="title"){
                                $oentry=array("startdatum" => "", "starttid" => "", "sluttid" => "","lokal" => "", "id" => "", "uppdaterad" => "","kursben" => "","aktivitet" => "","kommentar" => "", "signatur" => "", "program" => "", "grupp" => "");
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

								if(issign(trim($inneritems[0]))){
										// Already a signature so we do nothing
								}else{
										$oentry['kursben']=substr($inneritems[0],0,strrpos($inneritems[0]," "));
										$inneritems[0]=trim(substr($inneritems[0],strrpos($inneritems[0]," ")+1));
								}
							
								foreach($inneritems as $key=>$inneritem){
										$inneritem=trim($inneritem);
										if(isprog($inneritem)){
												array_push($prog,$inneritem);
										}else if(isgroup($inneritem)||iscourse(substr($inneritem,-6,6))){
												// Ignore stray stuff
										}else if(issign($inneritem)){
												if(isset($names[$inneritem])){
														$sign[$inneritem]=$names[$inneritem];
												}else{
														// Unknown signature
														$sign[$inneritem]=$inneritem;
												}
										}else{
												if($inneritem=="Distans"||$inneritem=="Dugga"||$inneritem=="Undervisning"||$inneritem=="Föreläsning"||$inneritem=="Handledning"||$inneritem=="Möte"||$inneritem=="Forskning"||$inneritem=="Seminarium"||$inneritem=="Examinatorsmöte"||$inneritem=="Programträff"||$inneritem=="Tentamen"||$inneritem=="Omtentamen"||$inneritem=="Introduktion"||$inneritem=="Lab"||$inneritem=="Övrigt"||$inneritem=="Redovisning"||$inneritem=="Lektion"){
														$oentry['aktivitet']=$inneritem;
												}else if($key==(count($inneritems)-1)){
														if($spec!=""){
																$spec.=" ";
														}
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
header('Content-Type: application/json');
echo json_encode($oentries);
