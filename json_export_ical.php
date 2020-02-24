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
$gcontent = file_get_contents("https://calendar.google.com/calendar/ical".$_GET['inurl']);
$contentzz = explode("\n", $gcontent);

$dayarr = array();

// Google iCal
$isProcessingEvent = false;
for ($i = 0; $i < sizeof($contentzz); $i++) {
		$cont = $contentzz[$i];
		$cont = trim($cont);
		if ($isProcessingEvent) {
				if (strcmp($cont,"END:VEVENT") === 0) {
						$isProcessingEvent = false;
						$sday = date('Y-m-d', strtotime($elem["DTSTART"]));
						$stime = date("H:i", strtotime($elem["DTSTART"]));
						$etime = date("H:i", strtotime($elem["DTEND"]));
						$room = trim($elem["LOCATION"]);
						$summary = trim($elem["SUMMARY"]);
						$comment = trim($elem["DESCRIPTION"]);
						$sday = date('Y-m-d', strtotime($elem["DTSTART"]));
						$eday = date('Y-m-d', strtotime($elem["DTEND"]));
						$cday = date('Y-m-d H:i:s', strtotime($elem["CREATED"]));
						$mday = date('Y-m-d H:i:s', strtotime($elem["LAST-MODIFIED"]));
						array_push($dayarr, array("startdatum" => $sday, "starttid" => $stime, "sluttid" => $etime,"lokal" => $room, "id" => substr($elem["UID"],0,32), "uppdaterad" => $mday,"kursben" => $summary,"aktivitet" => "","kommentar" => $comment, "signatur" => "", "program" => "", "grupp" => ""));
				} else {
						$tmpArr = explode(":", $cont);
						$key = $tmpArr[0];
						if (empty($tmpArr[1])) {
								$value = "";
						} else {
								$value = $tmpArr[1];
						}
						$elem[$key] = $value;
				}
		} else {
				if (strcmp($cont, "BEGIN:VEVENT") === 0) {
						$isProcessingEvent = true;
						$elem = array();
				}
		}
}
header('Content-Type: application/json');
echo json_encode($dayarr);
?>