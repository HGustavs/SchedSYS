var ctx;
var img;

var xa=1;
var xk=100;
var yk=100;
var bounce=0;

// Array to hold snowflakes
var snowflakes = new Array(); 

// Number of flakes
var numflakes=400;

// Constructor for snowflakes
function Snowflake(xk, yk, spd, siz) {
	this.xk = xk;
	this.yk = yk;
	this.spd = spd;
	this.siz = siz;
}										

function lightColor(col)
{
		col=Math.round(col)%4;
		if(col==0) return "#957080";
		else if(col==1) return "#E6B08E";
		else if(col==2) return "#F8E7C7";
		else if(col==3) return "#BD9CA3";
		else return "#5f4"; 
}

function drawWreath(lights)
{
		//---------===### g: Kransen ###===---------
		//-------------------------------
		// Group: Kransen
		//-------------------------------
		ctx.fillStyle = "#230509";
		ctx.beginPath();
		ctx.moveTo(63,90);
		ctx.bezierCurveTo(65,90,67,90,70,90);
		ctx.bezierCurveTo(70,88,64,85,62,85);
		ctx.bezierCurveTo(61,87,59,90,63,90);
		ctx.bezierCurveTo(64,90,61,90,63,90);
		ctx.lineTo(63,90);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#230509";
		ctx.beginPath();
		ctx.moveTo(73,89);
		ctx.bezierCurveTo(74,89,76,89,76,89);
		ctx.bezierCurveTo(80,90,77,88,78,87);
		ctx.bezierCurveTo(79,87,79,85,77,85);
		ctx.bezierCurveTo(77,86,70,90,73,89);
		ctx.bezierCurveTo(74,89,72,89,73,89);
		ctx.lineTo(73,89);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#70070A";
		ctx.beginPath();
		ctx.moveTo(65,89);
		ctx.bezierCurveTo(64,89,63,89,62,89);
		ctx.bezierCurveTo(59,89,59,89,60,87);
		ctx.bezierCurveTo(60,86,60,86,60,85);
		ctx.bezierCurveTo(61,85,61,85,61,84);
		ctx.bezierCurveTo(62,84,63,85,64,86);
		ctx.bezierCurveTo(65,86,66,87,68,87);
		ctx.bezierCurveTo(68,87,68,88,68,88);
		ctx.bezierCurveTo(67,88,66,89,65,89);
		ctx.lineTo(65,89);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#70070A";
		ctx.beginPath();
		ctx.moveTo(76,84);
		ctx.bezierCurveTo(76,84,76,84,77,84);
		ctx.bezierCurveTo(78,84,78,85,78,86);
		ctx.bezierCurveTo(78,86,78,86,78,86);
		ctx.bezierCurveTo(77,86,77,86,77,87);
		ctx.bezierCurveTo(78,88,77,88,76,88);
		ctx.bezierCurveTo(75,88,74,88,74,89);
		ctx.bezierCurveTo(73,89,73,89,73,89);
		ctx.bezierCurveTo(73,88,72,88,72,88);
		ctx.bezierCurveTo(71,88,71,88,71,87);
		ctx.bezierCurveTo(71,87,72,87,72,87);
		ctx.bezierCurveTo(73,86,73,86,74,85);
		ctx.bezierCurveTo(74,85,75,85,76,84);
		ctx.lineTo(76,84);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#230509";
		ctx.beginPath();
		ctx.moveTo(83,99);
		ctx.bezierCurveTo(83,99,83,98,83,98);
		ctx.bezierCurveTo(82,98,80,94,81,94);
		ctx.bezierCurveTo(81,93,80,93,80,93);
		ctx.bezierCurveTo(79,93,76,90,75,90);
		ctx.bezierCurveTo(74,90,73,90,72,90);
		ctx.lineTo(72,90);
		ctx.bezierCurveTo(71,90,70,90,69,90);
		ctx.bezierCurveTo(67,92,65,93,64,91);
		ctx.bezierCurveTo(63,93,64,94,62,95);
		ctx.bezierCurveTo(63,96,63,100,61,101);
		ctx.bezierCurveTo(60,102,62,103,63,105);
		ctx.bezierCurveTo(63,105,62,107,62,108);
		ctx.bezierCurveTo(62,108,62,108,62,108);
		ctx.bezierCurveTo(62,108,62,108,62,108);
		ctx.bezierCurveTo(62,108,62,108,62,108);
		ctx.bezierCurveTo(63,109,65,109,64,110);
		ctx.bezierCurveTo(64,110,64,110,65,110);
		ctx.bezierCurveTo(65,110,66,110,66,111);
		ctx.bezierCurveTo(66,111,66,111,66,111);
		ctx.bezierCurveTo(66,111,66,111,67,111);
		ctx.bezierCurveTo(67,111,67,111,67,111);
		ctx.bezierCurveTo(70,112,66,113,68,114);
		ctx.bezierCurveTo(69,113,78,110,79,111);
		ctx.bezierCurveTo(79,111,79,111,79,111);
		ctx.bezierCurveTo(79,111,78,110,79,110);
		ctx.bezierCurveTo(79,109,82,104,83,105);
		ctx.bezierCurveTo(83,105,83,99,83,99);
		ctx.bezierCurveTo(83,99,83,101,83,99);
		ctx.lineTo(83,99);
		ctx.moveTo(71,106);
		ctx.bezierCurveTo(69,105,67,103,68,101);
		ctx.bezierCurveTo(67,101,68,97,69,97);
		ctx.bezierCurveTo(70,97,70,97,71,97);
		ctx.bezierCurveTo(71,97,72,97,72,96);
		ctx.bezierCurveTo(71,96,71,96,70,96);
		ctx.bezierCurveTo(70,96,71,96,71,95);
		ctx.bezierCurveTo(71,94,71,94,72,95);
		ctx.bezierCurveTo(74,96,74,97,74,99);
		ctx.bezierCurveTo(74,99,74,99,74,99);
		ctx.bezierCurveTo(75,99,75,97,75,97);
		ctx.bezierCurveTo(76,97,78,102,77,102);
		ctx.bezierCurveTo(77,102,77,102,77,103);
		ctx.bezierCurveTo(77,103,76,103,76,104);
		ctx.bezierCurveTo(76,104,76,104,76,104);
		ctx.bezierCurveTo(75,104,73,104,73,105);
		ctx.bezierCurveTo(74,105,74,105,75,106);
		ctx.bezierCurveTo(75,106,71,107,71,106);
		ctx.bezierCurveTo(70,106,71,106,71,106);
		ctx.lineTo(71,106);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#2F3E1B";
		ctx.beginPath();
		ctx.moveTo(81,98);
		ctx.bezierCurveTo(81,97,81,97,81,97);
		ctx.bezierCurveTo(81,97,78,93,79,93);
		ctx.bezierCurveTo(79,92,79,92,78,92);
		ctx.bezierCurveTo(77,92,74,89,73,89);
		ctx.bezierCurveTo(72,89,71,89,70,88);
		ctx.lineTo(70,88);
		ctx.bezierCurveTo(69,89,68,89,67,89);
		ctx.bezierCurveTo(66,91,63,92,62,90);
		ctx.bezierCurveTo(61,91,62,93,61,94);
		ctx.bezierCurveTo(61,95,61,99,60,99);
		ctx.bezierCurveTo(58,101,61,102,61,104);
		ctx.bezierCurveTo(61,104,60,106,60,106);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(61,107,63,108,62,109);
		ctx.bezierCurveTo(62,109,63,109,63,109);
		ctx.bezierCurveTo(63,109,64,109,64,110);
		ctx.bezierCurveTo(64,110,64,110,64,110);
		ctx.bezierCurveTo(64,110,65,110,65,110);
		ctx.bezierCurveTo(65,110,65,110,65,110);
		ctx.bezierCurveTo(68,111,65,111,66,113);
		ctx.bezierCurveTo(68,111,76,109,77,110);
		ctx.bezierCurveTo(77,110,77,110,78,110);
		ctx.bezierCurveTo(78,110,77,109,78,108);
		ctx.bezierCurveTo(78,108,80,102,81,104);
		ctx.bezierCurveTo(81,104,81,98,81,98);
		ctx.bezierCurveTo(81,97,81,100,81,98);
		ctx.lineTo(81,98);
		ctx.moveTo(69,105);
		ctx.bezierCurveTo(68,104,66,102,66,100);
		ctx.bezierCurveTo(65,100,67,96,68,96);
		ctx.bezierCurveTo(68,96,69,96,69,96);
		ctx.bezierCurveTo(70,96,70,96,70,95);
		ctx.bezierCurveTo(70,95,69,95,69,95);
		ctx.bezierCurveTo(68,94,69,95,69,94);
		ctx.bezierCurveTo(69,93,70,93,70,94);
		ctx.bezierCurveTo(72,95,72,96,73,97);
		ctx.bezierCurveTo(73,97,73,97,73,97);
		ctx.bezierCurveTo(73,98,73,96,74,96);
		ctx.bezierCurveTo(75,96,76,101,75,101);
		ctx.bezierCurveTo(75,101,75,101,75,101);
		ctx.bezierCurveTo(75,102,74,102,74,103);
		ctx.bezierCurveTo(74,103,74,103,74,103);
		ctx.bezierCurveTo(73,103,72,103,72,104);
		ctx.bezierCurveTo(72,104,72,104,73,105);
		ctx.bezierCurveTo(73,105,69,106,69,105);
		ctx.bezierCurveTo(68,104,69,105,69,105);
		ctx.lineTo(69,105);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#3F5C1B";
		ctx.beginPath();
		ctx.moveTo(78,103);
		ctx.bezierCurveTo(79,103,77,99,76,99);
		ctx.bezierCurveTo(76,99,76,101,75,100);
		ctx.bezierCurveTo(76,100,76,101,75,101);
		ctx.bezierCurveTo(75,101,75,101,75,102);
		ctx.bezierCurveTo(75,102,74,102,74,103);
		ctx.bezierCurveTo(74,103,74,103,74,103);
		ctx.bezierCurveTo(73,103,72,103,72,104);
		ctx.bezierCurveTo(72,104,72,104,73,105);
		ctx.bezierCurveTo(73,105,71,106,70,106);
		ctx.bezierCurveTo(70,106,71,107,72,107);
		ctx.bezierCurveTo(72,109,76,107,76,107);
		ctx.bezierCurveTo(75,107,75,106,74,106);
		ctx.bezierCurveTo(74,105,76,105,77,105);
		ctx.bezierCurveTo(77,105,77,105,77,105);
		ctx.bezierCurveTo(77,105,78,104,78,104);
		ctx.bezierCurveTo(78,104,78,104,78,103);
		ctx.lineTo(78,103);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#3F5C1B";
		ctx.beginPath();
		ctx.moveTo(62,109);
		ctx.bezierCurveTo(62,109,62,109,63,109);
		ctx.bezierCurveTo(63,109,63,109,63,109);
		ctx.bezierCurveTo(63,109,63,109,63,109);
		ctx.bezierCurveTo(63,108,64,106,63,106);
		ctx.bezierCurveTo(63,105,61,103,62,102);
		ctx.bezierCurveTo(64,102,63,97,63,96);
		ctx.bezierCurveTo(65,95,64,94,64,92);
		ctx.bezierCurveTo(65,94,68,93,69,91);
		ctx.bezierCurveTo(71,91,72,91,73,91);
		ctx.lineTo(73,91);
		ctx.bezierCurveTo(73,92,75,91,76,91);
		ctx.bezierCurveTo(76,91,78,92,79,93);
		ctx.bezierCurveTo(79,93,79,93,79,93);
		ctx.bezierCurveTo(79,92,78,92,78,92);
		ctx.bezierCurveTo(77,92,74,89,73,89);
		ctx.bezierCurveTo(72,89,71,89,70,89);
		ctx.lineTo(70,89);
		ctx.bezierCurveTo(69,89,68,89,67,89);
		ctx.bezierCurveTo(66,91,63,92,62,90);
		ctx.bezierCurveTo(61,92,62,93,60,94);
		ctx.bezierCurveTo(61,95,61,99,59,100);
		ctx.bezierCurveTo(58,101,60,102,61,104);
		ctx.bezierCurveTo(61,104,60,106,60,106);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(60,107,60,107,60,107);
		ctx.bezierCurveTo(61,108,63,108,62,109);
		ctx.lineTo(62,109);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		if(lights){

				//---------===### g: Kranslampor_1_ ###===---------
				//-------------------------------
				// Group: Kranslampor_1_
				//-------------------------------
				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(75,102);
				ctx.bezierCurveTo(75,102,76,102,76,103);
				ctx.bezierCurveTo(77,103,77,104,76,104);
				ctx.bezierCurveTo(76,104,75,104,75,104);
				ctx.bezierCurveTo(74,104,74,103,75,103);
				ctx.bezierCurveTo(75,103,75,103,75,102);
				ctx.bezierCurveTo(75,102,75,102,75,102);
				ctx.lineTo(75,102);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(73,90);
				ctx.bezierCurveTo(74,90,74,90,74,91);
				ctx.bezierCurveTo(74,91,74,92,73,92);
				ctx.bezierCurveTo(73,92,72,91,72,91);
				ctx.bezierCurveTo(72,90,73,90,73,90);
				ctx.lineTo(73,90);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(74,109);
				ctx.bezierCurveTo(74,109,73,109,73,110);
				ctx.bezierCurveTo(72,110,72,109,72,109);
				ctx.bezierCurveTo(72,108,72,108,73,108);
				ctx.bezierCurveTo(73,108,74,108,74,109);
				ctx.lineTo(74,109);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(66,103);
				ctx.bezierCurveTo(66,103,66,104,65,104);
				ctx.bezierCurveTo(65,104,65,103,65,103);
				ctx.bezierCurveTo(65,102,65,102,66,102);
				ctx.bezierCurveTo(66,102,66,102,66,103);
				ctx.lineTo(66,103);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#78593F";
				ctx.beginPath();
				ctx.moveTo(65,107);
				ctx.bezierCurveTo(65,107,65,107,65,107);
				ctx.bezierCurveTo(65,106,65,106,66,106);
				ctx.bezierCurveTo(66,106,66,106,66,107);
				ctx.bezierCurveTo(66,107,66,107,65,107);
				ctx.lineTo(65,107);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(64,96);
				ctx.bezierCurveTo(66,97,65,97,64,98);
				ctx.bezierCurveTo(64,98,64,98,64,97);
				ctx.bezierCurveTo(64,96,64,96,64,96);
				ctx.lineTo(64,96);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#473534";
				ctx.beginPath();
				ctx.moveTo(79,103);
				ctx.bezierCurveTo(79,104,79,104,79,104);
				ctx.bezierCurveTo(78,104,78,104,78,103);
				ctx.bezierCurveTo(78,103,78,102,79,102);
				ctx.bezierCurveTo(79,102,79,103,79,103);
				ctx.lineTo(79,103);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#EA7D56";
				ctx.beginPath();
				ctx.moveTo(80,98);
				ctx.bezierCurveTo(79,98,79,99,79,99);
				ctx.bezierCurveTo(78,99,78,98,78,98);
				ctx.bezierCurveTo(78,98,79,97,79,97);
				ctx.bezierCurveTo(79,98,79,98,80,98);
				ctx.lineTo(80,98);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#78593F";
				ctx.beginPath();
				ctx.moveTo(67,91);
				ctx.bezierCurveTo(67,91,67,92,67,92);
				ctx.bezierCurveTo(67,92,66,92,66,91);
				ctx.bezierCurveTo(66,91,67,90,67,90);
				ctx.bezierCurveTo(67,90,67,91,67,91);
				ctx.lineTo(67,91);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#78593F";
				ctx.beginPath();
				ctx.moveTo(62,99);
				ctx.bezierCurveTo(62,99,62,99,62,100);
				ctx.bezierCurveTo(62,100,62,100,62,100);
				ctx.bezierCurveTo(61,100,61,100,61,100);
				ctx.bezierCurveTo(61,99,61,99,62,99);
				ctx.lineTo(62,99);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				ctx.fillStyle = "#78593F";
				ctx.beginPath();
				ctx.moveTo(71,93);
				ctx.bezierCurveTo(71,94,70,94,70,94);
				ctx.bezierCurveTo(70,93,70,93,70,93);
				ctx.bezierCurveTo(71,93,71,93,71,93);
				ctx.lineTo(71,93);
				ctx.globalAlpha = 1.0;
				ctx.fill();

				//---------===### eg: Kranslampor_1_ ###===---------
				//-------------------------------
				// GroupEnd: Kranslampor_1_
				//-------------------------------

		}

		//---------===### eg: Kransen ###===---------
		//-------------------------------
		// GroupEnd: Kransen
		//-------------------------------




}

function drawHouse(lightframe)
{
		//---------===### g: Huset ###===---------
		//-------------------------------
		// Group: Huset
		//-------------------------------
		//---------===### g: HusVagg ###===---------
		//-------------------------------
		// Group: HusVagg
		//-------------------------------
		ctx.fillStyle = "#70070A";
		ctx.beginPath();
		ctx.moveTo(96,135);
		ctx.lineTo(11, 135);
		ctx.lineTo(9, 71);
		ctx.lineTo(51, 40);
		ctx.lineTo(62, 43);
		ctx.lineTo(99, 65);
		ctx.lineTo(96,135);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#370409";
		ctx.beginPath();
		ctx.moveTo(10,94);
		ctx.bezierCurveTo(10,94,9,84,9,79);
		ctx.bezierCurveTo(10,73,53,34,61,39);
		ctx.bezierCurveTo(69,44,99,75,99,75);
		ctx.bezierCurveTo(99,98,99,98,99,95);
		ctx.bezierCurveTo(98,92,80,66,71,58);
		ctx.bezierCurveTo(61,49,55,51,54,50);
		ctx.bezierCurveTo(53,49,20,88,14,89);
		ctx.lineTo(10,94);
		ctx.lineTo(10,94);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#370409";
		ctx.beginPath();
		ctx.moveTo(54,112);
		ctx.bezierCurveTo(40,107,24,87,11,92);
		ctx.lineTo(11,135);
		ctx.lineTo(96,135);
		ctx.lineTo(95,105);
		ctx.bezierCurveTo(82,128,61,114,54,112);
		ctx.lineTo(54,112);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: HusVagg ###===---------
		//-------------------------------
		// GroupEnd: HusVagg
		//-------------------------------



		//---------===### g: FonsterTopp ###===---------
		//-------------------------------
		// Group: FonsterTopp
		//-------------------------------
		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(50,80);
		ctx.bezierCurveTo(50,81,50,81,49,81);
		ctx.bezierCurveTo(47,81,44,81,41,81);
		ctx.bezierCurveTo(40,81,40,80,40,79);
		ctx.bezierCurveTo(40,79,40,78,40,77);
		ctx.bezierCurveTo(40,77,40,76,40,76);
		ctx.bezierCurveTo(37,76,34,76,31,76);
		ctx.bezierCurveTo(30,76,29,76,28,76);
		ctx.bezierCurveTo(28,76,28,77,28,77);
		ctx.bezierCurveTo(28,77,28,77,28,78);
		ctx.bezierCurveTo(28,78,28,78,29,79);
		ctx.bezierCurveTo(29,79,29,80,29,80);
		ctx.bezierCurveTo(29,80,29,81,28,81);
		ctx.bezierCurveTo(26,81,23,81,20,81);
		ctx.bezierCurveTo(20,81,19,80,19,81);
		ctx.bezierCurveTo(18,81,17,81,16,81);
		ctx.bezierCurveTo(16,81,16,81,16,80);
		ctx.bezierCurveTo(17,80,18,80,19,80);
		ctx.bezierCurveTo(19,80,19,80,19,79);
		ctx.bezierCurveTo(19,79,19,79,19,79);
		ctx.bezierCurveTo(20,79,21,79,21,79);
		ctx.bezierCurveTo(21,79,22,78,22,78);
		ctx.bezierCurveTo(24,78,25,77,26,75);
		ctx.bezierCurveTo(28,74,29,73,31,73);
		ctx.bezierCurveTo(33,73,34,73,35,73);
		ctx.bezierCurveTo(36,73,36,73,37,73);
		ctx.bezierCurveTo(37,73,38,74,38,74);
		ctx.bezierCurveTo(38,74,39,74,39,74);
		ctx.bezierCurveTo(39,74,39,74,39,74);
		ctx.bezierCurveTo(41,75,42,76,43,77);
		ctx.bezierCurveTo(43,78,43,78,44,78);
		ctx.bezierCurveTo(44,79,44,79,44,79);
		ctx.bezierCurveTo(45,79,45,79,45,79);
		ctx.bezierCurveTo(46,79,46,79,47,79);
		ctx.bezierCurveTo(47,79,47,79,47,79);
		ctx.bezierCurveTo(48,79,48,79,48,79);
		ctx.bezierCurveTo(49,80,50,80,50,80);
		ctx.lineTo(50,80);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BD9CA3";
		ctx.beginPath();
		ctx.moveTo(51,80);
		ctx.bezierCurveTo(51,80,50,80,50,80);
		ctx.bezierCurveTo(50,80,50,80,49,80);
		ctx.bezierCurveTo(46,80,44,80,41,80);
		ctx.bezierCurveTo(39,80,40,80,40,79);
		ctx.bezierCurveTo(40,78,40,78,40,77);
		ctx.bezierCurveTo(40,76,40,76,40,76);
		ctx.bezierCurveTo(38,76,36,76,34,76);
		ctx.bezierCurveTo(32,76,31,76,29,76);
		ctx.bezierCurveTo(28,76,28,76,28,77);
		ctx.bezierCurveTo(28,78,29,78,29,79);
		ctx.bezierCurveTo(29,80,29,80,28,80);
		ctx.bezierCurveTo(25,80,22,80,19,80);
		ctx.bezierCurveTo(19,80,18,80,18,80);
		ctx.bezierCurveTo(18,80,18,80,18,80);
		ctx.bezierCurveTo(17,80,17,81,17,82);
		ctx.bezierCurveTo(17,82,17,82,17,83);
		ctx.bezierCurveTo(17,83,17,83,17,83);
		ctx.bezierCurveTo(17,83,17,84,17,84);
		ctx.bezierCurveTo(18,84,18,85,18,85);
		ctx.bezierCurveTo(18,85,19,85,20,85);
		ctx.bezierCurveTo(22,85,24,84,27,85);
		ctx.lineTo(30,85);
		ctx.bezierCurveTo(30,85,30,85,30,85);
		ctx.bezierCurveTo(30,86,31,86,31,86);
		ctx.bezierCurveTo(32,86,33,86,34,86);
		ctx.bezierCurveTo(35,86,36,86,37,86);
		ctx.bezierCurveTo(38,86,38,86,38,85);
		ctx.bezierCurveTo(38,85,38,85,38,85);
		ctx.lineTo(42,85);
		ctx.lineTo(42,85);
		ctx.bezierCurveTo(44,84,47,85,49,85);
		ctx.bezierCurveTo(50,85,50,85,51,85);
		ctx.bezierCurveTo(51,85,51,84,51,84);
		ctx.bezierCurveTo(51,84,51,83,51,83);
		ctx.bezierCurveTo(51,83,51,83,52,83);
		ctx.bezierCurveTo(52,82,52,82,52,82);
		ctx.bezierCurveTo(52,81,51,80,51,80);
		ctx.lineTo(51,80);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(31,76);
		ctx.bezierCurveTo(30,76,30,76,29,76);
		ctx.bezierCurveTo(28,76,28,76,28,77);
		ctx.bezierCurveTo(29,78,29,78,29,79);
		ctx.bezierCurveTo(29,80,29,80,28,80);
		ctx.bezierCurveTo(29,81,30,83,30,85);
		ctx.lineTo(30,85);
		ctx.bezierCurveTo(30,85,30,85,30,85);
		ctx.bezierCurveTo(30,86,31,86,31,86);
		ctx.bezierCurveTo(32,86,32,86,33,86);
		ctx.lineTo(31,76);
		ctx.lineTo(31,76);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(18,86);
		ctx.bezierCurveTo(18,86,18,86,18,86);
		ctx.bezierCurveTo(18,86,18,86,18,86);
		ctx.bezierCurveTo(18,85,17,84,17,83);
		ctx.bezierCurveTo(17,83,17,82,17,81);
		ctx.bezierCurveTo(17,81,17,80,18,80);
		ctx.bezierCurveTo(18,80,18,81,18,80);
		ctx.bezierCurveTo(19,80,20,80,21,80);
		ctx.bezierCurveTo(21,81,22,81,22,81);
		ctx.bezierCurveTo(21,82,22,83,22,84);
		ctx.bezierCurveTo(21,84,20,84,19,84);
		ctx.bezierCurveTo(18,84,18,85,18,86);
		ctx.lineTo(18,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: FonsterTopp ###===---------
		//-------------------------------
		// GroupEnd: FonsterTopp
		//-------------------------------



		//---------===### g: Fonster ###===---------
		//-------------------------------
		// Group: Fonster
		//-------------------------------
		ctx.fillStyle = "#F8D07F";
		ctx.beginPath();
		ctx.moveTo(41,87);
		ctx.bezierCurveTo(41,87,41,86,41,86);
		ctx.lineTo(28,86);
		ctx.bezierCurveTo(28,86,28,87,28,88);
		ctx.bezierCurveTo(28,90,27,106,27,106);
		ctx.lineTo(41,106);
		ctx.lineTo(41,87);
		ctx.lineTo(41,87);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EA7D56";
		ctx.beginPath();
		ctx.moveTo(29,104);
		ctx.bezierCurveTo(29,103,29,99,27,98);
		ctx.bezierCurveTo(27,101,27,103,27,105);
		ctx.bezierCurveTo(29,105,30,105,29,104);
		ctx.lineTo(29,104);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EA7D56";
		ctx.beginPath();
		ctx.moveTo(41,102);
		ctx.bezierCurveTo(41,100,41,99,41,97);
		ctx.bezierCurveTo(40,97,40,101,39,102);
		ctx.bezierCurveTo(38,103,38,105,41,105);
		ctx.bezierCurveTo(41,105,41,102,41,102);
		ctx.bezierCurveTo(41,101,41,102,41,102);
		ctx.lineTo(41,102);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EA7D56";
		ctx.beginPath();
		ctx.moveTo(41,86);
		ctx.lineTo(36,86);
		ctx.bezierCurveTo(36,86,37,86,37,87);
		ctx.bezierCurveTo(37,88,39,87,39,88);
		ctx.bezierCurveTo(39,88,37,88,37,88);
		ctx.bezierCurveTo(37,89,39,89,39,89);
		ctx.bezierCurveTo(38,90,39,90,39,91);
		ctx.bezierCurveTo(39,92,40,93,41,94);
		ctx.bezierCurveTo(41,93,41,92,41,91);
		ctx.bezierCurveTo(41,90,41,87,41,86);
		ctx.lineTo(41,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EA7D56";
		ctx.beginPath();
		ctx.moveTo(33,86);
		ctx.lineTo(29,86);
		ctx.bezierCurveTo(28,86,28,87,28,88);
		ctx.bezierCurveTo(27,89,27,92,28,94);
		ctx.bezierCurveTo(29,94,30,90,30,90);
		ctx.bezierCurveTo(30,88,31,88,33,86);
		ctx.bezierCurveTo(32,86,32,86,33,86);
		ctx.lineTo(33,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(40,89);
		ctx.bezierCurveTo(39,89,37,89,36,89);
		ctx.bezierCurveTo(35,89,35,89,35,89);
		ctx.bezierCurveTo(35,89,35,86,35,85);
		ctx.lineTo(34,85);
		ctx.bezierCurveTo(34,86,34,89,34,89);
		ctx.bezierCurveTo(34,89,34,89,33,89);
		ctx.bezierCurveTo(32,89,28,89,28,89);
		ctx.lineTo(28,90);
		ctx.bezierCurveTo(28,90,32,90,33,90);
		ctx.bezierCurveTo(34,90,34,90,34,90);
		ctx.bezierCurveTo(34,91,34,93,34,94);
		ctx.bezierCurveTo(34,94,34,95,33,95);
		ctx.bezierCurveTo(32,95,28,94,28,95);
		ctx.lineTo(28,95);
		ctx.bezierCurveTo(28,95,32,95,33,95);
		ctx.bezierCurveTo(34,95,34,95,34,95);
		ctx.bezierCurveTo(34,96,34,96,34,97);
		ctx.bezierCurveTo(34,97,34,97,34,97);
		ctx.bezierCurveTo(34,98,34,99,34,99);
		ctx.bezierCurveTo(34,100,34,100,33,100);
		ctx.bezierCurveTo(32,100,28,100,28,100);
		ctx.lineTo(28,100);
		ctx.bezierCurveTo(28,100,33,100,33,100);
		ctx.bezierCurveTo(34,100,34,100,34,101);
		ctx.bezierCurveTo(34,102,34,103,34,105);
		ctx.lineTo(35,105);
		ctx.bezierCurveTo(35,103,35,102,35,101);
		ctx.bezierCurveTo(35,100,35,100,36,100);
		ctx.bezierCurveTo(37,100,38,100,40,100);
		ctx.bezierCurveTo(41,100,41,100,41,100);
		ctx.lineTo(41,100);
		ctx.bezierCurveTo(41,100,41,100,40,100);
		ctx.bezierCurveTo(40,100,39,100,39,100);
		ctx.bezierCurveTo(38,100,37,100,36,100);
		ctx.bezierCurveTo(35,100,35,100,35,99);
		ctx.bezierCurveTo(35,99,35,98,35,97);
		ctx.bezierCurveTo(35,97,35,97,35,97);
		ctx.bezierCurveTo(35,97,35,96,35,95);
		ctx.bezierCurveTo(35,95,35,95,36,95);
		ctx.bezierCurveTo(37,95,38,95,39,95);
		ctx.bezierCurveTo(40,95,41,95,41,95);
		ctx.lineTo(41,94);
		ctx.bezierCurveTo(41,94,40,94,39,94);
		ctx.bezierCurveTo(38,94,37,94,36,94);
		ctx.bezierCurveTo(35,94,35,94,35,94);
		ctx.bezierCurveTo(35,93,35,91,35,90);
		ctx.bezierCurveTo(35,90,35,90,36,90);
		ctx.bezierCurveTo(37,90,39,90,41,90);
		ctx.bezierCurveTo(41,90,41,90,41,90);
		ctx.lineTo(41,89);
		ctx.bezierCurveTo(41,89,41,89,40,89);
		ctx.lineTo(40,89);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(42,85);
		ctx.lineTo(42,85);
		ctx.bezierCurveTo(37,85,32,85,28,85);
		ctx.bezierCurveTo(28,85,28,85,28,85);
		ctx.lineTo(27,85);
		ctx.bezierCurveTo(27,85,27,85,27,85);
		ctx.bezierCurveTo(27,91,27,100,27,106);
		ctx.bezierCurveTo(28,106,28,106,28,105);
		ctx.lineTo(28,101);
		ctx.bezierCurveTo(28,101,28,100,28,100);
		ctx.bezierCurveTo(28,100,28,100,28,100);
		ctx.bezierCurveTo(28,97,28,95,28,93);
		ctx.bezierCurveTo(28,93,28,93,28,92);
		ctx.bezierCurveTo(28,92,28,92,28,92);
		ctx.bezierCurveTo(28,92,28,91,28,91);
		ctx.bezierCurveTo(28,90,28,90,28,89);
		ctx.bezierCurveTo(28,89,28,88,28,88);
		ctx.bezierCurveTo(28,88,28,87,28,86);
		ctx.lineTo(32,86);
		ctx.bezierCurveTo(32,86,32,86,32,86);
		ctx.bezierCurveTo(32,86,32,86,33,86);
		ctx.bezierCurveTo(35,86,37,85,39,85);
		ctx.bezierCurveTo(39,85,39,86,39,86);
		ctx.bezierCurveTo(39,86,40,86,40,86);
		ctx.bezierCurveTo(40,85,40,85,41,86);
		ctx.bezierCurveTo(41,86,41,86,41,86);
		ctx.bezierCurveTo(41,86,41,86,41,86);
		ctx.bezierCurveTo(41,86,41,86,41,86);
		ctx.bezierCurveTo(41,87,41,88,41,89);
		ctx.bezierCurveTo(41,89,41,89,41,89);
		ctx.bezierCurveTo(41,90,41,91,41,91);
		ctx.bezierCurveTo(41,92,41,92,41,92);
		ctx.bezierCurveTo(41,92,41,93,41,93);
		ctx.bezierCurveTo(41,93,41,93,41,93);
		ctx.bezierCurveTo(41,95,41,98,41,100);
		ctx.bezierCurveTo(41,100,41,100,41,100);
		ctx.bezierCurveTo(41,101,41,101,41,101);
		ctx.lineTo(41,106);
		ctx.bezierCurveTo(41,106,41,106,41,106);
		ctx.bezierCurveTo(42,100,42,92,42,86);
		ctx.bezierCurveTo(42,86,42,85,42,85);
		ctx.lineTo(42,85);
		ctx.lineTo(42,85);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Fonster ###===---------
		//-------------------------------
		// GroupEnd: Fonster
		//-------------------------------



		//---------===### g: Fonsterbrada ###===---------
		//-------------------------------
		// Group: Fonsterbrada
		//-------------------------------
		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(23,107);
		ctx.bezierCurveTo(23,107,23,107,23,107);
		ctx.bezierCurveTo(24,107,24,107,24,106);
		ctx.bezierCurveTo(25,106,25,106,25,106);
		ctx.bezierCurveTo(25,107,25,106,25,106);
		ctx.lineTo(25,106);
		ctx.bezierCurveTo(26,106,26,106,27,106);
		ctx.bezierCurveTo(27,106,27,106,27,106);
		ctx.bezierCurveTo(28,106,28,106,28,106);
		ctx.bezierCurveTo(29,106,29,106,29,106);
		ctx.bezierCurveTo(29,106,29,106,29,106);
		ctx.bezierCurveTo(30,106,30,106,30,106);
		ctx.bezierCurveTo(30,106,31,106,31,106);
		ctx.bezierCurveTo(31,106,30,106,30,107);
		ctx.bezierCurveTo(30,107,29,107,29,107);
		ctx.bezierCurveTo(29,107,30,107,30,107);
		ctx.bezierCurveTo(30,107,29,107,29,107);
		ctx.bezierCurveTo(27,107,26,107,24,107);
		ctx.bezierCurveTo(24,107,23,108,23,107);
		ctx.lineTo(23,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#719EC3";
		ctx.beginPath();
		ctx.moveTo(23,107);
		ctx.bezierCurveTo(23,108,24,107,24,107);
		ctx.bezierCurveTo(24,108,25,108,25,108);
		ctx.bezierCurveTo(24,109,24,109,25,109);
		ctx.bezierCurveTo(25,109,25,109,25,109);
		ctx.lineTo(25,109);
		ctx.bezierCurveTo(25,109,24,109,24,109);
		ctx.bezierCurveTo(23,109,22,109,22,109);
		ctx.bezierCurveTo(22,108,21,108,21,107);
		ctx.bezierCurveTo(21,107,22,107,22,107);
		ctx.bezierCurveTo(22,107,22,107,22,107);
		ctx.bezierCurveTo(22,107,22,107,23,107);
		ctx.lineTo(23,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BD9CA3";
		ctx.beginPath();
		ctx.moveTo(31,109);
		ctx.bezierCurveTo(30,109,29,109,28,109);
		ctx.bezierCurveTo(27,109,27,109,26,109);
		ctx.bezierCurveTo(26,109,26,109,25,109);
		ctx.bezierCurveTo(25,109,25,109,25,109);
		ctx.bezierCurveTo(24,109,24,109,25,108);
		ctx.bezierCurveTo(25,108,24,108,24,107);
		ctx.bezierCurveTo(26,107,27,107,29,107);
		ctx.bezierCurveTo(29,107,30,107,30,107);
		ctx.bezierCurveTo(33,107,35,107,38,107);
		ctx.bezierCurveTo(38,107,39,107,39,107);
		ctx.bezierCurveTo(39,107,40,107,41,107);
		ctx.bezierCurveTo(42,107,43,107,45,107);
		ctx.bezierCurveTo(45,107,45,107,45,107);
		ctx.bezierCurveTo(45,107,45,107,45,107);
		ctx.bezierCurveTo(46,107,46,107,47,107);
		ctx.bezierCurveTo(47,107,48,107,48,107);
		ctx.bezierCurveTo(48,108,48,108,48,108);
		ctx.bezierCurveTo(48,108,48,108,48,108);
		ctx.bezierCurveTo(48,108,48,109,48,109);
		ctx.bezierCurveTo(48,109,48,109,48,109);
		ctx.bezierCurveTo(42,109,37,109,31,109);
		ctx.bezierCurveTo(31,109,31,109,31,109);
		ctx.lineTo(31,109);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#F8E7C7";
		ctx.beginPath();
		ctx.moveTo(45,107);
		ctx.bezierCurveTo(43,107,42,107,41,107);
		ctx.bezierCurveTo(40,107,39,107,39,107);
		ctx.bezierCurveTo(39,107,38,107,38,107);
		ctx.bezierCurveTo(35,107,33,107,30,107);
		ctx.bezierCurveTo(30,107,29,107,29,107);
		ctx.bezierCurveTo(29,107,30,107,30,107);
		ctx.bezierCurveTo(30,106,31,106,31,106);
		ctx.bezierCurveTo(31,106,30,106,30,106);
		ctx.bezierCurveTo(30,106,30,106,29,106);
		ctx.bezierCurveTo(29,105,29,105,30,105);
		ctx.bezierCurveTo(31,105,32,105,33,105);
		ctx.bezierCurveTo(33,105,33,105,33,105);
		ctx.bezierCurveTo(35,105,36,105,37,105);
		ctx.bezierCurveTo(37,105,37,105,37,105);
		ctx.bezierCurveTo(37,105,37,105,38,105);
		ctx.bezierCurveTo(38,105,39,105,39,105);
		ctx.bezierCurveTo(39,105,39,105,39,105);
		ctx.lineTo(39,105);
		ctx.bezierCurveTo(39,106,40,105,40,105);
		ctx.bezierCurveTo(40,106,41,106,41,106);
		ctx.bezierCurveTo(41,106,41,106,41,106);
		ctx.bezierCurveTo(42,106,42,106,42,106);
		ctx.bezierCurveTo(42,106,42,106,43,106);
		ctx.bezierCurveTo(43,106,43,107,43,106);
		ctx.bezierCurveTo(43,106,44,107,44,107);
		ctx.bezierCurveTo(44,107,44,107,45,107);
		ctx.bezierCurveTo(45,107,45,107,45,107);
		ctx.lineTo(45,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(42,111);
		ctx.bezierCurveTo(42,112,42,113,42,113);
		ctx.bezierCurveTo(41,113,41,113,41,113);
		ctx.bezierCurveTo(41,113,41,112,41,112);
		ctx.bezierCurveTo(41,112,42,111,42,111);
		ctx.lineTo(42,111);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#585660";
		ctx.beginPath();
		ctx.moveTo(44,111);
		ctx.bezierCurveTo(43,111,43,111,42,111);
		ctx.bezierCurveTo(42,111,42,111,42,111);
		ctx.bezierCurveTo(43,110,43,110,41,110);
		ctx.bezierCurveTo(41,110,41,110,41,110);
		ctx.bezierCurveTo(41,110,41,110,41,110);
		ctx.bezierCurveTo(41,109,42,109,42,109);
		ctx.bezierCurveTo(43,110,44,110,45,110);
		ctx.bezierCurveTo(44,110,44,111,44,111);
		ctx.bezierCurveTo(44,111,44,111,44,111);
		ctx.lineTo(44,111);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(41,110);
		ctx.bezierCurveTo(41,110,41,110,41,110);
		ctx.bezierCurveTo(43,110,43,110,42,111);
		ctx.bezierCurveTo(42,111,42,111,42,111);
		ctx.bezierCurveTo(42,111,42,111,42,111);
		ctx.bezierCurveTo(42,111,41,112,41,112);
		ctx.bezierCurveTo(41,111,41,110,41,110);
		ctx.lineTo(41,110);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(27,111);
		ctx.bezierCurveTo(27,111,27,111,27,112);
		ctx.bezierCurveTo(28,112,28,112,28,112);
		ctx.bezierCurveTo(28,113,29,113,29,113);
		ctx.bezierCurveTo(29,112,29,112,29,111);
		ctx.bezierCurveTo(29,111,29,111,29,111);
		ctx.bezierCurveTo(28,111,28,111,27,110);
		ctx.bezierCurveTo(27,111,27,111,27,111);
		ctx.lineTo(27,111);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(44,111);
		ctx.bezierCurveTo(44,111,44,112,44,112);
		ctx.bezierCurveTo(43,112,43,112,43,113);
		ctx.bezierCurveTo(43,114,42,113,42,113);
		ctx.bezierCurveTo(42,113,42,112,42,111);
		ctx.bezierCurveTo(42,111,42,111,42,111);
		ctx.bezierCurveTo(42,111,43,111,43,111);
		ctx.bezierCurveTo(44,111,43,111,44,111);
		ctx.lineTo(44,111);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(29,111);
		ctx.bezierCurveTo(29,112,29,112,29,113);
		ctx.bezierCurveTo(30,113,30,113,30,113);
		ctx.bezierCurveTo(30,112,30,112,30,111);
		ctx.bezierCurveTo(30,111,30,111,29,111);
		ctx.lineTo(29,111);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#585660";
		ctx.beginPath();
		ctx.moveTo(27,110);
		ctx.bezierCurveTo(28,111,28,111,29,111);
		ctx.bezierCurveTo(29,111,29,111,29,110);
		ctx.bezierCurveTo(28,109,28,109,30,109);
		ctx.bezierCurveTo(30,109,30,109,30,109);
		ctx.bezierCurveTo(30,109,30,109,30,109);
		ctx.bezierCurveTo(30,109,29,109,29,109);
		ctx.bezierCurveTo(28,109,27,110,26,109);
		ctx.bezierCurveTo(27,110,27,110,27,111);
		ctx.bezierCurveTo(27,111,27,110,27,110);
		ctx.lineTo(27,110);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(30,109);
		ctx.bezierCurveTo(30,109,30,109,30,109);
		ctx.bezierCurveTo(28,109,28,109,29,110);
		ctx.bezierCurveTo(29,111,29,111,29,111);
		ctx.bezierCurveTo(29,111,29,111,29,111);
		ctx.bezierCurveTo(30,111,30,111,30,111);
		ctx.bezierCurveTo(30,111,30,110,30,109);
		ctx.lineTo(30,109);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Fonsterbrada ###===---------
		//-------------------------------
		// GroupEnd: Fonsterbrada
		//-------------------------------



		//---------===### g: FonsterLuckaH ###===---------
		//-------------------------------
		// Group: FonsterLuckaH
		//-------------------------------
		ctx.fillStyle = "#27100D";
		ctx.beginPath();
		ctx.moveTo(42,107);
		ctx.bezierCurveTo(42,105,41,103,41,101);
		ctx.bezierCurveTo(42,98,41,96,41,94);
		ctx.bezierCurveTo(41,91,41,86,42,86);
		ctx.bezierCurveTo(42,86,42,86,42,86);
		ctx.bezierCurveTo(42,86,42,86,42,86);
		ctx.bezierCurveTo(42,86,42,87,42,87);
		ctx.bezierCurveTo(43,89,42,92,43,94);
		ctx.bezierCurveTo(43,98,43,102,43,106);
		ctx.bezierCurveTo(43,106,43,107,42,107);
		ctx.bezierCurveTo(42,107,42,107,42,107);
		ctx.lineTo(42,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(51,86);
		ctx.bezierCurveTo(48,86,45,86,42,86);
		ctx.bezierCurveTo(42,86,42,87,42,87);
		ctx.bezierCurveTo(43,89,42,92,43,94);
		ctx.bezierCurveTo(43,98,43,102,43,106);
		ctx.bezierCurveTo(43,106,43,107,42,107);
		ctx.bezierCurveTo(43,107,43,107,43,107);
		ctx.bezierCurveTo(44,106,44,106,45,106);
		ctx.bezierCurveTo(45,106,45,106,45,106);
		ctx.lineTo(51,106);
		ctx.bezierCurveTo(51,106,51,102,51,102);
		ctx.bezierCurveTo(51,98,51,94,51,90);
		ctx.bezierCurveTo(51,90,51,86,51,86);
		ctx.lineTo(51,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(50,104);
		ctx.bezierCurveTo(50,104,50,103,50,103);
		ctx.lineTo(50,103);
		ctx.bezierCurveTo(50,98,50,93,50,88);
		ctx.bezierCurveTo(50,87,50,87,49,87);
		ctx.bezierCurveTo(49,87,45,87,44,87);
		ctx.bezierCurveTo(44,87,44,87,44,88);
		ctx.bezierCurveTo(44,89,44,88,44,88);
		ctx.bezierCurveTo(46,88,47,88,49,88);
		ctx.bezierCurveTo(49,88,49,88,49,88);
		ctx.bezierCurveTo(49,89,49,89,49,89);
		ctx.bezierCurveTo(48,89,46,89,44,89);
		ctx.bezierCurveTo(44,89,44,89,44,90);
		ctx.bezierCurveTo(44,90,44,90,44,90);
		ctx.bezierCurveTo(46,90,48,90,49,90);
		ctx.bezierCurveTo(49,91,49,91,48,91);
		ctx.bezierCurveTo(47,91,45,91,44,91);
		ctx.bezierCurveTo(44,91,44,91,44,92);
		ctx.bezierCurveTo(44,92,44,92,44,92);
		ctx.bezierCurveTo(44,92,44,92,45,92);
		ctx.bezierCurveTo(46,92,47,92,49,92);
		ctx.bezierCurveTo(49,92,49,92,49,92);
		ctx.bezierCurveTo(49,92,49,93,49,93);
		ctx.bezierCurveTo(49,93,48,93,48,93);
		ctx.bezierCurveTo(47,93,46,93,44,93);
		ctx.bezierCurveTo(44,93,44,92,44,93);
		ctx.bezierCurveTo(44,93,44,94,44,94);
		ctx.bezierCurveTo(45,94,45,94,46,94);
		ctx.bezierCurveTo(47,93,48,93,49,93);
		ctx.bezierCurveTo(49,94,49,94,49,94);
		ctx.bezierCurveTo(47,94,46,94,44,94);
		ctx.bezierCurveTo(44,94,44,94,44,95);
		ctx.bezierCurveTo(44,95,43,95,43,95);
		ctx.bezierCurveTo(43,95,44,95,44,95);
		ctx.bezierCurveTo(44,95,44,95,44,95);
		ctx.bezierCurveTo(45,95,47,95,48,95);
		ctx.bezierCurveTo(49,95,49,95,49,96);
		ctx.bezierCurveTo(49,96,49,96,48,96);
		ctx.bezierCurveTo(47,96,46,96,45,96);
		ctx.bezierCurveTo(44,96,44,96,44,96);
		ctx.bezierCurveTo(44,97,44,97,44,97);
		ctx.bezierCurveTo(45,97,45,97,45,97);
		ctx.bezierCurveTo(46,97,47,96,49,97);
		ctx.bezierCurveTo(49,97,49,97,49,97);
		ctx.bezierCurveTo(49,98,49,98,48,98);
		ctx.bezierCurveTo(48,98,48,98,48,98);
		ctx.bezierCurveTo(47,97,46,97,45,97);
		ctx.bezierCurveTo(44,97,44,97,44,98);
		ctx.bezierCurveTo(44,98,44,98,45,98);
		ctx.bezierCurveTo(46,98,47,98,48,98);
		ctx.bezierCurveTo(48,98,49,98,49,99);
		ctx.bezierCurveTo(49,100,48,99,48,99);
		ctx.bezierCurveTo(47,99,46,99,45,99);
		ctx.bezierCurveTo(44,99,44,99,44,100);
		ctx.bezierCurveTo(44,100,44,100,45,100);
		ctx.bezierCurveTo(46,100,47,100,48,100);
		ctx.bezierCurveTo(49,100,49,100,49,100);
		ctx.bezierCurveTo(47,100,46,100,44,100);
		ctx.bezierCurveTo(44,100,44,100,44,101);
		ctx.bezierCurveTo(44,101,44,101,44,101);
		ctx.bezierCurveTo(46,101,47,101,49,101);
		ctx.bezierCurveTo(49,102,49,102,48,102);
		ctx.bezierCurveTo(47,102,46,102,45,102);
		ctx.bezierCurveTo(44,102,44,102,44,102);
		ctx.bezierCurveTo(44,103,44,103,45,103);
		ctx.bezierCurveTo(46,103,47,103,48,103);
		ctx.bezierCurveTo(49,103,49,103,49,103);
		ctx.bezierCurveTo(49,103,49,104,49,104);
		ctx.bezierCurveTo(47,104,46,104,45,103);
		ctx.bezierCurveTo(44,103,44,103,44,104);
		ctx.bezierCurveTo(44,104,44,104,44,104);
		ctx.bezierCurveTo(45,104,45,104,45,104);
		ctx.bezierCurveTo(47,105,48,104,50,105);
		ctx.bezierCurveTo(50,105,50,105,50,104);
		ctx.lineTo(50,104);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(51,86);
		ctx.bezierCurveTo(48,86,45,86,42,86);
		ctx.bezierCurveTo(42,86,42,86,42,86);
		ctx.bezierCurveTo(41,85,41,84,42,84);
		ctx.bezierCurveTo(43,84,44,84,45,84);
		ctx.bezierCurveTo(46,83,48,84,50,85);
		ctx.bezierCurveTo(50,85,51,85,51,85);
		ctx.bezierCurveTo(51,86,51,86,51,86);
		ctx.lineTo(51,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: FonsterLuckaH ###===---------
		//-------------------------------
		// GroupEnd: FonsterLuckaH
		//-------------------------------



		//---------===### g: FonsterLuckaV ###===---------
		//-------------------------------
		// Group: FonsterLuckaV
		//-------------------------------
		ctx.fillStyle = "#27100D";
		ctx.beginPath();
		ctx.moveTo(18,107);
		ctx.bezierCurveTo(18,105,17,103,17,101);
		ctx.bezierCurveTo(18,98,17,96,17,94);
		ctx.bezierCurveTo(17,91,17,86,18,86);
		ctx.bezierCurveTo(18,86,18,86,18,86);
		ctx.bezierCurveTo(18,86,18,86,18,86);
		ctx.bezierCurveTo(18,86,18,87,18,87);
		ctx.bezierCurveTo(18,89,18,92,18,94);
		ctx.bezierCurveTo(19,98,19,102,19,106);
		ctx.bezierCurveTo(19,106,19,107,18,107);
		ctx.bezierCurveTo(18,107,18,107,18,107);
		ctx.lineTo(18,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#78593F";
		ctx.beginPath();
		ctx.moveTo(27,86);
		ctx.bezierCurveTo(24,86,21,86,18,86);
		ctx.bezierCurveTo(18,86,18,87,18,87);
		ctx.bezierCurveTo(18,89,18,92,18,94);
		ctx.bezierCurveTo(19,98,19,102,19,106);
		ctx.bezierCurveTo(19,106,19,107,18,107);
		ctx.bezierCurveTo(19,107,19,107,19,107);
		ctx.bezierCurveTo(20,106,20,106,21,106);
		ctx.lineTo(21,106);
		ctx.lineTo(27,106);
		ctx.bezierCurveTo(27,106,27,102,27,102);
		ctx.bezierCurveTo(27,98,27,94,27,90);
		ctx.bezierCurveTo(27,90,27,86,27,86);
		ctx.lineTo(27,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(25,104);
		ctx.bezierCurveTo(25,104,25,103,25,103);
		ctx.lineTo(25,103);
		ctx.bezierCurveTo(25,98,25,93,25,88);
		ctx.bezierCurveTo(25,87,25,87,25,87);
		ctx.bezierCurveTo(24,87,20,87,20,87);
		ctx.bezierCurveTo(19,87,19,87,19,88);
		ctx.bezierCurveTo(19,88,19,88,20,88);
		ctx.bezierCurveTo(21,88,23,88,24,88);
		ctx.bezierCurveTo(24,88,24,88,25,88);
		ctx.bezierCurveTo(25,88,25,89,25,89);
		ctx.bezierCurveTo(23,89,21,89,20,89);
		ctx.bezierCurveTo(20,89,19,89,19,89);
		ctx.bezierCurveTo(19,90,20,90,20,90);
		ctx.bezierCurveTo(22,90,23,90,25,90);
		ctx.bezierCurveTo(25,91,24,91,24,91);
		ctx.bezierCurveTo(22,91,21,91,19,91);
		ctx.bezierCurveTo(19,91,19,91,19,91);
		ctx.bezierCurveTo(19,91,19,92,19,92);
		ctx.bezierCurveTo(20,92,20,92,20,92);
		ctx.bezierCurveTo(21,92,23,92,24,92);
		ctx.bezierCurveTo(24,92,25,91,25,92);
		ctx.bezierCurveTo(25,92,24,92,24,92);
		ctx.bezierCurveTo(24,92,24,92,24,92);
		ctx.bezierCurveTo(22,92,21,92,20,92);
		ctx.bezierCurveTo(19,92,19,92,19,93);
		ctx.bezierCurveTo(19,93,19,93,20,93);
		ctx.bezierCurveTo(20,93,21,93,21,93);
		ctx.bezierCurveTo(22,93,23,93,25,93);
		ctx.bezierCurveTo(24,94,24,94,24,94);
		ctx.bezierCurveTo(23,94,21,94,20,94);
		ctx.bezierCurveTo(19,94,19,94,19,95);
		ctx.bezierCurveTo(19,95,19,95,19,95);
		ctx.bezierCurveTo(19,95,19,95,19,95);
		ctx.bezierCurveTo(19,95,19,95,19,95);
		ctx.bezierCurveTo(21,95,22,95,24,95);
		ctx.bezierCurveTo(24,95,25,95,25,95);
		ctx.bezierCurveTo(25,96,24,96,24,96);
		ctx.bezierCurveTo(23,96,21,96,20,96);
		ctx.bezierCurveTo(20,96,19,95,19,96);
		ctx.bezierCurveTo(19,97,20,97,20,97);
		ctx.bezierCurveTo(20,97,20,97,21,97);
		ctx.bezierCurveTo(22,97,23,96,24,96);
		ctx.bezierCurveTo(24,96,25,96,25,97);
		ctx.bezierCurveTo(25,97,24,97,24,97);
		ctx.bezierCurveTo(24,97,24,97,24,97);
		ctx.bezierCurveTo(22,97,21,97,20,97);
		ctx.bezierCurveTo(20,97,19,97,19,98);
		ctx.bezierCurveTo(19,98,20,98,20,98);
		ctx.bezierCurveTo(21,98,22,98,23,98);
		ctx.bezierCurveTo(24,98,25,98,25,98);
		ctx.bezierCurveTo(25,99,24,99,23,99);
		ctx.bezierCurveTo(22,99,21,99,20,99);
		ctx.bezierCurveTo(20,99,20,99,19,99);
		ctx.bezierCurveTo(20,100,20,100,20,100);
		ctx.bezierCurveTo(21,99,22,100,23,99);
		ctx.bezierCurveTo(24,99,24,99,24,100);
		ctx.bezierCurveTo(23,100,21,100,20,100);
		ctx.bezierCurveTo(19,100,19,100,19,101);
		ctx.bezierCurveTo(19,101,20,101,20,101);
		ctx.bezierCurveTo(21,101,23,101,24,101);
		ctx.bezierCurveTo(25,102,24,102,24,102);
		ctx.bezierCurveTo(23,102,21,102,20,102);
		ctx.bezierCurveTo(20,102,19,102,19,102);
		ctx.bezierCurveTo(19,103,20,102,20,102);
		ctx.bezierCurveTo(21,102,22,102,23,102);
		ctx.bezierCurveTo(24,102,25,102,24,103);
		ctx.bezierCurveTo(24,103,24,103,24,103);
		ctx.bezierCurveTo(23,103,21,103,20,103);
		ctx.bezierCurveTo(20,103,19,103,19,104);
		ctx.bezierCurveTo(19,104,20,104,20,104);
		ctx.bezierCurveTo(20,104,21,104,21,104);
		ctx.bezierCurveTo(22,104,24,104,25,105);
		ctx.bezierCurveTo(25,105,26,105,25,104);
		ctx.lineTo(25,104);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(27,86);
		ctx.bezierCurveTo(24,86,21,86,18,86);
		ctx.bezierCurveTo(18,86,18,86,18,86);
		ctx.bezierCurveTo(17,85,17,84,18,84);
		ctx.bezierCurveTo(19,84,20,84,20,83);
		ctx.bezierCurveTo(22,83,24,84,26,85);
		ctx.bezierCurveTo(26,85,27,85,27,85);
		ctx.bezierCurveTo(27,86,27,86,27,86);
		ctx.lineTo(27,86);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: FonsterLuckaV ###===---------
		//-------------------------------
		// GroupEnd: FonsterLuckaV
		//-------------------------------



		//---------===### g: Skorsten ###===---------
		//-------------------------------
		// Group: Skorsten
		//-------------------------------
		ctx.fillStyle = "#70070A";
		ctx.beginPath();
		ctx.moveTo(36,42);
		ctx.bezierCurveTo(36,42,36,42,35,42);
		ctx.bezierCurveTo(35,42,35,42,35,42);
		ctx.bezierCurveTo(34,42,32,42,30,42);
		ctx.lineTo(30,42);
		ctx.lineTo(26,42);
		ctx.lineTo(26,42);
		ctx.bezierCurveTo(23,42,20,42,17,42);
		ctx.bezierCurveTo(17,42,16,42,16,42);
		ctx.bezierCurveTo(16,44,17,44,18,44);
		ctx.bezierCurveTo(18,44,18,44,18,44);
		ctx.bezierCurveTo(19,44,19,44,19,45);
		ctx.bezierCurveTo(19,45,19,46,19,47);
		ctx.bezierCurveTo(19,49,20,50,19,51);
		ctx.bezierCurveTo(20,53,19,54,19,56);
		ctx.bezierCurveTo(19,56,19,56,19,56);
		ctx.bezierCurveTo(19,58,19,64,21,63);
		ctx.bezierCurveTo(21,63,23,60,24,60);
		ctx.bezierCurveTo(24,60,25,59,26,59);
		ctx.bezierCurveTo(31,60,31,56,34,52);
		ctx.bezierCurveTo(35,51,34,49,35,47);
		ctx.bezierCurveTo(35,46,34,44,36,43);
		ctx.bezierCurveTo(37,43,37,42,36,42);
		ctx.lineTo(36,42);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#370409";
		ctx.beginPath();
		ctx.moveTo(18,44);
		ctx.bezierCurveTo(21,44,24,43,28,43);
		ctx.bezierCurveTo(28,43,28,43,29,43);
		ctx.bezierCurveTo(29,43,29,43,29,44);
		ctx.bezierCurveTo(29,45,29,44,29,44);
		ctx.bezierCurveTo(25,44,22,45,19,44);
		ctx.bezierCurveTo(18,44,18,44,18,44);
		ctx.lineTo(18,44);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(29,43);
		ctx.bezierCurveTo(28,43,28,43,27,43);
		ctx.bezierCurveTo(28,42,27,42,26,42);
		ctx.bezierCurveTo(23,42,20,42,17,42);
		ctx.bezierCurveTo(17,42,17,41,18,41);
		ctx.bezierCurveTo(21,42,24,42,27,41);
		ctx.bezierCurveTo(30,41,33,41,35,42);
		ctx.bezierCurveTo(34,42,32,42,30,42);
		ctx.bezierCurveTo(29,42,28,42,29,43);
		ctx.lineTo(29,43);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#FBFCFC";
		ctx.beginPath();
		ctx.moveTo(27,41);
		ctx.bezierCurveTo(30,41,33,41,35,42);
		ctx.lineTo(35,42);
		ctx.bezierCurveTo(36,42,36,42,36,41);
		ctx.bezierCurveTo(35,41,33,41,32,40);
		ctx.bezierCurveTo(32,40,31,40,31,40);
		ctx.bezierCurveTo(31,40,31,40,31,40);
		ctx.bezierCurveTo(28,40,24,40,21,40);
		ctx.bezierCurveTo(21,40,20,40,20,40);
		ctx.bezierCurveTo(19,41,18,41,18,41);
		ctx.bezierCurveTo(21,42,24,42,27,41);
		ctx.lineTo(27,41);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Skorsten ###===---------
		//-------------------------------
		// GroupEnd: Skorsten
		//-------------------------------



		//---------===### g: Tak ###===---------
		//-------------------------------
		// Group: Tak
		//-------------------------------
		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(105,71);
		ctx.bezierCurveTo(105,69,104,68,102,67);
		ctx.bezierCurveTo(102,67,101,66,101,66);
		ctx.bezierCurveTo(99,66,96,65,96,62);
		ctx.bezierCurveTo(94,63,92,61,90,59);
		ctx.bezierCurveTo(80,51,69,44,58,37);
		ctx.bezierCurveTo(54,36,52,38,49,40);
		ctx.bezierCurveTo(38,49,27,58,16,68);
		ctx.bezierCurveTo(12,71,7,74,2,74);
		ctx.bezierCurveTo(1,76,0,77,2,78);
		ctx.bezierCurveTo(4,80,7,79,9,80);
		ctx.bezierCurveTo(11,80,13,79,15,78);
		ctx.bezierCurveTo(17,76,19,75,22,74);
		ctx.bezierCurveTo(23,70,27,68,29,65);
		ctx.bezierCurveTo(36,58,43,52,50,44);
		ctx.bezierCurveTo(53,42,56,41,59,43);
		ctx.bezierCurveTo(69,49,79,55,88,63);
		ctx.bezierCurveTo(90,66,92,68,94,70);
		ctx.bezierCurveTo(94,70,94,71,94,71);
		ctx.bezierCurveTo(96,72,98,74,100,76);
		ctx.bezierCurveTo(102,77,104,78,105,76);
		ctx.bezierCurveTo(107,75,106,73,105,71);
		ctx.lineTo(105,71);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(86,54);
		ctx.bezierCurveTo(79,48,72,43,64,38);
		ctx.bezierCurveTo(64,38,64,38,64,38);
		ctx.bezierCurveTo(63,37,61,37,59,35);
		ctx.bezierCurveTo(59,35,58,35,58,35);
		ctx.bezierCurveTo(57,35,57,35,56,36);
		ctx.bezierCurveTo(56,36,56,36,55,36);
		ctx.bezierCurveTo(54,36,53,36,52,37);
		ctx.bezierCurveTo(52,37,52,37,51,37);
		ctx.bezierCurveTo(50,38,48,39,46,40);
		ctx.bezierCurveTo(44,42,41,45,38,47);
		ctx.bezierCurveTo(38,47,37,47,37,48);
		ctx.bezierCurveTo(36,48,36,48,35,49);
		ctx.bezierCurveTo(33,51,30,53,28,55);
		ctx.bezierCurveTo(28,58,9,68,6,70);
		ctx.lineTo(6,70);
		ctx.bezierCurveTo(4,72,3,73,1,74);
		ctx.bezierCurveTo(6,74,11,72,16,68);
		ctx.bezierCurveTo(27,58,38,49,49,40);
		ctx.bezierCurveTo(52,38,54,36,58,37);
		ctx.bezierCurveTo(59,38,60,38,61,39);
		ctx.bezierCurveTo(61,39,61,39,61,39);
		ctx.bezierCurveTo(62,40,63,40,64,41);
		ctx.bezierCurveTo(64,41,64,41,64,41);
		ctx.bezierCurveTo(66,42,68,43,70,45);
		ctx.lineTo(70,45);
		ctx.bezierCurveTo(77,49,84,54,90,59);
		ctx.bezierCurveTo(92,61,94,63,96,62);
		ctx.bezierCurveTo(93,59,90,57,86,54);
		ctx.lineTo(86,54);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Tak ###===---------
		//-------------------------------
		// GroupEnd: Tak
		//-------------------------------



		//---------===### path: Vaggkant ###===---------
		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(99,75);
		ctx.lineTo(97,80);
		ctx.bezierCurveTo(97,81,97,77,97,77);
		ctx.bezierCurveTo(97,78,97,79,97,80);
		ctx.bezierCurveTo(97,81,97,81,96,81);
		ctx.bezierCurveTo(95,81,95,81,95,81);
		ctx.bezierCurveTo(92,81,92,82,92,84);
		ctx.bezierCurveTo(93,85,93,85,94,85);
		ctx.bezierCurveTo(97,85,97,85,97,88);
		ctx.bezierCurveTo(97,89,97,90,97,91);
		ctx.bezierCurveTo(97,92,96,92,95,93);
		ctx.bezierCurveTo(93,93,93,93,93,95);
		ctx.bezierCurveTo(93,96,93,96,93,97);
		ctx.bezierCurveTo(93,99,93,99,95,99);
		ctx.bezierCurveTo(96,99,96,100,96,100);
		ctx.bezierCurveTo(96,101,96,103,96,104);
		ctx.bezierCurveTo(96,105,96,105,95,105);
		ctx.bezierCurveTo(94,105,93,106,93,107);
		ctx.bezierCurveTo(93,107,93,108,93,108);
		ctx.bezierCurveTo(93,109,94,109,94,109);
		ctx.bezierCurveTo(96,109,96,110,96,111);
		ctx.bezierCurveTo(96,111,96,112,96,112);
		ctx.bezierCurveTo(96,114,96,115,94,115);
		ctx.bezierCurveTo(93,115,93,115,93,116);
		ctx.bezierCurveTo(93,117,93,119,93,120);
		ctx.bezierCurveTo(93,121,93,121,94,121);
		ctx.bezierCurveTo(96,121,96,121,96,123);
		ctx.bezierCurveTo(95,125,95,126,95,128);
		ctx.bezierCurveTo(95,129,95,129,94,129);
		ctx.bezierCurveTo(92,129,92,129,92,131);
		ctx.bezierCurveTo(92,132,92,132,92,132);
		ctx.bezierCurveTo(92,133,92,133,91,133);
		ctx.bezierCurveTo(88,134,86,134,83,134);
		ctx.bezierCurveTo(80,134,76,134,73,134);
		ctx.bezierCurveTo(73,134,73,134,73,134);
		ctx.bezierCurveTo(69,134,29,134,25,134);
		ctx.bezierCurveTo(23,134,20,134,17,134);
		ctx.bezierCurveTo(17,134,16,134,16,133);
		ctx.bezierCurveTo(16,132,16,132,16,132);
		ctx.bezierCurveTo(16,130,16,130,14,130);
		ctx.bezierCurveTo(13,130,13,129,13,128);
		ctx.bezierCurveTo(13,127,13,125,13,123);
		ctx.bezierCurveTo(12,122,13,122,14,122);
		ctx.bezierCurveTo(15,122,16,121,16,121);
		ctx.bezierCurveTo(16,119,16,118,16,116);
		ctx.bezierCurveTo(16,116,15,115,14,115);
		ctx.bezierCurveTo(13,115,12,114,12,113);
		ctx.bezierCurveTo(12,112,12,112,12,111);
		ctx.bezierCurveTo(12,110,12,110,14,110);
		ctx.bezierCurveTo(15,110,15,109,15,109);
		ctx.bezierCurveTo(15,108,15,108,15,107);
		ctx.bezierCurveTo(15,106,14,105,13,105);
		ctx.bezierCurveTo(12,105,12,105,12,105);
		ctx.bezierCurveTo(12,103,12,102,12,101);
		ctx.bezierCurveTo(12,100,12,100,13,100);
		ctx.bezierCurveTo(15,99,15,99,15,97);
		ctx.bezierCurveTo(15,97,15,96,15,96);
		ctx.bezierCurveTo(15,93,15,93,13,93);
		ctx.bezierCurveTo(12,93,11,93,11,92);
		ctx.bezierCurveTo(11,91,11,89,11,88);
		ctx.bezierCurveTo(11,86,11,86,14,86);
		ctx.bezierCurveTo(15,86,16,86,16,85);
		ctx.bezierCurveTo(17,83,16,82,14,82);
		ctx.bezierCurveTo(13,82,13,82,12,82);
		ctx.bezierCurveTo(11,82,11,82,11,81);
		ctx.bezierCurveTo(11,80,13,81,11,80);
		ctx.lineTo(8,79);
		ctx.bezierCurveTo(8,80,8,81,8,81);
		ctx.bezierCurveTo(9,82,9,83,9,83);
		ctx.bezierCurveTo(9,87,9,91,9,94);
		ctx.bezierCurveTo(9,95,9,95,9,96);
		ctx.bezierCurveTo(9,97,9,97,9,98);
		ctx.bezierCurveTo(10,98,10,99,10,99);
		ctx.bezierCurveTo(9,100,9,102,9,103);
		ctx.bezierCurveTo(9,105,10,106,10,108);
		ctx.bezierCurveTo(10,108,10,109,10,110);
		ctx.bezierCurveTo(10,110,10,110,10,111);
		ctx.bezierCurveTo(10,111,10,111,10,111);
		ctx.bezierCurveTo(10,113,10,115,10,117);
		ctx.bezierCurveTo(10,117,10,118,10,118);
		ctx.bezierCurveTo(9,118,9,119,10,119);
		ctx.bezierCurveTo(10,120,10,120,10,121);
		ctx.bezierCurveTo(10,121,10,122,10,123);
		ctx.bezierCurveTo(11,123,11,123,10,124);
		ctx.bezierCurveTo(10,125,11,127,11,128);
		ctx.bezierCurveTo(11,128,11,128,11,129);
		ctx.bezierCurveTo(11,130,11,132,11,133);
		ctx.bezierCurveTo(11,134,11,134,11,135);
		ctx.bezierCurveTo(12,135,12,135,13,135);
		ctx.bezierCurveTo(18,135,22,135,27,135);
		ctx.bezierCurveTo(30,136,64,135,72,135);
		ctx.bezierCurveTo(72,135,72,135,72,135);
		ctx.bezierCurveTo(75,135,78,135,81,135);
		ctx.bezierCurveTo(86,135,91,135,95,135);
		ctx.bezierCurveTo(96,134,97,134,97,134);
		ctx.bezierCurveTo(97,134,97,133,97,133);
		ctx.bezierCurveTo(97,131,97,130,98,128);
		ctx.bezierCurveTo(97,128,97,128,98,127);
		ctx.bezierCurveTo(98,126,98,125,98,123);
		ctx.bezierCurveTo(97,123,98,123,98,122);
		ctx.bezierCurveTo(98,122,98,121,98,120);
		ctx.bezierCurveTo(98,120,98,119,99,119);
		ctx.bezierCurveTo(99,118,100,118,99,117);
		ctx.bezierCurveTo(98,117,98,117,98,116);
		ctx.bezierCurveTo(98,114,98,112,98,110);
		ctx.bezierCurveTo(98,110,98,110,98,110);
		ctx.bezierCurveTo(98,110,98,110,98,110);
		ctx.bezierCurveTo(98,109,98,108,99,107);
		ctx.bezierCurveTo(99,106,99,104,99,103);
		ctx.bezierCurveTo(99,101,99,100,99,98);
		ctx.bezierCurveTo(99,98,99,98,99,98);
		ctx.bezierCurveTo(99,97,99,96,99,95);
		ctx.bezierCurveTo(99,95,99,94,99,94);
		ctx.bezierCurveTo(99,90,99,87,100,83);
		ctx.bezierCurveTo(99,82,99,82,100,81);
		ctx.bezierCurveTo(100,79,99,77,99,75);
		ctx.lineTo(99,75);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### g: Dorrtak ###===---------
		//-------------------------------
		// Group: Dorrtak
		//-------------------------------
		ctx.fillStyle = "#FFFFFF";
		ctx.beginPath();
		ctx.moveTo(93,81);
		ctx.bezierCurveTo(90,79,86,77,83,74);
		ctx.bezierCurveTo(81,73,79,71,77,70);
		ctx.bezierCurveTo(76,70,75,69,75,69);
		ctx.bezierCurveTo(74,68,74,68,73,69);
		ctx.bezierCurveTo(72,69,71,69,71,70);
		ctx.bezierCurveTo(69,70,68,71,67,72);
		ctx.bezierCurveTo(64,74,62,75,60,77);
		ctx.bezierCurveTo(57,78,54,79,51,79);
		ctx.bezierCurveTo(51,79,50,79,50,79);
		ctx.bezierCurveTo(50,79,50,78,50,78);
		ctx.bezierCurveTo(51,77,53,76,54,75);
		ctx.bezierCurveTo(55,74,55,74,56,73);
		ctx.bezierCurveTo(58,72,60,71,62,69);
		ctx.bezierCurveTo(65,68,67,67,69,66);
		ctx.bezierCurveTo(71,66,73,66,75,67);
		ctx.bezierCurveTo(76,68,78,69,79,69);
		ctx.bezierCurveTo(82,71,85,73,88,75);
		ctx.bezierCurveTo(89,76,91,77,92,79);
		ctx.bezierCurveTo(93,79,93,80,93,81);
		ctx.lineTo(93,81);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BD9CA3";
		ctx.beginPath();
		ctx.moveTo(69,81);
		ctx.bezierCurveTo(71,81,72,80,74,80);
		ctx.bezierCurveTo(74,80,74,80,74,80);
		ctx.bezierCurveTo(75,80,75,80,76,80);
		ctx.bezierCurveTo(79,80,83,80,87,80);
		ctx.bezierCurveTo(88,80,88,79,89,80);
		ctx.bezierCurveTo(89,80,90,80,90,80);
		ctx.bezierCurveTo(90,80,90,79,90,79);
		ctx.bezierCurveTo(89,79,88,78,88,78);
		ctx.bezierCurveTo(87,78,87,76,85,77);
		ctx.bezierCurveTo(85,77,85,77,85,77);
		ctx.bezierCurveTo(85,76,85,76,84,76);
		ctx.bezierCurveTo(82,76,80,75,80,73);
		ctx.bezierCurveTo(80,73,80,73,80,73);
		ctx.bezierCurveTo(79,72,78,72,78,71);
		ctx.bezierCurveTo(77,70,75,70,74,69);
		ctx.bezierCurveTo(74,69,74,69,74,69);
		ctx.bezierCurveTo(73,69,73,69,73,70);
		ctx.bezierCurveTo(73,70,73,70,74,70);
		ctx.bezierCurveTo(75,70,76,70,76,71);
		ctx.bezierCurveTo(77,72,78,74,79,74);
		ctx.bezierCurveTo(81,75,82,76,83,77);
		ctx.bezierCurveTo(84,78,84,78,85,78);
		ctx.bezierCurveTo(85,78,85,78,85,79);
		ctx.bezierCurveTo(84,79,83,78,82,79);
		ctx.bezierCurveTo(80,79,78,78,77,76);
		ctx.bezierCurveTo(77,76,76,75,76,76);
		ctx.bezierCurveTo(74,76,72,76,70,76);
		ctx.bezierCurveTo(70,76,70,75,70,75);
		ctx.bezierCurveTo(70,74,70,74,71,74);
		ctx.bezierCurveTo(72,74,73,75,74,75);
		ctx.bezierCurveTo(75,75,75,74,75,73);
		ctx.bezierCurveTo(74,73,74,73,74,72);
		ctx.bezierCurveTo(73,72,73,72,72,72);
		ctx.bezierCurveTo(72,73,71,73,70,73);
		ctx.bezierCurveTo(70,73,70,73,69,73);
		ctx.bezierCurveTo(68,74,67,75,65,76);
		ctx.bezierCurveTo(64,76,64,76,64,75);
		ctx.bezierCurveTo(64,75,63,75,63,75);
		ctx.bezierCurveTo(63,75,63,75,63,75);
		ctx.bezierCurveTo(63,75,62,76,62,76);
		ctx.bezierCurveTo(62,76,61,76,60,77);
		ctx.bezierCurveTo(60,76,59,76,59,77);
		ctx.bezierCurveTo(59,77,59,78,59,78);
		ctx.bezierCurveTo(58,77,58,78,58,78);
		ctx.bezierCurveTo(58,79,57,79,57,78);
		ctx.bezierCurveTo(57,78,56,78,56,78);
		ctx.bezierCurveTo(56,78,56,79,56,79);
		ctx.bezierCurveTo(56,79,56,80,56,80);
		ctx.bezierCurveTo(55,80,55,79,54,79);
		ctx.bezierCurveTo(54,80,54,80,55,80);
		ctx.bezierCurveTo(55,80,55,81,55,81);
		ctx.bezierCurveTo(56,81,57,80,58,80);
		ctx.bezierCurveTo(58,80,59,81,59,81);
		ctx.bezierCurveTo(60,81,60,81,61,81);
		ctx.bezierCurveTo(64,81,66,81,69,81);
		ctx.lineTo(69,81);
		ctx.moveTo(59,79);
		ctx.bezierCurveTo(60,78,62,77,63,77);
		ctx.bezierCurveTo(63,77,63,77,63,77);
		ctx.bezierCurveTo(62,78,61,78,59,79);
		ctx.bezierCurveTo(59,79,59,79,59,79);
		ctx.lineTo(59,79);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Dorrtak ###===---------
		//-------------------------------
		// GroupEnd: Dorrtak
		//-------------------------------



		//---------===### g: Polkagris1 ###===---------
		//-------------------------------
		// Group: Polkagris1
		//-------------------------------
		ctx.fillStyle = "#A1A5B4";
		ctx.beginPath();
		ctx.moveTo(58,105);
		ctx.bezierCurveTo(59,103,58,92,58,90);
		ctx.bezierCurveTo(58,88,59,84,58,83);
		ctx.bezierCurveTo(56,81,55,77,52,80);
		ctx.bezierCurveTo(54,82,53,89,53,92);
		ctx.bezierCurveTo(53,97,54,101,54,106);
		ctx.bezierCurveTo(54,108,54,119,53,119);
		ctx.bezierCurveTo(54,123,55,119,56,122);
		ctx.bezierCurveTo(59,122,58,116,58,114);
		ctx.bezierCurveTo(58,114,58,114,58,114);
		ctx.bezierCurveTo(58,112,59,106,58,105);
		ctx.bezierCurveTo(58,105,59,106,58,105);
		ctx.lineTo(58,105);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(55,84);
		ctx.bezierCurveTo(55,96,56,109,54,121);
		ctx.bezierCurveTo(54,108,54,98,54,88);
		ctx.bezierCurveTo(54,89,54,88,55,84);
		ctx.lineTo(55,84);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(56,120);
		ctx.bezierCurveTo(56,118,55,119,54,119);
		ctx.bezierCurveTo(54,118,54,117,54,117);
		ctx.bezierCurveTo(56,117,57,114,58,113);
		ctx.bezierCurveTo(58,113,58,113,58,113);
		ctx.bezierCurveTo(58,114,58,116,58,118);
		ctx.bezierCurveTo(57,118,57,120,56,120);
		ctx.lineTo(56,120);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(54,107);
		ctx.bezierCurveTo(56,106,56,104,58,103);
		ctx.bezierCurveTo(59,104,58,106,58,108);
		ctx.bezierCurveTo(57,109,56,111,54,112);
		ctx.bezierCurveTo(54,110,54,109,54,107);
		ctx.lineTo(54,107);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(58,81);
		ctx.bezierCurveTo(58,81,58,81,58,81);
		ctx.bezierCurveTo(58,83,58,84,58,86);
		ctx.bezierCurveTo(57,88,56,90,54,92);
		ctx.bezierCurveTo(53,90,54,88,53,87);
		ctx.bezierCurveTo(53,86,54,86,54,85);
		ctx.bezierCurveTo(55,84,56,82,58,81);
		ctx.lineTo(58,81);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(58,92);
		ctx.bezierCurveTo(58,92,58,92,58,92);
		ctx.bezierCurveTo(58,92,58,92,58,92);
		ctx.bezierCurveTo(58,93,58,93,57,93);
		ctx.bezierCurveTo(56,94,55,97,53,97);
		ctx.bezierCurveTo(53,97,53,97,53,97);
		ctx.bezierCurveTo(53,97,53,97,53,98);
		ctx.bezierCurveTo(54,99,53,101,54,103);
		ctx.bezierCurveTo(56,101,57,99,58,97);
		ctx.bezierCurveTo(58,95,58,94,58,92);
		ctx.lineTo(58,92);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Polkagris1 ###===---------
		//-------------------------------
		// GroupEnd: Polkagris1
		//-------------------------------



		//---------===### g: Polkagris1_1_ ###===---------
		//-------------------------------
		// Group: Polkagris1_1_
		//-------------------------------
		ctx.fillStyle = "#A1A5B4";
		ctx.beginPath();
		ctx.moveTo(88,103);
		ctx.bezierCurveTo(90,102,88,91,88,89);
		ctx.bezierCurveTo(88,87,89,83,88,82);
		ctx.bezierCurveTo(87,80,85,76,82,79);
		ctx.bezierCurveTo(85,81,84,87,84,90);
		ctx.bezierCurveTo(84,95,84,100,84,105);
		ctx.bezierCurveTo(84,106,84,120,84,120);
		ctx.bezierCurveTo(84,124,85,120,87,123);
		ctx.bezierCurveTo(90,123,88,114,88,113);
		ctx.bezierCurveTo(88,113,88,113,88,113);
		ctx.bezierCurveTo(88,111,89,105,88,103);
		ctx.bezierCurveTo(88,103,89,105,88,103);
		ctx.lineTo(88,103);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(85,83);
		ctx.bezierCurveTo(85,95,86,109,84,121);
		ctx.bezierCurveTo(84,108,84,97,84,87);
		ctx.bezierCurveTo(84,88,85,87,85,83);
		ctx.lineTo(85,83);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(87,118);
		ctx.bezierCurveTo(86,117,85,118,84,118);
		ctx.bezierCurveTo(84,117,84,116,84,116);
		ctx.bezierCurveTo(86,115,87,113,88,111);
		ctx.bezierCurveTo(88,111,88,111,88,111);
		ctx.bezierCurveTo(88,113,88,115,88,117);
		ctx.bezierCurveTo(88,117,87,118,87,118);
		ctx.lineTo(87,118);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(84,106);
		ctx.bezierCurveTo(86,105,87,102,88,101);
		ctx.bezierCurveTo(89,103,88,105,88,107);
		ctx.bezierCurveTo(87,108,86,110,84,111);
		ctx.bezierCurveTo(84,109,84,107,84,106);
		ctx.lineTo(84,106);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(88,80);
		ctx.bezierCurveTo(88,80,88,80,88,80);
		ctx.bezierCurveTo(89,82,88,83,88,85);
		ctx.bezierCurveTo(87,87,86,89,84,90);
		ctx.bezierCurveTo(84,89,84,87,84,85);
		ctx.bezierCurveTo(83,85,84,85,84,84);
		ctx.bezierCurveTo(86,83,86,81,88,80);
		ctx.lineTo(88,80);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#DD473E";
		ctx.beginPath();
		ctx.moveTo(88,91);
		ctx.bezierCurveTo(88,91,88,91,88,91);
		ctx.bezierCurveTo(88,91,88,91,88,91);
		ctx.bezierCurveTo(88,91,88,92,88,92);
		ctx.bezierCurveTo(86,93,86,96,84,96);
		ctx.bezierCurveTo(84,96,84,96,84,96);
		ctx.bezierCurveTo(84,96,84,96,84,96);
		ctx.bezierCurveTo(84,98,84,100,84,101);
		ctx.bezierCurveTo(86,100,87,98,88,96);
		ctx.bezierCurveTo(88,94,89,93,88,91);
		ctx.lineTo(88,91);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Polkagris1_1_ ###===---------
		//-------------------------------
		// GroupEnd: Polkagris1_1_
		//-------------------------------



		//---------===### g: TrappFan ###===---------
		//-------------------------------
		// Group: TrappFan
		//-------------------------------
		ctx.fillStyle = "#473534";
		ctx.beginPath();
		ctx.moveTo(66,135);
		ctx.bezierCurveTo(65,135,65,135,65,135);
		ctx.bezierCurveTo(64,135,64,134,64,134);
		ctx.bezierCurveTo(65,133,64,131,64,130);
		ctx.bezierCurveTo(64,130,64,129,63,129);
		ctx.bezierCurveTo(63,129,62,129,62,128);
		ctx.bezierCurveTo(62,127,62,125,62,124);
		ctx.bezierCurveTo(62,123,62,123,61,123);
		ctx.lineTo(61,123);
		ctx.bezierCurveTo(61,123,61,123,61,123);
		ctx.bezierCurveTo(60,123,60,122,59,122);
		ctx.bezierCurveTo(59,122,59,122,59,122);
		ctx.lineTo(55,121);
		ctx.bezierCurveTo(55,122,55,123,55,124);
		ctx.bezierCurveTo(55,126,55,132,55,134);
		ctx.bezierCurveTo(57,135,61,136,62,137);
		ctx.bezierCurveTo(64,138,66,139,68,140);
		ctx.bezierCurveTo(68,139,68,137,68,136);
		ctx.bezierCurveTo(67,135,66,135,66,135);
		ctx.lineTo(66,135);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#E6B08E";
		ctx.beginPath();
		ctx.moveTo(55,121);
		ctx.lineTo(84,120);
		ctx.bezierCurveTo(84,120,85,120,85,120);
		ctx.bezierCurveTo(93,122,93,122,92,123);
		ctx.bezierCurveTo(92,123,63,124,62,124);
		ctx.bezierCurveTo(62,123,56,121,56,121);
		ctx.bezierCurveTo(56,121,55,121,55,121);
		ctx.lineTo(55,121);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(93,125);
		ctx.bezierCurveTo(93,123,93,123,92,123);
		ctx.bezierCurveTo(92,123,92,123,92,123);
		ctx.bezierCurveTo(92,123,92,123,91,123);
		ctx.bezierCurveTo(91,123,90,123,90,123);
		ctx.bezierCurveTo(90,123,89,123,89,123);
		ctx.bezierCurveTo(85,123,80,124,75,124);
		ctx.bezierCurveTo(75,124,75,124,75,124);
		ctx.bezierCurveTo(75,124,74,124,74,124);
		ctx.bezierCurveTo(69,124,64,124,62,124);
		ctx.bezierCurveTo(62,126,62,127,62,128);
		ctx.bezierCurveTo(62,129,63,130,63,130);
		ctx.bezierCurveTo(63,129,64,129,64,129);
		ctx.bezierCurveTo(68,129,84,128,85,128);
		ctx.bezierCurveTo(86,128,92,128,92,128);
		ctx.bezierCurveTo(93,127,92,126,93,125);
		ctx.lineTo(93,125);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#E6B08E";
		ctx.beginPath();
		ctx.moveTo(64,130);
		ctx.bezierCurveTo(63,130,64,129,63,129);
		ctx.bezierCurveTo(64,129,64,129,65,129);
		ctx.bezierCurveTo(74,129,83,128,92,128);
		ctx.bezierCurveTo(92,128,94,129,94,129);
		ctx.bezierCurveTo(85,130,71,130,64,130);
		ctx.lineTo(64,130);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(95,131);
		ctx.bezierCurveTo(95,130,95,129,94,129);
		ctx.bezierCurveTo(94,129,91,129,91,129);
		ctx.bezierCurveTo(86,129,76,130,76,129);
		ctx.bezierCurveTo(70,130,65,130,64,130);
		ctx.bezierCurveTo(64,131,64,133,64,134);
		ctx.bezierCurveTo(64,135,65,135,66,135);
		ctx.bezierCurveTo(66,135,67,135,67,135);
		ctx.bezierCurveTo(71,135,74,134,78,134);
		ctx.bezierCurveTo(78,134,79,134,80,134);
		ctx.bezierCurveTo(81,134,82,134,83,134);
		ctx.bezierCurveTo(83,134,84,134,84,134);
		ctx.bezierCurveTo(85,134,86,134,86,134);
		ctx.bezierCurveTo(88,134,90,134,92,134);
		ctx.bezierCurveTo(92,133,92,133,92,134);
		ctx.bezierCurveTo(93,134,94,134,94,134);
		ctx.bezierCurveTo(95,133,95,132,95,131);
		ctx.lineTo(95,131);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#E6B08E";
		ctx.beginPath();
		ctx.moveTo(68,136);
		ctx.bezierCurveTo(67,136,66,135,65,135);
		ctx.bezierCurveTo(65,135,66,135,67,135);
		ctx.bezierCurveTo(76,135,85,134,94,134);
		ctx.bezierCurveTo(94,134,96,134,96,135);
		ctx.bezierCurveTo(87,135,75,136,68,136);
		ctx.lineTo(68,136);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#957080";
		ctx.beginPath();
		ctx.moveTo(97,137);
		ctx.bezierCurveTo(97,136,97,135,96,135);
		ctx.bezierCurveTo(95,134,88,135,88,135);
		ctx.bezierCurveTo(84,135,80,136,80,135);
		ctx.bezierCurveTo(74,136,69,136,68,136);
		ctx.bezierCurveTo(68,137,68,139,68,140);
		ctx.bezierCurveTo(68,141,69,141,69,141);
		ctx.bezierCurveTo(69,141,71,141,71,141);
		ctx.bezierCurveTo(75,141,77,140,81,140);
		ctx.bezierCurveTo(82,140,83,140,84,140);
		ctx.bezierCurveTo(85,140,86,140,87,140);
		ctx.bezierCurveTo(87,140,88,140,88,140);
		ctx.bezierCurveTo(89,140,89,140,90,140);
		ctx.bezierCurveTo(92,140,96,140,96,140);
		ctx.bezierCurveTo(97,138,97,139,97,137);
		ctx.lineTo(97,137);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: TrappFan ###===---------
		//-------------------------------
		// GroupEnd: TrappFan
		//-------------------------------



		//---------===### polygon: Dorr ###===---------
		ctx.fillStyle = "#370409";
		ctx.beginPath();
		ctx.moveTo(84,121);
		ctx.lineTo(58, 121);
		ctx.lineTo(58, 80);
		ctx.lineTo(84, 80);
		ctx.lineTo(84,121);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### g: Juleljus ###===---------
		//-------------------------------
		// Group: Juleljus
		//-------------------------------
		ctx.fillStyle = lightColor(lightframe);

		ctx.beginPath();
		ctx.moveTo(79,64);
		ctx.bezierCurveTo(78,64,78,63,78,63);
		ctx.bezierCurveTo(77,62,78,62,78,62);
		ctx.bezierCurveTo(79,61,80,62,80,62);
		ctx.bezierCurveTo(80,63,80,63,79,64);
		ctx.lineTo(79,64);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(76,61);
		ctx.bezierCurveTo(76,62,76,62,75,62);
		ctx.bezierCurveTo(75,62,74,62,74,62);
		ctx.bezierCurveTo(74,61,74,61,75,61);
		ctx.bezierCurveTo(76,60,76,61,76,61);
		ctx.lineTo(76,61);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(62,54);
		ctx.bezierCurveTo(61,54,61,54,60,54);
		ctx.bezierCurveTo(60,53,59,53,59,52);
		ctx.bezierCurveTo(60,52,61,51,61,52);
		ctx.bezierCurveTo(62,52,62,53,62,54);
		ctx.lineTo(62,54);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = lightColor(lightframe+1);
		ctx.beginPath();
		ctx.moveTo(58,51);
		ctx.bezierCurveTo(58,52,57,52,57,52);
		ctx.bezierCurveTo(56,51,56,50,57,50);
		ctx.bezierCurveTo(57,50,58,50,58,50);
		ctx.bezierCurveTo(58,51,58,51,58,51);
		ctx.lineTo(58,51);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(31,68);
		ctx.bezierCurveTo(30,68,30,68,30,68);
		ctx.bezierCurveTo(30,68,29,68,29,67);
		ctx.bezierCurveTo(29,67,29,67,30,66);
		ctx.bezierCurveTo(30,66,30,66,31,66);
		ctx.bezierCurveTo(31,67,31,67,31,68);
		ctx.lineTo(31,68);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(37,64);
		ctx.bezierCurveTo(36,64,36,64,35,64);
		ctx.bezierCurveTo(35,64,35,63,35,63);
		ctx.bezierCurveTo(35,63,36,63,36,63);
		ctx.bezierCurveTo(36,62,37,62,37,62);
		ctx.bezierCurveTo(37,63,37,63,38,63);
		ctx.bezierCurveTo(37,64,37,64,37,64);
		ctx.lineTo(37,64);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(73,60);
		ctx.bezierCurveTo(73,60,73,61,72,61);
		ctx.bezierCurveTo(72,61,71,61,71,60);
		ctx.bezierCurveTo(71,59,71,59,72,59);
		ctx.bezierCurveTo(73,59,73,59,73,60);
		ctx.lineTo(73,60);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(41,60);
		ctx.bezierCurveTo(41,58,42,58,43,59);
		ctx.bezierCurveTo(44,59,44,60,43,60);
		ctx.bezierCurveTo(42,60,42,60,41,60);
		ctx.lineTo(41,60);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(53,51);
		ctx.bezierCurveTo(53,51,53,50,53,50);
		ctx.bezierCurveTo(54,50,54,49,55,50);
		ctx.bezierCurveTo(55,50,55,51,55,51);
		ctx.bezierCurveTo(54,52,53,51,53,51);
		ctx.lineTo(53,51);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(35,66);
		ctx.bezierCurveTo(33,66,33,67,33,65);
		ctx.bezierCurveTo(34,65,34,65,35,66);
		ctx.lineTo(35,66);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = lightColor(lightframe+2);
		ctx.beginPath();
		ctx.moveTo(86,65);
		ctx.bezierCurveTo(86,64,86,64,85,64);
		ctx.bezierCurveTo(85,63,85,63,87,62);
		ctx.bezierCurveTo(87,63,87,63,87,63);
		ctx.bezierCurveTo(87,64,87,64,86,65);
		ctx.lineTo(86,65);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(50,55);
		ctx.bezierCurveTo(49,56,48,56,47,55);
		ctx.bezierCurveTo(47,55,47,54,48,54);
		ctx.bezierCurveTo(49,54,49,54,50,55);
		ctx.lineTo(50,55);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(40,62);
		ctx.bezierCurveTo(39,62,39,61,39,61);
		ctx.bezierCurveTo(40,61,40,61,40,62);
		ctx.lineTo(40,62);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = lightColor(lightframe+3);
		ctx.beginPath();
		ctx.moveTo(83,63);
		ctx.bezierCurveTo(83,64,83,64,82,64);
		ctx.bezierCurveTo(82,64,81,64,81,64);
		ctx.bezierCurveTo(81,63,82,63,82,63);
		ctx.bezierCurveTo(83,63,83,63,83,63);
		ctx.lineTo(83,63);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(67,56);
		ctx.bezierCurveTo(67,57,67,57,66,57);
		ctx.bezierCurveTo(66,57,65,57,65,56);
		ctx.bezierCurveTo(65,56,65,55,66,55);
		ctx.bezierCurveTo(67,55,67,56,67,56);
		ctx.lineTo(67,56);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(69,59);
		ctx.bezierCurveTo(68,59,68,59,68,59);
		ctx.bezierCurveTo(68,58,68,58,69,58);
		ctx.bezierCurveTo(69,57,70,58,70,58);
		ctx.bezierCurveTo(70,59,69,59,69,59);
		ctx.lineTo(69,59);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(46,56);
		ctx.bezierCurveTo(47,57,47,58,45,58);
		ctx.bezierCurveTo(45,58,45,58,45,58);
		ctx.bezierCurveTo(44,57,45,57,45,56);
		ctx.bezierCurveTo(45,56,46,56,46,56);
		ctx.lineTo(46,56);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(53,53);
		ctx.bezierCurveTo(51,54,51,54,50,53);
		ctx.bezierCurveTo(51,51,51,51,53,53);
		ctx.lineTo(53,53);
		ctx.globalAlpha = 1.0;
		ctx.fill();


		//---------===### eg: Juleljus ###===---------
		//-------------------------------
		// GroupEnd: Julejus
		//-------------------------------



		//---------===### eg: Huset ###===---------
		//-------------------------------
		// GroupEnd: Huset
		//-------------------------------

}

function drawSnowman()
{
		//---------===### g: Snogubb ###===---------
		//-------------------------------
		// Group: Snogubb
		//-------------------------------
		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(1,139);
		ctx.bezierCurveTo(4,134,8,133,13,135);
		ctx.bezierCurveTo(14,136,15,137,15,138);
		ctx.bezierCurveTo(16,142,15,144,10,146);
		ctx.bezierCurveTo(7,146,5,145,2,144);
		ctx.bezierCurveTo(1,142,0,141,1,139);
		ctx.lineTo(1,139);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#7E9BB6";
		ctx.beginPath();
		ctx.moveTo(37,143);
		ctx.bezierCurveTo(41,148,47,148,53,146);
		ctx.bezierCurveTo(51,149,47,148,44,148);
		ctx.bezierCurveTo(40,149,37,148,33,148);
		ctx.bezierCurveTo(31,147,31,146,33,145);
		ctx.bezierCurveTo(34,144,35,143,37,143);
		ctx.lineTo(37,143);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#7E9BB6";
		ctx.beginPath();
		ctx.moveTo(2,144);
		ctx.bezierCurveTo(5,145,7,146,10,146);
		ctx.bezierCurveTo(8,148,5,147,2,146);
		ctx.bezierCurveTo(-0,146,1,145,2,144);
		ctx.lineTo(2,144);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(56,141);
		ctx.bezierCurveTo(55,142,54,143,53,145);
		ctx.bezierCurveTo(53,145,52,145,52,145);
		ctx.lineTo(52,145);
		ctx.bezierCurveTo(46,147,41,147,36,143);
		ctx.bezierCurveTo(36,141,35,139,35,137);
		ctx.bezierCurveTo(36,136,38,134,38,130);
		ctx.bezierCurveTo(38,129,38,127,38,126);
		ctx.bezierCurveTo(39,125,40,125,41,124);
		ctx.bezierCurveTo(42,123,42,123,42,122);
		ctx.bezierCurveTo(40,119,41,117,45,116);
		ctx.bezierCurveTo(49,117,50,118,48,123);
		ctx.bezierCurveTo(48,123,49,123,49,124);
		ctx.bezierCurveTo(52,126,53,128,52,131);
		ctx.bezierCurveTo(51,133,54,134,55,136);
		ctx.bezierCurveTo(55,137,55,139,56,141);
		ctx.lineTo(56,141);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(51,126);
		ctx.bezierCurveTo(51,126,51,126,52,126);
		ctx.bezierCurveTo(51,126,51,126,51,126);
		ctx.bezierCurveTo(51,126,51,126,51,126);
		ctx.lineTo(51,126);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(40,137);
		ctx.bezierCurveTo(46,136,46,137,40,133);
		ctx.bezierCurveTo(39,132,41,130,41,129);
		ctx.bezierCurveTo(42,128,43,127,44,127);
		ctx.bezierCurveTo(45,126,45,126,45,125);
		ctx.bezierCurveTo(43,122,44,120,47,119);
		ctx.bezierCurveTo(48,119,48,119,49,119);
		ctx.bezierCurveTo(49,118,48,117,44,116);
		ctx.bezierCurveTo(41,117,40,119,41,122);
		ctx.bezierCurveTo(42,123,42,123,41,124);
		ctx.bezierCurveTo(40,125,39,125,38,126);
		ctx.bezierCurveTo(38,127,37,129,37,130);
		ctx.bezierCurveTo(38,134,36,136,35,137);
		ctx.bezierCurveTo(34,139,36,141,36,143);
		ctx.bezierCurveTo(37,144,38,144,39,145);
		ctx.bezierCurveTo(38,143,38,137,40,137);
		ctx.lineTo(40,137);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg:  ###===---------
		//-------------------------------
		// GroupEnd: 
		//-------------------------------



		//---------===### eg: Snogubb ###===---------
		//-------------------------------
		// GroupEnd: Snogubb
		//-------------------------------					
}

function drawBackground()
{
		//---------===### polygon: BackgroundFill ###===---------
		ctx.fillStyle = "#02335C";
		ctx.beginPath();
		ctx.moveTo(433,148);
		ctx.lineTo(0, 150);
		ctx.lineTo(0, -2);
		ctx.lineTo(433, -4);
		ctx.lineTo(433,148);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### g: Hill ###===---------
		//-------------------------------
		// Group: Hill
		//-------------------------------
		ctx.fillStyle = "#265EB2";
		ctx.beginPath();
		ctx.moveTo(15,73);
		ctx.bezierCurveTo(15,74,16,74,17,74);
		ctx.bezierCurveTo(18,75,19,74,20,75);
		ctx.bezierCurveTo(24,76,28,77,32,78);
		ctx.bezierCurveTo(32,78,33,78,34,78);
		ctx.bezierCurveTo(35,78,35,79,36,79);
		ctx.bezierCurveTo(37,79,37,79,38,79);
		ctx.bezierCurveTo(39,80,41,80,43,80);
		ctx.bezierCurveTo(44,82,45,81,46,82);
		ctx.bezierCurveTo(53,84,59,86,66,88);
		ctx.bezierCurveTo(67,88,68,89,68,89);
		ctx.bezierCurveTo(71,90,73,92,76,91);
		ctx.lineTo(76,91);
		ctx.bezierCurveTo(76,94,79,93,81,94);
		ctx.bezierCurveTo(81,95,82,95,83,95);
		ctx.bezierCurveTo(84,96,84,95,85,96);
		ctx.bezierCurveTo(87,97,89,98,92,99);
		ctx.bezierCurveTo(92,99,92,99,92,99);
		ctx.bezierCurveTo(94,99,98,101,98,102);
		ctx.bezierCurveTo(98,102,98,102,98,102);
		ctx.bezierCurveTo(104,106,112,112,116,117);
		ctx.lineTo(121,130);
		ctx.lineTo(85,128);
		ctx.lineTo(53,125);
		ctx.bezierCurveTo(52,125,52,125,51,125);
		ctx.bezierCurveTo(51,125,51,125,51,125);
		ctx.lineTo(48,125);
		ctx.lineTo(49,124);
		ctx.bezierCurveTo(47,123,46,123,45,122);
		ctx.bezierCurveTo(45,122,44,122,44,122);
		ctx.lineTo(43,122);
		ctx.lineTo(43,122);
		ctx.bezierCurveTo(42,121,42,121,41,121);
		ctx.bezierCurveTo(39,118,40,118,39,118);
		ctx.bezierCurveTo(39,118,38,117,39,117);
		ctx.bezierCurveTo(39,117,40,116,40,116);
		ctx.bezierCurveTo(41,113,46,113,48,112);
		ctx.bezierCurveTo(49,111,50,111,51,110);
		ctx.bezierCurveTo(52,110,53,110,53,109);
		ctx.bezierCurveTo(53,109,53,109,53,109);
		ctx.bezierCurveTo(53,108,50,107,48,106);
		ctx.bezierCurveTo(48,106,48,106,48,106);
		ctx.bezierCurveTo(48,106,48,106,48,106);
		ctx.bezierCurveTo(47,106,47,106,47,106);
		ctx.bezierCurveTo(46,105,45,105,45,105);
		ctx.bezierCurveTo(40,102,35,100,30,97);
		ctx.bezierCurveTo(30,97,29,97,29,97);
		ctx.lineTo(29,97);
		ctx.bezierCurveTo(28,96,26,95,25,95);
		ctx.lineTo(25,95);
		ctx.bezierCurveTo(24,95,23,94,23,93);
		ctx.bezierCurveTo(23,92,25,92,26,91);
		ctx.bezierCurveTo(26,91,27,91,28,90);
		ctx.bezierCurveTo(32,88,33,87,28,85);
		ctx.bezierCurveTo(26,84,25,82,22,82);
		ctx.bezierCurveTo(23,84,25,85,27,86);
		ctx.bezierCurveTo(30,87,29,88,27,89);
		ctx.bezierCurveTo(25,90,23,91,21,92);
		ctx.bezierCurveTo(20,92,19,93,20,94);
		ctx.bezierCurveTo(22,95,23,96,24,96);
		ctx.bezierCurveTo(24,96,24,96,24,96);
		ctx.bezierCurveTo(26,97,28,99,29,99);
		ctx.bezierCurveTo(29,99,29,99,29,99);
		ctx.bezierCurveTo(31,100,34,101,35,102);
		ctx.bezierCurveTo(39,104,42,106,46,107);
		ctx.bezierCurveTo(46,107,46,107,46,107);
		ctx.bezierCurveTo(47,108,48,109,49,110);
		ctx.bezierCurveTo(48,110,48,110,47,111);
		ctx.bezierCurveTo(45,111,39,112,38,114);
		ctx.bezierCurveTo(35,115,33,116,31,117);
		ctx.bezierCurveTo(31,118,32,118,32,119);
		ctx.bezierCurveTo(33,119,33,120,33,120);
		ctx.bezierCurveTo(22,119,12,120,1,122);
		ctx.bezierCurveTo(1,106,1,89,1,72);
		ctx.bezierCurveTo(6,72,10,73,15,73);
		ctx.lineTo(15,73);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#0C2C60";
		ctx.beginPath();
		ctx.moveTo(18,74);
		ctx.bezierCurveTo(23,76,30,77,35,79);
		ctx.bezierCurveTo(36,72,36,66,31,61);
		ctx.bezierCurveTo(30,61,29,61,29,62);
		ctx.bezierCurveTo(28,66,25,67,21,66);
		ctx.bezierCurveTo(20,65,19,65,18,65);
		ctx.bezierCurveTo(18,68,18,71,18,74);
		ctx.lineTo(18,74);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#042E96";
		ctx.beginPath();
		ctx.moveTo(18,65);
		ctx.bezierCurveTo(19,65,20,65,21,66);
		ctx.bezierCurveTo(25,67,28,66,29,62);
		ctx.bezierCurveTo(29,61,30,61,31,61);
		ctx.bezierCurveTo(30,57,27,59,25,58);
		ctx.bezierCurveTo(24,58,22,58,20,58);
		ctx.bezierCurveTo(19,60,18,63,18,65);
		ctx.lineTo(18,65);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#0C2C60";
		ctx.beginPath();
		ctx.moveTo(20,58);
		ctx.bezierCurveTo(22,58,24,58,25,58);
		ctx.bezierCurveTo(25,55,24,53,24,50);
		ctx.bezierCurveTo(23,50,22,50,20,50);
		ctx.bezierCurveTo(20,53,20,55,20,58);
		ctx.lineTo(20,58);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#042E96";
		ctx.beginPath();
		ctx.moveTo(20,50);
		ctx.bezierCurveTo(22,50,23,50,24,50);
		ctx.bezierCurveTo(24,48,24,47,23,45);
		ctx.bezierCurveTo(23,44,23,43,22,43);
		ctx.bezierCurveTo(21,43,20,44,20,45);
		ctx.bezierCurveTo(20,47,20,48,20,50);
		ctx.lineTo(20,50);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Hill ###===---------
		//-------------------------------
		// GroupEnd: Hill
		//-------------------------------



		//---------===### g: Clouds ###===---------
		//-------------------------------
		// Group: Clouds
		//-------------------------------
		ctx.fillStyle = "#032B4E";
		ctx.beginPath();
		ctx.moveTo(63,-1);
		ctx.bezierCurveTo(48,-1,32,-1,17,-1);
		ctx.bezierCurveTo(13,-1,8,-1,3,-1);
		ctx.lineTo(0,-1);
		ctx.lineTo(1,2);
		ctx.bezierCurveTo(1,14,1,27,1,39);
		ctx.bezierCurveTo(2,39,3,39,3,41);
		ctx.bezierCurveTo(4,42,5,42,6,41);
		ctx.bezierCurveTo(8,39,11,38,12,34);
		ctx.bezierCurveTo(12,32,14,30,17,31);
		ctx.bezierCurveTo(20,32,20,32,20,29);
		ctx.bezierCurveTo(20,27,19,25,21,25);
		ctx.bezierCurveTo(24,25,26,25,26,21);
		ctx.bezierCurveTo(27,21,28,22,28,22);
		ctx.lineTo(28,22);
		ctx.bezierCurveTo(28,21,29,21,29,20);
		ctx.lineTo(29,20);
		ctx.lineTo(32,18);
		ctx.bezierCurveTo(33,18,34,19,35,19);
		ctx.bezierCurveTo(38,19,41,20,42,15);
		ctx.bezierCurveTo(45,15,46,9,51,11);
		ctx.bezierCurveTo(51,11,52,11,52,10);
		ctx.bezierCurveTo(52,7,56,3,58,4);
		ctx.bezierCurveTo(63,5,63,2,63,-1);
		ctx.lineTo(63,-1);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#032B4E";
		ctx.beginPath();
		ctx.moveTo(432,-2);
		ctx.bezierCurveTo(429,-2,277,-2,275,-2);
		ctx.bezierCurveTo(233,-2,191,-2,149,-2);
		ctx.bezierCurveTo(148,1,150,1,151,3);
		ctx.bezierCurveTo(152,4,155,3,154,6);
		ctx.bezierCurveTo(154,6,155,7,155,6);
		ctx.bezierCurveTo(157,4,158,6,159,7);
		ctx.bezierCurveTo(160,9,162,10,164,12);
		ctx.bezierCurveTo(165,12,166,12,166,13);
		ctx.bezierCurveTo(166,16,167,16,170,15);
		ctx.bezierCurveTo(170,16,169,16,169,17);
		ctx.bezierCurveTo(172,19,175,22,178,25);
		ctx.bezierCurveTo(179,26,181,27,182,29);
		ctx.bezierCurveTo(183,31,184,33,186,34);
		ctx.bezierCurveTo(186,33,187,33,188,35);
		ctx.bezierCurveTo(188,35,188,35,188,35);
		ctx.lineTo(188,35);
		ctx.bezierCurveTo(187,36,186,36,185,36);
		ctx.bezierCurveTo(185,37,184,36,184,37);
		ctx.bezierCurveTo(186,37,187,39,188,43);
		ctx.lineTo(217,39);
		ctx.lineTo(224,43);
		ctx.lineTo(249,40);
		ctx.bezierCurveTo(252,40,254,40,256,40);
		ctx.bezierCurveTo(260,39,265,40,269,39);
		ctx.bezierCurveTo(274,39,428,37,433,38);
		ctx.bezierCurveTo(433,35,433,32,433,29);
		ctx.bezierCurveTo(422,29,351,34,340,33);
		ctx.bezierCurveTo(340,33,251,30,251,30);
		ctx.bezierCurveTo(262,28,422,25,433,23);
		ctx.bezierCurveTo(433,15,433,8,433,0);
		ctx.bezierCurveTo(433,-0,433,-1,433,-1);
		ctx.lineTo(433,-2);
		ctx.lineTo(432,-2);
		ctx.lineTo(432,-2);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Clouds ###===---------
		//-------------------------------
		// GroupEnd: Clouds
		//-------------------------------



		//---------===### g: Moon ###===---------
		//-------------------------------
		// Group: Moon
		//-------------------------------
		ctx.fillStyle = "#FBF3B6";
		ctx.beginPath();
		ctx.moveTo(117,23);
		ctx.bezierCurveTo(117,24,117,25,116,25);
		ctx.bezierCurveTo(114,27,99,27,89,28);
		ctx.bezierCurveTo(89,28,89,29,89,29);
		ctx.bezierCurveTo(89,37,96,44,104,44);
		ctx.bezierCurveTo(112,44,119,37,119,29);
		ctx.bezierCurveTo(119,27,118,25,117,23);
		ctx.lineTo(117,23);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#C1B885";
		ctx.beginPath();
		ctx.moveTo(117,23);
		ctx.bezierCurveTo(114,18,109,15,104,15);
		ctx.bezierCurveTo(96,15,90,21,89,28);
		ctx.bezierCurveTo(99,27,114,27,116,25);
		ctx.bezierCurveTo(117,25,117,24,117,23);
		ctx.lineTo(117,23);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Moon ###===---------
		//-------------------------------
		// GroupEnd: Moon
		//-------------------------------


}

function drawForeground()
{
		//---------===### g: Foreground ###===---------
		//-------------------------------
		// Group: Foreground
		//-------------------------------
		ctx.fillStyle = "#BBCFEF";
		ctx.globalAlpha = 1.0;
		ctx.beginPath();
		ctx.moveTo(1,128);
		ctx.lineTo(216,128);
		ctx.lineTo(216,158);
		ctx.lineTo(1,158);
		ctx.lineTo(1,128);
		ctx.fill();


		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(1,141);
		ctx.bezierCurveTo(20,137,38,140,56,143);
		ctx.bezierCurveTo(45,144,30,146,4,142);
		ctx.bezierCurveTo(4,141,1,142,1,141);
		ctx.lineTo(1,141);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#7E9BB6";
		ctx.beginPath();
		ctx.moveTo(121,127);
		ctx.bezierCurveTo(131,125,141,122,153,123);
		ctx.bezierCurveTo(160,124,165,127,171,130);
		ctx.lineTo(171,130);
		ctx.bezierCurveTo(171,130,171,130,171,130);
		ctx.bezierCurveTo(169,131,166,131,164,132);
		ctx.bezierCurveTo(157,132,150,132,144,132);
		ctx.bezierCurveTo(138,132,132,132,126,132);
		ctx.bezierCurveTo(117,133,109,132,101,132);
		ctx.bezierCurveTo(105,131,108,130,112,129);
		ctx.bezierCurveTo(113,129,115,128,121,127);
		ctx.lineTo(121,127);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(145,139);
		ctx.bezierCurveTo(151,138,158,138,164,138);
		ctx.bezierCurveTo(166,139,168,138,171,138);
		ctx.bezierCurveTo(185,139,199,140,213,142);
		ctx.bezierCurveTo(187,147,161,146,133,142);
		ctx.bezierCurveTo(137,141,139,140,142,140);
		ctx.bezierCurveTo(144,140,145,140,145,139);
		ctx.lineTo(145,139);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(70,131);
		ctx.bezierCurveTo(72,131,74,131,75,131);
		ctx.bezierCurveTo(77,131,80,131,82,131);
		ctx.bezierCurveTo(82,131,83,131,84,131);
		ctx.lineTo(84,131);
		ctx.bezierCurveTo(88,131,93,132,97,132);
		ctx.bezierCurveTo(106,133,116,135,125,137);
		ctx.bezierCurveTo(126,137,127,137,129,138);
		ctx.bezierCurveTo(67,141,43,135,58,137);
		ctx.bezierCurveTo(60,135,61,135,62,134);
		ctx.bezierCurveTo(65,133,68,133,70,131);
		ctx.lineTo(70,131);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#7E9BB6";
		ctx.beginPath();
		ctx.moveTo(70,131);
		ctx.bezierCurveTo(68,133,65,133,62,134);
		ctx.bezierCurveTo(50,134,37,134,24,134);
		ctx.bezierCurveTo(17,134,11,134,4,132);
		ctx.bezierCurveTo(13,130,21,129,30,128);
		ctx.bezierCurveTo(31,128,32,128,33,127);
		ctx.bezierCurveTo(44,128,56,128,67,130);
		ctx.bezierCurveTo(68,131,69,131,70,131);
		ctx.lineTo(70,131);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Foreground ###===---------
		//-------------------------------
		// GroupEnd: Foreground
		//-------------------------------
}

function drawDrift()
{
		//---------===### g: Snodriva ###===---------
		//-------------------------------
		// Group: Snodriva
		//-------------------------------
		ctx.fillStyle = "#EBEEF5";
		ctx.beginPath();
		ctx.moveTo(4,135);
		ctx.bezierCurveTo(9,138,13,139,18,140);
		ctx.bezierCurveTo(20,141,23,141,26,142);
		ctx.bezierCurveTo(25,143,24,142,23,142);
		ctx.bezierCurveTo(25,143,27,143,29,143);
		ctx.lineTo(29,143);
		ctx.lineTo(43,143);
		ctx.bezierCurveTo(43,143,44,143,45,142);
		ctx.bezierCurveTo(43,142,42,141,40,141);
		ctx.bezierCurveTo(43,139,46,138,49,137);
		ctx.bezierCurveTo(49,136,50,136,50,136);
		ctx.bezierCurveTo(48,134,46,133,44,132);
		ctx.bezierCurveTo(43,132,43,131,42,131);
		ctx.bezierCurveTo(41,130,39,129,37,128);
		ctx.bezierCurveTo(32,126,28,125,23,125);
		ctx.bezierCurveTo(23,125,22,125,22,125);
		ctx.bezierCurveTo(22,125,21,125,21,125);
		ctx.bezierCurveTo(21,125,20,125,20,125);
		ctx.bezierCurveTo(19,125,18,125,17,125);
		ctx.lineTo(17,125);
		ctx.bezierCurveTo(17,125,16,126,15,126);
		ctx.bezierCurveTo(14,126,12,127,11,127);
		ctx.bezierCurveTo(11,127,10,127,10,127);
		ctx.bezierCurveTo(8,128,6,129,4,130);
		ctx.bezierCurveTo(4,130,4,130,4,130);
		ctx.bezierCurveTo(1,133,1,133,4,135);
		ctx.lineTo(4,135);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(56,139);
		ctx.bezierCurveTo(58,140,61,141,63,142);
		ctx.bezierCurveTo(63,142,64,142,64,142);
		ctx.bezierCurveTo(64,143,63,143,63,143);
		ctx.bezierCurveTo(55,143,47,143,39,143);
		ctx.bezierCurveTo(39,143,39,143,38,142);
		ctx.bezierCurveTo(40,142,41,142,43,142);
		ctx.bezierCurveTo(41,141,39,140,37,139);
		ctx.bezierCurveTo(40,138,43,137,46,135);
		ctx.bezierCurveTo(46,135,47,135,47,134);
		ctx.bezierCurveTo(49,135,51,137,53,137);
		ctx.bezierCurveTo(54,138,55,139,56,139);
		ctx.lineTo(56,139);
		ctx.globalAlpha = 1.0;
		ctx.fill();

}

function drawTree()
{

		//---------===### g: Julgran ###===---------
		//-------------------------------
		// Group: Julgran
		//-------------------------------
		ctx.fillStyle = "#2F3E1B";
		ctx.beginPath();
		ctx.moveTo(119,113);
		ctx.bezierCurveTo(119,113,118,113,118,113);
		ctx.bezierCurveTo(118,113,118,113,118,113);
		ctx.bezierCurveTo(118,113,118,113,118,113);
		ctx.bezierCurveTo(120,113,120,111,125,113);
		ctx.bezierCurveTo(125,111,118,108,118,106);
		ctx.bezierCurveTo(117,105,118,104,118,103);
		ctx.bezierCurveTo(118,103,118,103,118,103);
		ctx.bezierCurveTo(119,103,120,104,121,104);
		ctx.bezierCurveTo(121,103,121,103,121,103);
		ctx.bezierCurveTo(121,102,119,101,118,100);
		ctx.bezierCurveTo(118,100,118,100,118,99);
		ctx.bezierCurveTo(117,99,117,99,116,99);
		ctx.bezierCurveTo(116,98,116,98,115,98);
		ctx.bezierCurveTo(115,98,115,98,115,98);
		ctx.bezierCurveTo(115,97,114,96,113,95);
		ctx.bezierCurveTo(113,95,114,95,114,95);
		ctx.bezierCurveTo(115,95,116,94,116,94);
		ctx.bezierCurveTo(117,92,116,92,115,91);
		ctx.bezierCurveTo(115,91,114,90,114,90);
		ctx.bezierCurveTo(115,88,114,88,113,88);
		ctx.bezierCurveTo(113,87,112,87,112,87);
		ctx.bezierCurveTo(112,87,112,87,111,86);
		ctx.bezierCurveTo(112,86,112,85,113,84);
		ctx.bezierCurveTo(112,83,112,82,111,80);
		ctx.bezierCurveTo(112,80,113,82,114,81);
		ctx.bezierCurveTo(113,79,113,77,112,75);
		ctx.bezierCurveTo(113,75,113,74,113,74);
		ctx.bezierCurveTo(112,74,112,72,110,72);
		ctx.bezierCurveTo(110,71,109,70,109,69);
		ctx.bezierCurveTo(109,68,108,66,108,65);
		ctx.bezierCurveTo(107,64,107,62,106,62);
		ctx.bezierCurveTo(107,69,108,76,108,76);
		ctx.lineTo(107,83);
		ctx.lineTo(108,88);
		ctx.lineTo(107,95);
		ctx.lineTo(105,104);
		ctx.lineTo(109,109);
		ctx.lineTo(105,116);
		ctx.lineTo(105,120);
		ctx.bezierCurveTo(106,120,107,120,107,120);
		ctx.bezierCurveTo(110,120,112,122,114,120);
		ctx.bezierCurveTo(115,121,117,120,118,120);
		ctx.lineTo(118,120);
		ctx.lineTo(119,120);
		ctx.bezierCurveTo(119,120,119,120,119,119);
		ctx.bezierCurveTo(121,121,125,123,126,123);
		ctx.bezierCurveTo(126,121,119,115,119,113);
		ctx.lineTo(119,113);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#3F5C1B";
		ctx.beginPath();
		ctx.moveTo(109,109);
		ctx.lineTo(105,104);
		ctx.lineTo(107,95);
		ctx.lineTo(108,88);
		ctx.lineTo(107,83);
		ctx.lineTo(108,76);
		ctx.bezierCurveTo(108,76,107,69,106,62);
		ctx.bezierCurveTo(106,62,106,62,106,62);
		ctx.bezierCurveTo(104,62,105,64,105,66);
		ctx.bezierCurveTo(105,66,105,66,105,66);
		ctx.bezierCurveTo(104,69,103,72,103,75);
		ctx.bezierCurveTo(102,76,102,76,102,78);
		ctx.bezierCurveTo(102,77,103,77,103,77);
		ctx.bezierCurveTo(103,77,103,78,103,78);
		ctx.lineTo(101,80);
		ctx.bezierCurveTo(102,80,102,80,103,80);
		ctx.bezierCurveTo(103,79,103,79,103,79);
		ctx.bezierCurveTo(103,80,102,81,102,82);
		ctx.bezierCurveTo(101,83,100,84,101,86);
		ctx.bezierCurveTo(100,88,100,89,100,90);
		ctx.bezierCurveTo(101,90,101,89,102,89);
		ctx.bezierCurveTo(102,90,101,90,102,91);
		ctx.bezierCurveTo(100,92,99,93,100,95);
		ctx.bezierCurveTo(99,97,98,98,97,101);
		ctx.bezierCurveTo(99,99,100,98,102,97);
		ctx.bezierCurveTo(101,99,100,101,99,102);
		ctx.bezierCurveTo(97,104,92,107,92,108);
		ctx.bezierCurveTo(93,109,95,108,97,108);
		ctx.bezierCurveTo(97,108,97,108,97,108);
		ctx.bezierCurveTo(97,109,97,109,97,110);
		ctx.bezierCurveTo(97,110,96,110,96,110);
		ctx.bezierCurveTo(96,112,89,115,89,117);
		ctx.bezierCurveTo(94,116,94,118,96,117);
		ctx.bezierCurveTo(96,117,96,117,97,117);
		ctx.bezierCurveTo(97,117,97,117,97,117);
		ctx.bezierCurveTo(98,118,99,119,100,120);
		ctx.bezierCurveTo(102,119,103,120,105,120);
		ctx.lineTo(105,116);
		ctx.lineTo(109,109);
		ctx.lineTo(109,109);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(99,102);
		ctx.bezierCurveTo(99,104,99,105,101,104);
		ctx.bezierCurveTo(103,104,105,103,108,103);
		ctx.bezierCurveTo(104,106,101,108,97,107);
		ctx.bezierCurveTo(92,106,97,105,97,104);
		ctx.bezierCurveTo(98,104,98,103,99,102);
		ctx.lineTo(99,102);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(102,90);
		ctx.bezierCurveTo(103,91,105,90,106,90);
		ctx.bezierCurveTo(106,89,105,90,105,89);
		ctx.bezierCurveTo(108,89,111,89,113,87);
		ctx.bezierCurveTo(114,87,115,87,114,89);
		ctx.bezierCurveTo(111,89,108,91,106,93);
		ctx.bezierCurveTo(104,94,102,95,100,94);
		ctx.bezierCurveTo(99,93,100,91,102,90);
		ctx.lineTo(102,90);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(109,68);
		ctx.bezierCurveTo(107,69,106,66,105,65);
		ctx.bezierCurveTo(105,65,105,65,105,65);
		ctx.bezierCurveTo(105,64,104,62,106,61);
		ctx.bezierCurveTo(107,61,107,63,108,64);
		ctx.bezierCurveTo(108,65,109,67,109,68);
		ctx.lineTo(109,68);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(112,74);
		ctx.bezierCurveTo(109,74,107,73,105,70);
		ctx.bezierCurveTo(106,71,108,72,109,72);
		ctx.bezierCurveTo(109,72,110,72,110,71);
		ctx.bezierCurveTo(111,71,112,73,113,73);
		ctx.bezierCurveTo(113,74,112,74,112,74);
		ctx.lineTo(112,74);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(103,74);
		ctx.bezierCurveTo(104,74,105,73,106,74);
		ctx.bezierCurveTo(105,75,104,76,103,77);
		ctx.bezierCurveTo(103,77,102,77,102,77);
		ctx.bezierCurveTo(102,76,102,75,103,74);
		ctx.lineTo(103,74);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(118,102);
		ctx.bezierCurveTo(113,102,109,102,106,99);
		ctx.bezierCurveTo(107,99,108,99,109,99);
		ctx.bezierCurveTo(109,99,110,99,111,100);
		ctx.bezierCurveTo(113,100,114,100,115,99);
		ctx.bezierCurveTo(116,99,116,99,116,98);
		ctx.bezierCurveTo(116,98,117,98,118,98);
		ctx.bezierCurveTo(118,99,118,100,118,102);
		ctx.bezierCurveTo(118,102,118,102,118,102);
		ctx.lineTo(118,102);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(115,91);
		ctx.bezierCurveTo(116,91,117,92,116,93);
		ctx.bezierCurveTo(116,93,115,94,114,95);
		ctx.bezierCurveTo(114,95,113,95,113,95);
		ctx.bezierCurveTo(111,95,110,94,108,93);
		ctx.bezierCurveTo(111,92,114,94,115,91);
		ctx.lineTo(115,91);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(119,113);
		ctx.bezierCurveTo(117,115,114,114,111,115);
		ctx.bezierCurveTo(112,115,112,116,113,116);
		ctx.bezierCurveTo(112,116,111,116,110,117);
		ctx.bezierCurveTo(108,117,107,117,105,117);
		ctx.bezierCurveTo(106,117,106,117,106,117);
		ctx.bezierCurveTo(105,117,104,117,102,117);
		ctx.bezierCurveTo(101,117,100,116,101,114);
		ctx.bezierCurveTo(100,115,99,116,98,116);
		ctx.bezierCurveTo(95,117,95,119,98,121);
		ctx.bezierCurveTo(100,121,103,122,105,121);
		ctx.bezierCurveTo(110,120,117,119,121,117);
		ctx.bezierCurveTo(121,115,119,114,119,113);
		ctx.lineTo(119,113);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		ctx.fillStyle = "#BBCFEF";
		ctx.beginPath();
		ctx.moveTo(109,82);
		ctx.bezierCurveTo(109,82,108,82,108,82);
		ctx.bezierCurveTo(108,82,107,82,107,82);
		ctx.lineTo(107,82);
		ctx.bezierCurveTo(105,82,104,83,102,81);
		ctx.bezierCurveTo(101,83,100,84,101,85);
		ctx.bezierCurveTo(101,85,102,85,102,85);
		ctx.bezierCurveTo(103,85,104,84,105,84);
		ctx.lineTo(105,84);
		ctx.lineTo(105,84);
		ctx.bezierCurveTo(106,84,107,83,107,83);
		ctx.bezierCurveTo(108,83,109,83,109,82);
		ctx.lineTo(109,82);
		ctx.globalAlpha = 1.0;
		ctx.fill();

		//---------===### eg: Julgran ###===---------
		//-------------------------------
		// GroupEnd: Julgran
		//-------------------------------


}

function stand(frame)
{
			//console.log(frame);
			if(frame==0){
					ctx.fillStyle = "#5F230F";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-17,-20,-18,-17,-18,-16);
					ctx.bezierCurveTo(-19,-16,-21,-16,-22,-14);
					ctx.bezierCurveTo(-22,-12,-20,-11,-19,-10);
					ctx.bezierCurveTo(-16,-7,-19,-1,-14,-0);
					ctx.bezierCurveTo(-15,-0,-16,0,-17,-0);
					ctx.bezierCurveTo(-17,1,-18,2,-19,3);
					ctx.bezierCurveTo(-19,4,-19,7,-18,8);
					ctx.bezierCurveTo(-17,9,-16,10,-14,10);
					ctx.bezierCurveTo(-13,12,-14,14,-12,16);
					ctx.bezierCurveTo(-10,19,-6,20,-8,24);
					ctx.bezierCurveTo(-9,26,-13,28,-9,30);
					ctx.bezierCurveTo(-5,31,7,32,8,27);
					ctx.bezierCurveTo(8,25,7,24,7,23);
					ctx.bezierCurveTo(6,21,7,18,8,16);
					ctx.bezierCurveTo(8,13,10,12,11,10);
					ctx.bezierCurveTo(11,9,11,7,12,7);
					ctx.bezierCurveTo(13,6,15,6,16,6);
					ctx.bezierCurveTo(18,5,20,4,21,2);
					ctx.bezierCurveTo(23,-1,21,-3,20,-5);
					ctx.bezierCurveTo(18,-8,16,-9,13,-10);
					ctx.bezierCurveTo(12,-10,11,-11,10,-12);
					ctx.bezierCurveTo(9,-13,7,-14,6,-15);
					ctx.bezierCurveTo(5,-16,3,-22,1,-22);
					ctx.bezierCurveTo(0,-23,1,-25,0,-27);
					ctx.bezierCurveTo(-1,-29,-4,-30,-7,-30);
					ctx.bezierCurveTo(-10,-30,-13,-28,-16,-28);
					ctx.bezierCurveTo(-17,-28,-19,-27,-19,-25);
					ctx.bezierCurveTo(-19,-22,-18,-22,-17,-20);
					ctx.moveTo(-13,-25);
					ctx.bezierCurveTo(-14,-25,-14,-25,-13,-25);
					ctx.bezierCurveTo(-13,-25,-13,-25,-13,-25);
					ctx.lineTo(-13,-25);
					ctx.moveTo(-14,-25);
					ctx.bezierCurveTo(-14,-25,-14,-25,-14,-25);
					ctx.bezierCurveTo(-14,-25,-14,-25,-14,-25);
					ctx.lineTo(-14,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-5,-12);
					ctx.bezierCurveTo(-4,-10,-4,-9,-6,-8);
					ctx.bezierCurveTo(-10,-7,-12,-3,-14,-0);
					ctx.bezierCurveTo(-14,-0,-15,-0,-15,-0);
					ctx.lineTo(-15,-0);
					ctx.bezierCurveTo(-15,-1,-16,-1,-16,-2);
					ctx.bezierCurveTo(-17,-4,-18,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-18,-11,-18,-11,-17,-12);
					ctx.bezierCurveTo(-16,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-16,-11,-16,-10);
					ctx.bezierCurveTo(-16,-10,-17,-10,-17,-9);
					ctx.bezierCurveTo(-16,-8,-16,-9,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-14,-9);
					ctx.bezierCurveTo(-13,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-13,-9,-15);
					ctx.lineTo(-9,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#581F13";
					ctx.beginPath();
					ctx.moveTo(-15,-18);
					ctx.bezierCurveTo(-15,-19,-15,-19,-14,-19);
					ctx.bezierCurveTo(-13,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-18);
					ctx.lineTo(-15,-18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-15,-12);
					ctx.bezierCurveTo(-14,-11,-15,-10,-14,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-16,-9,-16,-8,-17,-9);
					ctx.bezierCurveTo(-17,-10,-16,-10,-16,-10);
					ctx.bezierCurveTo(-16,-11,-15,-11,-15,-12);
					ctx.lineTo(-15,-12);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#C26734";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-18);
					ctx.bezierCurveTo(-15,-19,-15,-19,-14,-19);
					ctx.bezierCurveTo(-15,-19,-16,-20,-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-17,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-16);
					ctx.bezierCurveTo(-20,-16,-21,-15,-22,-14);
					ctx.bezierCurveTo(-22,-12,-21,-11,-20,-11);
					ctx.bezierCurveTo(-19,-11,-19,-11,-19,-10);
					ctx.bezierCurveTo(-18,-11,-18,-11,-17,-12);
					ctx.bezierCurveTo(-16,-12,-16,-13,-15,-11);
					ctx.bezierCurveTo(-14,-11,-15,-10,-14,-9);
					ctx.bezierCurveTo(-13,-8,-13,-8,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-13,-9,-15);
					ctx.bezierCurveTo(-9,-15,-9,-15,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FBB568";
					ctx.beginPath();
					ctx.moveTo(-18,-14);
					ctx.bezierCurveTo(-19,-13,-19,-13,-20,-13);
					ctx.bezierCurveTo(-20,-13,-21,-14,-20,-14);
					ctx.bezierCurveTo(-20,-15,-20,-15,-19,-15);
					ctx.bezierCurveTo(-19,-15,-18,-14,-18,-14);
					ctx.lineTo(-18,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-17,-19,-18,-19,-17,-18);
					ctx.bezierCurveTo(-17,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-16,-16,-15,-16,-16);
					ctx.bezierCurveTo(-16,-16,-15,-19,-16,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-18,-18);
					ctx.bezierCurveTo(-17,-18,-17,-17,-17,-16);
					ctx.bezierCurveTo(-17,-16,-18,-16,-18,-17);
					ctx.bezierCurveTo(-18,-17,-17,-18,-18,-18);
					ctx.lineTo(-18,-18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FAA959";
					ctx.beginPath();
					ctx.moveTo(-15,-14);
					ctx.bezierCurveTo(-15,-15,-15,-15,-15,-15);
					ctx.bezierCurveTo(-14,-16,-14,-16,-13,-16);
					ctx.bezierCurveTo(-13,-15,-12,-15,-13,-14);
					ctx.bezierCurveTo(-13,-13,-14,-13,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.lineTo(-15,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-14,-0);
					ctx.bezierCurveTo(-14,-0,-15,-0,-15,-0);
					ctx.bezierCurveTo(-16,-0,-16,1,-17,-1);
					ctx.bezierCurveTo(-18,-3,-18,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-18,-11,-17,-12,-16,-13);
					ctx.bezierCurveTo(-16,-12,-15,-12,-15,-12);
					ctx.bezierCurveTo(-15,-11,-16,-10,-16,-9);
					ctx.bezierCurveTo(-16,-9,-15,-9,-14,-9);
					ctx.bezierCurveTo(-13,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-13,-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-14,-7,-13);
					ctx.bezierCurveTo(-7,-13,-8,-13,-8,-12);
					ctx.bezierCurveTo(-9,-10,-11,-9,-12,-8);
					ctx.bezierCurveTo(-12,-7,-13,-7,-14,-8);
					ctx.bezierCurveTo(-15,-9,-16,-8,-16,-7);
					ctx.bezierCurveTo(-16,-6,-16,-6,-16,-5);
					ctx.bezierCurveTo(-16,-3,-15,-2,-13,-2);
					ctx.bezierCurveTo(-13,-1,-14,-1,-14,-0);
					ctx.lineTo(-14,-0);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#89A0C9";
					ctx.beginPath();
					ctx.moveTo(10,-10);
					ctx.bezierCurveTo(10,-13,9,-14,6,-13);
					ctx.bezierCurveTo(5,-13,5,-12,5,-13);
					ctx.bezierCurveTo(5,-13,5,-13,5,-13);
					ctx.bezierCurveTo(4,-11,4,-10,6,-8);
					ctx.bezierCurveTo(7,-7,8,-8,9,-9);
					ctx.bezierCurveTo(9,-9,10,-9,10,-9);
					ctx.bezierCurveTo(10,-9,10,-9,10,-10);
					ctx.bezierCurveTo(10,-10,10,-10,10,-10);
					ctx.lineTo(10,-10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(7,-13);
					ctx.bezierCurveTo(8,-12,9,-13,9,-12);
					ctx.bezierCurveTo(9,-11,8,-10,8,-10);
					ctx.bezierCurveTo(7,-10,6,-11,6,-12);
					ctx.bezierCurveTo(6,-12,7,-13,7,-13);
					ctx.lineTo(7,-13);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(9,-10);
					ctx.bezierCurveTo(9,-9,9,-9,9,-9);
					ctx.bezierCurveTo(9,-9,9,-9,9,-9);
					ctx.bezierCurveTo(8,-8,7,-7,6,-8);
					ctx.bezierCurveTo(4,-10,4,-11,5,-13);
					ctx.bezierCurveTo(5,-13,5,-13,5,-13);
					ctx.bezierCurveTo(5,-12,5,-11,6,-10);
					ctx.bezierCurveTo(6,-9,7,-9,8,-10);
					ctx.bezierCurveTo(8,-10,9,-11,9,-10);
					ctx.lineTo(9,-10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-0,-21);
					ctx.bezierCurveTo(2,-20,2,-18,3,-16);
					ctx.bezierCurveTo(3,-16,5,-14,4,-13);
					ctx.bezierCurveTo(4,-13,3,-13,3,-13);
					ctx.bezierCurveTo(-0,-16,-5,-20,-8,-21);
					ctx.bezierCurveTo(-8,-21,-8,-21,-8,-21);
					ctx.bezierCurveTo(-9,-23,-10,-24,-11,-25);
					ctx.bezierCurveTo(-12,-26,-13,-26,-12,-27);
					ctx.bezierCurveTo(-12,-28,-11,-29,-9,-29);
					ctx.bezierCurveTo(-8,-29,-6,-30,-4,-28);
					ctx.bezierCurveTo(-4,-28,-3,-28,-2,-28);
					ctx.bezierCurveTo(-2,-28,-2,-28,-2,-27);
					ctx.bezierCurveTo(-1,-26,-2,-26,-2,-24);
					ctx.bezierCurveTo(-2,-23,-1,-21,-0,-21);
					ctx.lineTo(-0,-21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-4,-27);
					ctx.bezierCurveTo(-4,-26,-4,-26,-4,-25);
					ctx.bezierCurveTo(-3,-25,-3,-24,-3,-24);
					ctx.bezierCurveTo(-6,-22,-8,-23,-10,-25);
					ctx.bezierCurveTo(-10,-25,-11,-25,-11,-26);
					ctx.bezierCurveTo(-12,-26,-12,-27,-12,-27);
					ctx.bezierCurveTo(-11,-28,-11,-28,-10,-29);
					ctx.bezierCurveTo(-8,-29,-6,-28,-4,-27);
					ctx.lineTo(-4,-27);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#BC2426";
					ctx.beginPath();
					ctx.moveTo(-7,10);
					ctx.bezierCurveTo(-8,10,-8,10,-9,10);
					ctx.bezierCurveTo(-10,10,-11,9,-12,8);
					ctx.bezierCurveTo(-12,6,-12,5,-13,4);
					ctx.bezierCurveTo(-13,4,-13,4,-13,3);
					ctx.bezierCurveTo(-12,2,-11,0,-10,-2);
					ctx.bezierCurveTo(-10,-3,-9,-5,-7,-6);
					ctx.bezierCurveTo(-6,-6,-4,-7,-2,-8);
					ctx.bezierCurveTo(-1,-9,0,-8,1,-8);
					ctx.bezierCurveTo(4,-6,6,-4,7,-1);
					ctx.bezierCurveTo(7,1,7,2,4,3);
					ctx.bezierCurveTo(4,3,3,3,3,3);
					ctx.bezierCurveTo(2,2,2,2,2,2);
					ctx.bezierCurveTo(2,-0,0,-1,-1,-1);
					ctx.bezierCurveTo(-2,-2,-2,-2,-3,-1);
					ctx.bezierCurveTo(-3,-1,-3,-0,-2,0);
					ctx.bezierCurveTo(-1,1,-1,2,-1,4);
					ctx.bezierCurveTo(-1,4,-1,5,-1,5);
					ctx.bezierCurveTo(-2,6,-1,7,-2,8);
					ctx.bezierCurveTo(-3,8,-4,8,-5,9);
					ctx.bezierCurveTo(-6,9,-6,9,-7,10);
					ctx.lineTo(-7,10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-3,-7);
					ctx.bezierCurveTo(-0,-7,1,-6,3,-4);
					ctx.bezierCurveTo(3,-4,4,-3,4,-3);
					ctx.bezierCurveTo(3,-2,3,-3,2,-3);
					ctx.bezierCurveTo(-0,-2,-1,-4,-3,-5);
					ctx.bezierCurveTo(-3,-6,-3,-6,-3,-7);
					ctx.bezierCurveTo(-3,-7,-3,-7,-3,-7);
					ctx.lineTo(-3,-7);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-9,3);
					ctx.bezierCurveTo(-10,1,-9,-0,-8,-1);
					ctx.bezierCurveTo(-7,-2,-7,-2,-6,-2);
					ctx.bezierCurveTo(-6,-2,-6,-1,-6,-1);
					ctx.bezierCurveTo(-6,0,-6,1,-6,2);
					ctx.bezierCurveTo(-5,3,-7,6,-8,6);
					ctx.bezierCurveTo(-9,6,-9,5,-9,5);
					ctx.bezierCurveTo(-9,4,-9,3,-9,3);
					ctx.lineTo(-9,3);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(11,9);
					ctx.bezierCurveTo(11,9,11,9,11,8);
					ctx.bezierCurveTo(10,8,10,8,9,7);
					ctx.bezierCurveTo(8,7,7,8,6,9);
					ctx.bezierCurveTo(6,9,6,9,6,9);
					ctx.bezierCurveTo(4,9,5,8,6,7);
					ctx.bezierCurveTo(7,6,6,5,6,4);
					ctx.bezierCurveTo(5,3,5,3,4,3);
					ctx.bezierCurveTo(4,3,4,2,4,2);
					ctx.bezierCurveTo(3,2,2,3,1,4);
					ctx.bezierCurveTo(1,4,1,5,0,5);
					ctx.bezierCurveTo(-1,5,-1,7,-2,7);
					ctx.bezierCurveTo(-2,7,-2,8,-2,8);
					ctx.bezierCurveTo(-2,9,-3,9,-3,10);
					ctx.bezierCurveTo(-3,10,-3,11,-4,11);
					ctx.bezierCurveTo(-6,12,-7,13,-10,13);
					ctx.bezierCurveTo(-11,12,-12,13,-11,15);
					ctx.bezierCurveTo(-11,15,-11,15,-11,16);
					ctx.lineTo(-11,16);
					ctx.bezierCurveTo(-9,17,-8,16,-7,16);
					ctx.bezierCurveTo(-1,15,5,14,9,10);
					ctx.bezierCurveTo(10,10,10,10,11,10);
					ctx.bezierCurveTo(11,9,11,9,11,9);
					ctx.lineTo(11,9);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(6,10);
					ctx.bezierCurveTo(7,10,8,9,9,10);
					ctx.bezierCurveTo(7,11,6,12,4,12);
					ctx.bezierCurveTo(1,13,-0,11,-2,10);
					ctx.bezierCurveTo(-2,9,-2,9,-2,9);
					ctx.bezierCurveTo(1,6,2,6,4,10);
					ctx.bezierCurveTo(5,12,5,11,6,10);
					ctx.bezierCurveTo(6,10,6,10,6,10);
					ctx.lineTo(6,10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-3,12);
					ctx.bezierCurveTo(-2,13,0,12,0,14);
					ctx.bezierCurveTo(0,15,-2,15,-3,15);
					ctx.bezierCurveTo(-4,16,-6,16,-8,16);
					ctx.bezierCurveTo(-9,16,-10,15,-9,14);
					ctx.bezierCurveTo(-7,14,-5,13,-3,12);
					ctx.lineTo(-3,12);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(6,7);
					ctx.bezierCurveTo(5,7,5,7,4,7);
					ctx.bezierCurveTo(3,7,2,6,2,5);
					ctx.bezierCurveTo(2,3,3,3,4,4);
					ctx.bezierCurveTo(5,4,6,4,6,4);
					ctx.bezierCurveTo(7,5,7,6,6,7);
					ctx.lineTo(6,7);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(9,-4);
					ctx.bezierCurveTo(9,-5,12,-7,13,-6);
					ctx.bezierCurveTo(15,-6,17,-5,18,-4);
					ctx.bezierCurveTo(19,-2,19,-1,20,0);
					ctx.bezierCurveTo(18,1,18,3,16,3);
					ctx.bezierCurveTo(15,3,14,4,13,4);
					ctx.bezierCurveTo(11,2,10,0,9,-2);
					ctx.bezierCurveTo(9,-2,9,-3,9,-4);
					ctx.lineTo(9,-4);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-2,16);
					ctx.bezierCurveTo(-1,16,-1,16,-1,16);
					ctx.bezierCurveTo(-0,15,1,15,1,16);
					ctx.bezierCurveTo(2,17,3,18,2,19);
					ctx.bezierCurveTo(1,19,-0,19,-1,19);
					ctx.bezierCurveTo(-1,19,-1,18,-1,18);
					ctx.bezierCurveTo(-1,18,-2,17,-2,17);
					ctx.bezierCurveTo(-2,17,-2,16,-2,16);
					ctx.lineTo(-2,16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(-2,16);
					ctx.bezierCurveTo(-1,15,0,15,1,15);
					ctx.bezierCurveTo(3,15,4,16,4,17);
					ctx.bezierCurveTo(4,18,5,19,6,19);
					ctx.bezierCurveTo(6,20,6,21,6,22);
					ctx.bezierCurveTo(6,22,5,22,5,22);
					ctx.bezierCurveTo(4,21,3,20,2,20);
					ctx.bezierCurveTo(2,20,2,20,2,20);
					ctx.bezierCurveTo(3,18,2,17,1,16);
					ctx.bezierCurveTo(1,15,-0,16,-1,16);
					ctx.bezierCurveTo(-1,16,-2,16,-2,16);
					ctx.lineTo(-2,16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(5,21);
					ctx.bezierCurveTo(4,21,4,20,3,20);
					ctx.bezierCurveTo(3,20,3,20,3,20);
					ctx.bezierCurveTo(-3,18,-3,20,-4,20);
					ctx.bezierCurveTo(-5,19,-6,19,-7,20);
					ctx.bezierCurveTo(-7,21,-8,21,-8,22);
					ctx.bezierCurveTo(-7,23,-6,23,-5,22);
					ctx.bezierCurveTo(-5,22,-4,22,-3,22);
					ctx.bezierCurveTo(-1,25,2,24,4,24);
					ctx.bezierCurveTo(5,24,5,23,5,23);
					ctx.bezierCurveTo(6,22,5,21,5,21);
					ctx.lineTo(5,21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(2,20);
					ctx.bezierCurveTo(2,21,2,21,3,21);
					ctx.bezierCurveTo(3,22,4,22,3,23);
					ctx.bezierCurveTo(3,23,2,24,1,24);
					ctx.bezierCurveTo(1,23,-0,23,-1,23);
					ctx.bezierCurveTo(-2,22,-3,22,-3,21);
					ctx.bezierCurveTo(-3,20,-2,20,-1,20);
					ctx.bezierCurveTo(0,20,1,20,2,20);
					ctx.bezierCurveTo(2,20,2,20,2,20);
					ctx.lineTo(2,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-6,19);
					ctx.bezierCurveTo(-6,18,-7,19,-8,18);
					ctx.bezierCurveTo(-8,17,-7,17,-6,16);
					ctx.bezierCurveTo(-6,16,-5,17,-5,18);
					ctx.bezierCurveTo(-5,18,-5,19,-6,19);
					ctx.lineTo(-6,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-14,2);
					ctx.bezierCurveTo(-15,3,-15,4,-15,4);
					ctx.bezierCurveTo(-16,6,-16,6,-18,5);
					ctx.bezierCurveTo(-19,5,-19,4,-18,3);
					ctx.bezierCurveTo(-18,2,-18,2,-17,1);
					ctx.bezierCurveTo(-16,1,-15,1,-14,2);
					ctx.lineTo(-14,2);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#DED524";
					ctx.beginPath();
					ctx.moveTo(-12,9);
					ctx.bezierCurveTo(-12,10,-11,10,-11,10);
					ctx.bezierCurveTo(-11,11,-10,12,-10,13);
					ctx.bezierCurveTo(-10,13,-10,13,-11,13);
					ctx.bezierCurveTo(-11,13,-11,13,-12,13);
					ctx.bezierCurveTo(-12,12,-11,11,-13,11);
					ctx.bezierCurveTo(-14,10,-13,9,-12,9);
					ctx.lineTo(-12,9);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-2,-14);
					ctx.bezierCurveTo(-2,-14,-3,-15,-3,-16);
					ctx.bezierCurveTo(-5,-17,-5,-17,-6,-19);
					ctx.bezierCurveTo(-6,-19,-10,-23,-11,-23);
					ctx.bezierCurveTo(-12,-25,-15,-26,-15,-28);
					ctx.bezierCurveTo(-18,-28,-19,-26,-19,-23);
					ctx.bezierCurveTo(-19,-22,-17,-21,-17,-20);
					ctx.bezierCurveTo(-16,-20,-16,-19,-15,-19);
					ctx.bezierCurveTo(-13,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-9,-15,-9,-15,-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-5,-12);
					ctx.bezierCurveTo(-4,-10,-4,-9,-6,-8);
					ctx.bezierCurveTo(-10,-7,-12,-3,-14,-0);
					ctx.bezierCurveTo(-14,-0,-13,-0,-13,-1);
					ctx.bezierCurveTo(-10,-3,-8,-6,-5,-8);
					ctx.bezierCurveTo(-4,-8,-4,-9,-4,-10);
					ctx.bezierCurveTo(-4,-11,-3,-11,-2,-11);
					ctx.bezierCurveTo(-1,-12,-1,-13,-2,-14);
					ctx.lineTo(-2,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-13,-25);
					ctx.lineTo(-13, -25);
					ctx.lineTo(-13, -25);
					ctx.lineTo(-13,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					//---------===### eg:  ###===---------
					//-------------------------------
					// GroupEnd: 
					//-------------------------------



					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-13,-24);
					ctx.lineTo(-12,-23);
					ctx.bezierCurveTo(-10,-21,-9,-21,-8,-19);
					ctx.bezierCurveTo(-7,-18,-6,-17,-7,-17);
					ctx.bezierCurveTo(-7,-16,-8,-17,-9,-18);
					ctx.bezierCurveTo(-10,-19,-11,-20,-12,-21);
					ctx.bezierCurveTo(-13,-22,-13,-22,-14,-21);
					ctx.bezierCurveTo(-14,-20,-15,-20,-15,-20);
					ctx.bezierCurveTo(-16,-20,-16,-21,-16,-22);
					ctx.bezierCurveTo(-14,-23,-15,-23,-16,-24);
					ctx.bezierCurveTo(-16,-24,-17,-24,-17,-24);
					ctx.bezierCurveTo(-17,-25,-17,-25,-17,-26);
					ctx.bezierCurveTo(-17,-26,-16,-26,-15,-26);
					ctx.bezierCurveTo(-15,-26,-14,-24,-13,-24);
					ctx.lineTo(-13,-24);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-0,24);
					ctx.bezierCurveTo(-3,24,-4,23,-4,23);
					ctx.bezierCurveTo(-5,23,-7,22,-8,24);
					ctx.bezierCurveTo(-8,25,-11,27,-10,28);
					ctx.bezierCurveTo(-10,31,-10,31,-0,30);
					ctx.bezierCurveTo(7,26,7,26,7,26);
					ctx.bezierCurveTo(7,25,8,23,4,24);
					ctx.bezierCurveTo(-0,24,-0,24,-0,24);
					ctx.lineTo(-0,24);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(20,-5);
					ctx.bezierCurveTo(18,-8,16,-9,13,-10);
					ctx.bezierCurveTo(12,-10,11,-11,10,-12);
					ctx.bezierCurveTo(10,-12,10,-12,10,-12);
					ctx.bezierCurveTo(9,-13,9,-13,8,-13);
					ctx.bezierCurveTo(7,-14,6,-14,6,-15);
					ctx.bezierCurveTo(5,-16,3,-22,1,-22);
					ctx.bezierCurveTo(0,-23,1,-25,0,-27);
					ctx.bezierCurveTo(-1,-29,-4,-30,-7,-30);
					ctx.bezierCurveTo(-10,-30,-13,-28,-16,-28);
					ctx.bezierCurveTo(-18,-28,-19,-26,-19,-23);
					ctx.bezierCurveTo(-19,-22,-17,-21,-17,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-19);
					ctx.bezierCurveTo(-18,-19,-18,-19,-18,-19);
					ctx.bezierCurveTo(-18,-18,-18,-18,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-16,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-16);
					ctx.bezierCurveTo(-20,-16,-21,-16,-21,-15);
					ctx.bezierCurveTo(-21,-15,-21,-15,-21,-15);
					ctx.bezierCurveTo(-21,-15,-21,-15,-21,-15);
					ctx.bezierCurveTo(-21,-14,-21,-14,-21,-14);
					ctx.bezierCurveTo(-22,-14,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-14,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-13,-22,-12,-21,-12);
					ctx.bezierCurveTo(-21,-11,-20,-11,-20,-11);
					ctx.bezierCurveTo(-19,-11,-19,-10,-19,-10);
					ctx.bezierCurveTo(-18,-9,-18,-9,-18,-8);
					ctx.bezierCurveTo(-18,-8,-18,-8,-18,-8);
					ctx.bezierCurveTo(-18,-6,-18,-3,-17,-1);
					ctx.bezierCurveTo(-17,-0,-17,-0,-17,-0);
					ctx.bezierCurveTo(-17,-0,-17,-0,-17,-0);
					ctx.bezierCurveTo(-17,1,-18,2,-19,3);
					ctx.bezierCurveTo(-19,4,-19,7,-18,8);
					ctx.bezierCurveTo(-17,9,-16,10,-14,10);
					ctx.bezierCurveTo(-13,12,-14,14,-12,16);
					ctx.bezierCurveTo(-11,18,-8,19,-8,21);
					ctx.bezierCurveTo(-8,21,-8,21,-8,22);
					ctx.bezierCurveTo(-8,22,-8,22,-8,22);
					ctx.bezierCurveTo(-8,22,-8,23,-8,24);
					ctx.bezierCurveTo(-9,26,-13,28,-9,30);
					ctx.bezierCurveTo(-5,31,7,32,8,27);
					ctx.bezierCurveTo(8,25,7,24,7,23);
					ctx.bezierCurveTo(6,21,7,18,8,16);
					ctx.bezierCurveTo(8,14,10,12,11,10);
					ctx.bezierCurveTo(11,10,11,10,11,10);
					ctx.bezierCurveTo(11,9,11,9,11,9);
					ctx.bezierCurveTo(11,9,11,9,11,9);
					ctx.bezierCurveTo(11,8,11,7,12,7);
					ctx.bezierCurveTo(13,6,15,6,16,6);
					ctx.bezierCurveTo(18,5,20,4,21,2);
					ctx.bezierCurveTo(23,-1,21,-3,20,-5);
					ctx.lineTo(20,-5);
					ctx.globalAlpha = 1.0;
					ctx.stroke();
		}else if(frame==4){

					ctx.fillStyle = "#5F230F";
					ctx.beginPath();
					ctx.moveTo(21,-8);
					ctx.bezierCurveTo(20,-10,17,-12,15,-13);
					ctx.bezierCurveTo(12,-14,8,-13,5,-14);
					ctx.bezierCurveTo(3,-14,6,-17,7,-18);
					ctx.bezierCurveTo(7,-19,8,-21,9,-22);
					ctx.bezierCurveTo(9,-22,10,-23,10,-23);
					ctx.bezierCurveTo(11,-24,12,-25,12,-26);
					ctx.bezierCurveTo(12,-29,8,-30,7,-28);
					ctx.bezierCurveTo(6,-27,7,-25,5,-25);
					ctx.bezierCurveTo(2,-25,0,-27,-2,-28);
					ctx.bezierCurveTo(-6,-30,-17,-31,-19,-26);
					ctx.lineTo(-19,-25);
					ctx.bezierCurveTo(-19,-24,-19,-24,-19,-23);
					ctx.bezierCurveTo(-19,-23,-18,-22,-18,-21);
					ctx.bezierCurveTo(-17,-20,-18,-20,-18,-19);
					ctx.bezierCurveTo(-18,-16,-20,-16,-21,-15);
					ctx.bezierCurveTo(-23,-14,-20,-11,-19,-10);
					ctx.bezierCurveTo(-17,-9,-18,-8,-18,-5);
					ctx.bezierCurveTo(-18,-4,-21,-4,-20,-2);
					ctx.bezierCurveTo(-20,-2,-22,2,-20,6);
					ctx.bezierCurveTo(-18,8,-19,7,-16,7);
					ctx.bezierCurveTo(-15,7,-15,6,-14,7);
					ctx.bezierCurveTo(-14,7,-13,7,-13,7);
					ctx.bezierCurveTo(-14,8,-15,9,-14,10);
					ctx.bezierCurveTo(-15,10,-15,11,-15,11);
					ctx.bezierCurveTo(-13,13,-12,14,-14,16);
					ctx.bezierCurveTo(-14,16,-14,17,-14,17);
					ctx.bezierCurveTo(-14,20,-16,22,-19,22);
					ctx.bezierCurveTo(-20,22,-22,23,-22,24);
					ctx.bezierCurveTo(-23,25,-22,26,-21,27);
					ctx.bezierCurveTo(-20,28,-18,30,-16,30);
					ctx.bezierCurveTo(-14,30,-11,31,-9,31);
					ctx.bezierCurveTo(-9,29,-7,27,-7,25);
					ctx.bezierCurveTo(-7,25,-7,25,-7,25);
					ctx.bezierCurveTo(-7,25,-7,24,-7,23);
					ctx.bezierCurveTo(-7,23,-7,23,-7,22);
					ctx.bezierCurveTo(-7,20,-5,17,-3,17);
					ctx.bezierCurveTo(0,16,2,15,5,15);
					ctx.bezierCurveTo(5,15,6,15,6,15);
					ctx.bezierCurveTo(7,15,7,15,7,15);
					ctx.bezierCurveTo(7,15,8,15,8,15);
					ctx.bezierCurveTo(8,15,8,15,8,15);
					ctx.bezierCurveTo(9,20,17,19,16,13);
					ctx.bezierCurveTo(16,13,16,13,16,12);
					ctx.bezierCurveTo(15,11,14,10,13,9);
					ctx.bezierCurveTo(12,9,12,8,12,8);
					ctx.bezierCurveTo(12,7,16,6,17,5);
					ctx.bezierCurveTo(22,2,23,-3,21,-8);
					ctx.lineTo(21,-8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-5,-12);
					ctx.bezierCurveTo(-4,-10,-4,-9,-6,-8);
					ctx.bezierCurveTo(-10,-7,-12,-3,-15,-0);
					ctx.bezierCurveTo(-15,-0,-15,-0,-15,-0);
					ctx.lineTo(-15,-0);
					ctx.bezierCurveTo(-15,-1,-16,-1,-16,-2);
					ctx.bezierCurveTo(-17,-4,-18,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-10);
					ctx.bezierCurveTo(-19,-11,-18,-11,-17,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-11);
					ctx.bezierCurveTo(-15,-11,-16,-11,-16,-10);
					ctx.bezierCurveTo(-16,-10,-17,-10,-17,-9);
					ctx.bezierCurveTo(-16,-8,-16,-9,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-14,-9);
					ctx.bezierCurveTo(-14,-8,-13,-8,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-13,-9,-15);
					ctx.lineTo(-9,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#581F13";
					ctx.beginPath();
					ctx.moveTo(-15,-18);
					ctx.bezierCurveTo(-15,-18,-15,-19,-15,-19);
					ctx.bezierCurveTo(-13,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-18);
					ctx.lineTo(-15,-18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-15,-11);
					ctx.bezierCurveTo(-15,-11,-15,-10,-14,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-16,-9,-16,-8,-17,-9);
					ctx.bezierCurveTo(-17,-10,-16,-10,-16,-10);
					ctx.bezierCurveTo(-16,-11,-15,-11,-15,-11);
					ctx.lineTo(-15,-11);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#C26734";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-18);
					ctx.bezierCurveTo(-15,-18,-15,-19,-15,-19);
					ctx.bezierCurveTo(-16,-19,-16,-20,-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-17,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-16);
					ctx.bezierCurveTo(-20,-16,-21,-15,-22,-14);
					ctx.bezierCurveTo(-22,-12,-21,-11,-20,-11);
					ctx.bezierCurveTo(-20,-11,-19,-10,-19,-10);
					ctx.bezierCurveTo(-19,-11,-18,-11,-17,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-11);
					ctx.bezierCurveTo(-14,-11,-15,-10,-14,-9);
					ctx.bezierCurveTo(-14,-8,-13,-8,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-12,-9,-15);
					ctx.bezierCurveTo(-9,-15,-10,-15,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FBB568";
					ctx.beginPath();
					ctx.moveTo(-19,-14);
					ctx.bezierCurveTo(-19,-13,-19,-13,-20,-13);
					ctx.bezierCurveTo(-20,-13,-21,-14,-21,-14);
					ctx.bezierCurveTo(-20,-15,-20,-15,-19,-15);
					ctx.bezierCurveTo(-19,-15,-19,-14,-19,-14);
					ctx.lineTo(-19,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-18,-18);
					ctx.bezierCurveTo(-17,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-16,-16,-15,-16,-16);
					ctx.bezierCurveTo(-16,-16,-15,-19,-16,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-18,-18);
					ctx.bezierCurveTo(-17,-18,-17,-17,-17,-16);
					ctx.bezierCurveTo(-17,-16,-18,-16,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-18,-18,-18);
					ctx.lineTo(-18,-18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FAA959";
					ctx.beginPath();
					ctx.moveTo(-15,-14);
					ctx.bezierCurveTo(-15,-15,-15,-15,-15,-15);
					ctx.bezierCurveTo(-14,-16,-14,-16,-13,-16);
					ctx.bezierCurveTo(-13,-15,-12,-15,-13,-14);
					ctx.bezierCurveTo(-13,-13,-14,-13,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.lineTo(-15,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-14,-0);
					ctx.bezierCurveTo(-15,-0,-15,-0,-15,-0);
					ctx.bezierCurveTo(-16,-0,-16,1,-17,-1);
					ctx.bezierCurveTo(-18,-3,-18,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-10);
					ctx.bezierCurveTo(-18,-11,-17,-12,-16,-12);
					ctx.bezierCurveTo(-16,-12,-15,-12,-15,-12);
					ctx.bezierCurveTo(-15,-11,-16,-10,-17,-9);
					ctx.bezierCurveTo(-16,-9,-15,-9,-14,-9);
					ctx.bezierCurveTo(-13,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-9,-13,-9,-15);
					ctx.bezierCurveTo(-8,-14,-8,-14,-7,-13);
					ctx.bezierCurveTo(-7,-13,-8,-13,-8,-12);
					ctx.bezierCurveTo(-9,-10,-11,-9,-12,-8);
					ctx.bezierCurveTo(-13,-7,-13,-7,-14,-8);
					ctx.bezierCurveTo(-16,-9,-16,-8,-17,-7);
					ctx.bezierCurveTo(-17,-6,-17,-6,-16,-5);
					ctx.bezierCurveTo(-16,-3,-15,-2,-14,-2);
					ctx.bezierCurveTo(-13,-1,-14,-1,-14,-0);
					ctx.lineTo(-14,-0);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-2,-14);
					ctx.bezierCurveTo(-2,-14,-3,-15,-3,-16);
					ctx.bezierCurveTo(-5,-17,-6,-18,-7,-20);
					ctx.bezierCurveTo(-7,-20,-7,-20,-7,-20);
					ctx.bezierCurveTo(-8,-21,-8,-22,-9,-23);
					ctx.bezierCurveTo(-10,-24,-13,-25,-15,-25);
					ctx.bezierCurveTo(-18,-25,-19,-26,-19,-23);
					ctx.bezierCurveTo(-19,-22,-17,-21,-17,-20);
					ctx.bezierCurveTo(-16,-20,-16,-19,-15,-19);
					ctx.bezierCurveTo(-13,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-9,-15,-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-5,-12);
					ctx.bezierCurveTo(-4,-10,-4,-9,-6,-8);
					ctx.bezierCurveTo(-9,-7,-11,-6,-13,-3);
					ctx.bezierCurveTo(-14,-4,-14,-4,-14,-5);
					ctx.bezierCurveTo(-15,-5,-17,-6,-18,-6);
					ctx.bezierCurveTo(-19,-6,-21,-5,-21,-4);
					ctx.bezierCurveTo(-22,-2,-21,1,-19,1);
					ctx.bezierCurveTo(-18,1,-16,1,-15,1);
					ctx.bezierCurveTo(-15,0,-13,-1,-13,-1);
					ctx.bezierCurveTo(-11,-3,-8,-6,-5,-8);
					ctx.bezierCurveTo(-4,-8,-4,-9,-4,-10);
					ctx.bezierCurveTo(-4,-10,-3,-11,-2,-11);
					ctx.bezierCurveTo(-1,-12,-1,-13,-2,-14);
					ctx.lineTo(-2,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#89A0C9";
					ctx.beginPath();
					ctx.moveTo(12,-26);
					ctx.bezierCurveTo(12,-29,11,-30,8,-29);
					ctx.bezierCurveTo(8,-29,7,-28,7,-29);
					ctx.bezierCurveTo(7,-28,7,-28,7,-28);
					ctx.bezierCurveTo(6,-27,6,-25,8,-24);
					ctx.bezierCurveTo(9,-23,10,-23,11,-24);
					ctx.bezierCurveTo(12,-24,12,-25,12,-25);
					ctx.bezierCurveTo(12,-25,12,-25,12,-25);
					ctx.bezierCurveTo(12,-26,12,-26,12,-26);
					ctx.lineTo(12,-26);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(10,-28);
					ctx.bezierCurveTo(10,-28,11,-29,11,-27);
					ctx.bezierCurveTo(11,-27,11,-26,10,-26);
					ctx.bezierCurveTo(9,-26,8,-27,8,-27);
					ctx.bezierCurveTo(8,-28,9,-28,10,-28);
					ctx.lineTo(10,-28);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(11,-25);
					ctx.bezierCurveTo(11,-25,11,-25,11,-25);
					ctx.bezierCurveTo(11,-25,11,-24,11,-24);
					ctx.bezierCurveTo(10,-23,9,-23,8,-24);
					ctx.bezierCurveTo(6,-25,6,-27,7,-28);
					ctx.bezierCurveTo(7,-28,7,-28,7,-28);
					ctx.bezierCurveTo(7,-27,7,-26,8,-25);
					ctx.bezierCurveTo(9,-25,9,-24,10,-25);
					ctx.bezierCurveTo(10,-26,11,-26,11,-25);
					ctx.lineTo(11,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-11,-25);
					ctx.bezierCurveTo(-12,-26,-12,-25,-13,-26);
					ctx.bezierCurveTo(-14,-26,-15,-27,-15,-27);
					ctx.bezierCurveTo(-14,-29,-12,-29,-11,-29);
					ctx.bezierCurveTo(-8,-29,-7,-29,-4,-28);
					ctx.bezierCurveTo(-1,-26,1,-23,6,-24);
					ctx.bezierCurveTo(6,-24,7,-24,7,-23);
					ctx.bezierCurveTo(5,-21,3,-19,0,-18);
					ctx.bezierCurveTo(-1,-17,-2,-19,-4,-19);
					ctx.bezierCurveTo(-6,-20,-7,-22,-7,-22);
					ctx.bezierCurveTo(-7,-22,-9,-25,-11,-25);
					ctx.lineTo(-11,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(9,1);
					ctx.bezierCurveTo(7,1,5,0,4,-1);
					ctx.bezierCurveTo(2,-3,0,-5,0,-8);
					ctx.bezierCurveTo(0,-9,-0,-9,-1,-9);
					ctx.bezierCurveTo(-2,-10,-2,-11,-1,-12);
					ctx.bezierCurveTo(-0,-13,0,-13,1,-12);
					ctx.bezierCurveTo(2,-11,3,-12,3,-12);
					ctx.bezierCurveTo(8,-13,12,-13,16,-11);
					ctx.bezierCurveTo(19,-9,19,-6,17,-4);
					ctx.bezierCurveTo(16,-3,14,-3,16,-1);
					ctx.bezierCurveTo(16,-1,16,-0,15,-0);
					ctx.bezierCurveTo(15,0,15,0,14,-0);
					ctx.bezierCurveTo(13,-1,13,-1,12,0);
					ctx.bezierCurveTo(11,1,10,0,9,1);
					ctx.lineTo(9,1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-10,-21);
					ctx.bezierCurveTo(-9,-21,-9,-20,-8,-20);
					ctx.bezierCurveTo(-8,-19,-8,-19,-8,-18);
					ctx.bezierCurveTo(-8,-18,-9,-18,-9,-19);
					ctx.bezierCurveTo(-11,-19,-12,-20,-14,-21);
					ctx.bezierCurveTo(-15,-21,-15,-22,-16,-22);
					ctx.bezierCurveTo(-17,-23,-18,-23,-17,-24);
					ctx.bezierCurveTo(-17,-25,-16,-24,-16,-24);
					ctx.bezierCurveTo(-13,-24,-12,-22,-10,-21);
					ctx.lineTo(-10,-21);
					ctx.lineTo(-10,-21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-14,-0);
					ctx.bezierCurveTo(-13,-4,-12,3,-11,-1);
					ctx.bezierCurveTo(-11,-2,-9,-4,-9,-4);
					ctx.bezierCurveTo(-9,-5,-4,-8,-4,-8);
					ctx.bezierCurveTo(-2,-9,1,-6,0,-1);
					ctx.bezierCurveTo(-0,2,-3,1,-3,-0);
					ctx.bezierCurveTo(-4,-1,-4,-6,-6,-3);
					ctx.bezierCurveTo(-8,1,-11,7,-15,1);
					ctx.bezierCurveTo(-16,0,-15,0,-14,-0);
					ctx.lineTo(-14,-0);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#BC2426";
					ctx.beginPath();
					ctx.moveTo(-3,-8);
					ctx.bezierCurveTo(-0,-7,1,-5,1,-3);
					ctx.bezierCurveTo(1,-2,1,-2,1,-2);
					ctx.bezierCurveTo(2,1,1,2,-1,2);
					ctx.bezierCurveTo(-4,2,-4,1,-4,-1);
					ctx.bezierCurveTo(-4,-2,-4,-3,-5,-3);
					ctx.bezierCurveTo(-6,-2,-6,-0,-7,1);
					ctx.bezierCurveTo(-9,4,-9,5,-12,4);
					ctx.bezierCurveTo(-14,3,-15,1,-17,1);
					ctx.bezierCurveTo(-16,1,-15,1,-15,0);
					ctx.bezierCurveTo(-12,3,-10,4,-8,0);
					ctx.bezierCurveTo(-8,-0,-7,-1,-6,-2);
					ctx.bezierCurveTo(-6,-3,-6,-5,-5,-4);
					ctx.bezierCurveTo(-3,-4,-4,-3,-3,-2);
					ctx.bezierCurveTo(-3,-1,-2,1,-1,0);
					ctx.bezierCurveTo(1,0,0,-2,0,-3);
					ctx.bezierCurveTo(0,-3,0,-4,0,-4);
					ctx.bezierCurveTo(-1,-6,-2,-7,-4,-8);
					ctx.bezierCurveTo(-4,-8,-3,-9,-3,-8);
					ctx.lineTo(-3,-8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(9,16);
					ctx.bezierCurveTo(9,16,9,16,8,16);
					ctx.bezierCurveTo(8,16,8,16,7,16);
					ctx.bezierCurveTo(7,16,7,15,7,15);
					ctx.bezierCurveTo(7,13,7,12,7,11);
					ctx.bezierCurveTo(7,11,7,11,7,11);
					ctx.bezierCurveTo(8,10,9,11,10,11);
					ctx.lineTo(10,11);
					ctx.bezierCurveTo(10,13,9,14,9,15);
					ctx.lineTo(9,15);
					ctx.bezierCurveTo(8,15,8,16,9,16);
					ctx.lineTo(9,16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(7,11);
					ctx.bezierCurveTo(4,10,1,11,-2,12);
					ctx.bezierCurveTo(-3,13,-3,13,-2,14);
					ctx.bezierCurveTo(-1,16,1,16,3,15);
					ctx.bezierCurveTo(5,14,6,14,7,14);
					ctx.bezierCurveTo(7,13,7,12,7,11);
					ctx.lineTo(7,11);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(1,15);
					ctx.bezierCurveTo(-0,15,-1,15,-1,14);
					ctx.bezierCurveTo(-1,13,-1,13,0,12);
					ctx.bezierCurveTo(2,12,3,11,5,11);
					ctx.bezierCurveTo(5,11,6,11,6,12);
					ctx.bezierCurveTo(6,13,6,13,5,13);
					ctx.bezierCurveTo(4,13,2,15,1,15);
					ctx.lineTo(1,15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(10,8);
					ctx.bezierCurveTo(8,8,6,7,4,5);
					ctx.bezierCurveTo(4,5,3,5,3,5);
					ctx.bezierCurveTo(2,5,1,4,1,3);
					ctx.bezierCurveTo(1,2,-0,2,-1,2);
					ctx.bezierCurveTo(-2,2,-2,3,-2,3);
					ctx.bezierCurveTo(-2,4,-2,5,-3,5);
					ctx.bezierCurveTo(-5,6,-7,6,-8,7);
					ctx.lineTo(-8,7);
					ctx.bezierCurveTo(-9,7,-10,7,-11,8);
					ctx.bezierCurveTo(-11,9,-13,10,-12,12);
					ctx.bezierCurveTo(-12,12,-11,12,-11,12);
					ctx.bezierCurveTo(-10,14,-8,13,-7,12);
					ctx.bezierCurveTo(-3,11,1,9,5,9);
					ctx.bezierCurveTo(6,9,7,9,7,11);
					ctx.bezierCurveTo(8,10,9,11,10,11);
					ctx.bezierCurveTo(9,10,11,9,11,9);
					ctx.bezierCurveTo(11,9,11,8,11,8);
					ctx.bezierCurveTo(11,8,11,8,10,8);
					ctx.lineTo(10,8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-3,6);
					ctx.bezierCurveTo(-2,7,-1,5,1,5);
					ctx.bezierCurveTo(2,6,2,5,3,6);
					ctx.bezierCurveTo(4,6,4,7,4,7);
					ctx.bezierCurveTo(4,8,3,8,3,8);
					ctx.bezierCurveTo(-1,9,-5,10,-8,12);
					ctx.bezierCurveTo(-9,12,-10,13,-11,12);
					ctx.bezierCurveTo(-11,11,-11,10,-10,9);
					ctx.bezierCurveTo(-9,8,-7,8,-6,8);
					ctx.bezierCurveTo(-5,7,-4,7,-3,6);
					ctx.lineTo(-3,6);
					ctx.lineTo(-3,6);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#BC2426";
					ctx.beginPath();
					ctx.moveTo(-14,17);
					ctx.bezierCurveTo(-14,18,-16,20,-16,21);
					ctx.bezierCurveTo(-15,21,-14,22,-14,22);
					ctx.bezierCurveTo(-14,22,-14,22,-14,22);
					ctx.lineTo(-14,22);
					ctx.bezierCurveTo(-14,22,-14,22,-14,22);
					ctx.bezierCurveTo(-14,23,-13,23,-13,23);
					ctx.bezierCurveTo(-13,23,-13,22,-13,22);
					ctx.bezierCurveTo(-13,22,-13,22,-13,22);
					ctx.lineTo(-13,22);
					ctx.bezierCurveTo(-13,22,-13,22,-12,22);
					ctx.bezierCurveTo(-10,21,-9,18,-10,16);
					ctx.bezierCurveTo(-10,14,-12,14,-13,13);
					ctx.bezierCurveTo(-12,15,-15,15,-14,17);
					ctx.bezierCurveTo(-14,17,-14,17,-14,17);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-13,20);
					ctx.lineTo(-13,20);
					ctx.bezierCurveTo(-13,20,-13,20,-13,20);
					ctx.bezierCurveTo(-14,19,-14,18,-14,18);
					ctx.bezierCurveTo(-14,17,-13,17,-14,16);
					ctx.bezierCurveTo(-14,16,-14,16,-14,16);
					ctx.bezierCurveTo(-13,15,-12,14,-11,15);
					ctx.bezierCurveTo(-11,17,-11,18,-13,19);
					ctx.bezierCurveTo(-13,19,-13,19,-13,20);
					ctx.lineTo(-13,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-8,25);
					ctx.bezierCurveTo(-8,27,-9,28,-9,30);
					ctx.bezierCurveTo(-11,30,-16,30,-16,29);
					ctx.bezierCurveTo(-18,29,-19,27,-21,26);
					ctx.bezierCurveTo(-21,26,-22,25,-22,24);
					ctx.bezierCurveTo(-21,23,-20,22,-19,22);
					ctx.bezierCurveTo(-18,22,-18,23,-17,23);
					ctx.bezierCurveTo(-17,23,-17,24,-17,24);
					ctx.bezierCurveTo(-14,26,-11,27,-8,25);
					ctx.lineTo(-8,25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(11,8);
					ctx.bezierCurveTo(11,9,11,9,12,9);
					ctx.bezierCurveTo(14,10,15,12,16,13);
					ctx.bezierCurveTo(17,14,17,16,16,18);
					ctx.bezierCurveTo(15,19,14,19,12,18);
					ctx.bezierCurveTo(11,17,10,17,9,16);
					ctx.bezierCurveTo(9,16,8,16,8,16);
					ctx.bezierCurveTo(8,16,8,16,8,16);
					ctx.bezierCurveTo(8,16,8,15,8,15);
					ctx.lineTo(8,15);
					ctx.bezierCurveTo(9,14,10,13,10,12);
					ctx.bezierCurveTo(9,10,10,9,11,8);
					ctx.lineTo(11,8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-15,-4);
					ctx.bezierCurveTo(-16,-5,-18,-6,-20,-5);
					ctx.bezierCurveTo(-21,-4,-21,-4,-21,-3);
					ctx.bezierCurveTo(-22,-1,-19,0,-17,1);
					ctx.bezierCurveTo(-17,2,-15,3,-14,2);
					ctx.bezierCurveTo(-13,1,-12,1,-12,-1);
					ctx.bezierCurveTo(-13,-2,-12,-2,-13,-3);
					ctx.bezierCurveTo(-15,-4,-15,-4,-15,-4);
					ctx.lineTo(-15,-4);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-17,-1);
					ctx.bezierCurveTo(-17,-1,-18,-1,-19,-1);
					ctx.bezierCurveTo(-20,-1,-21,-2,-20,-3);
					ctx.bezierCurveTo(-20,-5,-19,-5,-18,-4);
					ctx.bezierCurveTo(-18,-4,-17,-4,-17,-4);
					ctx.bezierCurveTo(-16,-2,-15,-2,-17,-1);
					ctx.lineTo(-17,-1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#CADCF0";
					ctx.beginPath();
					ctx.moveTo(-16,1);
					ctx.bezierCurveTo(-15,0,-15,-0,-15,-1);
					ctx.bezierCurveTo(-14,-2,-14,-2,-13,-2);
					ctx.bezierCurveTo(-12,-1,-13,-0,-13,0);
					ctx.bezierCurveTo(-14,1,-15,1,-15,2);
					ctx.bezierCurveTo(-16,2,-16,1,-16,1);
					ctx.lineTo(-16,1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-5,-27);
					ctx.bezierCurveTo(-5,-27,-5,-26,-5,-26);
					ctx.bezierCurveTo(-4,-26,-4,-26,-4,-25);
					ctx.bezierCurveTo(-5,-24,-7,-24,-8,-25);
					ctx.bezierCurveTo(-8,-25,-9,-25,-9,-26);
					ctx.bezierCurveTo(-9,-26,-10,-26,-10,-26);
					ctx.bezierCurveTo(-10,-27,-9,-27,-9,-28);
					ctx.bezierCurveTo(-7,-28,-6,-28,-5,-27);
					ctx.lineTo(-5,-27);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(15,-13);
					ctx.bezierCurveTo(12,-14,9,-13,6,-14);
					ctx.bezierCurveTo(4,-14,6,-17,7,-18);
					ctx.bezierCurveTo(7,-19,9,-21,9,-22);
					ctx.bezierCurveTo(9,-22,10,-23,10,-23);
					ctx.bezierCurveTo(11,-24,11,-24,12,-24);
					ctx.bezierCurveTo(12,-25,12,-25,12,-25);
					ctx.bezierCurveTo(12,-25,12,-25,12,-25);
					ctx.bezierCurveTo(12,-26,12,-26,12,-25);
					ctx.bezierCurveTo(12,-28,12,-29,10,-29);
					ctx.bezierCurveTo(9,-29,9,-29,8,-29);
					ctx.bezierCurveTo(8,-29,8,-29,8,-29);
					ctx.bezierCurveTo(8,-29,8,-29,8,-29);
					ctx.bezierCurveTo(8,-29,7,-29,7,-28);
					ctx.bezierCurveTo(7,-28,7,-28,7,-28);
					ctx.bezierCurveTo(7,-28,6,-27,7,-26);
					ctx.bezierCurveTo(6,-25,6,-25,5,-25);
					ctx.bezierCurveTo(2,-25,1,-27,-2,-28);
					ctx.bezierCurveTo(-6,-30,-16,-31,-18,-26);
					ctx.lineTo(-19,-25);
					ctx.bezierCurveTo(-19,-25,-19,-25,-19,-25);
					ctx.bezierCurveTo(-19,-24,-19,-24,-19,-23);
					ctx.bezierCurveTo(-19,-22,-18,-22,-18,-21);
					ctx.bezierCurveTo(-18,-21,-18,-21,-18,-21);
					ctx.bezierCurveTo(-17,-20,-18,-20,-17,-19);
					ctx.bezierCurveTo(-17,-19,-17,-19,-17,-19);
					ctx.bezierCurveTo(-18,-18,-18,-18,-18,-18);
					ctx.bezierCurveTo(-18,-16,-19,-16,-21,-15);
					ctx.bezierCurveTo(-21,-15,-21,-14,-21,-14);
					ctx.bezierCurveTo(-21,-14,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-12,-21,-11,-19,-11);
					ctx.bezierCurveTo(-19,-11,-19,-11,-19,-11);
					ctx.bezierCurveTo(-19,-10,-19,-10,-19,-10);
					ctx.bezierCurveTo(-19,-10,-19,-10,-19,-10);
					ctx.bezierCurveTo(-18,-10,-18,-9,-18,-8);
					ctx.bezierCurveTo(-18,-7,-18,-7,-18,-6);
					ctx.bezierCurveTo(-19,-6,-20,-5,-21,-4);
					ctx.bezierCurveTo(-22,-2,-21,-1,-21,0);
					ctx.bezierCurveTo(-21,2,-21,3,-19,6);
					ctx.bezierCurveTo(-18,8,-18,7,-16,7);
					ctx.bezierCurveTo(-14,7,-15,6,-14,7);
					ctx.bezierCurveTo(-13,7,-13,7,-13,7);
					ctx.bezierCurveTo(-13,8,-15,9,-14,10);
					ctx.bezierCurveTo(-15,10,-15,11,-14,11);
					ctx.bezierCurveTo(-13,12,-13,13,-13,14);
					ctx.bezierCurveTo(-13,15,-14,15,-14,16);
					ctx.bezierCurveTo(-14,16,-14,17,-14,17);
					ctx.bezierCurveTo(-14,17,-14,18,-14,18);
					ctx.bezierCurveTo(-14,19,-15,20,-15,21);
					ctx.bezierCurveTo(-16,21,-17,22,-19,22);
					ctx.bezierCurveTo(-20,22,-21,23,-22,24);
					ctx.bezierCurveTo(-23,25,-21,26,-21,27);
					ctx.bezierCurveTo(-19,28,-18,30,-16,30);
					ctx.bezierCurveTo(-13,31,-11,31,-9,31);
					ctx.bezierCurveTo(-8,29,-7,27,-7,25);
					ctx.bezierCurveTo(-7,25,-7,25,-7,25);
					ctx.bezierCurveTo(-7,25,-7,24,-7,23);
					ctx.bezierCurveTo(-7,23,-7,23,-7,22);
					ctx.bezierCurveTo(-7,20,-5,17,-2,17);
					ctx.bezierCurveTo(0,16,3,15,5,15);
					ctx.bezierCurveTo(6,15,6,15,6,15);
					ctx.bezierCurveTo(7,15,7,15,7,15);
					ctx.bezierCurveTo(7,15,7,16,8,16);
					ctx.bezierCurveTo(8,16,8,16,8,16);
					ctx.bezierCurveTo(10,18,11,18,13,18);
					ctx.bezierCurveTo(14,19,15,19,16,18);
					ctx.bezierCurveTo(17,17,18,14,17,13);
					ctx.bezierCurveTo(16,13,16,12,16,12);
					ctx.bezierCurveTo(15,11,14,10,13,9);
					ctx.bezierCurveTo(13,9,13,8,12,8);
					ctx.bezierCurveTo(12,7,17,6,17,5);
					ctx.bezierCurveTo(22,3,23,-3,21,-7);
					ctx.bezierCurveTo(20,-10,18,-12,15,-13);
					ctx.lineTo(15,-13);
					ctx.globalAlpha = 1.0;
					ctx.stroke();

					//---------===### eg:  ###===---------
					//-------------------------------
					// GroupEnd: 
					//-------------------------------



					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-10,26);
					ctx.bezierCurveTo(-12,26,-14,25,-16,24);
					ctx.bezierCurveTo(-16,24,-16,23,-17,23);
					ctx.bezierCurveTo(-17,22,-16,21,-15,21);
					ctx.bezierCurveTo(-14,22,-12,23,-10,24);
					ctx.bezierCurveTo(-10,25,-10,25,-10,26);
					ctx.lineTo(-10,26);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-12,23);
					ctx.bezierCurveTo(-11,23,-11,23,-10,24);
					ctx.bezierCurveTo(-9,24,-9,24,-9,25);
					ctx.bezierCurveTo(-9,26,-10,26,-11,26);
					ctx.bezierCurveTo(-12,26,-13,25,-14,25);
					ctx.bezierCurveTo(-15,25,-16,24,-15,23);
					ctx.bezierCurveTo(-15,23,-14,23,-14,23);
					ctx.bezierCurveTo(-13,23,-13,23,-13,22);
					ctx.bezierCurveTo(-13,23,-12,23,-12,23);
					ctx.lineTo(-12,23);
					ctx.globalAlpha = 1.0;
					ctx.fill();
		}else if(frame==3){
					ctx.fillStyle = "#5F230F";
					ctx.beginPath();
					ctx.moveTo(12,14);
					ctx.bezierCurveTo(16,14,22,10,23,6);
					ctx.bezierCurveTo(25,1,21,-4,16,-6);
					ctx.bezierCurveTo(14,-7,6,-7,4,-10);
					ctx.bezierCurveTo(3,-11,8,-11,8,-12);
					ctx.bezierCurveTo(11,-12,13,-9,15,-11);
					ctx.bezierCurveTo(19,-14,15,-21,10,-16);
					ctx.bezierCurveTo(9,-15,7,-19,7,-20);
					ctx.bezierCurveTo(5,-22,5,-25,2,-27);
					ctx.bezierCurveTo(-1,-30,-6,-31,-10,-30);
					ctx.bezierCurveTo(-13,-29,-14,-28,-16,-27);
					ctx.bezierCurveTo(-19,-26,-15,-23,-16,-22);
					ctx.bezierCurveTo(-20,-21,-15,-19,-16,-18);
					ctx.bezierCurveTo(-17,-16,-20,-16,-19,-13);
					ctx.bezierCurveTo(-18,-12,-17,-12,-17,-10);
					ctx.bezierCurveTo(-18,-9,-18,-8,-18,-8);
					ctx.bezierCurveTo(-20,-8,-21,-7,-22,-6);
					ctx.bezierCurveTo(-24,-4,-22,-4,-21,-2);
					ctx.bezierCurveTo(-20,1,-20,3,-18,5);
					ctx.bezierCurveTo(-16,7,-14,6,-13,7);
					ctx.bezierCurveTo(-12,7,-15,11,-15,12);
					ctx.bezierCurveTo(-14,15,-13,15,-15,17);
					ctx.bezierCurveTo(-16,19,-15,19,-17,19);
					ctx.bezierCurveTo(-18,20,-19,21,-20,21);
					ctx.bezierCurveTo(-26,24,-15,27,-13,27);
					ctx.bezierCurveTo(-11,27,-8,27,-8,25);
					ctx.bezierCurveTo(-7,23,-7,22,-5,20);
					ctx.bezierCurveTo(-5,20,-5,19,-6,18);
					ctx.bezierCurveTo(-6,18,-5,16,-4,16);
					ctx.bezierCurveTo(-3,16,1,20,3,20);
					ctx.bezierCurveTo(4,21,6,22,7,24);
					ctx.bezierCurveTo(8,25,9,25,10,25);
					ctx.bezierCurveTo(11,26,12,27,13,29);
					ctx.bezierCurveTo(14,30,16,32,18,32);
					ctx.bezierCurveTo(20,32,21,28,19,26);
					ctx.bezierCurveTo(17,24,18,20,14,19);
					ctx.bezierCurveTo(14,17,11,17,10,17);
					ctx.bezierCurveTo(9,15,10,14,12,14);
					ctx.bezierCurveTo(14,14,10,14,12,14);
					ctx.lineTo(12,14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(3,-10);
					ctx.bezierCurveTo(2,-8,3,-7,5,-7);
					ctx.bezierCurveTo(8,-6,10,-5,12,-5);
					ctx.bezierCurveTo(13,-5,13,-5,14,-5);
					ctx.bezierCurveTo(15,-4,17,-3,18,-1);
					ctx.bezierCurveTo(19,-0,20,1,19,3);
					ctx.bezierCurveTo(18,4,18,6,16,7);
					ctx.bezierCurveTo(15,8,14,8,13,8);
					ctx.bezierCurveTo(11,8,9,8,7,8);
					ctx.bezierCurveTo(4,8,2,7,1,4);
					ctx.bezierCurveTo(0,1,0,-1,1,-4);
					ctx.bezierCurveTo(1,-5,2,-6,1,-6);
					ctx.bezierCurveTo(-0,-8,1,-9,2,-11);
					ctx.bezierCurveTo(2,-12,3,-13,4,-11);
					ctx.bezierCurveTo(3,-11,3,-11,3,-10);
					ctx.lineTo(3,-10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#89A0C9";
					ctx.beginPath();
					ctx.moveTo(16,-14);
					ctx.bezierCurveTo(16,-17,15,-18,11,-17);
					ctx.bezierCurveTo(11,-17,11,-16,11,-16);
					ctx.bezierCurveTo(11,-16,11,-16,11,-16);
					ctx.bezierCurveTo(10,-15,10,-13,12,-12);
					ctx.bezierCurveTo(13,-11,14,-11,15,-12);
					ctx.bezierCurveTo(15,-12,16,-13,16,-13);
					ctx.bezierCurveTo(16,-13,16,-13,16,-13);
					ctx.bezierCurveTo(16,-14,16,-14,16,-14);
					ctx.lineTo(16,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(13,-16);
					ctx.bezierCurveTo(14,-16,15,-16,15,-15);
					ctx.bezierCurveTo(15,-15,14,-14,14,-14);
					ctx.bezierCurveTo(13,-14,12,-15,12,-15);
					ctx.bezierCurveTo(12,-16,13,-16,13,-16);
					ctx.lineTo(13,-16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(15,-13);
					ctx.bezierCurveTo(15,-13,15,-13,15,-13);
					ctx.bezierCurveTo(15,-13,15,-12,15,-12);
					ctx.bezierCurveTo(14,-11,13,-11,12,-12);
					ctx.bezierCurveTo(10,-13,10,-15,11,-16);
					ctx.bezierCurveTo(11,-16,11,-16,11,-16);
					ctx.bezierCurveTo(11,-15,10,-14,11,-13);
					ctx.bezierCurveTo(12,-13,13,-12,14,-13);
					ctx.bezierCurveTo(14,-14,15,-14,15,-13);
					ctx.lineTo(15,-13);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(3,-19);
					ctx.bezierCurveTo(2,-17,3,-17,4,-16);
					ctx.bezierCurveTo(5,-16,6,-15,6,-14);
					ctx.bezierCurveTo(1,-15,-4,-17,-9,-20);
					ctx.bezierCurveTo(-9,-20,-9,-21,-9,-21);
					ctx.bezierCurveTo(-10,-21,-10,-21,-10,-21);
					ctx.bezierCurveTo(-10,-23,-12,-23,-12,-24);
					ctx.bezierCurveTo(-14,-25,-14,-26,-12,-27);
					ctx.bezierCurveTo(-11,-27,-10,-27,-10,-29);
					ctx.bezierCurveTo(-4,-31,-1,-27,2,-23);
					ctx.bezierCurveTo(3,-22,3,-20,3,-19);
					ctx.lineTo(3,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-3,-25);
					ctx.bezierCurveTo(-3,-25,-3,-24,-3,-24);
					ctx.bezierCurveTo(-3,-24,-3,-24,-3,-23);
					ctx.bezierCurveTo(-4,-22,-5,-22,-7,-23);
					ctx.bezierCurveTo(-7,-23,-7,-23,-8,-24);
					ctx.bezierCurveTo(-8,-24,-8,-24,-8,-24);
					ctx.bezierCurveTo(-8,-25,-8,-25,-7,-26);
					ctx.bezierCurveTo(-6,-26,-5,-26,-3,-25);
					ctx.lineTo(-3,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-6,-12);
					ctx.bezierCurveTo(-4,-11,-5,-9,-6,-9);
					ctx.bezierCurveTo(-10,-7,-12,-4,-15,-1);
					ctx.bezierCurveTo(-15,-1,-15,-1,-15,-1);
					ctx.lineTo(-15,-1);
					ctx.bezierCurveTo(-15,-1,-16,-2,-17,-2);
					ctx.bezierCurveTo(-17,-4,-18,-6,-18,-9);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-16,-11,-16,-11);
					ctx.bezierCurveTo(-17,-10,-17,-10,-17,-9);
					ctx.bezierCurveTo(-17,-9,-16,-9,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-9,-15);
					ctx.lineTo(-9,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#581F13";
					ctx.beginPath();
					ctx.moveTo(-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-14,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.lineTo(-15,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-16,-9,-17,-9,-17,-9);
					ctx.bezierCurveTo(-17,-10,-17,-10,-16,-11);
					ctx.bezierCurveTo(-16,-11,-15,-11,-15,-12);
					ctx.lineTo(-15,-12);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#C26734";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-16,-19,-16,-20,-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-16);
					ctx.bezierCurveTo(-20,-16,-22,-15,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-11,-20,-11);
					ctx.bezierCurveTo(-20,-11,-19,-11,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-9,-15);
					ctx.bezierCurveTo(-10,-15,-10,-15,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FBB568";
					ctx.beginPath();
					ctx.moveTo(-19,-14);
					ctx.bezierCurveTo(-19,-14,-19,-13,-20,-13);
					ctx.bezierCurveTo(-20,-13,-21,-14,-21,-14);
					ctx.bezierCurveTo(-20,-15,-20,-15,-19,-15);
					ctx.bezierCurveTo(-19,-15,-19,-15,-19,-14);
					ctx.lineTo(-19,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-18,-20,-18,-19,-18,-18);
					ctx.bezierCurveTo(-17,-18,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-17,-15,-16,-16);
					ctx.bezierCurveTo(-16,-16,-15,-19,-16,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-18,-19);
					ctx.bezierCurveTo(-17,-18,-17,-17,-17,-16);
					ctx.bezierCurveTo(-17,-16,-18,-16,-18,-17);
					ctx.bezierCurveTo(-18,-18,-18,-18,-18,-19);
					ctx.lineTo(-18,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FAA959";
					ctx.beginPath();
					ctx.moveTo(-15,-14);
					ctx.bezierCurveTo(-16,-15,-15,-15,-15,-15);
					ctx.bezierCurveTo(-15,-16,-14,-17,-13,-16);
					ctx.bezierCurveTo(-13,-16,-12,-15,-13,-14);
					ctx.bezierCurveTo(-13,-14,-14,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.lineTo(-15,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-14,-1);
					ctx.bezierCurveTo(-15,-1,-15,-0,-15,-0);
					ctx.bezierCurveTo(-16,-0,-17,0,-17,-1);
					ctx.bezierCurveTo(-18,-3,-19,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-19,-12,-17,-12,-16,-13);
					ctx.bezierCurveTo(-16,-13,-15,-13,-15,-13);
					ctx.bezierCurveTo(-15,-11,-16,-10,-17,-9);
					ctx.bezierCurveTo(-16,-9,-15,-10,-14,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-10);
					ctx.bezierCurveTo(-10,-11,-10,-13,-10,-15);
					ctx.bezierCurveTo(-8,-15,-8,-14,-7,-13);
					ctx.bezierCurveTo(-8,-13,-8,-13,-9,-12);
					ctx.bezierCurveTo(-9,-10,-11,-10,-12,-8);
					ctx.bezierCurveTo(-13,-7,-14,-7,-15,-8);
					ctx.bezierCurveTo(-16,-9,-17,-8,-17,-7);
					ctx.bezierCurveTo(-17,-6,-17,-6,-17,-5);
					ctx.bezierCurveTo(-16,-3,-15,-2,-14,-2);
					ctx.bezierCurveTo(-14,-2,-14,-1,-14,-1);
					ctx.lineTo(-14,-1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-14,-22);
					ctx.bezierCurveTo(-14,-22,-14,-22,-14,-22);
					ctx.lineTo(-14,-22);
					ctx.lineTo(-14,-22);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-17,-25);
					ctx.bezierCurveTo(-17,-25,-17,-25,-17,-25);
					ctx.bezierCurveTo(-17,-25,-17,-25,-17,-25);
					ctx.lineTo(-17,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-13,-21);
					ctx.bezierCurveTo(-13,-21,-13,-21,-13,-21);
					ctx.bezierCurveTo(-13,-21,-13,-21,-13,-21);
					ctx.lineTo(-13,-21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					//---------===### eg:  ###===---------
					//-------------------------------
					// GroupEnd: 
					//-------------------------------



					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-4,-14);
					ctx.bezierCurveTo(-4,-14,-7,-15,-7,-15);
					ctx.bezierCurveTo(-7,-15,-7,-15,-7,-15);
					ctx.bezierCurveTo(-10,-19,-13,-21,-16,-25);
					ctx.bezierCurveTo(-16,-25,-17,-26,-17,-26);
					ctx.bezierCurveTo(-16,-27,-18,-27,-19,-25);
					ctx.bezierCurveTo(-19,-25,-19,-23,-19,-23);
					ctx.bezierCurveTo(-18,-22,-13,-18,-12,-17);
					ctx.bezierCurveTo(-12,-15,-9,-13,-10,-15);
					ctx.bezierCurveTo(-9,-14,-8,-14,-8,-13);
					ctx.bezierCurveTo(-7,-12,-7,-12,-6,-12);
					ctx.bezierCurveTo(-6,-12,-6,-12,-6,-12);
					ctx.bezierCurveTo(-6,-12,-6,-12,-6,-12);
					ctx.bezierCurveTo(-5,-10,-5,-9,-6,-8);
					ctx.bezierCurveTo(-10,-6,-12,-3,-15,-0);
					ctx.bezierCurveTo(-14,-0,-14,-0,-13,-1);
					ctx.bezierCurveTo(-11,-3,-9,-6,-5,-8);
					ctx.bezierCurveTo(-5,-8,-4,-9,-4,-10);
					ctx.bezierCurveTo(-4,-10,-4,-11,-3,-11);
					ctx.bezierCurveTo(-1,-11,-3,-13,-4,-14);
					ctx.lineTo(-4,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-16,-5);
					ctx.bezierCurveTo(-16,-7,-17,-8,-19,-8);
					ctx.bezierCurveTo(-21,-8,-21,-8,-22,-7);
					ctx.bezierCurveTo(-24,-5,-21,-3,-20,-1);
					ctx.bezierCurveTo(-20,-0,-19,1,-18,1);
					ctx.bezierCurveTo(-17,-1,-17,-1,-15,-1);
					ctx.bezierCurveTo(-15,-2,-14,-2,-15,-3);
					ctx.bezierCurveTo(-16,-4,-16,-4,-16,-5);
					ctx.lineTo(-16,-5);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#CADCF0";
					ctx.beginPath();
					ctx.moveTo(-20,-7);
					ctx.bezierCurveTo(-20,-7,-20,-7,-20,-7);
					ctx.bezierCurveTo(-19,-7,-17,-7,-17,-6);
					ctx.bezierCurveTo(-17,-4,-19,-4,-20,-4);
					ctx.bezierCurveTo(-21,-3,-21,-5,-21,-6);
					ctx.bezierCurveTo(-21,-6,-21,-6,-21,-6);
					ctx.bezierCurveTo(-21,-6,-21,-6,-21,-7);
					ctx.bezierCurveTo(-21,-7,-21,-7,-21,-7);
					ctx.bezierCurveTo(-21,-7,-20,-7,-20,-7);
					ctx.lineTo(-20,-7);
					ctx.lineTo(-20,-7);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#CADCF0";
					ctx.beginPath();
					ctx.moveTo(-20,-2);
					ctx.bezierCurveTo(-19,-2,-18,-3,-18,-3);
					ctx.bezierCurveTo(-17,-3,-16,-4,-16,-3);
					ctx.bezierCurveTo(-15,-2,-16,-2,-17,-2);
					ctx.bezierCurveTo(-18,-1,-18,-1,-19,-0);
					ctx.bezierCurveTo(-20,-1,-20,-1,-20,-2);
					ctx.lineTo(-20,-2);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-6,-1);
					ctx.bezierCurveTo(-5,-1,-5,0,-5,1);
					ctx.bezierCurveTo(-6,4,-6,4,-4,6);
					ctx.bezierCurveTo(-3,6,-2,6,-2,6);
					ctx.bezierCurveTo(-0,5,1,4,1,3);
					ctx.bezierCurveTo(1,0,1,-2,1,-5);
					ctx.bezierCurveTo(1,-7,-2,-8,-3,-7);
					ctx.bezierCurveTo(-5,-6,-5,-7,-7,-7);
					ctx.lineTo(-10,-6);
					ctx.bezierCurveTo(-11,-4,-11,-3,-12,-1);
					ctx.bezierCurveTo(-13,0,-14,1,-14,-0);
					ctx.bezierCurveTo(-17,-1,-17,-1,-18,1);
					ctx.bezierCurveTo(-19,1,-19,1,-20,1);
					ctx.bezierCurveTo(-19,4,-18,6,-16,7);
					ctx.bezierCurveTo(-15,6,-14,6,-13,6);
					ctx.bezierCurveTo(-11,6,-8,3,-7,0);
					ctx.bezierCurveTo(-7,-0,-6,-1,-6,-1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-8,0);
					ctx.bezierCurveTo(-9,1,-9,3,-10,4);
					ctx.bezierCurveTo(-13,7,-17,5,-17,2);
					ctx.bezierCurveTo(-17,-0,-16,2,-14,3);
					ctx.bezierCurveTo(-13,4,-12,1,-12,0);
					ctx.bezierCurveTo(-11,-2,-10,-3,-9,-6);
					ctx.lineTo(-9,-6);
					ctx.bezierCurveTo(-7,-6,-5,-6,-3,-7);
					ctx.bezierCurveTo(-2,-7,0,-6,0,-4);
					ctx.bezierCurveTo(0,-2,0,1,0,4);
					ctx.bezierCurveTo(0,4,-1,5,-2,5);
					ctx.bezierCurveTo(-3,5,-3,5,-4,4);
					ctx.bezierCurveTo(-4,3,-4,1,-4,0);
					ctx.bezierCurveTo(-4,-0,-4,-1,-4,-1);
					ctx.bezierCurveTo(-5,-2,-6,-2,-6,-2);
					ctx.bezierCurveTo(-7,-1,-8,-1,-8,0);
					ctx.lineTo(-8,0);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-15,-19);
					ctx.bezierCurveTo(-15,-20,-19,-23,-18,-24);
					ctx.bezierCurveTo(-16,-25,-12,-21,-11,-19);
					ctx.bezierCurveTo(-11,-19,-7,-14,-10,-16);
					ctx.bezierCurveTo(-11,-17,-13,-18,-15,-19);
					ctx.bezierCurveTo(-16,-20,-14,-18,-15,-19);
					ctx.lineTo(-15,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-7,21);
					ctx.bezierCurveTo(-7,22,-7,23,-7,23);
					ctx.bezierCurveTo(-7,25,-8,27,-10,26);
					ctx.bezierCurveTo(-12,26,-15,27,-17,25);
					ctx.bezierCurveTo(-18,25,-18,25,-19,25);
					ctx.bezierCurveTo(-20,25,-21,24,-21,23);
					ctx.bezierCurveTo(-22,22,-20,21,-19,20);
					ctx.bezierCurveTo(-18,20,-17,19,-15,19);
					ctx.bezierCurveTo(-13,20,-10,22,-7,21);
					ctx.lineTo(-7,21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-6,17);
					ctx.bezierCurveTo(-8,17,-8,16,-9,16);
					ctx.bezierCurveTo(-10,17,-11,16,-12,16);
					ctx.bezierCurveTo(-13,14,-16,16,-16,18);
					ctx.bezierCurveTo(-13,19,-11,21,-8,21);
					ctx.bezierCurveTo(-6,21,-4,19,-6,17);
					ctx.bezierCurveTo(-7,17,-4,19,-6,17);
					ctx.lineTo(-6,17);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-11,17);
					ctx.bezierCurveTo(-11,17,-10,17,-9,18);
					ctx.bezierCurveTo(-8,18,-8,18,-8,19);
					ctx.bezierCurveTo(-8,20,-9,20,-10,20);
					ctx.bezierCurveTo(-11,20,-12,19,-13,19);
					ctx.bezierCurveTo(-14,18,-15,18,-15,17);
					ctx.bezierCurveTo(-14,16,-13,17,-13,17);
					ctx.bezierCurveTo(-13,17,-12,16,-12,16);
					ctx.bezierCurveTo(-12,17,-12,17,-11,17);
					ctx.lineTo(-11,17);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-10,16);
					ctx.bezierCurveTo(-10,16,-10,16,-11,15);
					ctx.bezierCurveTo(-10,14,-10,13,-9,13);
					ctx.bezierCurveTo(-8,14,-7,15,-8,16);
					ctx.bezierCurveTo(-9,16,-9,16,-10,16);
					ctx.lineTo(-10,16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(7,19);
					ctx.bezierCurveTo(8,19,8,18,8,18);
					ctx.bezierCurveTo(8,18,8,17,8,17);
					ctx.bezierCurveTo(7,15,5,14,3,13);
					ctx.bezierCurveTo(2,13,0,14,-0,14);
					ctx.bezierCurveTo(-1,15,0,16,0,16);
					ctx.bezierCurveTo(0,17,1,17,0,17);
					ctx.bezierCurveTo(0,17,-0,17,-1,17);
					ctx.bezierCurveTo(-1,17,-2,16,-2,15);
					ctx.bezierCurveTo(-3,15,-5,15,-5,16);
					ctx.bezierCurveTo(-6,16,-7,16,-6,18);
					ctx.bezierCurveTo(-6,17,-5,17,-5,16);
					ctx.bezierCurveTo(-4,16,-3,16,-3,16);
					ctx.bezierCurveTo(-0,19,3,20,6,22);
					ctx.bezierCurveTo(6,22,7,21,7,20);
					ctx.bezierCurveTo(7,20,7,20,7,20);
					ctx.bezierCurveTo(7,20,7,20,7,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(8,18);
					ctx.bezierCurveTo(8,19,8,19,7,20);
					ctx.bezierCurveTo(6,19,5,19,4,18);
					ctx.bezierCurveTo(3,18,2,17,3,16);
					ctx.bezierCurveTo(3,16,4,16,5,16);
					ctx.bezierCurveTo(6,16,7,18,8,18);
					ctx.lineTo(8,18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(14,20);
					ctx.bezierCurveTo(18,20,18,24,19,26);
					ctx.bezierCurveTo(20,26,20,27,20,27);
					ctx.bezierCurveTo(22,29,20,31,19,32);
					ctx.bezierCurveTo(18,32,18,32,17,32);
					ctx.bezierCurveTo(17,31,15,31,14,30);
					ctx.bezierCurveTo(13,29,11,28,10,26);
					ctx.bezierCurveTo(12,24,13,22,14,20);
					ctx.lineTo(14,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(9,19);
					ctx.bezierCurveTo(9,18,10,18,10,18);
					ctx.bezierCurveTo(12,18,13,18,14,20);
					ctx.bezierCurveTo(13,22,12,24,10,26);
					ctx.bezierCurveTo(8,26,8,24,6,23);
					ctx.bezierCurveTo(7,23,7,22,7,21);
					ctx.bezierCurveTo(8,20,8,20,9,19);
					ctx.lineTo(9,19);
					ctx.moveTo(11,19);
					ctx.bezierCurveTo(9,19,8,21,8,22);
					ctx.bezierCurveTo(8,23,8,24,9,24);
					ctx.bezierCurveTo(10,24,13,21,13,20);
					ctx.bezierCurveTo(12,19,12,19,11,19);
					ctx.lineTo(11,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(11,19);
					ctx.bezierCurveTo(12,19,12,19,13,20);
					ctx.bezierCurveTo(13,21,10,24,9,24);
					ctx.bezierCurveTo(8,24,8,23,8,22);
					ctx.bezierCurveTo(8,21,9,19,11,19);
					ctx.lineTo(11,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(9,10);
					ctx.bezierCurveTo(8,9,7,9,5,9);
					ctx.bezierCurveTo(5,9,5,9,5,9);
					ctx.lineTo(5,9);
					ctx.bezierCurveTo(5,9,5,9,5,9);
					ctx.bezierCurveTo(5,9,5,9,5,9);
					ctx.bezierCurveTo(5,9,5,9,4,9);
					ctx.bezierCurveTo(4,9,4,9,4,8);
					ctx.bezierCurveTo(3,7,2,7,0,7);
					ctx.bezierCurveTo(-1,7,-1,7,-1,6);
					ctx.bezierCurveTo(-1,6,-2,6,-2,5);
					ctx.bezierCurveTo(-3,5,-3,5,-3,5);
					ctx.bezierCurveTo(-4,6,-4,7,-6,7);
					ctx.bezierCurveTo(-7,7,-9,8,-11,8);
					ctx.bezierCurveTo(-12,9,-13,9,-13,10);
					ctx.bezierCurveTo(-13,11,-11,11,-10,11);
					ctx.bezierCurveTo(-6,11,-2,10,2,10);
					ctx.bezierCurveTo(2,10,2,10,2,10);
					ctx.bezierCurveTo(4,10,6,11,9,11);
					ctx.bezierCurveTo(9,11,10,11,10,11);
					ctx.bezierCurveTo(11,10,10,10,9,10);
					ctx.lineTo(9,10);
					ctx.moveTo(5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.lineTo(5,10);
					ctx.moveTo(5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.lineTo(5,10);
					ctx.moveTo(5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.lineTo(5,10);
					ctx.moveTo(5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.bezierCurveTo(5,10,5,10,5,10);
					ctx.lineTo(5,10);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-5,11);
					ctx.bezierCurveTo(-6,11,-8,11,-9,11);
					ctx.bezierCurveTo(-10,11,-11,11,-11,10);
					ctx.bezierCurveTo(-11,9,-10,10,-9,9);
					ctx.bezierCurveTo(-7,8,-6,9,-4,7);
					ctx.bezierCurveTo(-2,7,-1,8,1,8);
					ctx.bezierCurveTo(1,8,1,8,1,8);
					ctx.bezierCurveTo(1,10,1,10,-0,10);
					ctx.bezierCurveTo(-2,9,-3,9,-4,10);
					ctx.bezierCurveTo(-4,10,-5,10,-5,11);
					ctx.lineTo(-5,11);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(16,-6);
					ctx.bezierCurveTo(14,-7,6,-8,4,-10);
					ctx.bezierCurveTo(3,-11,8,-12,8,-12);
					ctx.bezierCurveTo(11,-13,13,-10,15,-12);
					ctx.bezierCurveTo(18,-14,16,-19,12,-18);
					ctx.bezierCurveTo(12,-18,12,-17,11,-17);
					ctx.bezierCurveTo(11,-17,11,-17,11,-17);
					ctx.bezierCurveTo(11,-17,11,-17,11,-17);
					ctx.bezierCurveTo(11,-17,11,-17,11,-17);
					ctx.bezierCurveTo(11,-17,11,-17,11,-17);
					ctx.bezierCurveTo(10,-17,10,-16,10,-16);
					ctx.bezierCurveTo(9,-16,7,-19,7,-20);
					ctx.bezierCurveTo(5,-23,5,-25,2,-27);
					ctx.bezierCurveTo(-1,-30,-6,-32,-10,-30);
					ctx.bezierCurveTo(-13,-29,-14,-28,-16,-27);
					ctx.bezierCurveTo(-16,-27,-17,-27,-17,-27);
					ctx.bezierCurveTo(-17,-27,-19,-27,-19,-26);
					ctx.bezierCurveTo(-19,-25,-19,-24,-19,-23);
					ctx.bezierCurveTo(-18,-23,-18,-22,-17,-21);
					ctx.bezierCurveTo(-18,-21,-18,-21,-17,-20);
					ctx.bezierCurveTo(-18,-20,-18,-20,-18,-19);
					ctx.bezierCurveTo(-18,-19,-18,-19,-18,-18);
					ctx.bezierCurveTo(-18,-18,-18,-18,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-19,-17,-19,-17);
					ctx.bezierCurveTo(-20,-17,-22,-16,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-12,-20,-11);
					ctx.bezierCurveTo(-20,-11,-20,-11,-19,-11);
					ctx.bezierCurveTo(-19,-10,-18,-10,-18,-9);
					ctx.bezierCurveTo(-18,-9,-18,-9,-18,-9);
					ctx.bezierCurveTo(-18,-9,-18,-9,-18,-9);
					ctx.bezierCurveTo(-18,-9,-19,-9,-19,-8);
					ctx.bezierCurveTo(-21,-8,-21,-8,-22,-7);
					ctx.bezierCurveTo(-22,-7,-23,-6,-23,-5);
					ctx.bezierCurveTo(-23,-4,-22,-4,-21,-2);
					ctx.bezierCurveTo(-20,-1,-20,1,-19,2);
					ctx.bezierCurveTo(-19,4,-18,6,-16,7);
					ctx.bezierCurveTo(-15,5,-14,6,-14,6);
					ctx.bezierCurveTo(-13,6,-13,6,-13,6);
					ctx.bezierCurveTo(-13,6,-13,6,-13,6);
					ctx.bezierCurveTo(-12,7,-15,11,-15,12);
					ctx.bezierCurveTo(-14,14,-14,14,-14,15);
					ctx.bezierCurveTo(-15,16,-16,17,-16,18);
					ctx.bezierCurveTo(-16,18,-16,18,-16,18);
					ctx.bezierCurveTo(-16,18,-16,18,-16,18);
					ctx.bezierCurveTo(-17,19,-18,19,-19,20);
					ctx.bezierCurveTo(-20,20,-21,21,-21,21);
					ctx.bezierCurveTo(-25,24,-15,27,-13,27);
					ctx.bezierCurveTo(-11,27,-9,27,-8,25);
					ctx.bezierCurveTo(-7,25,-7,24,-7,23);
					ctx.bezierCurveTo(-7,23,-7,23,-7,22);
					ctx.bezierCurveTo(-7,22,-6,21,-5,20);
					ctx.bezierCurveTo(-5,20,-5,19,-5,19);
					ctx.bezierCurveTo(-5,18,-5,18,-6,18);
					ctx.bezierCurveTo(-6,18,-6,18,-6,18);
					ctx.bezierCurveTo(-6,18,-6,17,-6,17);
					ctx.bezierCurveTo(-6,17,-6,18,-6,18);
					ctx.bezierCurveTo(-6,18,-6,18,-6,17);
					ctx.bezierCurveTo(-5,17,-5,16,-4,16);
					ctx.bezierCurveTo(-4,16,-3,16,-2,16);
					ctx.bezierCurveTo(-1,17,-0,18,1,18);
					ctx.bezierCurveTo(2,19,2,20,3,20);
					ctx.bezierCurveTo(4,21,5,22,6,23);
					ctx.bezierCurveTo(6,23,6,23,6,23);
					ctx.bezierCurveTo(8,24,8,26,10,26);
					ctx.bezierCurveTo(11,27,13,28,14,30);
					ctx.bezierCurveTo(15,31,17,30,17,32);
					ctx.bezierCurveTo(18,32,18,32,19,32);
					ctx.bezierCurveTo(20,30,21,29,20,27);
					ctx.bezierCurveTo(20,27,20,26,20,26);
					ctx.bezierCurveTo(19,26,19,26,19,26);
					ctx.bezierCurveTo(18,24,18,22,17,21);
					ctx.bezierCurveTo(16,20,15,19,14,18);
					ctx.bezierCurveTo(14,17,11,17,10,17);
					ctx.bezierCurveTo(9,15,10,13,12,13);
					ctx.bezierCurveTo(11,13,12,13,12,13);
					ctx.bezierCurveTo(16,13,22,10,23,6);
					ctx.bezierCurveTo(25,1,21,-4,16,-6);
					ctx.lineTo(16,-6);
					ctx.globalAlpha = 1.0;
					ctx.stroke();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(12,13);
					ctx.bezierCurveTo(12,13,12,13,12,13);
					ctx.bezierCurveTo(13,13,13,13,12,13);
					ctx.lineTo(12,13);
					ctx.globalAlpha = 1.0;
					ctx.stroke();


		}else if(frame==2){
					ctx.fillStyle = "#5F230F";
					ctx.beginPath();
					ctx.moveTo(13,-6);
					ctx.bezierCurveTo(12,-7,13,-8,13,-9);
					ctx.bezierCurveTo(12,-11,11,-12,9,-12);
					ctx.bezierCurveTo(7,-16,8,-13,6,-17);
					ctx.bezierCurveTo(6,-18,1,-25,0,-26);
					ctx.bezierCurveTo(-0,-27,-3,-28,-4,-29);
					ctx.bezierCurveTo(-4,-30,-12,-29,-14,-29);
					ctx.bezierCurveTo(-17,-29,-19,-27,-19,-25);
					ctx.bezierCurveTo(-20,-23,-18,-22,-18,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-18,-17);
					ctx.bezierCurveTo(-19,-15,-20,-17,-21,-16);
					ctx.bezierCurveTo(-25,-13,-18,-11,-18,-7);
					ctx.bezierCurveTo(-18,-5,-18,-4,-17,-3);
					ctx.bezierCurveTo(-16,-3,-15,-3,-15,-2);
					ctx.bezierCurveTo(-14,-2,-15,-0,-14,-2);
					ctx.bezierCurveTo(-14,-1,-15,-1,-15,-0);
					ctx.bezierCurveTo(-16,1,-17,1,-18,1);
					ctx.bezierCurveTo(-20,0,-21,1,-23,3);
					ctx.bezierCurveTo(-25,5,-22,6,-21,7);
					ctx.bezierCurveTo(-19,9,-18,8,-16,8);
					ctx.bezierCurveTo(-17,10,-17,11,-15,13);
					ctx.bezierCurveTo(-15,15,-14,16,-13,18);
					ctx.bezierCurveTo(-13,18,-12,19,-12,19);
					ctx.bezierCurveTo(-10,20,-10,20,-10,22);
					ctx.bezierCurveTo(-10,22,-10,23,-10,23);
					ctx.bezierCurveTo(-11,24,-12,25,-12,26);
					ctx.bezierCurveTo(-14,31,-6,29,-4,28);
					ctx.bezierCurveTo(-3,27,0,25,-0,23);
					ctx.bezierCurveTo(-1,22,-3,19,-4,19);
					ctx.bezierCurveTo(-2,17,1,23,3,24);
					ctx.bezierCurveTo(5,25,5,25,6,27);
					ctx.bezierCurveTo(6,28,5,30,5,31);
					ctx.bezierCurveTo(5,34,7,33,9,33);
					ctx.bezierCurveTo(12,33,13,33,13,30);
					ctx.bezierCurveTo(13,28,13,22,12,21);
					ctx.bezierCurveTo(9,20,5,15,8,12);
					ctx.bezierCurveTo(9,11,10,11,12,10);
					ctx.bezierCurveTo(14,10,16,9,17,7);
					ctx.bezierCurveTo(22,3,20,-5,14,-6);
					ctx.bezierCurveTo(14,-6,14,-6,13,-6);
					ctx.lineTo(13,-6);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-6,-12);
					ctx.bezierCurveTo(-4,-11,-5,-9,-6,-9);
					ctx.bezierCurveTo(-10,-7,-12,-4,-15,-1);
					ctx.bezierCurveTo(-15,-1,-15,-1,-15,-1);
					ctx.lineTo(-15,-1);
					ctx.bezierCurveTo(-15,-1,-16,-2,-17,-2);
					ctx.bezierCurveTo(-17,-4,-18,-6,-18,-9);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-16,-11,-16,-11);
					ctx.bezierCurveTo(-17,-10,-17,-10,-17,-9);
					ctx.bezierCurveTo(-17,-9,-16,-9,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-9,-15);
					ctx.lineTo(-9,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#581F13";
					ctx.beginPath();
					ctx.moveTo(-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-14,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.lineTo(-15,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-16,-9,-17,-9,-17,-9);
					ctx.bezierCurveTo(-17,-10,-17,-10,-16,-11);
					ctx.bezierCurveTo(-16,-11,-15,-11,-15,-12);
					ctx.lineTo(-15,-12);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#C26734";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-16,-19,-16,-20,-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-16);
					ctx.bezierCurveTo(-20,-16,-22,-15,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-11,-20,-11);
					ctx.bezierCurveTo(-20,-11,-19,-11,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-9,-15);
					ctx.bezierCurveTo(-10,-15,-10,-15,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FBB568";
					ctx.beginPath();
					ctx.moveTo(-19,-14);
					ctx.bezierCurveTo(-19,-14,-19,-13,-20,-13);
					ctx.bezierCurveTo(-20,-13,-21,-14,-21,-14);
					ctx.bezierCurveTo(-20,-15,-20,-15,-19,-15);
					ctx.bezierCurveTo(-19,-15,-19,-15,-19,-14);
					ctx.lineTo(-19,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-18,-20,-18,-19,-18,-18);
					ctx.bezierCurveTo(-17,-18,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-17,-15,-16,-16);
					ctx.bezierCurveTo(-16,-16,-15,-19,-16,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-18,-19);
					ctx.bezierCurveTo(-17,-18,-17,-17,-17,-16);
					ctx.bezierCurveTo(-17,-16,-18,-16,-18,-17);
					ctx.bezierCurveTo(-18,-18,-18,-18,-18,-19);
					ctx.lineTo(-18,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FAA959";
					ctx.beginPath();
					ctx.moveTo(-15,-14);
					ctx.bezierCurveTo(-16,-15,-15,-15,-15,-15);
					ctx.bezierCurveTo(-15,-16,-14,-17,-13,-16);
					ctx.bezierCurveTo(-13,-16,-12,-15,-13,-14);
					ctx.bezierCurveTo(-13,-14,-14,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-15,-14);
					ctx.lineTo(-15,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-14,-1);
					ctx.bezierCurveTo(-15,-1,-15,-0,-15,-0);
					ctx.bezierCurveTo(-16,-0,-17,0,-17,-1);
					ctx.bezierCurveTo(-18,-3,-19,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-19,-12,-17,-12,-16,-13);
					ctx.bezierCurveTo(-16,-13,-15,-13,-15,-13);
					ctx.bezierCurveTo(-15,-11,-16,-10,-17,-9);
					ctx.bezierCurveTo(-16,-9,-15,-10,-14,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-10);
					ctx.bezierCurveTo(-10,-11,-10,-13,-10,-15);
					ctx.bezierCurveTo(-8,-15,-8,-14,-7,-13);
					ctx.bezierCurveTo(-8,-13,-8,-13,-9,-12);
					ctx.bezierCurveTo(-9,-10,-11,-10,-12,-8);
					ctx.bezierCurveTo(-13,-7,-14,-7,-15,-8);
					ctx.bezierCurveTo(-16,-9,-17,-8,-17,-7);
					ctx.bezierCurveTo(-17,-6,-17,-6,-17,-5);
					ctx.bezierCurveTo(-16,-3,-15,-2,-14,-2);
					ctx.bezierCurveTo(-14,-2,-14,-1,-14,-1);
					ctx.lineTo(-14,-1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-2,-14);
					ctx.bezierCurveTo(-2,-15,-3,-15,-3,-16);
					ctx.bezierCurveTo(-5,-17,-6,-17,-6,-19);
					ctx.bezierCurveTo(-6,-19,-10,-23,-11,-24);
					ctx.bezierCurveTo(-12,-25,-15,-27,-15,-28);
					ctx.bezierCurveTo(-19,-28,-19,-26,-19,-23);
					ctx.bezierCurveTo(-19,-22,-18,-21,-17,-20);
					ctx.bezierCurveTo(-16,-20,-16,-19,-15,-19);
					ctx.bezierCurveTo(-14,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-10,-15,-9,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-6,-12);
					ctx.bezierCurveTo(-5,-11,-5,-9,-6,-9);
					ctx.bezierCurveTo(-10,-7,-12,-4,-15,-1);
					ctx.bezierCurveTo(-14,-0,-14,-1,-13,-1);
					ctx.bezierCurveTo(-11,-4,-9,-7,-5,-8);
					ctx.bezierCurveTo(-4,-8,-4,-9,-4,-10);
					ctx.bezierCurveTo(-4,-11,-3,-11,-3,-11);
					ctx.bezierCurveTo(-1,-12,-1,-13,-2,-14);
					ctx.lineTo(-2,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-13,-25);
					ctx.lineTo(-13, -25);
					ctx.lineTo(-13, -25);
					ctx.lineTo(-13,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					//---------===### eg:  ###===---------
					//-------------------------------
					// GroupEnd: 
					//-------------------------------



					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-6,-16);
					ctx.bezierCurveTo(-6,-16,-6,-16,-6,-16);
					ctx.bezierCurveTo(-6,-15,-6,-15,-7,-15);
					ctx.bezierCurveTo(-8,-15,-9,-16,-10,-16);
					ctx.lineTo(-10,-16);
					ctx.bezierCurveTo(-10,-16,-10,-17,-10,-17);
					ctx.lineTo(-10,-17);
					ctx.bezierCurveTo(-10,-17,-11,-17,-11,-17);
					ctx.lineTo(-11,-17);
					ctx.bezierCurveTo(-11,-18,-11,-19,-12,-19);
					ctx.lineTo(-12,-19);
					ctx.bezierCurveTo(-12,-19,-13,-19,-13,-19);
					ctx.lineTo(-13,-19);
					ctx.bezierCurveTo(-13,-20,-13,-20,-13,-20);
					ctx.lineTo(-13,-20);
					ctx.bezierCurveTo(-14,-21,-15,-22,-16,-22);
					ctx.bezierCurveTo(-16,-23,-17,-23,-17,-23);
					ctx.bezierCurveTo(-18,-24,-18,-24,-18,-25);
					ctx.bezierCurveTo(-17,-26,-17,-25,-16,-25);
					ctx.bezierCurveTo(-15,-25,-14,-24,-14,-24);
					ctx.lineTo(-14,-24);
					ctx.bezierCurveTo(-12,-22,-11,-21,-9,-19);
					ctx.lineTo(-9,-19);
					ctx.bezierCurveTo(-9,-19,-9,-19,-9,-19);
					ctx.lineTo(-9,-19);
					ctx.bezierCurveTo(-8,-18,-8,-17,-6,-16);
					ctx.lineTo(-6,-16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-4,-28);
					ctx.bezierCurveTo(-2,-27,-1,-26,-1,-25);
					ctx.bezierCurveTo(3,-22,4,-20,6,-16);
					ctx.bezierCurveTo(6,-15,7,-14,8,-13);
					ctx.bezierCurveTo(9,-11,8,-12,7,-10);
					ctx.bezierCurveTo(5,-10,5,-13,4,-13);
					ctx.bezierCurveTo(2,-14,1,-15,-1,-16);
					ctx.bezierCurveTo(-2,-17,-3,-18,-4,-18);
					ctx.bezierCurveTo(-5,-18,-6,-20,-7,-20);
					ctx.bezierCurveTo(-8,-21,-12,-24,-11,-25);
					ctx.bezierCurveTo(-11,-27,-12,-27,-11,-28);
					ctx.bezierCurveTo(-9,-29,-9,-29,-7,-29);
					ctx.bezierCurveTo(-6,-29,-7,-28,-4,-28);
					ctx.lineTo(-4,-28);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#89A0C9";
					ctx.beginPath();
					ctx.moveTo(12,-8);
					ctx.bezierCurveTo(12,-11,11,-12,8,-12);
					ctx.bezierCurveTo(8,-11,7,-10,7,-11);
					ctx.bezierCurveTo(7,-11,7,-11,7,-11);
					ctx.bezierCurveTo(6,-9,6,-8,8,-6);
					ctx.bezierCurveTo(9,-5,10,-6,11,-7);
					ctx.bezierCurveTo(12,-7,12,-7,12,-7);
					ctx.bezierCurveTo(12,-7,12,-8,12,-8);
					ctx.bezierCurveTo(12,-8,12,-8,12,-8);
					ctx.lineTo(12,-8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(10,-11);
					ctx.bezierCurveTo(10,-10,11,-11,11,-10);
					ctx.bezierCurveTo(11,-9,11,-8,10,-8);
					ctx.bezierCurveTo(9,-8,8,-9,8,-10);
					ctx.bezierCurveTo(8,-11,9,-11,10,-11);
					ctx.lineTo(10,-11);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(11,-8);
					ctx.bezierCurveTo(11,-8,11,-7,11,-7);
					ctx.bezierCurveTo(11,-7,11,-7,11,-7);
					ctx.bezierCurveTo(10,-6,9,-5,8,-6);
					ctx.bezierCurveTo(6,-8,6,-9,7,-11);
					ctx.bezierCurveTo(7,-11,7,-11,7,-11);
					ctx.bezierCurveTo(7,-10,7,-9,8,-8);
					ctx.bezierCurveTo(9,-7,9,-7,10,-8);
					ctx.bezierCurveTo(10,-8,11,-9,11,-8);
					ctx.lineTo(11,-8);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(11,-5);
					ctx.bezierCurveTo(11,-5,10,-5,10,-5);
					ctx.bezierCurveTo(9,-5,8,-5,9,-4);
					ctx.bezierCurveTo(9,-3,9,-3,10,-3);
					ctx.bezierCurveTo(11,-4,12,-3,13,-2);
					ctx.bezierCurveTo(14,-1,15,1,13,2);
					ctx.bezierCurveTo(13,3,12,3,12,4);
					ctx.bezierCurveTo(11,6,8,6,6,5);
					ctx.bezierCurveTo(6,5,6,5,5,4);
					ctx.bezierCurveTo(4,4,3,3,3,1);
					ctx.bezierCurveTo(2,-0,3,-1,4,-2);
					ctx.bezierCurveTo(4,-3,4,-3,4,-3);
					ctx.bezierCurveTo(5,-3,5,-4,6,-4);
					ctx.bezierCurveTo(7,-3,7,-4,7,-4);
					ctx.bezierCurveTo(7,-5,7,-5,7,-6);
					ctx.bezierCurveTo(7,-6,7,-6,8,-6);
					ctx.bezierCurveTo(8,-6,9,-6,10,-6);
					ctx.bezierCurveTo(10,-6,11,-6,11,-5);
					ctx.lineTo(11,-5);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-3,20);
					ctx.bezierCurveTo(-2,21,-2,22,-1,22);
					ctx.bezierCurveTo(0,23,0,24,-1,25);
					ctx.bezierCurveTo(-3,28,-6,29,-10,29);
					ctx.bezierCurveTo(-11,29,-12,29,-12,28);
					ctx.bezierCurveTo(-12,27,-12,26,-12,25);
					ctx.bezierCurveTo(-11,25,-10,24,-10,23);
					ctx.bezierCurveTo(-9,24,-9,24,-8,24);
					ctx.bezierCurveTo(-6,22,-4,22,-3,20);
					ctx.lineTo(-3,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-3,20);
					ctx.bezierCurveTo(-4,22,-6,22,-8,24);
					ctx.bezierCurveTo(-9,24,-9,24,-10,23);
					ctx.bezierCurveTo(-10,22,-11,22,-10,21);
					ctx.bezierCurveTo(-8,20,-6,19,-4,19);
					ctx.bezierCurveTo(-4,19,-3,19,-3,20);
					ctx.lineTo(-3,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-7,18);
					ctx.bezierCurveTo(-7,19,-8,19,-8,19);
					ctx.bezierCurveTo(-9,19,-9,19,-9,18);
					ctx.bezierCurveTo(-9,17,-9,17,-8,17);
					ctx.bezierCurveTo(-8,17,-7,17,-7,18);
					ctx.lineTo(-7,18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(8,21);
					ctx.bezierCurveTo(8,20,9,20,10,20);
					ctx.bezierCurveTo(12,20,12,21,12,23);
					ctx.bezierCurveTo(11,24,10,25,9,25);
					ctx.bezierCurveTo(8,26,7,27,5,26);
					ctx.bezierCurveTo(5,26,5,26,5,26);
					ctx.bezierCurveTo(7,26,8,25,9,24);
					ctx.bezierCurveTo(10,23,11,23,10,22);
					ctx.bezierCurveTo(10,21,9,21,8,21);
					ctx.lineTo(8,21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(8,21);
					ctx.bezierCurveTo(9,21,10,21,10,22);
					ctx.bezierCurveTo(11,23,10,23,9,24);
					ctx.bezierCurveTo(8,25,7,26,5,26);
					ctx.bezierCurveTo(5,25,4,25,5,24);
					ctx.bezierCurveTo(5,24,6,24,6,24);
					ctx.bezierCurveTo(6,24,6,24,6,24);
					ctx.bezierCurveTo(6,24,7,23,7,23);
					ctx.bezierCurveTo(7,23,7,22,7,22);
					ctx.bezierCurveTo(8,22,8,22,8,21);
					ctx.bezierCurveTo(8,21,8,21,8,21);
					ctx.lineTo(8,21);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-0,-4);
					ctx.bezierCurveTo(-2,-8,-4,-10,-8,-7);
					ctx.bezierCurveTo(-8,-7,-8,-7,-9,-7);
					ctx.bezierCurveTo(-9,-7,-9,-6,-9,-6);
					ctx.bezierCurveTo(-10,-6,-11,-5,-11,-4);
					ctx.bezierCurveTo(-12,-2,-13,-1,-15,1);
					ctx.bezierCurveTo(-15,1,-14,2,-14,2);
					ctx.bezierCurveTo(-14,3,-14,4,-15,5);
					ctx.bezierCurveTo(-15,6,-15,6,-15,6);
					ctx.bezierCurveTo(-15,6,-15,6,-15,6);
					ctx.bezierCurveTo(-15,6,-16,6,-16,7);
					ctx.bezierCurveTo(-14,6,-13,6,-11,5);
					ctx.bezierCurveTo(-10,4,-9,2,-8,1);
					ctx.bezierCurveTo(-8,1,-7,0,-7,0);
					ctx.bezierCurveTo(-6,1,-6,1,-6,2);
					ctx.bezierCurveTo(-6,3,-7,4,-6,5);
					ctx.bezierCurveTo(-5,5,-3,6,-2,6);
					ctx.bezierCurveTo(-2,6,-1,6,-0,6);
					ctx.bezierCurveTo(0,6,0,5,1,5);
					ctx.bezierCurveTo(1,4,1,4,1,3);
					ctx.bezierCurveTo(1,3,1,3,1,2);
					ctx.bezierCurveTo(1,0,1,-2,-0,-4);
					ctx.lineTo(-0,-4);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-8,-6);
					ctx.bezierCurveTo(-8,-7,-8,-7,-8,-7);
					ctx.bezierCurveTo(-3,-7,-1,-6,-0,-1);
					ctx.bezierCurveTo(-0,0,-0,2,1,3);
					ctx.bezierCurveTo(1,3,1,3,1,4);
					ctx.bezierCurveTo(0,4,-1,5,-1,6);
					ctx.bezierCurveTo(-2,6,-2,5,-3,5);
					ctx.bezierCurveTo(-4,4,-6,2,-5,0);
					ctx.bezierCurveTo(-5,-0,-6,-1,-6,-1);
					ctx.bezierCurveTo(-6,-2,-7,-2,-7,-1);
					ctx.bezierCurveTo(-8,1,-11,3,-13,5);
					ctx.bezierCurveTo(-13,6,-14,6,-15,6);
					ctx.bezierCurveTo(-15,6,-15,6,-15,6);
					ctx.bezierCurveTo(-14,5,-14,3,-14,2);
					ctx.bezierCurveTo(-14,2,-14,2,-14,1);
					ctx.bezierCurveTo(-13,-0,-11,-3,-10,-5);
					ctx.bezierCurveTo(-10,-6,-10,-6,-9,-6);
					ctx.bezierCurveTo(-9,-6,-9,-6,-8,-6);
					ctx.lineTo(-8,-6);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(9,19);
					ctx.bezierCurveTo(8,17,6,16,6,14);
					ctx.bezierCurveTo(6,15,5,16,3,15);
					ctx.bezierCurveTo(2,14,1,14,-0,16);
					ctx.bezierCurveTo(-1,17,-0,18,1,19);
					ctx.bezierCurveTo(1,20,2,20,3,21);
					ctx.bezierCurveTo(4,21,5,22,7,22);
					ctx.bezierCurveTo(7,22,7,22,7,22);
					ctx.bezierCurveTo(7,22,7,22,8,22);
					ctx.bezierCurveTo(8,22,8,22,8,21);
					ctx.lineTo(8,21);
					ctx.bezierCurveTo(8,21,8,21,8,21);
					ctx.bezierCurveTo(8,21,8,21,8,21);
					ctx.bezierCurveTo(8,21,8,21,8,21);
					ctx.bezierCurveTo(9,20,9,20,10,20);
					ctx.bezierCurveTo(10,19,10,19,9,19);
					ctx.lineTo(9,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(7,22);
					ctx.bezierCurveTo(6,22,4,21,2,20);
					ctx.bezierCurveTo(1,19,0,18,1,17);
					ctx.bezierCurveTo(1,16,4,16,5,17);
					ctx.bezierCurveTo(6,18,7,20,8,22);
					ctx.bezierCurveTo(8,22,8,22,7,22);
					ctx.lineTo(7,22);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-15,1);
					ctx.lineTo(-15,1);
					ctx.bezierCurveTo(-15,1,-15,1,-15,1);
					ctx.bezierCurveTo(-15,1,-16,0,-16,0);
					ctx.bezierCurveTo(-16,1,-17,1,-18,1);
					ctx.bezierCurveTo(-19,2,-21,1,-22,2);
					ctx.bezierCurveTo(-22,2,-22,3,-23,3);
					ctx.bezierCurveTo(-23,4,-24,4,-22,6);
					ctx.lineTo(-22,6);
					ctx.bezierCurveTo(-22,6,-21,7,-21,8);
					ctx.bezierCurveTo(-21,8,-21,8,-21,8);
					ctx.bezierCurveTo(-21,8,-21,8,-21,8);
					ctx.bezierCurveTo(-21,8,-21,8,-21,8);
					ctx.bezierCurveTo(-21,8,-21,8,-21,8);
					ctx.bezierCurveTo(-18,9,-18,6,-17,6);
					ctx.lineTo(-15,7);
					ctx.bezierCurveTo(-15,7,-14,7,-14,6);
					ctx.bezierCurveTo(-13,5,-13,2,-15,1);
					ctx.lineTo(-15,1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#CADCF0";
					ctx.beginPath();
					ctx.moveTo(-21,7);
					ctx.bezierCurveTo(-21,7,-21,7,-21,7);
					ctx.bezierCurveTo(-21,6,-22,6,-22,6);
					ctx.bezierCurveTo(-22,6,-22,6,-22,6);
					ctx.bezierCurveTo(-22,3,-21,2,-19,3);
					ctx.bezierCurveTo(-18,3,-18,4,-18,5);
					ctx.bezierCurveTo(-19,6,-19,6,-19,6);
					ctx.bezierCurveTo(-20,7,-21,7,-21,7);
					ctx.lineTo(-21,7);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#CADCF0";
					ctx.beginPath();
					ctx.moveTo(-15,2);
					ctx.bezierCurveTo(-14,3,-14,4,-15,5);
					ctx.bezierCurveTo(-16,5,-16,5,-17,5);
					ctx.bezierCurveTo(-17,5,-17,5,-17,5);
					ctx.bezierCurveTo(-17,5,-17,4,-17,4);
					ctx.bezierCurveTo(-17,3,-18,3,-17,2);
					ctx.bezierCurveTo(-16,1,-15,2,-15,2);
					ctx.lineTo(-15,2);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-21,7);
					ctx.bezierCurveTo(-20,6,-18,7,-17,5);
					ctx.bezierCurveTo(-17,4,-16,5,-15,6);
					ctx.bezierCurveTo(-16,6,-16,8,-14,8);
					ctx.bezierCurveTo(-12,8,-11,8,-9,9);
					ctx.bezierCurveTo(-7,9,-6,9,-7,7);
					ctx.bezierCurveTo(-7,6,-6,5,-5,5);
					ctx.bezierCurveTo(-4,5,-3,6,-3,7);
					ctx.bezierCurveTo(-4,8,-3,9,-2,9);
					ctx.bezierCurveTo(1,9,5,9,9,10);
					ctx.bezierCurveTo(8,11,7,12,7,13);
					ctx.bezierCurveTo(3,14,-0,14,-4,14);
					ctx.bezierCurveTo(-7,13,-10,13,-13,12);
					ctx.bezierCurveTo(-14,12,-15,12,-16,12);
					ctx.bezierCurveTo(-18,11,-18,10,-16,8);
					ctx.bezierCurveTo(-17,8,-17,8,-18,8);
					ctx.bezierCurveTo(-19,7,-20,8,-21,7);
					ctx.lineTo(-21,7);
					ctx.moveTo(-2,13);
					ctx.bezierCurveTo(-0,13,1,12,2,12);
					ctx.bezierCurveTo(3,12,3,12,3,11);
					ctx.bezierCurveTo(3,11,2,11,2,11);
					ctx.bezierCurveTo(-0,10,-3,10,-5,9);
					ctx.bezierCurveTo(-8,9,-10,9,-13,8);
					ctx.bezierCurveTo(-14,8,-15,8,-15,9);
					ctx.bezierCurveTo(-15,10,-14,11,-13,11);
					ctx.bezierCurveTo(-11,11,-9,12,-7,12);
					ctx.bezierCurveTo(-5,12,-4,13,-2,13);
					ctx.lineTo(-2,13);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-2,13);
					ctx.bezierCurveTo(-4,13,-5,12,-7,12);
					ctx.bezierCurveTo(-9,12,-11,11,-13,11);
					ctx.bezierCurveTo(-14,11,-15,10,-15,9);
					ctx.bezierCurveTo(-15,8,-14,8,-13,8);
					ctx.bezierCurveTo(-10,9,-8,9,-5,9);
					ctx.bezierCurveTo(-3,10,-0,10,2,11);
					ctx.bezierCurveTo(2,11,3,11,3,11);
					ctx.bezierCurveTo(3,12,3,12,2,12);
					ctx.bezierCurveTo(1,12,-0,13,-2,13);
					ctx.lineTo(-2,13);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(12,23);
					ctx.bezierCurveTo(13,25,13,28,13,30);
					ctx.bezierCurveTo(12,34,9,33,6,33);
					ctx.bezierCurveTo(4,31,5,30,6,28);
					ctx.bezierCurveTo(7,26,9,27,10,25);
					ctx.bezierCurveTo(11,24,12,23,12,23);
					ctx.bezierCurveTo(13,27,12,23,12,23);
					ctx.lineTo(12,23);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-3,-25);
					ctx.bezierCurveTo(-3,-25,-3,-24,-3,-24);
					ctx.bezierCurveTo(-2,-24,-2,-23,-2,-22);
					ctx.bezierCurveTo(-4,-21,-6,-21,-8,-23);
					ctx.bezierCurveTo(-9,-24,-9,-24,-10,-25);
					ctx.bezierCurveTo(-10,-25,-11,-25,-10,-26);
					ctx.bezierCurveTo(-10,-27,-10,-27,-9,-27);
					ctx.bezierCurveTo(-6,-28,-5,-27,-3,-25);
					ctx.lineTo(-3,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(12,10);
					ctx.bezierCurveTo(14,10,16,9,17,7);
					ctx.bezierCurveTo(22,3,20,-5,14,-6);
					ctx.bezierCurveTo(14,-6,14,-6,12,-6);
					ctx.bezierCurveTo(12,-7,13,-8,13,-9);
					ctx.bezierCurveTo(12,-11,11,-12,9,-12);
					ctx.bezierCurveTo(7,-16,8,-13,6,-17);
					ctx.bezierCurveTo(5,-18,1,-25,0,-26);
					ctx.bezierCurveTo(-0,-27,-3,-28,-4,-29);
					ctx.bezierCurveTo(-4,-30,-12,-29,-14,-29);
					ctx.bezierCurveTo(-17,-29,-19,-27,-20,-25);
					ctx.bezierCurveTo(-20,-24,-20,-24,-19,-23);
					ctx.bezierCurveTo(-19,-23,-19,-23,-19,-23);
					ctx.bezierCurveTo(-19,-23,-19,-22,-19,-22);
					ctx.bezierCurveTo(-18,-21,-18,-21,-18,-20);
					ctx.bezierCurveTo(-18,-19,-18,-19,-18,-18);
					ctx.bezierCurveTo(-18,-17,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-19,-16,-19,-16);
					ctx.bezierCurveTo(-19,-16,-20,-16,-20,-16);
					ctx.bezierCurveTo(-20,-16,-21,-16,-21,-16);
					ctx.bezierCurveTo(-22,-15,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-12,-21,-11);
					ctx.bezierCurveTo(-20,-10,-18,-9,-18,-8);
					ctx.bezierCurveTo(-19,-5,-18,-3,-17,-1);
					ctx.bezierCurveTo(-17,0,-16,-0,-15,-0);
					ctx.bezierCurveTo(-15,-0,-15,-0,-15,-0);
					ctx.bezierCurveTo(-15,-0,-15,-0,-15,-0);
					ctx.bezierCurveTo(-15,0,-16,0,-16,0);
					ctx.bezierCurveTo(-16,0,-16,0,-16,0);
					ctx.bezierCurveTo(-16,0,-16,0,-16,0);
					ctx.bezierCurveTo(-17,1,-18,1,-18,1);
					ctx.bezierCurveTo(-21,0,-22,1,-23,3);
					ctx.bezierCurveTo(-24,4,-24,5,-23,5);
					ctx.bezierCurveTo(-23,6,-23,6,-23,6);
					ctx.lineTo(-23,6);
					ctx.bezierCurveTo(-23,6,-22,7,-21,7);
					ctx.bezierCurveTo(-21,7,-21,7,-21,7);
					ctx.bezierCurveTo(-20,9,-18,8,-17,8);
					ctx.bezierCurveTo(-18,10,-18,11,-16,12);
					ctx.bezierCurveTo(-16,12,-16,12,-16,12);
					ctx.bezierCurveTo(-16,12,-16,13,-15,13);
					ctx.bezierCurveTo(-15,15,-14,16,-13,18);
					ctx.bezierCurveTo(-13,18,-12,19,-12,19);
					ctx.bezierCurveTo(-10,20,-10,20,-11,22);
					ctx.bezierCurveTo(-11,22,-10,23,-10,23);
					ctx.bezierCurveTo(-11,24,-12,25,-13,26);
					ctx.bezierCurveTo(-13,27,-13,28,-12,29);
					ctx.bezierCurveTo(-11,29,-11,29,-10,29);
					ctx.bezierCurveTo(-6,29,-4,28,-1,25);
					ctx.bezierCurveTo(-0,24,0,24,-1,23);
					ctx.bezierCurveTo(-1,22,-2,21,-3,20);
					ctx.bezierCurveTo(-3,19,-4,19,-4,19);
					ctx.bezierCurveTo(-4,19,-4,19,-5,19);
					ctx.bezierCurveTo(-2,17,1,23,3,24);
					ctx.bezierCurveTo(4,24,4,24,5,25);
					ctx.bezierCurveTo(4,25,5,26,5,26);
					ctx.bezierCurveTo(5,26,5,26,5,26);
					ctx.bezierCurveTo(5,27,5,27,6,27);
					ctx.bezierCurveTo(6,27,6,27,6,27);
					ctx.bezierCurveTo(6,27,6,27,6,28);
					ctx.bezierCurveTo(6,28,6,28,6,28);
					ctx.bezierCurveTo(5,29,5,30,5,30);
					ctx.bezierCurveTo(5,31,4,31,4,31);
					ctx.bezierCurveTo(5,34,7,33,9,33);
					ctx.bezierCurveTo(11,33,12,33,13,30);
					ctx.bezierCurveTo(13,28,13,22,12,21);
					ctx.bezierCurveTo(11,20,11,20,10,20);
					ctx.bezierCurveTo(10,20,10,20,10,20);
					ctx.bezierCurveTo(10,20,10,20,10,20);
					ctx.bezierCurveTo(10,19,9,19,9,19);
					ctx.bezierCurveTo(9,18,8,18,8,18);
					ctx.bezierCurveTo(7,16,6,14,8,12);
					ctx.bezierCurveTo(9,11,10,11,12,10);
					ctx.lineTo(12,10);
					ctx.globalAlpha = 1.0;
					ctx.stroke();

		}else if(frame==1){

					ctx.fillStyle = "#5F230F";
					ctx.beginPath();
					ctx.moveTo(17,-3);
					ctx.bezierCurveTo(15,-6,13,-8,10,-9);
					ctx.bezierCurveTo(7,-9,4,-11,1,-10);
					ctx.bezierCurveTo(1,-10,1,-10,1,-10);
					ctx.bezierCurveTo(0,-11,1,-11,1,-11);
					ctx.bezierCurveTo(3,-12,5,-13,7,-15);
					ctx.bezierCurveTo(7,-15,7,-15,7,-15);
					ctx.bezierCurveTo(7,-14,8,-14,8,-13);
					ctx.bezierCurveTo(9,-12,10,-12,11,-13);
					ctx.bezierCurveTo(12,-13,13,-14,13,-16);
					ctx.bezierCurveTo(13,-18,11,-19,9,-18);
					ctx.bezierCurveTo(9,-18,8,-18,8,-18);
					ctx.bezierCurveTo(8,-18,8,-18,8,-18);
					ctx.bezierCurveTo(5,-18,4,-19,3,-22);
					ctx.bezierCurveTo(3,-22,3,-22,2,-23);
					ctx.bezierCurveTo(1,-24,-0,-25,-2,-27);
					ctx.bezierCurveTo(-4,-29,-6,-30,-9,-29);
					ctx.bezierCurveTo(-11,-30,-13,-27,-15,-28);
					ctx.bezierCurveTo(-16,-28,-17,-28,-18,-27);
					ctx.bezierCurveTo(-18,-25,-19,-23,-17,-21);
					ctx.bezierCurveTo(-18,-20,-19,-19,-18,-17);
					ctx.bezierCurveTo(-18,-17,-18,-16,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-18,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-18,-15);
					ctx.bezierCurveTo(-18,-16,-18,-16,-18,-16);
					ctx.bezierCurveTo(-20,-17,-21,-16,-21,-14);
					ctx.bezierCurveTo(-21,-14,-21,-14,-21,-14);
					ctx.bezierCurveTo(-22,-14,-22,-13,-22,-13);
					ctx.bezierCurveTo(-21,-12,-20,-11,-19,-11);
					ctx.bezierCurveTo(-19,-11,-19,-11,-19,-10);
					ctx.bezierCurveTo(-17,-9,-18,-7,-18,-5);
					ctx.bezierCurveTo(-18,-4,-18,-3,-17,-3);
					ctx.bezierCurveTo(-16,-2,-15,-1,-14,0);
					ctx.bezierCurveTo(-14,1,-14,1,-14,1);
					ctx.bezierCurveTo(-15,2,-15,4,-14,5);
					ctx.bezierCurveTo(-14,5,-14,6,-15,6);
					ctx.lineTo(-15,6);
					ctx.lineTo(-15,6);
					ctx.bezierCurveTo(-15,6,-15,6,-15,7);
					ctx.bezierCurveTo(-17,8,-17,8,-16,10);
					ctx.bezierCurveTo(-15,10,-15,11,-14,12);
					ctx.bezierCurveTo(-13,14,-11,15,-9,16);
					ctx.bezierCurveTo(-7,18,-5,20,-3,23);
					ctx.bezierCurveTo(-3,23,-3,24,-4,24);
					ctx.bezierCurveTo(-5,26,-8,29,-8,31);
					ctx.bezierCurveTo(-4,31,2,29,6,29);
					ctx.bezierCurveTo(6,28,7,28,7,27);
					ctx.bezierCurveTo(8,26,9,25,8,23);
					ctx.bezierCurveTo(9,21,7,21,6,20);
					ctx.bezierCurveTo(5,19,4,17,5,15);
					ctx.bezierCurveTo(7,14,9,13,11,11);
					ctx.bezierCurveTo(13,11,14,10,16,9);
					ctx.bezierCurveTo(17,8,18,7,18,5);
					ctx.bezierCurveTo(18,2,18,-0,17,-3);
					ctx.lineTo(17,-3);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(7,-16);
					ctx.bezierCurveTo(4,-15,2,-13,-1,-14);
					ctx.bezierCurveTo(-4,-15,-5,-17,-8,-17);
					ctx.bezierCurveTo(-8,-17,-10,-18,-10,-19);
					ctx.bezierCurveTo(-10,-19,-10,-20,-11,-20);
					ctx.bezierCurveTo(-11,-20,-12,-23,-12,-23);
					ctx.bezierCurveTo(-12,-26,-10,-29,-7,-29);
					ctx.bezierCurveTo(-3,-28,0,-25,3,-22);
					ctx.bezierCurveTo(4,-21,4,-20,4,-19);
					ctx.bezierCurveTo(6,-18,7,-18,8,-17);
					ctx.bezierCurveTo(8,-17,7,-16,7,-16);
					ctx.bezierCurveTo(5,-15,7,-16,7,-16);
					ctx.lineTo(7,-16);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#8C371D";
					ctx.beginPath();
					ctx.moveTo(5,-5);
					ctx.bezierCurveTo(5,-6,8,-8,10,-7);
					ctx.bezierCurveTo(11,-6,13,-6,15,-4);
					ctx.bezierCurveTo(16,-3,16,-2,16,-1);
					ctx.bezierCurveTo(14,0,14,2,12,2);
					ctx.bezierCurveTo(11,2,10,4,9,3);
					ctx.bezierCurveTo(8,1,6,-1,6,-3);
					ctx.bezierCurveTo(5,-3,5,-4,5,-5);
					ctx.lineTo(5,-5);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(9,5);
					ctx.bezierCurveTo(8,5,7,5,6,6);
					ctx.bezierCurveTo(5,7,5,7,4,8);
					ctx.bezierCurveTo(3,8,3,8,3,8);
					ctx.bezierCurveTo(3,8,1,9,1,9);
					ctx.bezierCurveTo(0,9,1,9,-1,10);
					ctx.bezierCurveTo(-2,10,-3,10,-3,8);
					ctx.bezierCurveTo(-3,7,-3,6,-4,6);
					ctx.bezierCurveTo(-5,6,-5,7,-5,8);
					ctx.bezierCurveTo(-5,9,-5,11,-7,10);
					ctx.bezierCurveTo(-8,9,-8,9,-8,9);
					ctx.bezierCurveTo(-10,9,-10,9,-9,7);
					ctx.bezierCurveTo(-7,7,-8,5,-9,3);
					ctx.lineTo(-9,3);
					ctx.lineTo(-9,3);
					ctx.bezierCurveTo(-9,2,-9,2,-10,2);
					ctx.bezierCurveTo(-11,2,-12,3,-13,4);
					ctx.bezierCurveTo(-14,5,-15,4,-16,4);
					ctx.lineTo(-16,4);
					ctx.lineTo(-16,4);
					ctx.bezierCurveTo(-16,5,-16,5,-16,5);
					ctx.bezierCurveTo(-18,6,-18,7,-17,8);
					ctx.bezierCurveTo(-16,9,-16,9,-15,10);
					ctx.bezierCurveTo(-14,12,-12,13,-10,14);
					ctx.bezierCurveTo(-7,15,-4,15,-1,15);
					ctx.bezierCurveTo(-0,15,1,14,2,14);
					ctx.bezierCurveTo(3,13,3,13,4,14);
					ctx.bezierCurveTo(6,12,9,11,10,9);
					ctx.bezierCurveTo(10,9,10,8,10,8);
					ctx.bezierCurveTo(10,7,10,6,9,5);
					ctx.lineTo(9,5);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-10,7);
					ctx.bezierCurveTo(-10,7,-11,7,-11,8);
					ctx.bezierCurveTo(-12,9,-13,10,-15,10);
					ctx.bezierCurveTo(-16,9,-16,8,-16,6);
					ctx.bezierCurveTo(-16,6,-16,6,-16,6);
					ctx.bezierCurveTo(-16,6,-16,6,-16,5);
					ctx.lineTo(-16,5);
					ctx.lineTo(-15,5);
					ctx.bezierCurveTo(-15,5,-14,6,-13,5);
					ctx.bezierCurveTo(-12,3,-11,3,-10,3);
					ctx.bezierCurveTo(-9,3,-9,3,-9,4);
					ctx.lineTo(-9,4);
					ctx.lineTo(-9,4);
					ctx.bezierCurveTo(-8,6,-8,7,-10,7);
					ctx.lineTo(-10,7);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(4,9);
					ctx.bezierCurveTo(5,9,6,8,7,7);
					ctx.bezierCurveTo(7,6,8,6,8,7);
					ctx.bezierCurveTo(9,7,9,8,8,9);
					ctx.bezierCurveTo(5,11,2,13,-2,14);
					ctx.bezierCurveTo(-5,15,-9,13,-12,12);
					ctx.bezierCurveTo(-12,11,-12,11,-12,11);
					ctx.bezierCurveTo(-12,10,-11,10,-11,10);
					ctx.bezierCurveTo(-9,10,-8,10,-6,11);
					ctx.bezierCurveTo(-3,12,1,12,2,10);
					ctx.bezierCurveTo(2,10,4,9,4,9);
					ctx.lineTo(4,9);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-9,2);
					ctx.bezierCurveTo(-10,2,-9,2,-10,2);
					ctx.bezierCurveTo(-11,1,-10,1,-9,0);
					ctx.bezierCurveTo(-9,-1,-8,-4,-8,-6);
					ctx.bezierCurveTo(-8,-6,-7,-5,-8,-7);
					ctx.bezierCurveTo(-6,-6,-5,-8,-4,-8);
					ctx.bezierCurveTo(-2,-8,-0,-7,2,-6);
					ctx.bezierCurveTo(2,-3,8,2,5,4);
					ctx.bezierCurveTo(-0,8,-1,3,-1,1);
					ctx.bezierCurveTo(-2,-2,-4,1,-4,2);
					ctx.bezierCurveTo(-5,3,-7,4,-8,5);
					ctx.bezierCurveTo(-9,5,-8,4,-8,4);
					ctx.bezierCurveTo(-8,3,-9,3,-9,2);
					ctx.lineTo(-9,2);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(-7,4);
					ctx.bezierCurveTo(-5,4,-4,2,-4,1);
					ctx.bezierCurveTo(-4,0,-3,-1,-2,-0);
					ctx.bezierCurveTo(-1,-0,-1,1,-1,1);
					ctx.bezierCurveTo(-1,3,-0,4,1,5);
					ctx.bezierCurveTo(2,7,3,5,4,5);
					ctx.bezierCurveTo(5,5,6,3,5,2);
					ctx.bezierCurveTo(5,2,5,1,4,0);
					ctx.bezierCurveTo(4,-0,4,-1,4,-1);
					ctx.bezierCurveTo(6,0,7,2,6,5);
					ctx.bezierCurveTo(6,7,4,6,2,7);
					ctx.bezierCurveTo(1,8,0,7,-0,6);
					ctx.bezierCurveTo(-1,5,-3,4,-2,2);
					ctx.bezierCurveTo(-2,1,-2,1,-3,1);
					ctx.bezierCurveTo(-3,1,-3,1,-3,2);
					ctx.bezierCurveTo(-4,3,-6,5,-8,6);
					ctx.bezierCurveTo(-8,5,-8,5,-8,5);
					ctx.bezierCurveTo(-8,5,-7,4,-7,4);
					ctx.lineTo(-7,4);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(6,19);
					ctx.bezierCurveTo(5,20,4,19,4,19);
					ctx.bezierCurveTo(4,19,3,20,3,20);
					ctx.bezierCurveTo(3,20,3,20,3,20);
					ctx.bezierCurveTo(3,21,2,21,2,21);
					ctx.bezierCurveTo(1,20,1,21,0,21);
					ctx.bezierCurveTo(-0,21,-1,21,-1,21);
					ctx.bezierCurveTo(-2,22,-3,22,-4,22);
					ctx.bezierCurveTo(-4,23,-4,23,-4,24);
					ctx.bezierCurveTo(-3,24,-2,24,-1,24);
					ctx.bezierCurveTo(2,24,5,23,8,23);
					ctx.bezierCurveTo(8,21,6,20,6,19);
					ctx.lineTo(6,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(3,20);
					ctx.bezierCurveTo(3,20,3,20,3,20);
					ctx.bezierCurveTo(3,20,2,20,2,20);
					ctx.bezierCurveTo(2,20,1,20,1,21);
					ctx.bezierCurveTo(0,20,-0,20,-1,21);
					ctx.bezierCurveTo(-1,21,-1,21,-2,22);
					ctx.bezierCurveTo(-2,22,-3,22,-3,23);
					ctx.bezierCurveTo(-3,24,-2,24,-1,24);
					ctx.bezierCurveTo(-0,23,1,23,2,23);
					ctx.bezierCurveTo(2,23,3,23,3,22);
					ctx.bezierCurveTo(4,22,5,22,5,21);
					ctx.bezierCurveTo(5,20,4,20,3,20);
					ctx.lineTo(3,20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B22024";
					ctx.beginPath();
					ctx.moveTo(5,19);
					ctx.bezierCurveTo(4,18,4,18,4,18);
					ctx.bezierCurveTo(2,16,-0,16,-3,17);
					ctx.bezierCurveTo(-4,17,-4,17,-5,17);
					ctx.bezierCurveTo(-4,19,-4,21,-2,21);
					ctx.bezierCurveTo(-1,21,-1,21,0,20);
					ctx.bezierCurveTo(1,20,1,21,1,20);
					ctx.bezierCurveTo(3,20,2,19,3,20);
					ctx.bezierCurveTo(3,20,4,19,4,19);
					ctx.bezierCurveTo(4,19,4,19,5,19);
					ctx.bezierCurveTo(4,19,5,19,5,19);
					ctx.lineTo(5,19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E02826";
					ctx.beginPath();
					ctx.moveTo(-0,18);
					ctx.bezierCurveTo(1,18,2,18,2,19);
					ctx.bezierCurveTo(2,20,1,20,1,20);
					ctx.bezierCurveTo(-0,20,-1,19,-1,18);
					ctx.bezierCurveTo(-1,18,-1,18,-0,18);
					ctx.lineTo(-0,18);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(8,23);
					ctx.bezierCurveTo(8,23,8,25,8,26);
					ctx.bezierCurveTo(8,27,8,29,6,30);
					ctx.bezierCurveTo(4,31,-0,32,-3,32);
					ctx.bezierCurveTo(-3,31,-4,32,-4,32);
					ctx.bezierCurveTo(-6,32,-7,32,-8,31);
					ctx.bezierCurveTo(-8,30,-6,29,-5,28);
					ctx.bezierCurveTo(-4,27,-3,26,-2,24);
					ctx.bezierCurveTo(1,25,5,24,8,23);
					ctx.lineTo(8,23);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#89A0C9";
					ctx.beginPath();
					ctx.moveTo(13,-14);
					ctx.bezierCurveTo(13,-18,12,-19,9,-18);
					ctx.bezierCurveTo(9,-18,8,-17,8,-17);
					ctx.bezierCurveTo(8,-17,8,-17,8,-17);
					ctx.bezierCurveTo(7,-16,7,-14,9,-13);
					ctx.bezierCurveTo(10,-12,11,-12,12,-13);
					ctx.bezierCurveTo(13,-13,13,-14,13,-14);
					ctx.bezierCurveTo(13,-14,13,-14,13,-14);
					ctx.bezierCurveTo(13,-15,13,-15,13,-14);
					ctx.lineTo(13,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(11,-17);
					ctx.bezierCurveTo(11,-17,12,-17,12,-16);
					ctx.bezierCurveTo(12,-16,12,-15,11,-15);
					ctx.bezierCurveTo(10,-15,9,-16,9,-16);
					ctx.bezierCurveTo(9,-17,10,-17,11,-17);
					ctx.lineTo(11,-17);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(12,-14);
					ctx.bezierCurveTo(12,-14,12,-14,12,-14);
					ctx.bezierCurveTo(12,-14,12,-13,12,-13);
					ctx.bezierCurveTo(11,-12,10,-12,9,-13);
					ctx.bezierCurveTo(7,-14,7,-16,8,-17);
					ctx.bezierCurveTo(8,-17,8,-17,8,-17);
					ctx.bezierCurveTo(8,-16,8,-15,9,-14);
					ctx.bezierCurveTo(10,-14,10,-13,11,-14);
					ctx.bezierCurveTo(11,-15,12,-15,12,-14);
					ctx.lineTo(12,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-6,-12);
					ctx.bezierCurveTo(-5,-11,-5,-9,-6,-9);
					ctx.bezierCurveTo(-10,-7,-12,-4,-15,-1);
					ctx.bezierCurveTo(-15,-1,-15,-1,-15,-1);
					ctx.lineTo(-15,-1);
					ctx.bezierCurveTo(-15,-1,-16,-2,-17,-2);
					ctx.bezierCurveTo(-18,-4,-18,-6,-18,-9);
					ctx.bezierCurveTo(-18,-9,-19,-10,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-16,-11,-16,-11,-16,-11);
					ctx.bezierCurveTo(-17,-10,-17,-10,-17,-9);
					ctx.bezierCurveTo(-17,-9,-16,-9,-16,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#581F13";
					ctx.beginPath();
					ctx.moveTo(-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-14,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.lineTo(-15,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-15,-9,-15,-9,-16,-9);
					ctx.bezierCurveTo(-16,-9,-17,-9,-17,-9);
					ctx.bezierCurveTo(-17,-10,-17,-10,-16,-11);
					ctx.bezierCurveTo(-16,-11,-16,-11,-15,-12);
					ctx.lineTo(-15,-12);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#C26734";
					ctx.beginPath();
					ctx.moveTo(-10,-15);
					ctx.bezierCurveTo(-10,-15,-11,-15,-11,-15);
					ctx.bezierCurveTo(-12,-17,-13,-18,-15,-19);
					ctx.bezierCurveTo(-15,-19,-15,-19,-15,-19);
					ctx.bezierCurveTo(-16,-19,-16,-20,-17,-20);
					ctx.bezierCurveTo(-18,-19,-18,-18,-18,-17);
					ctx.bezierCurveTo(-18,-16,-19,-16,-19,-16);
					ctx.bezierCurveTo(-21,-16,-22,-15,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-12,-20,-11);
					ctx.bezierCurveTo(-20,-11,-20,-11,-19,-11);
					ctx.bezierCurveTo(-19,-11,-18,-12,-18,-12);
					ctx.bezierCurveTo(-17,-12,-16,-13,-15,-12);
					ctx.bezierCurveTo(-15,-11,-15,-10,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-9);
					ctx.bezierCurveTo(-10,-11,-10,-13,-10,-15);
					ctx.bezierCurveTo(-10,-15,-10,-15,-10,-15);
					ctx.lineTo(-10,-15);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FBB568";
					ctx.beginPath();
					ctx.moveTo(-19,-14);
					ctx.bezierCurveTo(-19,-14,-19,-13,-20,-13);
					ctx.bezierCurveTo(-21,-13,-21,-14,-21,-14);
					ctx.bezierCurveTo(-21,-15,-20,-15,-19,-15);
					ctx.bezierCurveTo(-19,-15,-19,-15,-19,-14);
					ctx.lineTo(-19,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#B9D0E5";
					ctx.beginPath();
					ctx.moveTo(-17,-20);
					ctx.bezierCurveTo(-18,-20,-18,-19,-18,-18);
					ctx.bezierCurveTo(-17,-18,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-17,-15,-16,-16);
					ctx.bezierCurveTo(-16,-16,-15,-19,-16,-20);
					ctx.bezierCurveTo(-17,-20,-17,-20,-17,-20);
					ctx.lineTo(-17,-20);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#46171C";
					ctx.beginPath();
					ctx.moveTo(-18,-19);
					ctx.bezierCurveTo(-17,-18,-17,-17,-17,-16);
					ctx.bezierCurveTo(-18,-16,-18,-16,-19,-17);
					ctx.bezierCurveTo(-19,-18,-18,-18,-18,-19);
					ctx.lineTo(-18,-19);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#FAA959";
					ctx.beginPath();
					ctx.moveTo(-16,-14);
					ctx.bezierCurveTo(-16,-15,-15,-15,-15,-15);
					ctx.bezierCurveTo(-15,-16,-14,-17,-13,-16);
					ctx.bezierCurveTo(-13,-16,-13,-15,-13,-14);
					ctx.bezierCurveTo(-14,-14,-14,-14,-15,-14);
					ctx.bezierCurveTo(-15,-14,-15,-14,-16,-14);
					ctx.bezierCurveTo(-16,-14,-16,-14,-16,-14);
					ctx.lineTo(-16,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#839FCC";
					ctx.beginPath();
					ctx.moveTo(-15,-1);
					ctx.bezierCurveTo(-15,-1,-15,-0,-15,-0);
					ctx.bezierCurveTo(-16,-0,-17,0,-17,-1);
					ctx.bezierCurveTo(-18,-3,-19,-6,-18,-8);
					ctx.bezierCurveTo(-18,-9,-19,-10,-20,-11);
					ctx.bezierCurveTo(-19,-12,-18,-12,-16,-13);
					ctx.bezierCurveTo(-16,-13,-16,-13,-15,-13);
					ctx.bezierCurveTo(-15,-11,-16,-10,-17,-9);
					ctx.bezierCurveTo(-16,-9,-15,-10,-15,-9);
					ctx.bezierCurveTo(-14,-8,-13,-9,-12,-10);
					ctx.bezierCurveTo(-10,-11,-10,-13,-10,-15);
					ctx.bezierCurveTo(-8,-15,-8,-14,-7,-13);
					ctx.bezierCurveTo(-8,-13,-8,-13,-9,-12);
					ctx.bezierCurveTo(-9,-10,-11,-10,-12,-8);
					ctx.bezierCurveTo(-13,-7,-14,-7,-15,-8);
					ctx.bezierCurveTo(-16,-9,-17,-8,-17,-7);
					ctx.bezierCurveTo(-17,-6,-17,-6,-17,-5);
					ctx.bezierCurveTo(-16,-3,-15,-2,-14,-2);
					ctx.bezierCurveTo(-14,-2,-14,-1,-15,-1);
					ctx.lineTo(-15,-1);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#4E629B";
					ctx.beginPath();
					ctx.moveTo(-2,-14);
					ctx.bezierCurveTo(-2,-15,-3,-15,-4,-16);
					ctx.bezierCurveTo(-5,-17,-6,-17,-6,-19);
					ctx.bezierCurveTo(-6,-19,-10,-23,-11,-24);
					ctx.bezierCurveTo(-12,-25,-15,-27,-15,-28);
					ctx.bezierCurveTo(-19,-28,-19,-26,-19,-23);
					ctx.bezierCurveTo(-19,-22,-18,-21,-17,-20);
					ctx.bezierCurveTo(-16,-20,-16,-19,-15,-19);
					ctx.bezierCurveTo(-14,-20,-12,-20,-12,-18);
					ctx.bezierCurveTo(-11,-17,-9,-17,-10,-15);
					ctx.bezierCurveTo(-10,-15,-10,-15,-10,-15);
					ctx.bezierCurveTo(-8,-14,-7,-13,-6,-12);
					ctx.bezierCurveTo(-5,-11,-5,-9,-6,-9);
					ctx.bezierCurveTo(-10,-7,-12,-4,-15,-1);
					ctx.bezierCurveTo(-14,-0,-14,-1,-13,-1);
					ctx.bezierCurveTo(-11,-4,-9,-7,-5,-8);
					ctx.bezierCurveTo(-5,-8,-4,-9,-4,-10);
					ctx.bezierCurveTo(-4,-11,-4,-11,-3,-11);
					ctx.bezierCurveTo(-1,-12,-1,-13,-2,-14);
					ctx.lineTo(-2,-14);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-14,-25);
					ctx.lineTo(-14, -25);
					ctx.lineTo(-13, -25);
					ctx.lineTo(-14,-25);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					//---------===### eg:  ###===---------
					//-------------------------------
					// GroupEnd: 
					//-------------------------------



					ctx.fillStyle = "#AFC1E1";
					ctx.beginPath();
					ctx.moveTo(-13,-24);
					ctx.lineTo(-12,-23);
					ctx.bezierCurveTo(-10,-21,-10,-21,-8,-19);
					ctx.bezierCurveTo(-7,-19,-6,-17,-7,-17);
					ctx.bezierCurveTo(-8,-16,-9,-17,-9,-18);
					ctx.bezierCurveTo(-11,-19,-12,-20,-13,-21);
					ctx.bezierCurveTo(-13,-22,-14,-22,-14,-21);
					ctx.bezierCurveTo(-14,-20,-15,-20,-16,-20);
					ctx.bezierCurveTo(-16,-21,-16,-21,-16,-22);
					ctx.bezierCurveTo(-15,-23,-16,-23,-16,-24);
					ctx.bezierCurveTo(-17,-24,-17,-24,-17,-24);
					ctx.bezierCurveTo(-18,-25,-18,-25,-17,-26);
					ctx.bezierCurveTo(-17,-26,-16,-27,-16,-26);
					ctx.bezierCurveTo(-15,-26,-14,-24,-13,-24);
					ctx.lineTo(-13,-24);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.fillStyle = "#E52425";
					ctx.beginPath();
					ctx.moveTo(-2,-24);
					ctx.bezierCurveTo(-2,-24,-2,-23,-1,-23);
					ctx.bezierCurveTo(-1,-22,-1,-22,-1,-21);
					ctx.bezierCurveTo(-3,-20,-5,-20,-7,-22);
					ctx.bezierCurveTo(-8,-22,-8,-23,-8,-23);
					ctx.bezierCurveTo(-9,-24,-9,-24,-9,-25);
					ctx.bezierCurveTo(-9,-25,-8,-26,-7,-26);
					ctx.bezierCurveTo(-5,-26,-3,-26,-2,-24);
					ctx.lineTo(-2,-24);
					ctx.globalAlpha = 1.0;
					ctx.fill();

					ctx.strokeStyle = "#000000";ctx.beginPath();
					ctx.moveTo(17,-3);
					ctx.bezierCurveTo(15,-6,13,-8,10,-9);
					ctx.bezierCurveTo(7,-9,4,-11,1,-10);
					ctx.bezierCurveTo(1,-10,1,-10,1,-10);
					ctx.bezierCurveTo(0,-11,1,-11,1,-11);
					ctx.bezierCurveTo(3,-12,5,-13,7,-15);
					ctx.bezierCurveTo(7,-15,7,-15,7,-15);
					ctx.bezierCurveTo(7,-14,8,-14,8,-14);
					ctx.bezierCurveTo(8,-13,9,-13,10,-12);
					ctx.bezierCurveTo(10,-12,10,-12,10,-12);
					ctx.bezierCurveTo(10,-12,10,-12,10,-12);
					ctx.bezierCurveTo(10,-12,10,-12,10,-12);
					ctx.bezierCurveTo(11,-12,12,-13,12,-13);
					ctx.bezierCurveTo(13,-14,13,-14,13,-14);
					ctx.bezierCurveTo(13,-14,13,-14,13,-14);
					ctx.bezierCurveTo(13,-15,13,-15,13,-15);
					ctx.bezierCurveTo(13,-15,13,-15,13,-15);
					ctx.bezierCurveTo(13,-16,13,-17,12,-18);
					ctx.bezierCurveTo(11,-18,11,-19,9,-18);
					ctx.bezierCurveTo(9,-18,9,-18,9,-18);
					ctx.bezierCurveTo(9,-18,9,-18,9,-18);
					ctx.bezierCurveTo(8,-18,8,-18,8,-18);
					ctx.bezierCurveTo(8,-18,8,-18,8,-18);
					ctx.bezierCurveTo(5,-18,4,-19,3,-22);
					ctx.bezierCurveTo(3,-22,3,-22,2,-23);
					ctx.bezierCurveTo(1,-24,-0,-26,-2,-27);
					ctx.bezierCurveTo(-4,-29,-6,-30,-9,-29);
					ctx.bezierCurveTo(-11,-30,-13,-28,-15,-28);
					ctx.bezierCurveTo(-15,-28,-15,-28,-15,-28);
					ctx.bezierCurveTo(-15,-28,-15,-28,-15,-28);
					ctx.bezierCurveTo(-16,-28,-16,-28,-17,-28);
					ctx.bezierCurveTo(-17,-28,-17,-28,-17,-28);
					ctx.bezierCurveTo(-19,-28,-19,-26,-19,-24);
					ctx.bezierCurveTo(-19,-22,-18,-22,-18,-21);
					ctx.bezierCurveTo(-18,-20,-18,-19,-18,-18);
					ctx.bezierCurveTo(-18,-18,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-19,-17,-19,-17);
					ctx.bezierCurveTo(-19,-17,-18,-17,-18,-17);
					ctx.bezierCurveTo(-18,-17,-19,-16,-19,-16);
					ctx.bezierCurveTo(-21,-16,-22,-15,-22,-14);
					ctx.bezierCurveTo(-22,-14,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-14,-22,-14,-22,-14);
					ctx.bezierCurveTo(-22,-13,-21,-12,-20,-11);
					ctx.bezierCurveTo(-20,-11,-20,-11,-20,-11);
					ctx.bezierCurveTo(-19,-10,-18,-9,-18,-9);
					ctx.bezierCurveTo(-19,-6,-18,-3,-17,-1);
					ctx.bezierCurveTo(-17,0,-16,-0,-15,-0);
					ctx.bezierCurveTo(-15,-0,-15,-1,-15,-1);
					ctx.bezierCurveTo(-15,-0,-14,-0,-14,0);
					ctx.bezierCurveTo(-14,0,-14,1,-14,1);
					ctx.bezierCurveTo(-15,2,-15,3,-14,4);
					ctx.bezierCurveTo(-15,4,-15,4,-16,4);
					ctx.lineTo(-16,4);
					ctx.lineTo(-16,4);
					ctx.bezierCurveTo(-16,4,-16,5,-16,5);
					ctx.bezierCurveTo(-18,6,-18,6,-17,8);
					ctx.bezierCurveTo(-17,8,-17,8,-17,8);
					ctx.bezierCurveTo(-17,8,-17,9,-16,10);
					ctx.bezierCurveTo(-16,10,-15,10,-15,11);
					ctx.bezierCurveTo(-15,11,-15,11,-15,11);
					ctx.bezierCurveTo(-14,11,-14,11,-14,11);
					ctx.bezierCurveTo(-13,14,-11,15,-9,15);
					ctx.bezierCurveTo(-7,18,-5,20,-4,22);
					ctx.bezierCurveTo(-4,23,-4,23,-4,23);
					ctx.bezierCurveTo(-4,24,-4,24,-3,24);
					ctx.bezierCurveTo(-3,24,-4,24,-4,24);
					ctx.bezierCurveTo(-5,25,-8,28,-8,30);
					ctx.bezierCurveTo(-8,30,-8,31,-8,31);
					ctx.bezierCurveTo(-7,32,-6,32,-4,32);
					ctx.bezierCurveTo(-4,32,-3,31,-3,31);
					ctx.bezierCurveTo(-0,32,4,30,6,29);
					ctx.bezierCurveTo(8,29,8,28,8,26);
					ctx.bezierCurveTo(8,25,9,24,8,23);
					ctx.bezierCurveTo(8,22,8,22,8,22);
					ctx.bezierCurveTo(8,20,6,20,6,19);
					ctx.bezierCurveTo(5,18,4,17,5,15);
					ctx.bezierCurveTo(7,14,9,13,11,11);
					ctx.bezierCurveTo(13,11,14,9,16,9);
					ctx.bezierCurveTo(17,8,18,7,18,5);
					ctx.bezierCurveTo(18,2,18,-0,17,-3);
					ctx.lineTo(17,-3);
					ctx.globalAlpha = 1.0;
					ctx.stroke();

		}

}

function drawgraphics()
{
		// Move santa to new position and new animation frame
		var frame = 0+Math.round(bounce%4);

		xk-=(xa*3.0);
		if(xk>380||xk<20) xa=-xa;

		bounce+=0.4;
	
		ctx.save();

		ctx.clearRect(0,0,450,125);
	
		ctx.translate(0,-30);

		// Draw Background (no translation)
		ctx.save();
		ctx.scale(1.1,1.0);
		drawBackground();
		ctx.restore();

		// Draw foreground twice to cover screen and move it down slightly							
		ctx.save();
		ctx.scale(1.1,1.0);
		ctx.translate(0,2);
		drawForeground();
		ctx.translate(200,0);							
		drawForeground();
		ctx.restore();

		// Draw Houses
		ctx.save();
		ctx.translate(20,0);
		drawHouse(Math.round((bounce*0.5)%4));
		ctx.translate(130,0);
		drawHouse(Math.round((bounce*0.6)%4)+1);
		drawWreath(Math.round((bounce*0.3)%2));
		ctx.translate(130,0);
		drawHouse(Math.round((bounce*0.7)%4)+2);
		ctx.restore();

		// Draw Snowdrifts
		ctx.save();
		drawDrift();
		ctx.translate(255,4);
		drawDrift();							
		ctx.restore();

		// Draw Christmas Tree
		ctx.save();
		ctx.translate(40,10);
		drawTree();
		ctx.translate(250,10);
		drawTree();
		ctx.restore();

		// Draw Santa
		ctx.save();
		ctx.translate(xk,130);
		ctx.scale(0.7*xa,0.7);	
		stand(frame);							
		ctx.restore();

		// Draw Snowman
		ctx.save();
		ctx.translate(140,10);
		drawSnowman();
		ctx.restore();

		// Draw Snow
		ctx.fillStyle="#fff";
		for(var i=0;i<numflakes;i++){
				// console.log(snowflakes[i].xk+(Math.sin(snowflakes[i].xk+(snowflakes[i].yk*0.03))*snowflakes[i].siz*14.0),snowflakes[i].yk);
				ctx.fillRect(snowflakes[i].xk+(Math.sin(snowflakes[i].xk+(snowflakes[i].yk*0.03))*snowflakes[i].siz*14.0),snowflakes[i].yk,3*snowflakes[i].siz,3*snowflakes[i].siz);
				snowflakes[i].yk+=snowflakes[i].spd;
				if(snowflakes[i].yk>160) snowflakes[i].yk-=160;
		}
	
		ctx.restore();
	
		setTimeout(function(){drawgraphics()}, 30);
}

function startupCanvas()
{
		img=document.getElementById("flake");

		for(var i=0;i<numflakes;i++){
				var typ=Math.round(Math.random()*4);
				snowflakes[i]=new Snowflake(Math.round(Math.random()*450),Math.round(Math.random()*200),0.5+(typ/2),0.15+(typ/8));		
		}

		var elem = document.getElementById('canvas');
		if (elem && elem.getContext) {
			ctx = elem.getContext('2d');
			xk=370;
			drawgraphics();
		}									
}
