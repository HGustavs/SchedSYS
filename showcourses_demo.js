var service =[];
var auto_update=null;
var uidArr=[];

//------------------------------------=======############==========----------------------------------------
//                           Defaults, mouse variables and zoom variables
//------------------------------------=======############==========----------------------------------------

var mb,startX,startY;
var startTop,startLeft;
var sscrollx,sscrolly;
var cwidth,cheight;
var colors = ["white","Gold","pink","yellow","CornflowerBlue"];

// Zoom variables
var zoomfact=1.0;
var scrollx=100;
var scrolly=100;

// Course constants
var courseheight=440;
var textheight=16;
var coursewidth=200;
var periodheight=100;

// Arrow drawing stuff
var arrows=[];
var courses=[];

//------------------------------------=======############==========----------------------------------------
//                                           Mouse events
//------------------------------------=======############==========----------------------------------------

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

//------------------------------------=======############==========----------------------------------------
//                                           Zoom handling
//------------------------------------=======############==========----------------------------------------

//-------------------------------------------------------------------------------------------------
// zoomin/out - functions for updating the zoom factor and scroll positions
//-------------------------------------------------------------------------------------------------

function zoomin()
{
		scrollx=scrollx/zoomfact;
		scrolly=scrolly/zoomfact;
	
		if(zoomfact==0.125) zoomfact=0.25
		else if(zoomfact==0.25) zoomfact=0.5
		else if(zoomfact==0.5) zoomfact=0.75
		else if(zoomfact==0.75) zoomfact=1.0
		else if(zoomfact==1.0) zoomfact=1.25
		else if(zoomfact==1.25) zoomfact=1.5
		else if(zoomfact==1.5) zoomfact=2.0
		else if(zoomfact==2.0) zoomfact=4.0;

		scrollx=scrollx*zoomfact;
		scrolly=scrolly*zoomfact;
	
		// Update scroll position - missing code for determining that center of screen should remain at nevw zoom factor
		showdata();
}

function zoomout()
{
		scrollx=scrollx/zoomfact;
		scrolly=scrolly/zoomfact;
	
		if(zoomfact==0.25) zoomfact=0.125
		else if(zoomfact==0.5) zoomfact=0.25
		else if(zoomfact==0.75) zoomfact=0.5
		else if(zoomfact==1.0) zoomfact=0.75
		else if(zoomfact==1.25) zoomfact=1.0
		else if(zoomfact==1.5) zoomfact=1.25
		else if(zoomfact==2.0) zoomfact=1.5
		else if(zoomfact==4.0) zoomfact=2.0;

		scrollx=scrollx*zoomfact;
		scrolly=scrolly*zoomfact;

		// Update scroll position - missing code for determining that center of screen should remain at new zoom factor
		showdata();
}

var ctx;

//-------------------------------------------------------------------------------------------------
// Showdata iterates over all programs/years/periods/courses
//-------------------------------------------------------------------------------------------------

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
		var courses=[];
		
		// Iterate over programs
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
												courses[program.prognamn+course.code]=course;
												var coursew=(course.spd*coursewidth);
												var courseh=(course.hp/15/course.spd);
												str+="<div id="+program.prognamn+course.code+" onclick='logReqe(event);'	class='course' style='";
												str+="left:"+Math.round((coursepos*coursewidth*zoomfact)+(zoomfact*4))+"px;";
												str+="top:"+Math.round((periodheight*k*zoomfact)+(zoomfact*4))+"px;";
												str+="width:"+Math.round((coursew*zoomfact)-(zoomfact*10))+"px;";
												str+="height:"+Math.round((courseh*periodheight*zoomfact)-(zoomfact*8))+"px;";
												str+="font-size:"+Math.round(zoomfact*textheight)+"px;"; 
											
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

//-------------------------------------------------------------------------------------------------
// zoomin/out - Update positions of all elements based on the zoom level and view space coordinate
//-------------------------------------------------------------------------------------------------

function updatepos()
{
		for(var i=0;i<data.length;i++){
				var course=data[i];
				
				var coursebox=document.getElementById(course.prognamn);
				coursebox.style.left=Math.round((course.x*zoomfact)+(scrollx*(1.0/zoomfact)))+"px";
				coursebox.style.top=Math.round((course.y*zoomfact)+(scrolly*(1.0/zoomfact)))+"px";
		}
}

//-------------------------------------------------------------------------------------------------
// logReq - Click event for course, find course parameters from element id, and recurse into requirements 
//-------------------------------------------------------------------------------------------------

function logReqe(event){
		var rprogram=event.target.id.substr(0,5);
		var rcourse=event.target.id.substr(5);
		var courseforrk=forrk[rcourse];

		// Clear all top/left/bottom/right arrays for all courses in affected program and add to courses array
		for(var i=0;i<data.length;i++){
				var program=data[i];
				for(var j=0;j<program.years;j++){
					var periods=program.year[j];
						for(var k=0;k<4;k++){
								var period=0;
								if(k==0) period=periods["4"];
								if(k==1) period=periods["5"];
								if(k==2) period=periods["1"];							
								if(k==3) period=periods["2"];
								if(typeof period!="undefined"){
										for(var l=0;l<period.length;l++){
												var course=period[l];
												course.left=[];
												course.right=[];
												course.top=[];
												course.bottom=[];
												// Assign to courses array
												courses[rprogram+course.code]=course;
										}
								}
						}
				}
		}
	
		// Clear all arrows
		arrows=[];
		
    str = logReqRow(courseforrk,rprogram,rcourse,"and");	
	
		for(var i=0;i<arrows.length;i++){
				var arrow=arrows[i];
				if(arrow.from.side=="top"){
						var x1=arrow.from.box.cx;
						var y1=arrow.from.box.top;
				}
				if(arrow.from.side=="bottom"){
						var x1=arrow.from.box.cx;
						var y1=arrow.from.box.bottom;
				}
				if(arrow.from.side=="left"){
						var x1=arrow.from.box.left;
						var y1=arrow.from.box.cy;
				}
				if(arrow.from.side=="right"){
						var x1=arrow.from.box.right;
						var y1=arrow.from.box.cy;
				}			
				if(arrow.to.side=="top"){
						var x2=arrow.to.box.cx;
						var y2=arrow.to.box.top;
				}

				if(arrow.to.side=="bottom"){
						var x2=arrow.to.box.cx;
						var y2=arrow.to.box.bottom;
				}
				if(arrow.to.side=="left"){
						var x2=arrow.to.box.left;
						var y2=arrow.to.box.cy;
				}

				if(arrow.to.side=="right"){
						var x2=arrow.to.box.right;
						var y2=arrow.to.box.cy;
				}			
				drawArrow(x1,y1,x2,y2);
				console.log(i,arrow);
		}
	
		console.log(str+" "+rcourse);
}

//-------------------------------------------------------------------------------------------------
// logReqRow - Recursive function for course requirements 
//-------------------------------------------------------------------------------------------------

function logReqRow(row,program,course, mode, color_idx=1){
    let str = "";
    for(let i=0;i<row.length;i++){
        let r = row[i];
				if(i>0){
						str+=" "+mode+" ";
				}
        if(Array.isArray(r)){
						// For now we assume all second level arrays are "or" - this may need to be revised to support more "exotic" configs
						str +=" ( "+logReqRow(r,program,course,"or",color_idx++)+" ) ";
        }else{
						toreq=document.getElementById(program+course);
						fromreq=startpoint=document.getElementById(program+r.code);
						// Highlight requirement course
            if(fromreq!=null&&toreq!=null){
								frbox=fromreq.getBoundingClientRect();
								tobox=toreq.getBoundingClientRect();
							
								// Compute bounding box parameters
								frbox.w=(frbox.right-frbox.left);
								frbox.h=(frbox.bottom-frbox.top);
								frbox.cx=frbox.left+(frbox.w/2);
								frbox.cy=frbox.top+(frbox.h/2);
								tobox.w=(tobox.right-tobox.left);
								tobox.h=(tobox.bottom-tobox.top);
								tobox.cx=tobox.left+(tobox.w/2);
								tobox.cy=tobox.top+(tobox.h/2);
							
								dx=frbox.cx-tobox.cx;
								dy=frbox.cy-tobox.cy;
							
								// If no overlap in X / Y
								if((frbox.left>tobox.right)||(frbox.right<tobox.left)){
										if(frbox.left>tobox.right){
												dx=tobox.right-frbox.left;
										}else{
												dx=tobox.left-frbox.right;
										}
								}else{
										dx=0;		
								}
								if((frbox.top>tobox.bottom)||(frbox.bottom<tobox.top)){
										if(frbox.top>tobox.bottom){
												dy=tobox.bottom-frbox.top;
										}else{
												dy=tobox.top-frbox.bottom;
										}
								}else{
										dy=0;		
								}							
								// Kan man  få dx etc i riktiga koordinater i stället? mer lämpligt då vi får mellanrummet
								// if(a.left > b.left) dx=a.left-b.roght;
								// if(a.left < b.left) dx=b.left-a.right;
							  // else dx=0;
							
								var currid=makeRandomID();
							
								fromobj={id:currid,dir:"from",dx:dx,dy:dy,box:frbox};
								toobj={id:currid,dir:"to",dx:dx,dy:dy,box:tobox};

								console.log(dx,dy);
							
								// Detect interconnection variant - 4 cases, overlap x, overlap y, closex/closey, any other variation
								if(dx==0){
										if(dy<0){
												fromobj.side="top";
												toobj.side="bottom";
										}else{
												fromobj.side="bottom";
												toobj.side="top";
										}
										console.log("overlap X",dx,dy);
								}else if(dy==0){
										console.log("overlap Y",dx,dy);
										if(dx<0){
												fromobj.side="left";
												toobj.side="right";											
										}else{
												fromobj.side="right";
												toobj.side="left";												
										}
								}else if(Math.abs(dx<15)||Math.abs(dy<15)){
										console.log("Close X / Close Y",dx,dy);
										if(dx<0){
												fromobj.side="left";
										}else{
												fromobj.side="right";										
										}
										if(dy<0){
												toobj.side="bottom";												
										}else{
												toobj.side="top";												
										}
								}else{
										console.log("Neither close nor overlap",dx,dy);
										if(dx<0){
												fromobj.side="left";
												toobj.side="right";											
										}else{
												fromobj.side="right";	
												toobj.side="left";
										}
							
								}
							
								// Add to objects!
								if(fromobj.side=="right")  courses[program+r.code].right.push(fromobj);
								if(fromobj.side=="left")   courses[program+r.code].left.push(fromobj);
								if(fromobj.side=="top")    courses[program+r.code].top.push(fromobj);
								if(fromobj.side=="bottom") courses[program+r.code].bottom.push(fromobj);
								if(toobj.side=="right")    courses[program+course].right.push(toobj);
								if(toobj.side=="left")     courses[program+course].left.push(toobj);
								if(toobj.side=="top")      courses[program+course].top.push(toobj);
								if(toobj.side=="bottom")   courses[program+course].bottom.push(toobj);								
							

							
								arrows.push({id:currid,from:fromobj,to:toobj});
							
                fromreq.classList.add("selected-course");                 
                fromreq.style.backgroundColor=colors[color_idx];
							
								// drawArrow(fromreqbox.cx,fromreqbox.cy,toreqbox.cx,toreqbox.cy);
													 
								// If this course was found we recurse further
								logReqRow(program,course,courses);
            }
            str += r.credits + " " + r.code;
        }
    }
    return str; 
}

//-------------------------------------------------------------------------------------------------
// drawArrow - Canvas code for drawing a filled arrow
//-------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------
// makeRandomID - Random hex number
//-------------------------------------------------------------------------------------------------

function makeRandomID()
{
		var str="";
		var characters       = 'ABCDEF0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < 16; i++ ) {
				str += characters.charAt(Math.floor(Math.random() * charactersLength));
		}	
		return str;
}

//------------------------------------=======############==========----------------------------------------
//                                    Default data display stuff
//------------------------------------=======############==========----------------------------------------

function getData() {
		showdata();
}

function data_returned(ret) {
    if (typeof ret.data !== "undefined") {
        service=ret;
        showdata();			
		} else {
        alert("Error receiveing data!");
    }
}
