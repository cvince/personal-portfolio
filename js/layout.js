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

function navWaypointer(targetID,classUp,classDown, correspondingNav){

	$(targetID).waypoint({offset: 200, handler: function(direction){
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


// $('#about').waypoint(function(direction) {
// 	if(direction=='down'){
// 		$('body').removeClass().addClass('about')
// 	}else if(direction=='up'){
// 		$('body').removeClass().addClass('work')
// 	}
// });

navWaypointer('#about','work','about','#nav2');
navWaypointer('#hacks','about','hacks', '#nav3');
navWaypointer('#concepts','hacks','concepts', '#nav4');

$('#about').waypoint({offset: 200, handler: function(direction){
	if(direction == 'down'){
		$('.unresolved').removeClass('unresolved').addClass('resolved');
	}else if(direction =='up'){
		$('.resolved').addClass('unresolved').removeClass('resolved');
	}
}})