<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script src="canvas.js"></script>
    <script src="showsched.js"></script>
    
    <style>
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

</body>

</html>