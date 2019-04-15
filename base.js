

$(document).ready(function(){
    $("#head").mouseover((event)=>{
        var MouseX = event.pageX;
        var MouseY = event.pageY;
        var X = MouseX / 2 - screen.width
        
        $( "#city1" ).stop().animate({
            right: X
          }, 7000, function() {
          });

        $( "#city2" ).stop().animate({
            right: X
          }, 5000, function() {
          });

    })
});