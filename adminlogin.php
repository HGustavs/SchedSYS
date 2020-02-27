<?php		
		session_start();
		require "config.php";

		if(!isset($_POST['adminpass'])) $_POST['adminpass']="UNK";
		if(!isset($_SESSION['adminpass'])) $_SESSION['adminpass']="UNK";

		if($_POST['adminpass']==adminpass){
				$_SESSION['adminpass']=$_POST['adminpass'];
				header("Location: showsched.php");
		}else{
				header("Location: showsched.php");
		}
?>