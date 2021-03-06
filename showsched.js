// ------------------------------------------------------------------------------------------------------------
// -----------=============######## Second version Kiosk System with JSON/ICAL ########=============-----------
// ------------------------------------------------------------------------------------------------------------
//  Copyright a97marbr / HGustavs / 
//
//        (\ /)
//        (. .)           
//       c(")(")  ∴ 
//-------------------------------------------------------------------------------------------------------------

//------------------------------------=======############==========----------------------------------------
//                           Defaults, mouse variables and zoom variables
//------------------------------------=======############==========----------------------------------------

var data = [];
var result = getWeekNumber(new Date());
var auto_update=null;
var uidArr=[];
var bookingArr=[];
var confdata=[];
var bookings={};
var is_admin=0;

//------------------------------------=======############==========----------------------------------------
//                                           Mouse events
//------------------------------------=======############==========----------------------------------------

function fab_action()
{
    if(document.getElementById("options-pane").className=="show-options-pane"){
				document.getElementById('optmarker').innerHTML="&#9660;Options";
        document.getElementById("options-pane").className="hide-options-pane";
				document.getElementById("bookingpane").style.display="block";			
    }else{
				document.getElementById('optmarker').innerHTML="&#x1f4a9;Options";
				document.getElementById("options-pane").className="show-options-pane";
				document.getElementById("adminpane").style.display="block";
		}    
}

function clickbookable(element,namn)
{
		document.getElementById('optmarker').innerHTML="&#x1f4a9;Options";
		document.getElementById("options-pane").className="show-options-pane";
		document.getElementById("bookingpane").style.display="block";
		document.getElementById("adminpane").style.display="none";	
		
		document.getElementById("boknamn").value=namn;
		document.getElementById("bokid").value=element.id;
		if(bookingArr[element.id]){
				let b=bookingArr[element.id]
				document.getElementById("meeting-label").innerHTML=b.kursben+" "+b.starttid+"-"+b.sluttid;
		}
		if(typeof bookings[element.id] !== "undefined"){
				console.log("We made this booking from this browser!");
				delStr="<span id='cancel-meeting-btn' style='color:#F00;padding:2px;background-color:#FFF;' onclick='cancelMeeting(\""+element.id+"\",\""+bookings[element.id]+"\")'>&times;</span>";
				document.getElementById("cancel-meeting-btn").outerHTML=delStr;
		}else if(is_admin){
				console.log("We are admin!");
				delStr="<span id='cancel-meeting-btn' style='color:#F00;padding:2px;background-color:#FFF;' onclick='cancelMeeting(\""+element.id+"\",\"UNK\")'>&times;</span>";
				document.getElementById("cancel-meeting-btn").outerHTML=delStr;
		}else{
				document.getElementById("cancel-meeting-btn").style.display="none";
		}
		console.log(element);
}

function saveBooking()
{
		callService("MEET","confsched_service_new.php",{ 
									"meetid": document.getElementById("bokid").value, 
									"meetname": document.getElementById("boknamn").value 
		});
		callService("GET","showsched_service_new.php",{ "start_week": -2, "end_week": 2});
}

function cancelMeeting(id,token)
{
		console.log("deleting",id)
		delete bookings[id];
		console.log("deleted", bookings)
		localStorage.setItem("schedsys-bookings",JSON.stringify(bookings));
		callService("DELMEET","confsched_service_new.php",{ 
			"meetid": id, 
			"meettoken": token 
		});
		callService("GET","showsched_service_new.php",{ "start_week": -2, "end_week": 2});
}

//------------------------------------=======############==========----------------------------------------
//                                           Date Handling
//------------------------------------=======############==========----------------------------------------

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

//------------------------------------=======############==========----------------------------------------
//                                          Service interface
//------------------------------------=======############==========----------------------------------------

function makeServiceParam(apara)
{
		var para="";
		for (var key in apara) {
				para+="&"+key+"="+encodeURIComponent(apara[key]);
		}
		return para;
}

function callService(op,serviceurl,params)
{
		var jqxhr = $.ajax({
        type: 'POST',
        url: serviceurl,
        dataType: 'json',
        data: "op="+encodeURIComponent(op)+makeServiceParam(params)
    })
		.done(data_returned)
		.fail(function (e) {
				alert(e.responseText);
		})
		.always(function () {
				//alert( "complete" );
		});
}

function mindif(tida,tidb)
{
		return ((parseInt(tidb.substr(0,2))*60)+(parseInt(tidb.substr(3,2))))-((parseInt(tida.substr(0,2))*60)+(parseInt(tida.substr(3,2))));
}

//------------------------------------=======############==========----------------------------------------
//                                          Display Data
//------------------------------------=======############==========----------------------------------------

function showdata() {
    var today = new Date();

    // Show last update time in top of schedule!
    var currh = today.getHours();
    if (currh < 10) currh = "0" + currh;
    var currm = today.getMinutes()
    if (currm < 10) currm = "0" + currm;
    //document.getElementById("feedback").innerHTML = currh + ":" + currm;
    //let d=new Date(service.called_service.date);
    //document.getElementById("feedback").innerHTML = d.toLocaleDateString("sv-SE")+" "+d.toLocaleTimeString("sv-SE");

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
            if (typeof data[datumet] != "undefined") {
                for (var k = 0; k < data[datumet].length; k++) {
                    var ditem = data[datumet][k];
									
                    var starty = timetopix(ditem['starttid']) * 30;
                    var endy = (timetopix(ditem['sluttid']) * 30) - starty;
									
										var mdiff=(mindif(ditem['starttid'],ditem['sluttid']));
									
										var benamning = ditem['kursben'];
										if(typeof benamning == "undefined") benamning="";
									
										var kommentar = ditem['kommentar'];
										if(typeof kommentar == "undefined") kommentar="";
									
                    colno = belist.indexOf(benamning);
                    if (colno == -1) {
                        if (benamning.indexOf("andl") == -1) belist.push(benamning);
                        colno = belist.indexOf(benamning);
                    }

                    var colnamn = "#def";
                    if ((colno < collist.length) && (colno > 0)) {
                        colnamn = collist[colno];
                    }

                    str += "<div ";
										str += "id='"+ditem['id']+"' class='timeslot";
										if(benamning=="Exjobbsmöte"){
												str+=" bokbar";		
										}
										str+="' style='background:" + colnamn + ";top:" + starty + "px;height:" + endy + "px'";
										if(benamning=="Exjobbsmöte"){
												str+=" onclick='clickbookable(event.target,\""+kommentar+"\")' ";		
										}
										str+=">";
										str+="<div class='flexcontainer'>";
                    str += "<div>"+benamning+"</div>";
										if(mdiff<=30&&kommentar != ""){
													// Shorter than 30 min and we have a comment!
													str += "<div style='font-weight:100;'>" + kommentar + "</div>";
										}
										str+="</div>";
                    str += "<br>";
                    str += ditem['lokal'];
                    if (kommentar != "") {
                        str += "<br>";
                        str += "<span class='comment'>";
                        str += kommentar;
                        str += "</span>";
                    }
                    if (typeof ditem['Uppdaterad']!=="undefined") {
                        str += "<br>";
                        str += "<span class='updated'>";
                        str += ditem['uppdaterad'];
                        str += "</span>";
                    }

										str+="<div class='signcontainer'>";
										for (var key in ditem.signatur) {
												str+="<span class='sign'>"+ditem.signatur[key]+"</span>";
										}
										str+="</div>";
									
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

function getData()
{
		callService("GET","showsched_service_new.php",{ "start_week": -2, "end_week": 2});
}

//------------------------------------=======############==========----------------------------------------
//                                           Service calls
//------------------------------------=======############==========----------------------------------------

function saveLink()
{
		callService("ADD","confsched_service_new.php",{ 
							"id": document.getElementById('confid').value, 
							"kind": document.getElementById('kind').value, 
							"link": document.getElementById('link').value,
							"aux":document.getElementById('sign').value}
					 );
}

function addLink()
{
		callService("ADD","confsched_service_new.php",{ 
							"kind": document.getElementById('kind').value, 
							"link": document.getElementById('link').value,
							"aux":document.getElementById('sign').value}
					 );
}


function clickConf(inpid)
{
		if(typeof confdata[inpid] != "undefined"){
				document.getElementById('link').value=confdata[inpid].link;
				document.getElementById('kind').value=confdata[inpid].kind;
				document.getElementById('sign').value=confdata[inpid].aux;
				document.getElementById('confid').value=confdata[inpid].id;			
		}
		event.stopPropagation();
}

function delLink(param)
{
		callService("DEL","confsched_service_new.php",{ "id": param});
		event.stopPropagation();
}

function updateConf()
{
    cfStr="<table>";
    for(cfkey in confdata ){
				var cf=confdata[cfkey];
        cfStr+="<tr onclick='clickConf(\""+cf.id+"\")' >";
        cfStr+="<td><span class='delbutto' onclick='delLink("+cf.id+");'>&#x2718;</span></td>";
				cfStr+="<td><span class='showurl'>"+cf.link+"</span></td>";
        cfStr+="<td>"+cf.kind+"</td>";
        cfStr+="<td>"+cf.aux+"</td>";
        cfStr+="</tr>";
    }
		cfStr+="<table>";
		if(document.getElementById("tab")){
				document.getElementById("tab").innerHTML=cfStr;
		}
}

function data_returned(ret) {
		if(ret.debug!="NONE!") alert(ret.debug);
	
		bookingsStr=localStorage.getItem("schedsys-bookings");
		if(bookingsStr===null){
				bookings={};
		}else{
				console.log(bookingsStr)
				bookings=JSON.parse(bookingsStr,true);
		}

    if (typeof ret.admin !== "undefined"){
				is_admin=ret.admin;
		}

    if (typeof ret.data !== "undefined"){
				data=ret.data;
				showdata();		
		}
	
    if (typeof ret.confdata !== "undefined"){
				confdata=ret.confdata;
				updateConf();
		}
    if (typeof ret.meetid !== "undefined" && typeof ret.meettoken !== "undefined"){
				if(ret.meetid!="UNK" && ret.meettoken != "UNK"){
						console.log("We have booked a meeting!");
						bookings[ret.meetid]=ret.meettoken;
						localStorage.setItem("schedsys-bookings",JSON.stringify(bookings));
						console.log(bookings,ret.meetid,ret.meettoken)
				}
		}
		if (typeof ret.confdata === "undefined"&&typeof ret.data === "undefined"){
        console.log("Error receiveing data!");
		}

}
