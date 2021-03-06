// ------------------------------------------------------------------------------------------------------------
// -----------=============######## Second version Kiosk System with JSON/ICAL ########=============-----------
// ------------------------------------------------------------------------------------------------------------
//  Copyright a97marbr / HGustavs 
//
//        (\ /)
//        (. .)           
//       c(")(")  ∴ 
//-------------------------------------------------------------------------------------------------------------

var service =[];
var result = getWeekNumber(new Date());
var auto_update=null;
var uidArr=[];

var mb,startX,startY;
var startTop,startLeft;

function mdown(event)
{
		startX=event.clientX;
		startY=event.clientY;
		startTop=parseInt(event.target.style.top.substring(0, event.target.style.top.length - 1));
		startLeft=parseInt(event.target.style.left.substring(0, event.target.style.left.length - 1));
    
        event.target.className+=" selected-entry";
        
		mb=1;
//		console.log(event);
}

function mup(event)
{
		deltaX=startX-event.clientX;
		deltaY=startY-event.clientY;

		var newy=Math.floor((startTop-deltaY)/15)*15;
		var newx=Math.floor((startLeft-deltaX)/184)*184;
		if(newy<0) newy=0;
	
		mb=0;
	
		event.target.style.top=newy+"px";
		event.target.style.left=newx+"px";

        cls=event.target.className;
        cls=cls.replace(" selected-entry","");
        event.target.className=cls;
}

function mmoving(event)
{
		if(mb){
				deltaX=startX-event.clientX;
				deltaY=startY-event.clientY;

				var newy=Math.floor((startTop-deltaY)/15)*15;
				var newx=Math.floor((startLeft-deltaX)/184)*184;
				if(newy<0) newy=0;
			
				if(newy<0) newy=0;

				event.target.style.top=newy+"px";
				event.target.style.left=newx+"px";
		}
}

function fab_action()
{
    if(document.getElementById("options-pane").className=="show-options-pane"){
        document.getElementById("options-pane").className="hide-options-pane";
    }else{
        document.getElementById("options-pane").className="show-options-pane";
    }    
}

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
                    var ditem = JSON.parse(service.data[datumet][k]);
                    var starty = timetopix(ditem['starttid']) * 30;
                    var endy = (timetopix(ditem['sluttid']) * 30) - starty;
										var itemid = ditem['id'];
									
										var benamning = ditem['kursben'];
										if(typeof benamning == "undefined") benamning="";
									
                    colno = belist.indexOf(benamning);
                    if (colno == -1) {
                        if (benamning.indexOf("andl") == -1) belist.push(benamning);
                        colno = belist.indexOf(benamning);
                    }

                    var colnamn = "#def";
                    if ((colno < collist.length) && (colno > 0)) {
                        colnamn = collist[colno];
                    }

                    if(itemid.length>8){
                            cls="";
                            if(document.getElementById("box6").checked == true){
                                cls="hide";
                            }
                            str += "<div class='timeslot icalelement "+cls+"' style='top:" + starty + "px;height:" + endy + "px;left:0px;' >";

                    }else{
                            str += "<div class='timeslot' style='background:" + colnamn + ";top:" + starty + "px;height:" + endy + "px;left:0px;' onmousemove='mmoving(event);' onmousedown='mdown(event);' onmouseup='mup(event);' >";										
                    }
                    str += benamning;
                    str += "<br>";
                    str += ditem['lokal'];
                    if (ditem['Kommentar'] != "") {
                        str += "<br>";
                        str += "<span style='font-style:italic;font-weight:400'>";
                        str += ditem['kommentar'];
                        str += "</span>";
                    }
                    if (typeof ditem['Uppdaterad']!=="undefined") {
                        str += "<br>";
                        str += "<span style='font-size:small;font-style:italic;font-weight:400'>";
                        str += ditem['uppdaterad'];
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
        url: 'showsched_service_new.php',
        dataType: 'json',
        data: "op=" + op + "&params=" + encodeURIComponent(JSON.stringify(params))
    })
		.done(data_returned)
		.fail(function (e) {
				alert(e.responseText);
		})
		.always(function () {
				//alert( "complete" );
		});
}

function data_returned(ret) {
    if (typeof ret.data !== "undefined") {
        service=ret;
        showdata();			
		} else {
        alert("Error receiveing data!");
    }
}
