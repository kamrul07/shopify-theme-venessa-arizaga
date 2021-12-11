jQuery(document).ready(function($) {
  //console.log("Blog: The DOM is now loaded and can be manipulated.");
  
  $('#main.press .content article').each(function() {
    	var placeholder = $(this).find('.placeholder .right .pure-g');
    	$(this).find('.information .body img').each(function() {
          var lores_img = $(this).attr('src');
          var hires_img = lores_img.replace("_large.jpg", ".jpg");
          //console.log(lores_img);
          var imgtag = '<a href="' + hires_img + '"><img src="' + lores_img + '" /></a>';
          /*$(placeholder).append('<div class="pure-u-1-3"><div class="image">' + imgtag + '</div></div>');*/
          $(placeholder).append('<div class="image">' + imgtag + '</div>');
          $(this).remove();
        });
    	$(this).find('.placeholder .left').append($(this).find('.information'));
     	
  });
  $('#main.press .content .information .body p').each(function() {
    var $this = $(this);
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
	});
  
});
jQuery(window).load(function() {
  
  //console.log("Blog: The page is fully loaded including graphics."); 
  
  $('.press .content .placeholder a:has(img)').fluidbox({
    stackIndex:9999
  });
  
  $('.loader').fadeOut();
  
});