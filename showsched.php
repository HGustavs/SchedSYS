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
            width: 180px;
            background-color: #def;
            color: black;
            font-size: 12px;
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
			
				#tab {
						font-family:Arial Narrow;
						font-size:12px;
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
            <div>
                <fieldset>
                    <legend>Write</legend>
										<div><label>Link:</label><input type="text" placeholder="S_BROM" id="link" value="Link"></div>
										<div><label>Kind:</label><select id='kind'><option>ICAL</option><option>URL</option></select></div>
										<div><label>Sign:</label><input type="text" placeholder="S_BROM" id="sign" value="Sign"></div>									
										<div><input type="button" value="add" onclick="addlink();"><input type="button" value="save" onclick="savelink();"><input type="button" value="delete" onclick="deletelink();"></div>
							</fieldset>
                <fieldset>
                    <legend>Items</legend>
										<div id="tab"></div>
							</fieldset>							
            </div>
        </div>
    </div>

</body>

</html>