var information = ["Hello There", "I love you"];
var current_offset = information.length - 1;
$(document).ready(function(){
    
    $("#my_card").append("<p class='post_text_content'>" + information[current_offset] +"</p>");
    
    $("#pageone").on("swipeleft", function(){
        console.log("Swipe Left");
        if(current_offset != information.length){
            $("#my_card").hide("slide", {direction:"left"}, 300, function(){
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
            $("#my_card").hide("slide", {direction:"right"}, 300, function(){
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
    })
})
