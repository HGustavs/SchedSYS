var service =[];
var auto_update=null;
var uidArr=[];

var mb,startX,startY;
var startTop,startLeft;
var sscrollx,sscrolly;
var cwidth,cheight;
var colors = ["white","Gold","pink","yellow","CornflowerBlue"];

// For each study program, and in each program we list course instances by study period
var data=[
	{prognamn:"WEBUG",x:0,y:0,years:3,year:[
			{			// Year 1
						"4":[{"name":"Datorgrafik","hp":"7.5","spd":0.5, "req":[],"code":"IT118G"},{"name":"Webbplatsdesign",hp:"7.5","spd":0.5, "req":[],"code":"IT108G"}],
						"5":[{"name":"Grundläggande programmering med C++","hp":"7.5","spd":0.5, "req":[],"code":"IT120G"},{"name":"User Experience Design",hp:"7.5","spd":0.5, "req":[],"code":"IT111G"}],
						"1":[{"name":"Databassystem","hp":"7.5","spd":0.5, "req":[],"code":"IT121G"},{"name":"Webbutveckling - mobilapplikationsdesign",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT108G","credits":7.5}]],"code":"IT331G"}],
						"2":[{"name":"Webbutveckling - Programmering av mobila applikationer","hp":"7.5","spd":0.5, "req":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],"code":"IT351G"},{"name":"Webbutveckling - XML API",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT120G","credits":7.5}],[{"type":"course","code":"IT121G","credits":7.5}]],"code":"IT111G"}]		
			},
			{			// Year 2
						"4":[{"name":"IT i organisationer - introduktion","hp":"7.5","spd":0.5, "req":[],"code":"IT110G"},{"name":"Databaskonstruktion",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT121G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],"code":"IT315G"}],
						"5":[{"name":"Datakommunikation - Introduktion","hp":"7.5","spd":0.5, "req":[],"code":"IT119G"},{"name":"Webbprogrammering",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT331G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT108G","credits":7.5}]],"code":"IT311G"}],
						"1":[{"name":"Objektorienterad programmering","hp":"7.5","spd":0.5, "req":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],"code":"IT366G"},{"name":"Software Engineering",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],"code":"IT386G"}],
						"2":[{"name":"Projekt i software engineering","hp":"15.0","spd":1, "req":[[{"type":"course","code":"IT386G","credits":7.5}],[{"type":"course","code":"IT311G","credits":7.5},{"type":"course","code":"IT366G","credits":7.5}]],"code":"IT350G"}]		
			},
			{			// Year 3
						"4":[{"name":"Operativsystem","hp":"7.5","spd":0.5, "req":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],"code":"IT391G"},{"name":"Webbutveckling - content management och drift",hp:"7.5","spd":0.5, "req":[[{"type":"course","code":"IT350G","credits":15}]],"code":"IT509G"}],
						"5":[{"name":"Webbteknologi - forskning och utveckling","hp":"7.5","spd":0.5, "req":[[{"type":"course","code":"IT350G","credits":15}],[{"type":"course","code":"IT315G","credits":7.5}]],"code":"IT515G"},{"name":"Informationssäkerhet - Introduktion",hp:"7.5","spd":0.5, "req":[],"code":"IT139G"}],
						"1":[{"name":"Examensarbete i informationsteknologi med inriktning mot webbprogrammering",hp:"30",spd:1.0,"req":[[{"type":"course","code":"IT515G","credits":7.5}],[{"type":"course","code":"IT509G","credits":7.5}]],"code":"IT391G"}],
						"2":[]		
			}
	]},
	{prognamn:"DVSUG",x:620,y:0,years:3,year:[
			{			// Year 1
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 2
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 3
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			}		
	]},
	{prognamn:"SVEIG",x:0,y:460,years:3,year:[
			{			// Year 1
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 2
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			},
			{			// Year 3
						"4":[],
						"5":[],
						"1":[],
						"2":[]		
			}		
	]
	}
];

function mdown(event)
{
		// React to mouse down on container
		if(event.target.id=="container"){
				mb=1;		
				sscrollx=scrollx;
				sscrolly=scrolly;
				startX=event.clientX;
				startY=event.clientY;
		}
}

function mup(event)
{
		deltaX=startX-event.clientX;
		deltaY=startY-event.clientY;
		
		mb=0;
}

function mmoving(event)
{
		// Click started in container
		if(mb==1){
				// Compute new scroll position
				deltaX=startX-event.clientX;
				deltaY=startY-event.clientY;
				scrollx=sscrollx-Math.round(deltaX*zoomfact);
				scrolly=sscrolly-Math.round(deltaY*zoomfact);
			
				// Update scroll position
				updatepos();
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

function zoomin()
{
		var oldzoomfact=zoomfact;
	
		if(zoomfact==0.125) zoomfact=0.25
		else if(zoomfact==0.25) zoomfact=0.5
		else if(zoomfact==0.5) zoomfact=0.75
		else if(zoomfact==0.75) zoomfact=1.0
		else if(zoomfact==1.0) zoomfact=1.25
		else if(zoomfact==1.25) zoomfact=1.5
		else if(zoomfact==1.5) zoomfact=2.0
		else if(zoomfact==2.0) zoomfact=4.0;

		// Update scroll position - missing code for determining that center of screen should remain at new zoom factor
		showdata();
}

function zoomout()
{
		var oldzoomfact=zoomfact;
	
		if(zoomfact==0.25) zoomfact=0.125
		else if(zoomfact==0.5) zoomfact=0.25
		else if(zoomfact==0.75) zoomfact=0.5
		else if(zoomfact==1.0) zoomfact=0.75
		else if(zoomfact==1.25) zoomfact=1.0
		else if(zoomfact==1.5) zoomfact=1.25
		else if(zoomfact==2.0) zoomfact=1.5
		else if(zoomfact==4.0) zoomfact=2.0;

		// Update scroll position - missing code for determining that center of screen should remain at new zoom factor
		showdata();
}

// Generate all courses at appropriate zoom level
function showdata() {
		var container=document.getElementById("container");
		var containerbox=container.getBoundingClientRect();	
	
		// Compute bounds of 
		cwidth=containerbox.width;
		cheight=containerbox.height;
	
		var str="";
		
		// Iterate over courses
		for(var i=0;i<data.length;i++){
				var program=data[i];
				
				str+="<div id='"+program.prognamn+"' class='program' style='";
				str+="width:"+Math.round(program.years*coursewidth*zoomfact)+"px;";
				str+="height:"+Math.round(courseheight*zoomfact)+"px;";
				str+="left:0px;";
				str+="top:0px;";			
				str+="' >";
				str+="<div class='programtext' style='font-size:"+Math.round(zoomfact*textheight)+"px' >"+program.prognamn+"</div>";
				
				// Flex to get year reliably side by side
				str+="<div class='flexyear'>";
				for(var j=0;j<program.years;j++){
						str+="<div class='year' style='";
						str+="height:"+Math.round((zoomfact*courseheight)-(zoomfact*textheight))+"px;width:"+Math.round(zoomfact*coursewidth)+"px;font-size:"+Math.round(zoomfact*textheight)+"px;";
						if(j>0) str+="border-left:1px dashed brown;";
						str+="' >";
						str+="<div class='yeartext' style=''>År "+(j+1)+"</div>";

						str+="<div class='coursecontainer' style='position:relative;width:"+Math.round(coursewidth*zoomfact)+"px;height:"+Math.round(zoomfact*periodheight*4)+"px;'>"
						// Height is 400 ... 100 per study period ... minus Program Name and Year ...
						var periods=program.year[j];
						// We start with period 4,5 then we do period 1,2
						for(var k=0;k<4;k++){
								var period=0;
								if(k==0) period=periods["4"];
								if(k==1) period=periods["5"];
								if(k==2) period=periods["1"];							
								if(k==3) period=periods["2"];
								
								// If period exists
								if(typeof period!="undefined"){
										// 15HP is one period at 100% speed e.g. hp/15/speed 
										var coursepos=0;
										for(l=0;l<period.length;l++){
												var course=period[l];
												var coursew=(course.spd*coursewidth);
												var courseh=(course.hp/15/course.spd);
												str+="<div id="+course.code+" onclick='logReq(this,"+JSON.stringify(course.req)+");'	class='course' style='";
												str+="left:"+Math.round((coursepos*coursewidth*zoomfact)+(zoomfact*4))+"px;";
												str+="top:"+Math.round((periodheight*k*zoomfact)+(zoomfact*4))+"px;";
												str+="width:"+Math.round((coursew*zoomfact)-(zoomfact*10))+"px;";
												str+="height:"+Math.round((courseh*periodheight*zoomfact)-(zoomfact*8))+"px;";
												str+="'>";
												str+=course.name;
												str+="<br>";
												str+=course.hp+"HP";
												str+="</div>";
												coursepos+=course.spd;
										}
								}
						}
					
						str+="</div>"
					
						str+="</div>";
				}
				str+="</div>";
			
				str+="</div>"
		}
	
		container.innerHTML=str;
		updatepos();
	
}

var zoomfact=1.0;
var scrollx=100;
var scrolly=100;
var courseheight=440;
var textheight=16;
var coursewidth=200;
var periodheight=100;

// Update positions of all elements based on the zoom level and view space coordinate
function updatepos()
{
		for(var i=0;i<data.length;i++){
				var course=data[i];
				
				var coursebox=document.getElementById(course.prognamn);
				coursebox.style.left=Math.round((course.x*zoomfact)+(scrollx*(1.0/zoomfact)))+"px";
				coursebox.style.top=Math.round((course.y*zoomfact)+(scrolly*(1.0/zoomfact)))+"px";
		}
}

function logReq(selected_el,req){
    //console.log(req);    
    let elements = Array.from(document.getElementsByClassName("selected-course"));
    for(let i=0;i<elements.length;i++){
        let el=elements[i];
        el.classList.remove("selected-course");
        el.style.backgroundColor=colors[0]; 
    }

    selected_el.classList.add("selected-course");
    let str = "Requires: ";    
    str += logReqRow(req);
    console.log(str);
}

function logReqRow(row, color_idx=1){
    let str = "";
    for(let i=0;i<row.length;i++){
        let r = row[i];
        if(Array.isArray(r)){
            if(i>0){
                str += " AND ";
            }
            str += " ( " + logReqRow(r,color_idx++) + " ) ";
        }else{      
            if(document.getElementById(r.code)){
                document.getElementById(r.code).classList.add("selected-course");                 
                document.getElementById(r.code).style.backgroundColor=colors[color_idx];                 
            }
            
            if (i>0){
                str += " OR ";
            } 
            str += r.credits + " " + r.code;
        }
    }
    return str; 
}

function getData() {
		showdata();
/*
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
*/
}

function data_returned(ret) {
    if (typeof ret.data !== "undefined") {
        service=ret;
        showdata();			
		} else {
        alert("Error receiveing data!");
    }
}
