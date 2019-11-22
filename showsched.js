var service =[];
var result = getWeekNumber(new Date());
var auto_update=null;
var uidArr=[];

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNo;
}

function timetopix(tidstr) {
    var h = (parseInt(tidstr.substr(0, 2)) - 8);
    var m = (parseInt(tidstr.substr(3, 2)));

    if (m == 15) m = 0;
    m = m / 60;
    h += m;

    return h;
}

function decleanup(str) {
    var retstr = decodeURIComponent(str.replace(/__/g, "&").replace(/\.\./g, ";"));
    retstr = retstr.replace(/\+/g, " ");
    return retstr;
}

function showdata() {
    var today = new Date();

    // Show last update time in top of schedule!
    var currh = today.getHours();
    if (currh < 10) currh = "0" + currh;
    var currm = today.getMinutes()
    if (currm < 10) currm = "0" + currm;
    //document.getElementById("feedback").innerHTML = currh + ":" + currm;
    let d=new Date(service.called_service.date);
    document.getElementById("feedback").innerHTML = d.toLocaleDateString("sv-SE")+" "+d.toLocaleTimeString("sv-SE");

    var currDay = new Date();
    today.setHours(12, 00, 00);
    currDay.setHours(12, 00, 00);

    var weekno = getWeekNumber(today);
    var day = (today.getUTCDay() || 7) - 1;
    var firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - day);
    var weekStart = -1;
    var weekEnd = 3;

    var weekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    currDay.setTime(firstDayOfWeek.getTime() + (weekInMilliseconds * weekStart));

    var str = "";

    // List of benamning
    var belist = [];
    var collist = ["#fed", "#fde", "#dfe", "#efd", "#edf", "#ffd", "#dff", "#fdf"];

    // A table to fit the full calendar
    str += "<table>";
    str += "<tr><th>week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th>";
    for (var i = weekno + weekStart; i <= weekno + weekEnd; i++) {

        if (i == weekno) {
            str += "<tr class='curr' >";
        } else {
            str += "<tr>";
        }


        str += "<td>";
        str += "<div class='weekno' >";
        // End of year handling
        if (i > 52) {
            str += (i - 52);
        } else {
            str += i;
        }
        str += "</div>";
        str += "</td>";

        var startlunch = (timetopix("12:00") * 30);
        var endlunch = (timetopix("13:00") * 30) - startlunch;

        for (var j = 0; j < 5; j++) {

            var month = (currDay.getMonth() + 1);
            if (month < 10) month = "0" + month;
            var day = currDay.getDate();
            if (day < 10) day = "0" + day;
            var datumet = currDay.getFullYear() + "-" + month + "-" + day;

            // Advance to next day in calendar
            currDay.setDate(currDay.getDate() + 1);

            str += "<td>";
            str += "<div class='dayte'>" + day + "/" + month + "</div>";
            str += "<div class='sched' id='s" + datumet + "' >";


            str += "<div class='lunch' style='top:" + startlunch + "px;height:" + endlunch + "px'></div>";

            if (typeof service.data[datumet] != "undefined") {
                for (var k = 0; k < service.data[datumet].length; k++) {
                    var ditem = service.data[datumet][k];

                    var starty = timetopix(ditem['Starttid']) * 30;
                    var endy = (timetopix(ditem['Sluttid']) * 30) - starty;

                    var benamning = decleanup(ditem['Benamning']);

                    colno = belist.indexOf(benamning);
                    if (colno == -1) {
                        if (benamning.indexOf("andl") == -1) belist.push(benamning);
                        colno = belist.indexOf(benamning);
                    }

                    var colnamn = "#def";
                    if ((colno < collist.length) && (colno > 0)) {
                        colnamn = collist[colno];
                    }

                    str += "<div class='timeslot' style='background:" + colnamn + ";top:" + starty + "px;height:" + endy + "px'>";
                    str += benamning;
                    str += "<br>";
                    str += decodeURIComponent(ditem['Lokal']).replace(/\+/g, " ");
                    if (ditem['Kommentar'] != "") {
                        str += "<br>";
                        str += "<span style='font-style:italic;font-weight:400'>";
                        str += decleanup(ditem['Kommentar']);
                        str += "</span>";
                    }
                    if (typeof ditem['Uppdaterad']!=="undefined") {
                        str += "<br>";
                        str += "<span style='font-size:small;font-style:italic;font-weight:400'>";
                        str += decleanup(ditem['Uppdaterad']);
                        str += "</span>";
                    }
                    str += "</div>"
                }
            }

            str += "</div>";
            str += "</td>";
        }

        // Advance two days for week-end
        currDay.setDate(currDay.getDate() + 2);

        str += "</tr>";
    }
    str += "</table>";

    if (typeof startupCanvas == 'function') {
        // startupCanvas(); 
    }

    document.getElementById("datedisp").innerHTML = str;    
    if(auto_update===null){
        auto_update=setInterval(getData, 600000);
    }
}

function getData() {
    let op = "DEFAULT";
    let params = { "start_week": -2, "end_week": 2};
    var jqxhr = $.ajax({
        type: 'POST',
        url: 'showsched_service.php',
        dataType: 'json',
        data: "op=" + op + "&params=" + encodeURIComponent(JSON.stringify(params))
    })
        .done(data_returned)
        .fail(function (e) {
            console.log("AJAX Error:", e)
        })
        .always(function () {
            //alert( "complete" );
        });
}

function getDataDump() {
    let op = "dump";
    let params = {};
    var jqxhr = $.ajax({
        type: 'POST',
        url: 'showsched_service.php',
        dataType: 'json',
        data: "op=" + op + "&params=" + encodeURIComponent(JSON.stringify(params))
    })
        .done(data_returned)
        .fail(function (e) {
            console.log("AJAX Error:", e)
        })
        .always(function () {
            //alert( "complete" );
        });
}


function data_returned(ret) {
    if (typeof ret.data !== "undefined") {
        service=ret;
        if(service.called_service.name==="DEFAULT"){
            showdata();
        }else if(service.called_service.name==="dump"){
            let dataDumpArr=[];
            for(let i=0;i<service.data.db.length;i++){
                let dayArr=service.data.db[i];
                for(let j=0;j<dayArr.length;j++){
                    let dayObj=dayArr[j];
                    /*
                        Aktivitet: "Seminarium"
                        Benamning: "Webbprogrammering G1F, 7.5hp"
                        Grupp: ""
                        Kommentar: "Slutseminarium"
                        Lokal: "E102"
                        Signatur: "Henrik Gustavsson, Marcus Brohede"
                        Slutdatum: "2018-12-19"
                        Sluttid: "12:00"
                        Startdatum: "2018-12-19"
                        Starttid: "08:15"
                        Tillfalle: "ITBIG16h, SYVEG16h, WEBUG17h"
                    */
                    let itemArr=[];                    
                    itemArr.push(dayObj.Startdatum);
                    itemArr.push(dayObj.Starttid);
                    itemArr.push(dayObj.Sluttid);
                    itemArr.push(dayObj.Slutdatum);
                    itemArr.push(dayObj.Lokal);
                    itemArr.push(dayObj.Aktivitet);
                    itemArr.push(dayObj.Benamning);
                    itemArr.push(dayObj.Grupp);
                    itemArr.push(dayObj.Signatur);
                    itemArr.push(dayObj.Tillfalle);
                    itemArr.push(dayObj.Uppdaterad);
                    itemArr.push(dayObj.Skapad);
                    itemArr.push(dayObj.UID);
                    dataDumpArr.push(itemArr);    
                    uidArr.push(dayObj.UID);
                }
            }
            console.log(dataDumpArr);
            console.log(uidArr)
            console.log(service.data.update);
            for(let k=0;k<service.data.update.length;k++){
                let update=service.data.update[k];                                
                console.log(update);
                if(uidArr.indexOf(update.UID)){
                    console.log("Found UID:"+update.UID);
                }else{
                    console.log("Did NOT find UID:"+update.UID);
                }
            }
        }
    } else {
        alert("Error receiveing data!");
    }
}
