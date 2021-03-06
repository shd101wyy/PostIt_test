var information = ["Hello There", "I love you"];
var current_offset = information.length - 1;
$(document).ready(function(){
    document.ontouchmove = function(e) {
        e.preventDefault();
    }
    
    $("div").bind('dragstart', function(event) {event.preventDefault(); });
       
    $("#my_card").append("<p class='post_text_content'>" + information[current_offset] +"</p>");
    
    $("#pageone").on("swipeleft", function(){
        console.log("Swipe Left");
        if(current_offset != information.length){
            $("#my_card").hide("slide", {direction:"left"}, 200, function(){
                $("#my_card").html("");
                if(current_offset + 1 == information.length){
                    current_offset = information.length;
                    $("#my_card").append("<p class='post_text_content'> 没有更多的信息 </p>");
                }
                else{
                    current_offset++;
                    $("#my_card").append("<p class='post_text_content'>" + information[current_offset] + "</p>");
                }
                $("#my_card").show("slide", {direction: "right"}, 300);
                console.log(current_offset);
            });
        }
    });
    
    // 向右滑动
    $("#pageone").on("swiperight", function(){
        console.log("Swipe Right");
        if(current_offset != -1){
            $("#my_card").hide("slide", {direction:"right"}, 200, function(){
                $("#my_card").html("");
                if(current_offset == 0){
                    current_offset = -1;
                    $("#my_card").append("<p class='post_text_content'> 没有更多的信息 </p>");
                }
                else{
                    current_offset--;
                    $("#my_card").append("<p class='post_text_content'>" + information[current_offset] + "</p>");
                }
                $("#my_card").show("slide", {direction: "left"}, 300);
                console.log(current_offset);
            });
        }
    });
    
    // 点击了 post 按钮
    $("#post_button").click(function(){
        var msg = prompt();
        $.post("http://192.168.0.2/xampp/PostIt_test/app.php", // 这个以后得改
               {
                   name: "User Name",
                   msg: msg
                }, function(data, status){
                    alert("Data: " +  data + "  Status: " + status);
                })
    })
    
    // 点击了 refresh 按钮
    $("#refresh_button").click(function(){
        alert("Refresh");
    })

    // 用户注册
    $("#user_signup").click(function(){
	var user_name = $("#signup_username").val();
	var user_password = document.getElementById("signup_password").value;
	
	// 存到服务器
	// http://192.168.2.4/xampp/PostIt_test
	$.ajax({url: "./signup.php", 
		async: false,
		type: "POST",
		data: {  user_name: user_name,
			 password: user_password
		      }
	       })
	    .done(function(data){
                console.log("Signup !");
		alert("Data: " +  data);
            })
	    .fail(function(data){
		alert("ERROR");
		alert(data);
		console.log(data);
	    });
	
    })
    // 用户登录
    $("#user_login").click(function(){
	var user_name = $("#login_username").val();
	var user_password = document.getElementById("login_password").value;
	
	// 存到服务器
	// http://192.168.2.4/xampp/PostIt_test
	$.ajax({url: "./login.php", 
		async: false,
		type: "POST",
		data: {  user_name: user_name,
			 password: user_password
		      }
	       })
	    .done(function(data){
                console.log("Login !");
		alert("Data: " +  data);
            })
	    .fail(function(data){
		alert("ERROR");
		alert(data);
		console.log(data);
	    });
	
    })
    
    /*
    // 向上滑动
    $("#pageone").on("swipeup", function(){
        console.log("Swipe Up");
    });
    
    $("#pageone").on("swipedown", function(){
        console.log("Swipe Up");
    });
    */
})
