<?php
date_default_timezone_set('Europe/Stockholm');
include("config.php");

function getOP($name, $default = "UNK", $type = "string")
{
    $ret = "UNK";
    if (isset($_POST[$name])) {
        if (strcmp($type, "float") == 0) {
            $ret = floatval(urldecode($_POST[$name]));
        } else if (strcmp($type, "int") == 0) {
            $ret = intval(urldecode($_POST[$name]));
        } else if (strcmp($type, "json") == 0) {
            $ret = json_decode(urldecode($_POST[$name]));
        } else {
            $ret = urldecode($_POST[$name]);
        }
    } else {
        $ret = $default;
    }
    return $ret;
}

$error = array();
$data = array();
$op = array();

$op = getOP("op", "DEFAULT", "string");
$params = getOP("params", "UNK", "json");

$called_service = array("name" => $op, "params" => $params, "date"=>date("Y-m-d H:i:s"));

$log_db = new PDO('sqlite:./scheduledata.db');
$sql = 'CREATE TABLE IF NOT EXISTS sched(id INTEGER PRIMARY KEY,datum varchar(10), datan TEXT);';
$log_db->exec($sql);

// Add uid - unique id for a particular booking in timeedit
// example:
// 180605--425820536-0@timeedit.com
//$sql = 'ALTER TABLE sched ADD uid VARCHAR(64);';
//$log_db->exec($sql);	

function explodecsv($delimiter, $instr)
{
    $csvarr = array();
    $workstr = "";
    $quotemode = false;
    $length = strlen($instr);

    for ($cnt = 0; $cnt < $length; $cnt++) {
        $chr = $instr[$cnt];
        if ($quotemode) {
            if ($chr == '"') {
                $quotemode = false;
            } else {
                $workstr .= $chr;
            }
        } else {
            if ($chr == '"') {
                $quotemode = true;
            } else if ($chr == $delimiter) {
                array_push($csvarr, trim($workstr));
                $workstr = "";
            } else {
                $workstr .= $chr;
            }
        }
    }
    if ($workstr != "") {
        array_push($csvarr, trim($workstr));
    }
    return $csvarr;
}

function scoreItems($source, $desto)
{
    $score = 0;

    if ($source['Startdatum'] == $desto['Startdatum']) $score++;
    if ($source['Starttid'] == $desto['Starttid']) $score++;
    if ($source['Slutdatum'] == $desto['Slutdatum']) $score++;
    if ($source['Sluttid'] == $desto['Sluttid']) $score++;
    if ($source['Lokal'] == $desto['Lokal']) $score++;
    if ($source['Benamning'] == $desto['Benamning']) $score++;
    if ($source['Grupp'] == $desto['Grupp']) $score++;
    if ($source['Tillfalle'] == $desto['Tillfalle']) $score++;
    if ($source['Signatur'] == $desto['Signatur']) $score++;
    if ($source['Aktivitet'] == $desto['Aktivitet']) $score++;
    if ($source['Kommentar'] == $desto['Kommentar']) $score++;

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

if (strcmp($op, "DEFAULT") === 0) {
    // General Config Stuff
    $signature = "S_BROM";
    $csvcontent = file_get_contents("https://cloud.timeedit.net/his/web/timeedit/p/pss/schedule/schema.csv?tab=33&object=" . $signature);
    $icscontent = file_get_contents("https://cloud.timeedit.net/his/web/timeedit/p/pss/schedule/schema.ics?tab=33&object=" . $signature);
    $gcontent = file_get_contents(GOOGLE_ICAL);
    $content = explode("\n", $csvcontent);
    $contentz = explode("\n", $icscontent);
    $contentzz = explode("\n", $gcontent);
    $itemarr = array();
    $dayarr = array();

    // TimeEdit csv
    $currentday = "";
    $currentdata = array();
    for ($i = 3; $i < sizeof($content); $i++) {
        $cont = $content[$i];
        $cont = explodecsv(",", $cont);

        if ($i == 3) {
            $cont[5] = "Benamning";
            $cont[7] = "Tillfalle";
            $cont[9] = "Aktivitet";
            $names = $cont;
        } else {
            $elem = array();
            if (sizeof($cont) > 8) {
                for ($j = 0; $j < sizeof($cont); $j++) {
                    $elem[$names[$j]] = trim($cont[$j]);
                }
                if ($elem['Startdatum'] != $currentday) {
                    // Other day
                    if ($currentday != "") {
                        $dayarr[$currentday] = $itemarr;
                        $itemarr = array();
                    }
                    $currentday = $elem['Startdatum'];
                    array_push($itemarr, $elem);
                } else {
                    // Same day - keep pushing
                    array_push($itemarr, $elem);
                }
            }
        }
    }
    if (!empty($itemarr)) {
        $dayarr[$currentday] = $itemarr;
    }

    // TimeEdit iCal
    $isProcessingEvent = false;
    for ($i = 0; $i < sizeof($contentz); $i++) {

        $cont = $contentz[$i];
        $cont = trim($cont);
        if ($isProcessingEvent) {
            if (strcmp($cont, "END:VEVENT") === 0) {
                $isProcessingEvent = false;
                $sday = date('Y-m-d', strtotime($elem["DTSTART"]));
                if (!isset($dayarr[$sday])) {
                    $dayarr[$sday] = array();
                }
                for ($j = 0; $j < sizeof($dayarr[$sday]); $j++) {
                    $csvelem = $dayarr[$sday][$j];
                    $stime = date("H:i", strtotime($elem["DTSTART"]));
                    $etime = date("H:i", strtotime($elem["DTEND"]));
                    $room = trim($elem["LOCATION"]);
                    if (strcmp($stime, $csvelem["Starttid"]) === 0 && strcmp($etime, $csvelem["Sluttid"]) === 0 && strcmp($room, $csvelem["Lokal"]) === 0) {
                        // We got a match -- add UID
                        $csvelem["UID"] = $elem["UID"];
                        $dayarr[$sday][$j] = $csvelem;
                    }
                }
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

    // Google iCal
    $isProcessingEvent = false;
    for ($i = 0; $i < sizeof($contentzz); $i++) {

        $cont = $contentzz[$i];
        $cont = trim($cont);
        if ($isProcessingEvent) {
            if (strcmp($cont, "END:VEVENT") === 0) {
                $isProcessingEvent = false;
                $sday = date('Y-m-d', strtotime($elem["DTSTART"]));
                if (!isset($dayarr[$sday])) {
                    $dayarr[$sday] = array();
                }
                $stime = date("H:i", strtotime($elem["DTSTART"]));
                $etime = date("H:i", strtotime($elem["DTEND"]));
                $room = trim($elem["LOCATION"]);
                $summary = trim($elem["SUMMARY"]);
                $comment = trim($elem["DESCRIPTION"]);
                $sday = date('Y-m-d', strtotime($elem["DTSTART"]));
                $eday = date('Y-m-d', strtotime($elem["DTEND"]));
                $cday = date('Y-m-d H:i:s', strtotime($elem["CREATED"]));
                $mday = date('Y-m-d H:i:s', strtotime($elem["LAST-MODIFIED"]));
                array_push($dayarr[$sday], array("Starttid" => $stime, "Sluttid" => $etime, "Lokal" => $room, "UID" => $elem["UID"], "Benamning" => $summary, "Kommentar" => $comment, "Skapad" => $comment, "Uppdaterad" => $mday));
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

    // Retrieve full database and swizzle into associative array for each day
    $result = $log_db->query('SELECT * FROM sched;');
    $rows = $result->fetchAll();
    $dbarr = array();
    foreach ($rows as $row) {
        $dbarr[$row['datum']] = json_decode($row['datan'], true);
    }
    // Synchronize each of the days with database - handle first day like partially complete
    // TODO: Make use of the UID to keep track of updated or deleted bookings
    foreach ($dayarr as $datumet => $day) {

        // Un-comment to view schedule data in source code
        // echo "\n /* ";
        // print_r($day);
        // echo "*/ \n";

        if (isset($dbarr[$datumet])) {
            // echo "IN DB: ".$datumet."\n";
            $dbday = $dbarr[$datumet];
            $changed = false;

            // For each slot in current day
            foreach ($day as $slot) {

                $foundno = -1;
                $foundcnt = 0;
                for ($i = 0; $i < sizeof($dbday); $i++) {
                    $dbslot = $dbday[$i];
                    $score = scoreItems($dbslot, $slot);
                    if ($score > $foundcnt) {
                        $foundno = $i;
                        $foundcnt = $score;
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

                if ($foundcnt == 11) {
                    // 11 is considered perfect match - so no database update													
                } else if ($foundcnt > 9) {
                    // 8-10 is considered an updated match
                    $slot['changed'] = date("Y-m-d");
                    $dbarr[$datumet][$foundno] = $slot;
                    $changed = true;
                } else if ($foundcnt <= 9) {
                    // 0-7 is considered a new entry
                    array_push($dbarr[$datumet], $slot);
                    $changed = true;
                }
            }

            //					if($changed){
            //						echo "\n /* ";
            //						echo "Change";
            //						print_r($dbarr[$datumet]);
            //						echo "*/ \n";
            //					}

            if ($changed) {
                // Update database - using updated data
                $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
                $query->bindParam(':datum', $datumet);
                $cont = json_encode($dbarr[$datumet]);
                $query->bindParam(':datan', $cont);
                $query->execute();
            } else {
                //							echo "No Change";
            }


            // Check if different
        } else {
            //					echo "NOT IN DB: ";

            $dayy = json_encode($day);
            $query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
            $query->bindParam(':datum', $datumet);
            $query->bindParam(':datan', $dayy);
            $query->execute();

            $dbarr[$datumet] = $day;
        }
    }

    $data = $dbarr;
}

$ret = array(
    "error" => $error,
    "data" => $data,
    "called_service" => $called_service
);

header('Content-type: application/json');
echo json_encode($ret);
?>