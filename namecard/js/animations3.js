$(function(){
    
    // container is the DOM element;
    // userText is the textbox
    
    var mainAnimation1 = $("#mainAnimation")
    var mainAnimation2 = $("#mainAnimation2")
    var mainAnimation3 = $("#mainAnimation3")
    var mainAnimation4 = $("#mainAnimation4")            
    var mainAnimation5 = $("#mainAnimation5") 
    var mainAnimation6 = $("#mainAnimation6")
    var mainAnimation7 = $("#mainAnimation7") 
    var mainAnimation8 = $("#mainAnimation8")            
    var mainAnimation9 = $("#mainAnimation9") 
    var mainAnimation10 = $("#mainAnimation10")
    var mainAnimation11 = $("#mainAnimation11")     
    var mainAnimation12 = $("#mainAnimation12")


    var secondaryAnimation0 = $(".secondaryAnimation0")
    var secondaryAnimation1 = $("#secondaryAnimation1")
    var secondaryAnimation2 = $("#secondaryAnimation2") 
    var secondaryAnimation3 = $("#secondaryAnimation3")           

    // Shuffle the contents of container


        mainAnimation4.css("opacity",1).shuffleLetters();            
        secondaryAnimation1.animate({opacity:1},500);
        secondaryAnimation2.animate({opacity:1},1000);
        secondaryAnimation3.animate({opacity:1},1500);

setTimeout(function(){
        secondaryAnimation0.animate({opacity:1},1500);
},500);

     

})
