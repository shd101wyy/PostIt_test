  <?php		
     $user_name = $_POST["user_name"];
     $password = sha1($_POST["password"]); // 用 SHA 加密
      
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
        echo "User already existed";
	exit;
     }    
     
     // save user_name and password to MySql
     $insert_value = "INSERT INTO User VALUES ('$user_name', '$password')";
     
     mysqli_query($cons, $insert_value);
     mysqli_close($cons);
     echo "signup_success";		
    ?>
