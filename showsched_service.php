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

$called_service = array("name" => $op, "params" => $params, "date" => date("Y-m-d H:i:s"));

$log_db = new PDO('sqlite:./scheduledata.db');
$sql = 'CREATE TABLE IF NOT EXISTS sched(id INTEGER PRIMARY KEY,datum varchar(10), datan TEXT);';
$log_db->exec($sql);

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
    global $error;
    $score = 0;
    if (strcmp($source['UID'], $desto['UID']) === 0) {
        $score = 11;
    } else {
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
    }

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
    $updateuidarr = array();
    $updatearr = array();

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
                        array_push($updateuidarr, $elem["UID"]);
                        array_push($updatearr, $csvelem);
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
                array_push($dayarr[$sday], array("Starttid" => $stime, "Sluttid" => $etime, "Lokal" => $room, "UID" => $elem["UID"], "Benamning" => $summary, "Kommentar" => $comment, "Skapad" => $cday, "Uppdaterad" => $mday, "Startdatum" => $sday, "Slutdatum" => $eday, "Aktivitet" => "", "Signatur" => "", "Tillfalle" => "", "Grupp" => ""));
                array_push($updateuidarr, $elem["UID"]);
                array_push($updatearr, array("Starttid" => $stime, "Sluttid" => $etime, "Lokal" => $room, "UID" => $elem["UID"], "Benamning" => $summary, "Kommentar" => $comment, "Skapad" => $cday, "Uppdaterad" => $mday, "Startdatum" => $sday, "Slutdatum" => $eday, "Aktivitet" => "", "Signatur" => "", "Tillfalle" => "", "Grupp" => ""));
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
    $pastuidarr = array();
    $pastarr = array();
    $futureuidarr = array();
    $futurearr = array();
    $now = new DateTime(); //date("Y-m-d H:i:s");
    foreach ($rows as $row) {
        $bookings = json_decode($row['datan'], true);
        $dbarr[$row['datum']] = json_decode($row['datan'], true);
        foreach ($bookings as $booking) {
            $sdate = new DateTime($booking["Startdatum"] . " " . $booking["Starttid"]);
            if ($now < $sdate) {
                array_push($futureuidarr, $booking["UID"]);
                array_push($futurearr, $booking);
                //array_push($error,array($booking,$booking["UID"],$now,$sdate,($now<$sdate)));
            } else {
                array_push($pastuidarr, $booking["UID"]);
                array_push($pastarr, $booking);
                //array_push($error,array($booking,$booking["UID"],$now,$sdate,($now<$sdate)));
            }
        }
    }
    // Synchronize each of the days with database - handle first day like partially complete
    // TODO: Make use of the UID to keep track of updated or deleted bookings
    /*
    array_push($error,$updateuidarr);
    array_push($error,$pastuidarr);
    array_push($error,$futureuidarr);
    */
    //foreach ($dayarr as $datumet => $day) {

    // Check removed booking
    //
    // A booking in database with timestamp in the future that is not in the current update should be removed
    //
    foreach ($futureuidarr as $fidx => $futureuid) {
        if (in_array($futureuid, $updateuidarr) === true) {
            //array_push($error, "Update:" . $fbooking);
        } else {
            array_push($error, "Delete:" . $futureuid);
            $fbooking = $futurearr[$fidx];
            $datumet = $fbooking["Startdatum"];
            $day = $dbarr[$datumet];
            $idx = -1;
            foreach ($day as $sidx => $slot) {
                if (strcmp($slot["UID"], $fbooking["UID"]) === 0) {
                    array_splice($day, $sidx, 1);
                    //array_push($error, $day);
                    break;
                }
            }
            $dayy = json_encode($day);
            $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
            $query->bindParam(':datum', $datumet);
            $cont = json_encode($dbarr[$datumet]);
            $query->bindParam(':datan', $dayy);
            $query->execute();
            $dbarr[$datumet] = $day;
        }
    }

    foreach ($updateuidarr as $uidx => $updateuid) {
        $ubooking = $updatearr[$uidx];
        $sdate = new DateTime($ubooking["Startdatum"] . " " . $ubooking["Starttid"]);
        // Now we do not need to keep track of past/future bookings
        // A booking in the past can be updated but not deleted
        array_merge($futurearr, $pastarr);
        array_merge($futureuidarr, $pastuidarr);
        $idx_future = array_search($updateuid, $futureuidarr);
        $datumet = $ubooking["Startdatum"];
        $day = $dbarr[$datumet];
        if ($idx_future !== false) {
            // Found booking in db, check if update is needed
            $dbbooking = $futurearr[$idx_future];
            if (strcmp($dbbooking["Uppdaterad"], $ubooking["Uppdaterad"]) !== 0) {
                // Change detected!
                if (strcmp($dbbooking["Startdatum"], $ubooking["Startdatum"]) === 0) {
                    // If Startdatum has not changed, simply replace current booking with the updated                        
                    foreach ($day as $sidx => $slot) {
                        if (strcmp($slot["UID"], $ubooking["UID"]) === 0) {
                            $day[$sidx] = $ubooking;
                            break;
                        }
                    }
                    $dayy = json_encode($day);
                    $dbarr[$datumet] = $day;
                    $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
                    $query->bindParam(':datum', $datumet);
                    $cont = json_encode($dbarr[$datumet]);
                    $query->bindParam(':datan', $cont);
                    $query->execute();
                } else {
                    // If on separate days we must remove dbbooking and add ubooking
                    // which requires two DB operations
                    // 1.Remove dbbooking
                    $dbdatumet = $dbbooking["Startdatum"];
                    $dbday = $dbarr[$dbdatumet];
                    foreach ($dbday as $sidx => $slot) {
                        if (strcmp($slot["UID"], $dbbooking["UID"]) === 0) {
                            array_splice($dbday, $sidx, 1);
                            break;
                        }
                    }
                    $dbarr[$dbdatumet] = $dbday;
                    $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
                    $query->bindParam(':datum', $dbdatumet);
                    $cont = json_encode($dbarr[$dbdatumet]);
                    $query->bindParam(':datan', $cont);
                    $query->execute();

                    //2. Add ubooking
                    if (isset($day)) {
                        array_push($day, $ubooking);
                        $dayy = json_encode($day);
                        $dbarr[$datumet] = $day;
                        $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
                        $query->bindParam(':datum', $datumet);
                        $cont = json_encode($dbarr[$datumet]);
                        $query->bindParam(':datan', $cont);
                        $query->execute();
                    } else {
                        $day = array($ubooking);
                        $dayy = json_encode($day);
                        $dbarr[$datumet] = $day;
                        $query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
                        $query->bindParam(':datum', $datumet);
                        $query->bindParam(':datan', $dayy);
                        $query->execute();
                    }
                }
            } else {
                // No change
            }
        } else {
            // Did not find booking in db, insert into db                    

            if (isset($day)) {
                array_push($day, $ubooking);
                $dayy = json_encode($day);
                $dbarr[$datumet] = $day;
                $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
                $query->bindParam(':datum', $datumet);
                $cont = json_encode($dbarr[$datumet]);
                $query->bindParam(':datan', $cont);
                $query->execute();
            } else {
                $day = array($ubooking);
                $dayy = json_encode($day);
                $query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
                $query->bindParam(':datum', $datumet);
                $query->bindParam(':datan', $dayy);
                $query->execute();
            }
        }
    }

    //}
    // Un-comment to view schedule data in source code
    // echo "\n /* ";
    // print_r($day);
    // echo "*/ \n";

    //     if (isset($dbarr[$datumet])) {
    //         // echo "IN DB: ".$datumet."\n";
    //         $dbday = $dbarr[$datumet];
    //         $changed = false;

    //         // For each slot in current day
    //         foreach ($day as $slot) {

    //             $foundno = -1;
    //             $foundcnt = 0;
    //             for ($i = 0; $i < sizeof($dbday); $i++) {
    //                 $dbslot = $dbday[$i];
    //                 $score = scoreItems($dbslot, $slot);
    //                 if ($score > $foundcnt) {
    //                     $foundno = $i;
    //                     $foundcnt = $score;
    //                 }
    //             }

    //             //							echo "\n /* ";
    //             //							echo "Slot";
    //             //							print_r($dbarr[$datumet]);
    //             //							echo "\n";
    //             //							print_r($slot);
    //             //							echo "\n";
    //             //							echo $foundcnt;
    //             //							echo "*/ \n";

    //             if ($foundcnt == 11) {
    //                 // 11 is considered perfect match - so no database update													
    //             } else if ($foundcnt > 9) {
    //                 // 8-10 is considered an updated match
    //                 $slot['changed'] = date("Y-m-d");
    //                 $slot["Uppdaterad"] = date('Y-m-d H:i:s');;
    //                 $dbarr[$datumet][$foundno] = $slot;
    //                 $changed = true;
    //             } else if ($foundcnt <= 9) {
    //                 // 0-7 is considered a new entry
    //                 $cday = date('Y-m-d H:i:s');
    //                 $slot["Skapad"] = $cday;
    //                 $slot["Uppdaterad"] = $cday;
    //                 array_push($dbarr[$datumet], $slot);
    //                 $changed = true;
    //             }
    //         }

    //         //					if($changed){
    //         //						echo "\n /* ";
    //         //						echo "Change";
    //         //						print_r($dbarr[$datumet]);
    //         //						echo "*/ \n";
    //         //					}

    //         if ($changed) {
    //             // Update database - using updated data
    //             $query = $log_db->prepare('UPDATE sched set datan=:datan where datum=:datum');
    //             $query->bindParam(':datum', $datumet);
    //             $cont = json_encode($dbarr[$datumet]);
    //             $query->bindParam(':datan', $cont);
    //             $query->execute();
    //         } else {
    //             //							echo "No Change";
    //         }


    //         // Check if different
    //     } else {
    //         //					echo "NOT IN DB: ";
    //         $cday = date('Y-m-d H:i:s');
    //         $day[0]["Skapad"] = $cday;
    //         $day[0]["Uppdaterad"] = $cday;

    //         $dayy = json_encode($day);
    //         $query = $log_db->prepare('INSERT INTO sched(datum,datan) VALUES (:datum,:datan)');
    //         $query->bindParam(':datum', $datumet);
    //         $query->bindParam(':datan', $dayy);
    //         $query->execute();

    //         $dbarr[$datumet] = $day;
    //     }
    // }
    array_push($error, $dbarr);
    $data = $dbarr;
} else if (strcmp($op, "dump") === 0) {
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
                    $mday = date('Y-m-d H:i:s', strtotime($elem["LAST-MODIFIED"]));
                    $room = trim($elem["LOCATION"]);
                    if (strcmp($stime, $csvelem["Starttid"]) === 0 && strcmp($etime, $csvelem["Sluttid"]) === 0 && strcmp($room, $csvelem["Lokal"]) === 0) {
                        // We got a match -- add UID
                        $csvelem["UID"] = $elem["UID"];
                        $csvelem["Uppdaterad"] = $§mday;
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

    $updatesarr = array();
    foreach ($dayarr as $day) {
        foreach ($day as $booking) {
            array_push($updatesarr, $booking);
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
                array_push($dayarr[$sday], array("Starttid" => $stime, "Sluttid" => $etime, "Lokal" => $room, "UID" => $elem["UID"], "Benamning" => $summary, "Kommentar" => $comment, "Skapad" => $cday, "Uppdaterad" => $mday, "Startdatum" => $sday, "Slutdatum" => $eday, "Aktivitet" => "", "Signatur" => "", "Tillfalle" => "", "Grupp" => ""));
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
        //$dbarr[$row['datum']] = json_decode($row['datan'], true);
        array_push($dbarr, json_decode($row['datan'], true));
    }

    $data = array("db" => $dbarr, "update" => $updatesarr);
}

$ret = array(
    "error" => $error,
    "data" => $data,
    "called_service" => $called_service
);

header('Content-type: application/json');
echo json_encode($ret);
