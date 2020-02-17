<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="canvas.js"></script>
    <script src="showcourses_demo.js"></script>

    <style>
				html, body {margin: 0; height: 100%; overflow: hidden}
			
        body {
            font-family: Arial Narrow, Arial, sans-serif;
            font-size: 20px;
            overflow-x: hidden;
        }

        #fab {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 80px;
            height: 80px;
            font-size: 36px;
            line-height: 80px;
            text-align: center;
            border-radius: 40px;
            background-color: #eb4;
            box-shadow: 6px 6px 10px #888;
        }

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
            width: 22px;
            display: inline-block;
            vertical-align: top;
						transform-origin: top left;            
						transform: translate(20px,0px) rotate(90deg);					
        }

        #options-pane-content {
            vertical-align: top;
            display: inline-block;
        }

        .show-options-pane {
            right: 0;
        }

        .hide-options-pane {
            right: -260px;
        }

        .selected-entry {
            box-shadow: 6px 6px 10px #888;
        }

        .hide {
            display: none;
        }
			
				#container {
						position:absolute;
						left:0px;
						top:0px;
						border:1px dotted green;
						width:100%;
						height:100%;
				}	
			
			.program {
					background:#fed;
					border: 1px solid red;
					border-radius:3px;
					box-shadow:2px 2px 2px #000;
					position:absolute;
			}
			
			.flexyear {
					display: flex;
					flex-direction: row;
					width:100%;
			}
			
    </style>

</head>

<body onload="getData();">

		<div id="container" onmousedown='mdown(event)' onmouseup='mup(event)' onmousemove='mmoving(event)'>
		THIS IS THE CONTAINER!
		</div>

    <div id="fab" onclick="fab_action();">+</div>

    <div id="options-pane" class="hide-options-pane">
        <div id="options-pane-button" onclick="fab_action();"><span>&#9660;Options</span></div>
        <div id="options-pane-content">
            <div>
                <fieldset>
                    <legend>Zoom</legend>
                    <input type="button" value="Zoom in" onclick='zoomin();' />
                    <input type="button" value="Zoom out" onclick='zoomout();' />									
                </fieldset>

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
                    <div><input id="box6" onchange="showdata()" type="checkbox"><label for="box6">Ignore iCal calendars</label></div>
                    <div><input id="box7" type="checkbox"><label for="box7">Use optimistic sync</label></div>
                </fieldset>
            </div>
        </div>
    </div>

</body>

</html>