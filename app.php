<html>
  <?php	
     $name = $_POST["name"];
     echo $name . " I am handsome";
     
     $user_name = $_POST["user_name"];
     $password = $_POST["password"]; // 用 SHA 加密
      
     // 连接到 mysql
     $cons = mysqli_connect("192.168.0.2", "root", "", "shd101wyy");
     // check connect error
     if(mysqli_connect_errno()){
         echo "connect_error";
     }
     
     // save user_name and password to MySql
     $insert_value = "INSERT INTO User VALUES ('$user_name', '$password')";
     
     mysqli_query($cons, $insert_content);
     echo "signup_success";
     ?>
</html>
