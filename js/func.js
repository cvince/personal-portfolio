$.prototype.wait = function( ms, callback ) {
    return this.each(function() {
        window.setTimeout((function( self ) {
            return function() {
                callback.call( self );
            }
        }( this )), ms );
    });
};

$('.case-link').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;	
	$('#case-study-article').removeClass('hidden closed').addClass('slideLeft');
    var location = $(this).attr('href')+'/case.html';
    console.log(location);

    $.post(location, function(data){
        $('#case-content').html(data);
        console.log(data);
    });
})

$('.close-case').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
	$('#case-study-article').removeClass('slideLeft').addClass('ani').addClass('closed').wait(1000, function() {
	    $(this).addClass('hidden').removeClass('ani');
	});	

});