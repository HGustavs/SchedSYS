<?php		
	
require "config.php";
session_start();
if(!isset($_SESSION['adminpass'])) $_SESSION['adminpass']="UNK";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="canvas.js"></script>
    <script src="showsched.js"></script>
    
    <style>

        #options-pane {
            position: fixed;
            top: 10px;
            width: 280px;
            bottom: 120px;
            z-index: 5000;
            background-color: #eb4;
            color: #FFF;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            box-shadow: 0px 6px 10px #888;
            padding: 10px;
            transition: right .3s ease-in-out;
        }

        #options-pane-button {
            display: inline-block;
            vertical-align: top;
						transform-origin: top left;            
						transform: translate(20px,0px) rotate(90deg);					
        }

        #options-pane-content {
						margin-left:20px;
            vertical-align: top;
            display: inline-block;
        }

        .show-options-pane {
            right: 0px;
        }

        .hide-options-pane {
            right: -270px;
        }

        .selected-entry {
            box-shadow: 6px 6px 10px #888;
        }

        .hide {
            display: none;
        }
						
			
        body {
            font-family: Arial Narrow, Arial, sans-serif;
            font-size: 20px;
        }

        table {
            font-family: Arial Narrow, Arial, sans-serif;
            font-size: 20px;
            font-style: normal;
            font-variant: normal;
            font-weight: 700;
            border-collapse: collapse;
            border: 1px solid black;
        }

        th {
            color: white;
            background-color: #816;
            padding: 4px;
        }

        .dayte {
            color: white;
            background-color: #816;
            padding: 4px;
            font-size: 16px;
            text-align: center;

        }

        td {
            border-left: 2px solid #816;
            border-right: 2px solid #816;
        }

        .sched {
            width: 180px;
            height: 300px;
            position: relative;
        }

        .weekno {
            color: navy;
        }

        tr {
            border-bottom: 2px solid #816;
        }

        .curr {
            background-color: #f8e8f8;
        }

        .wrap {
            transform: rotate(-90deg);
            transform-origin: top left;

            position: absolute;
            top: 600px;
            left: 0;

            height: 1000px;
            width: 600px;

            background-color: #000;
            color: #fff;

            overflow: auto;
        }

        .timeslot {
            left: 0px;
            overflow: hidden;
            position: absolute;
            width: 176px;
            background-color: #def;
            color: black;
            font-size: 12px;
            padding:0px 2px;
        }

        .lunch {
            overflow: hidden;
            position: absolute;
            left: 0px;
            width: 180px;
            background-image: url(lineback.svg);
            color: black;
            font-size: 12px;
            border: 1px solid black;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2) inset;
        }

        #canvas {
            border: 1px solid red;
            bottom: 0px;
            width: 900px;
            height: 250px;
        }
			
				#tab table{
						font-family:Arial Narrow;
						font-size:10px;
						font-weight:lighter;
						color:#000;
						border-collapse: collapse;
				}

				#tab td{
						border:none;
				}

				#tab tr{
						border:none;
				}			
			
				.delbutto{
						width:24px;
						display:inline-block;
						text-align:center;
				}
			
				.showurl{
						display:inline-block;
						width:40px;
						overflow:hidden;
				}
			
				#tab tr:nth-child(even) {
						background: #CCC
				}
				
				#tab tr:nth-child(odd) {
						background: #FFF
				}		

				#tab tr:nth-child(odd):hover {
						background: #ffe8d0;
				}			
			
				#tab tr:nth-child(even):hover {
						background: #ddc880;
				}			
			
				.bokbar{
						background-color:#6d6;
				}
			
				.bokbar:hover{
						border:1px solid orange;
						background-color:#8f8;
						box-sizing: border-box;
				}			
			
				.flexcontainer {
					 display: flex;
					 flex-direction: row;
                     justify-content: space-between;
					 pointer-events: none;
				}	
			
			.signcontainer{
					border-top:1px dotted RGBA(0,0,0,0.2);
					margin-top:3px;
					padding-top:3px;
			}
			
			.sign{
					font-weight:100;
					padding-right:6px;
			}
			
			.updated{
					font-size:small;
					font-style:italic;
					font-weight:400;
					color:darkred;
			}
			
			.comment{
					font-style:italic;
					font-weight:400;	
			}
			
    </style>

</head>

<body onload="getData();">
    <div class='wrkap'>
        MAKE IT HAPPEN <span id='feedback'></span><br>
        <hr><br>
        <div id="datedisp">

        </div>

    </div>

   <div id="options-pane" class="hide-options-pane">
        <div id="options-pane-button" onclick="fab_action();"><span id='optmarker'>&#9660;Options</span></div>
        <div id="options-pane-content" >
						<?php
								echo "<div id='adminpane'>";
								if($_SESSION['adminpass']==adminpass){
										echo "<fieldset>";
										echo "<legend>Config</legend>";
										echo "<div><label>Link:</label><input type='hidden' value='-1' id='confid'><input type='text' placeholder='S_BROM' id='link' value='Link'></div>";
										echo "<div><label>Kind:</label><select id='kind'><option>ICAL</option><option>URL</option></select></div>";
										echo "<div><label>Sign:</label><input type='text' placeholder='BROM' id='sign' value='Link'></div>";
										echo "<div><input type='button' value='add' onclick='addLink();' ><input type='button' value='save' onclick='saveLink();'></div>";
										echo "</fieldset>";
										echo "<fieldset>";
										echo "<div id='tab'></div>";
										echo "</fieldset>";
								}else{
										echo "<form method='post' action='adminlogin.php'>";
										echo "<fieldset>";
										echo "<legend>Login</legend>";
										echo "<div><label>Adminpass:</label><input type='password' placeholder='hint' name='adminpass' value='Link'></div>";
										echo "</fieldset>";
										echo "<input type='submit' value='OK'>";
										echo "</form>";
								}
								echo "</div>";
						?>
						<div id="bookingpane" style='display:none;'>
								<div><label id="meeting-label"></label></div>
								<div><input type='hidden' value='-1' id='bokid'><label>Namn:</label><input type='text' placeholder='Greger' id='boknamn'><span id='cancel-meeting-btn'></span></div>
								<div><input type='button' value='save' onclick='saveBooking();'></div>
						</div>
        </div>
    </div>

</body>

</html>