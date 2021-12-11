jQuery(document).ready(function($) {
	//console.log("The DOM is now loaded and can be manipulated.");
	
	$('#main .gender a').mouseenter(function() {
		/*$(this).find('.overlay').fadeIn();*/
	});
	$('#main .gender a').mouseleave(function() {
		/*$(this).find('.overlay').fadeOut();*/
	});
	$('.cycle-slideshow').on( 'cycle-after', function( event, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		/*$(outgoingSlideEl).find('.overlay').hide();*/
	});
	$('#main .featured a').mouseenter(function() {
		/*$(this).find('.overlay').fadeIn();*/
	});
	$('#main .featured a').mouseleave(function() {
		/*$(this).find('.overlay').fadeOut();*/
	});
	
	$('input[placeholder]').each(function(){
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	
	$('#menu-toggle').click(function(event) {
		event.preventDefault();
		$('nav').toggleClass('show');
	});
	
	$('#search a').click(function(event) {
		event.preventDefault();
		$('#search-form').toggleClass('show');
	});
	
	$('.mobile-menu nav ul li a').click(function(event) {
		event.preventDefault();
		if ($(this).parent().hasClass('dropdown')){
			$(this).parent().toggleClass('show');
        } else {
         window.location = $(this).attr('href'); 
        }
	});
	
});
jQuery(window).load(function() {
	//console.log("The page is fully loaded including graphics.");
});