$(document).ready(function(){
    $("#ani3").hide();
    $("#ani1-2").hide();
    $("#ani3-2").hide();
    $("#ani4-3").hide();
    $("#ani4").fadeOut(0);

    function sequence1(){
        $("#ani1-2").show();
    	jQuery("#ani1-2").ticker({
        cursorList:  "<!--[if IE]><img id='aniCursor' src='img/cursor.png'><![endif]--><!--[if !IE]> --><img id='aniCursor' src='img/cursor.svg'><!-- <![endif]-->",
        rate:        30,
        delay:       200
    	}).trigger("play");
        setTimeout(function(){jQuery("#ani1-2").trigger("stop");},2000);
        setTimeout(function(){$(".cursor").blink();},2000);    
	}


    function adaptHeight(){
        getHeight = $('.verticalCenter').height();
        $('.verticalCenter').css({"margin-top":-getHeight/2+"px"});  
    }

    function sequence3(){
    $('#ani3-2').typewrite({
        'callback': function(){
            $("#aniCursor2").blink();
            $(".aniProfile").animate({opacity:1},2000);
            $("#aniContinue").animate({opacity:1},500);
        },
        'delay': 30, //time in ms between each letter
        'extra_char': '<!--[if IE]><img id="aniCursor2" src="img/cursor.png"><![endif]--><!--[if !IE]> --><img id="aniCursor2" src="img/cursor.svg"><!-- <![endif]-->'

        });
    }

    function sequence4(){
    $("#ani4-2").animate({opacity:1},1000,function(){
        $('#ani4-3').typewrite({
            'callback': function(){
                $("#aniCursor2").blink();
                $("#aniCursor3").animate({opacity:1},4000);
                $("#aniCursor2").animate({opacity:0},4000,
                    function(){
                        $(".introStage").animate({top:"-100%"},1000, function(){$(this).hide();});                         
                    }
                );        
            },
            'delay': 100, //time in ms between each letter
            'extra_char': '<!--[if IE]><img id="aniCursor2" src="img/cursor.png"><![endif]--><!--[if !IE]> --><img id="aniCursor2" src="img/cursorUnder.svg"><img id="aniCursor3" src="img/cursorOver.svg"><!-- <![endif]-->'
        });        
    });
    }

    // sequencer

    $("#ani1").fadeIn(1000, function(event) {
        sequence1();
        setTimeout(function(){$('#ani1').fadeOut(400);},4000);
    });

    setTimeout(function(){
        $("#ani3").fadeIn(1000, function(event){
            sequence3();
        }); adaptHeight();         
    },6000);


    $("#aniContinue").click(function(){
        $("#ani3").animate({opacity:0},500,function(){
            $("#ani4").fadeIn(1000,function(){sequence4();});
            $("#ani3").css('display','none');
        });
        

    });



});