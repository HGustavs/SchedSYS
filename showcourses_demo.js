var service =[];
var auto_update=null;
var uidArr=[];

var mb,startX,startY;
var startTop,startLeft;
var sscrollx,sscrolly;
var cwidth,cheight;

// For each study program, and in each program we list course instances by study period
var data=[
	{prognamn:"WEBUG",x:0,y:0,years:3,year:[
			{			// Year 1
						"4":[{"name":"Datorgrafik","hp":"7.5","spd":0.5},{"name":"Webbplatsdesign",hp:"7.5","spd":0.5}],
						"5":[{"name":"Grundläggande programmering med C++","hp":"7.5","spd":0.5},{"name":"User Experience Design",hp:"7.5","spd":0.5}],
						"1":[],
						"2":[]		
			},
			{			// Year 2
						"4":[],
						"5":[],
						"1":[],
						"2":[{"name":"Projekt",hp:"15",spd:1.0}]		
			},
			{			// Year 3
						"4":[],
						"5":[],
						"1":[{"name":"Examensarbete",hp:"30",spd:1.0}],
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
												str+="<div	class='course' style='";
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
