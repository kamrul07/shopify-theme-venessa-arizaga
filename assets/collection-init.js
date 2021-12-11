jQuery(document).ready(function($) {
  //console.log("Collection: The DOM is now loaded and can be manipulated."); 
  $('#main.collection .page-top .sorting a').click(function(event) {
    event.preventDefault();
    var collectionurl = window.location.pathname;
    window.location = collectionurl+"?sort_by=" + $(this).data("sortby");
  }); 
});
jQuery(window).load(function() {
  //console.log("Collection: The page is fully loaded including graphics.");
});



