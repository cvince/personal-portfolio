$(document).ready(function(){


	//work entrance sequence
	function workEnterSequencer(){


		var callback;
		var article = $('.work-holder .work-item');
		var i = article.length;

		function callback () {
		    if (i >= 0) {
		        $(article[i]).removeClass('un-entered');

		        i--;
		        setTimeout(callback, 50);
		    }
		};

		setTimeout(callback, 50);

	}

	workEnterSequencer();

})

function waypointer(targetID,classUp,classDown, correspondingNav){

	$(targetID).waypoint({offset: 10, handler: function(direction){
		if(direction == 'down'){
			$(correspondingNav).addClass('activated');
			console.log(correspondingNav+'activated');
			$('body').removeClass().addClass(classDown)
		}else if(direction == 'up'){
			$(correspondingNav).removeClass('activated');			
			$('body').removeClass().addClass(classUp)
		}
	}	})

}

$.prototype.wait = function( ms, callback ) {
    return this.each(function() {
        window.setTimeout((function( self ) {
            return function() {
                callback.call( self );
            }
        }( this )), ms );
    });
};
// $('#about').waypoint(function(direction) {
// 	if(direction=='down'){
// 		$('body').removeClass().addClass('about')
// 	}else if(direction=='up'){
// 		$('body').removeClass().addClass('work')
// 	}
// });

$('.case-link').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;	
	$('#case-study-article').removeClass('hidden closed').addClass('slideLeft');
})

$('.close-case').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
	$('#case-study-article').removeClass('slideLeft').addClass('ani').addClass('closed').wait(1000, function() {
	    $(this).addClass('hidden').removeClass('ani');
	});	

});

waypointer('#about','work','about','#nav2');
waypointer('#hacks','about','hacks', '#nav3');
waypointer('#concepts','hacks','concepts', '#nav4');