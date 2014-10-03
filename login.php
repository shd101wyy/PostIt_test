<?php
     $user_name = $_POST["user_name"];
     $password = /*sha1*/($_POST["password"]);
     // 连接到 mysql
     $cons = mysqli_connect("localhost", "root", "", "shd101wyy");
     // check connect error
     if(!$cons){
         echo mysqli_error($cons);
	 exit;	
     }
     
     // check user name existed.
     // select database
     $database_selected = mysqli_select_db($cons, "shd101wyy");
     if(!$database_selected){
	echo mysqli_error($cons);
	exit;
     }
     
     $check_user_existed_result = mysqli_query($cons, 
     "SELECT * FROM User WHERE user_name='$user_name' LIMIT 1")	;	
     if(!$check_user_existed_result){
         echo mysqli_error($cons);
	 exit;
     }
     if(mysqli_num_rows($check_user_existed_result) > 0){
        $result = mysqli_fetch_array($check_user_existed_result, MYSQLI_ASSOC);
	if ($result["user_name"] == $user_name){
	   echo "User name match\n";
	}
	if ($result["password"] == $password){
	   echo "User name and password match\n";   
	}
	else{
	   echo "User name and password doesn't match\n";
	   echo $password;
	   echo $result["password"];
	}
	exit;
     }    
     else{
	echo "Used doesn't exist";
	exit;
     }
     

?>