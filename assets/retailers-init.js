jQuery(document).ready(function($) {
  //console.log("Retailers: The DOM is now loaded and can be manipulated.");
	
	/*
	//manipulate the table
	$('table#retailers tbody tr').each(function( index ) {
		var googlemapsurl = $(this).find('td:eq(6)').text();
		if (googlemapsurl) {
			$(this).find('td:eq(1)').append('&nbsp;&nbsp;<a href="' + googlemapsurl + '" target="_blank"><i class="fa fa-map-marker"></i>MAP</a>');
		}
		$(this).find('td:eq(6)').remove();
	});	
	$('table#retailers thead tr th').eq(6).remove();
	*/
	
	var table = $("table#retailers").stupidtable();
	$(table).find("th").eq(0).click(); // Use the index of the th you want in place of 0
	
	table.on("beforetablesort", function (event, data) {
		// Apply a "disabled" look to the table while sorting.
        // Using addClass for "testing" as it takes slightly longer to render.
        $("#msg").text("Sorting...");
        $("table").addClass("disabled");
	});
      
	table.on("aftertablesort", function (event, data) {
        // Reset loading message.
        $("#msg").html("&nbsp;");
        $("table").removeClass("disabled");
        
        var th = $(this).find("th");
        th.find(".arrow").remove();
        var dir = $.fn.stupidtable.dir;
        
		if (th.eq(data.column).data('sort') == 'string') {
			var arrow = data.direction === dir.ASC ? '<i class="fa fa-sort-alpha-asc"></i>' : '<i class="fa fa-sort-alpha-desc"></i>';
		} else if (th.eq(data.column).data('sort') == 'int') {
			var arrow = data.direction === dir.ASC ? '<i class="fa fa-sort-numeric-asc"></i>' : '<i class="fa fa-sort-numeric-desc"></i>';
		}
		
        th.eq(data.column).append('<span class="arrow">&nbsp;' + arrow +'</span>');
	});
  
    $("address").each(function(){                         
        var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
        $(this).html(embed);             
    });
      $("table tbody tr").each(function( index ) {
        var googlemapsaddress = "";
        //var store = $(this).find("td:eq(0)").text();
        var address = $(this).find("td:eq(1)").text();
        var city = $(this).find("td:eq(2)").text();
        var zip = $(this).find("td:eq(4)").text();
        var country = $(this).find("td:eq(5)").text();
        if (address && city && country) {
        googlemapsaddress = address + ',' + city + ',' + zip + ',' + country;
        var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( googlemapsaddress ) + "' target='_blank'>MAP</a>";
      	$(this).find("td:eq(6)").html(link);
        }
    });

});
jQuery(window).load(function() {
	//console.log("Retailers: The page is fully loaded including graphics.");
});