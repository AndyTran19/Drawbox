$(document).ready(function(){
    var steps = 3;
    var red_pos = 2;
    for(var i = 0; i < 15 ; i++) {
        $("#mainDiv").append("<div class='box-style' id=box" + i + "></div>");
        if (i == red_pos) {
        	$("#box"+ i).css("background-color", "#282f54");
         
          red_pos+=steps;
        } else {
        	$("#box"+ i).css("background-color", "#285428");
        }
         $("#box"+ i).css("margin", "5px");
    }
   
});
