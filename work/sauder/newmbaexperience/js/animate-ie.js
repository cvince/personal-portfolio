$(document).ready(function(){
    function tickerCall(){
    	jQuery("#ani2-1").ticker({
        cursorList:  "<!--[if lt IE 9]><img id='aniCursor' src='img/cursor.png'><![endif]--><img id='aniCursor' src='img/cursor.svg'>",
        rate:        20,
        delay:       20
    	}).trigger("play");
	}


	tickerCall();
    setTimeout(function(){jQuery("#ani2-1").trigger("stop");},1000);
	setTimeout(function(){$(".cursor").blink();},1000);
});