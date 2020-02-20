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
						"4":[{"name":"Datorgrafik","hp":"7.5","spd":0.5,"code":"IT118G"},{"name":"Webbplatsdesign",hp:"7.5","spd":0.5,"code":"IT108G"}],
						"5":[{"name":"Grundläggande programmering med C++","hp":"7.5","spd":0.5,"code":"IT120G"},{"name":"User Experience Design",hp:"7.5","spd":0.5, "code":"IT111G"}],
						"1":[{"name":"Databassystem","hp":"7.5","spd":0.5, "code":"IT121G"},{"name":"Webbutveckling - mobilapplikationsdesign",hp:"7.5","spd":0.5,"code":"IT331G"}],
						"2":[{"name":"Webbutveckling - Programmering av mobila applikationer","hp":"7.5","spd":0.5,"code":"IT351G"},{"name":"Webbutveckling - XML API",hp:"7.5","spd":0.5,"code":"IT385G"}]		
			},
			{			// Year 2
						"4":[{"name":"IT i organisationer - introduktion","hp":"7.5","spd":0.5,"code":"IT110G"},{"name":"Databaskonstruktion",hp:"7.5","spd":0.5, "code":"IT315G"}],
						"5":[{"name":"Datakommunikation - Introduktion","hp":"7.5","spd":0.5,"code":"IT119G"},{"name":"Webbprogrammering",hp:"7.5","spd":0.5, "code":"IT311G"}],
						"1":[{"name":"Objektorienterad programmering","hp":"7.5","spd":0.5,"code":"IT366G"},{"name":"Software Engineering",hp:"7.5","spd":0.5,"code":"IT386G"}],
						"2":[{"name":"Projekt i software engineering","hp":"15.0","spd":1, "code":"IT350G"}]		
			},
			{			// Year 3
						"4":[{"name":"Operativsystem","hp":"7.5","spd":0.5, "code":"IT391G"},{"name":"Webbutveckling - content management och drift",hp:"7.5","spd":0.5,"code":"IT509G"}],
						"5":[{"name":"Webbteknologi - forskning och utveckling","hp":"7.5","spd":0.5,"code":"IT515G"},{"name":"Informationssäkerhet - Introduktion",hp:"7.5","spd":0.5,"code":"IT139G"}],
						"1":[{"name":"Examensarbete i informationsteknologi med inriktning mot webbprogrammering",hp:"30",spd:1.0,"code":"IT391G"}],
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

var forrk={
	"IT118G":[],
	"IT108G":[],
	"IT120G":[],
	"IT111G":[],
    "IT121G":[],
	"IT331G":[[{"type":"course","code":"IT108G","credits":7.5}]],
	"IT351G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT385G":[[{"type":"course","code":"IT120G","credits":7.5}],[{"type":"course","code":"IT121G","credits":7.5}]],
	"IT110G":[],
	"IT315G":[[{"type":"course","code":"IT121G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT119G":[],
	"IT311G":[[{"type":"course","code":"IT331G","credits":7.5}],[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT108G","credits":7.5}]],
	"IT366G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT386G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT350G":[[{"type":"course","code":"IT386G","credits":7.5}],[{"type":"course","code":"IT311G","credits":7.5},{"type":"course","code":"IT366G","credits":7.5}]],
	"IT391G":[[{"type":"course","code":"IT120G","credits":7.5},{"type":"course","code":"IT141G","credits":7.5}]],
	"IT509G":[[{"type":"course","code":"IT350G","credits":15}]],
	"IT515G":[[{"type":"course","code":"IT350G","credits":15}],[{"type":"course","code":"IT315G","credits":7.5}]],	
	"IT139G":[],
	"IT391G":[[{"type":"course","code":"IT515G","credits":7.5}],[{"type":"course","code":"IT509G","credits":7.5}]],
};

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

		// Update scroll position - missing code for determining that center of screen should remain at nevw zoom factor
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

var ctx;

// Generate all courses at appropriate zoom level
function showdata() {
		var container=document.getElementById("container");
		var containerbox=container.getBoundingClientRect();	
	
		// Compute bounds of 
		cwidth=containerbox.width;
		cheight=containerbox.height;
	
		canvas=document.getElementById('canvasOverlay');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;	
		ctx = canvas.getContext('2d');	
			
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
												str+="<div id="+program.prognamn+course.code+" onclick='logReqe(event);'	class='course' style='";
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

// Can now be made recursive ... id must contain both id of program and course since same course may appear in more than one program

function logReq(program,course)
{
		var courseforrk=forrk[course];
	
		let str = "Requires: ";    
    str += logReqRow(courseforrk,program,course);
    console.log(str);
	
/*	
    //console.log(req);    
    let elements = Array.from(document.getElementsByClassName("selected-course"));
    for(let i=0;i<elements.length;i++){
        let el=elements[i];
        el.classList.remove("selected-course");
        el.style.backgroundColor=colors[0]; 
    }

    selected_el.classList.add("selected-course");
    
*/	
}

function logReqe(event){
	
		var program=event.target.id.substr(0,5);
		var course=event.target.id.substr(5);
	
		logReq(program,course);
}

// Arrow drawing
function drawArrow(x1,y1,x2,y2)
{
		// Reflect vector and make unit length * 3
		dx=-(y2-y1);
		dy=x2-x1;
		len=Math.sqrt((dx*dx)+(dy*dy));
		adx=(dx/len)*3;
		ady=(dy/len)*3;
	
		// Shorten vector to unit length * 8
		dx=x2-x1;
		dy=y2-y1;
		len=Math.sqrt((dx*dx)+(dy*dy));
		pdx=(dx/len)*8;
		pdy=(dy/len)*8;
	
		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.stroke();	

		ctx.beginPath();
		ctx.moveTo(x2,y2);
		ctx.lineTo(x2-pdx-adx,y2-pdy-ady);
		ctx.lineTo(x2-pdx+adx,y2-pdy+ady);
		ctx.lineTo(x2,y2);	
		ctx.fill();	
	
}

function logReqRow(row,program,course, color_idx=1){
    let str = "";
    for(let i=0;i<row.length;i++){
        let r = row[i];
        if(Array.isArray(r)){
            if(i>0){
                str += " AND ";
            }
            str += " ( " + logReqRow(r,program,course,color_idx++) + " ) ";
        }else{
						toreq=document.getElementById(program+course);
						fromreq=startpoint=document.getElementById(program+r.code);
						// Highlight requirement course
            if(fromreq!=null&&toreq!=null){
								fromreqbox=fromreq.getBoundingClientRect();
								toreqbox=toreq.getBoundingClientRect();					
							
                fromreq.classList.add("selected-course");                 
                fromreq.style.backgroundColor=colors[color_idx];
							
								drawArrow(fromreqbox.left+((fromreqbox.right-fromreqbox.left)/2),fromreqbox.top+((fromreqbox.bottom-fromreqbox.top)/2),toreqbox.left+((toreqbox.right-toreqbox.left)/2),toreqbox.top+((toreqbox.bottom-toreqbox.top)/2));
													 
								// If this course was found we recurse further
								logReq(program,r.code);
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
