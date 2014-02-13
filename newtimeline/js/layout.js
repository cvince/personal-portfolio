$(document).ready(function(){

    //vertical center offset
    getHeight = $('.verticalCenter').height();
    //console.log(getHeight);
    $('.verticalCenter').css({"margin-top":-getHeight/2+"px"});

});

$(window).load(function(){

    //vertical center offset
    getHeight = $('.verticalCenter').height();
    //console.log(getHeight);
    $('.verticalCenter').css({"margin-top":-getHeight/2+"px"});

});

$(window).resize(function(){

    //vertical center offset
    getHeight = $('.verticalCenter').height();
    //console.log(getHeight);
    $('.verticalCenter').css({"margin-top":-getHeight/2+"px"});

});