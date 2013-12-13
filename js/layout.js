$(document).ready(function(){

})

function waypointer(targetID,classUp,classDown, correspondingNav){

	$(targetID).waypoint(function(direction){
		if(direction == 'down'){
			$(correspondingNav).addClass('activated');
			console.log(correspondingNav+'activated');
			$('body').removeClass().addClass(classDown)
		}else if(direction == 'up'){
			$(correspondingNav).removeClass('activated');			
			$('body').removeClass().addClass(classUp)
		}
	})

}

// $('#about').waypoint(function(direction) {
// 	if(direction=='down'){
// 		$('body').removeClass().addClass('about')
// 	}else if(direction=='up'){
// 		$('body').removeClass().addClass('work')
// 	}
// });

waypointer('#about','work','about','#nav2');
waypointer('#hacks','about','hacks', '#nav3');
waypointer('#concepts','hacks','concepts', '#nav4');