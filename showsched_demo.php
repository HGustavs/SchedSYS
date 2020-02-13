<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="canvas.js"></script>
    <script src="showsched_demo.js"></script>
    
    <style>
        body {
            font-family: Arial Narrow, Arial, sans-serif;
            font-size: 20px;
            overflow-x: hidden;
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

        #fab {
            position: fixed;
            bottom: 30px;
            right:30px;
            width:80px;
            height:80px;
            font-size:36px;
            line-height: 80px;
            text-align: center;
            border-radius: 40px;
            background-color: #eb4;
            box-shadow: 6px 6px 10px #888;
        }
			
				.icalelement{
						background-image: radial-gradient(ellipse farthest-corner at 45px 45px, rgba(50, 50, 50, 0.8) 0%, rgba(80, 80, 80, 0.2) );
				}

				#options-pane {
            position: absolute;
            top:10px;
            width:280px;
            bottom: 120px;
            z-index: 5000;
            background-color: #eb4;
            color:#FFF;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            box-shadow: 6px 6px 10px #888;
            padding:10px;
            transition: right .3s ease-in-out;
        }
        .show-options-pane {
            right: 0;
        }
        .hide-options-pane {
            right: -310px;
        }
        .selected-entry {
            box-shadow: 6px 6px 10px #888;
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

    <canvas id="canvas" width="450" height="125">
    </canvas>
	
    <div id="fab" onclick="fab_action();">+</div>

    <div id="options-pane" class="hide-options-pane">
        <h4>Options</h1>
        <div>
            <fieldset>
                <legend>Calendar Options</legend>
                <div><input id="box1" type="checkbox"><label for="box1">Highligt updates</label></div>
                <div><input id="box2" type="checkbox"><label for="box2">Use pastel colors</label></div>
                <div><input id="box3" type="checkbox"><label for="box3">Hide seminars</label></div>
                <div><input id="box4" type="checkbox"><label for="box4">Hide lectures</label></div>
                <div><input id="box5" type="checkbox"><label for="box5">Hide labs</label></div>            
            </fieldset>

            <fieldset>
                <legend>Sync Options</legend>
                <div><input id="box6" type="checkbox"><label for="box6">Ignore iCal calendars</label></div>
                <div><input id="box7" type="checkbox"><label for="box7">Use optimistic sync</label></div>            
            </fieldset>
        </div>
    </div>

</body>

</html>