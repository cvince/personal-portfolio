$.prototype.wait = function( ms, callback ) {
    return this.each(function() {
        window.setTimeout((function( self ) {
            return function() {
                callback.call( self );
            }
        }( this )), ms );
    });
};

$('a.case-link').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;	
	$('#case-study-article').removeClass('hidden closed').wait(5,function(){$(this).addClass('slideLeft');});
    $('body').addClass('noScroll');
    var location = $(this).attr('href')+'/case.html';
    console.log(location);

    $.post(location, function(data){
        $('#case-content').html(data);
        console.log(data);
    });
    $('.close-case').css('opacity','1');        
})

$('.close-case').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    $('body').removeClass('noScroll');
    $(this).css('opacity','0');
	$('#case-study-article').removeClass('slideLeft').addClass('ani').addClass('closed').wait(1000, function() {
	    $(this).addClass('hidden').removeClass('ani');        
	});	

});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});