$(document).ready(function(){

    //vertical center offset

    windowHeight = $(document).height();
    getHeight = $('.verticalCenter').height();
    getArticleHeight = $('.overlay').height();

    $('#dashboard').css('height',windowHeight-200)

    if(windowHeight>360)
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"50%"});
        $('.overlay').css({"margin-top":-getArticleHeight/2+"px", "top":"50%"});        
    }
    else
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"120px"});
        $('.overlay').css({"top":"10px"});        
    }
    //console.log(getHeight);
});

$(window).load(function(){

    //vertical center offset

    windowHeight = $(document).height();
    getHeight = $('.verticalCenter').height();
    getArticleHeight = $('.overlay').height();

    $('#dashboard').css('height',windowHeight-200)

    if(windowHeight>360)
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"50%"});
        $('.overlay').css({"margin-top":-getArticleHeight/2+"px", "top":"50%"});        
    }
    else
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"120px"});
        $('.overlay').css({"top":"10px"});        
    }
    //console.log(getHeight);

});

$(window).resize(function(){

    //vertical center offset

    windowHeight = $(document).height();
    getHeight = $('.verticalCenter').height();
    getArticleHeight = $('.overlay').height();

    $('#dashboard').css('height',windowHeight-200)

    if(windowHeight>360)
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"50%"});
        $('.overlay').css({"margin-top":-getArticleHeight/2+"px", "top":"50%"});        
    }
    else
    {
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px", "top":"120px"});
        $('.overlay').css({"top":"10px"});
        $('.overlay').css({"margin-top":0})    
    }
    //console.log(getHeight);
});