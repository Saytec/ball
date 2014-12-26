$(document).ready(function() {


	$('body').append('<div class="popup-box" id="popup-box-1"><div class="close">X</div><div class="top"><center><h2>jordan!</h2><img src="glavnaya.jpg"></center></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-2"><div class="close">X</div><div class="top"><h2>malyar kryt!</div></div>');
	$('body').append('<div class="popup-box" id="popup-box-3"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
	$('body').append('<div class="popup-box" id="popup-box-4"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
	$('body').append('<div class="popup-box" id="popup-box-5"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
	$('body').append('<div class="popup-box" id="popup-box-6"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-7"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-8"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-9"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-a"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-b"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-c"><div class="close">X</div><div class="top"><h2>malyar!</div></div>');
	$('body').append('<div id="blackout"></div>');

	
	
	var boxWidth = 400;
	
	function centerBox() {
		
		/* Preliminary information */
		var winWidth = $(window).width();
		var winHeight = $(document).height();
		var scrollPos = $(window).scrollTop();
		/* auto scroll bug */
		
		/* Calculate positions */
		
		var disWidth = (winWidth - boxWidth) / 2
		var disHeight = scrollPos + 150;
		
		/* Move stuff about */
		$('.popup-box').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
		$('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});
	
		return false;
	}
	
	
	
	$(window).resize(centerBox);
	$(window).scroll(centerBox);
	centerBox();	

	$('[class*=popup-link]').click(function(e) {
	
		/* Prevent default actions */
		e.preventDefault();
		e.stopPropagation();
		
		/* Get the id (the number appended to the end of the classes) */
		var name = $(this).attr('class');
		var id = name[name.length - 1];
		var scrollPos = $(window).scrollTop();
		
		/* Show the correct popup box, show the blackout and disable scrolling */
		$('#popup-box-'+id).show();
		$('#blackout').show();
		
		/* Fixes a bug in Firefox */
		$('html').scrollTop(scrollPos);
	});
	$('[class*=popup-box]').click(function(e) { 
		/* Stop the link working normally on click if it's linked to a popup */
		e.stopPropagation(); 
	});
	$('html').click(function() { 
		var scrollPos = $(window).scrollTop();
		/* Hide the popup and blackout when clicking outside the popup */
		$('[id^=popup-box-]').hide(); 
		$('#blackout').hide();
		$('html').scrollTop(scrollPos);
	});
	$('.close').click(function() { 
		var scrollPos = $(window).scrollTop();
		/* Similarly, hide the popup and blackout when the user clicks close */
		$('[id^=popup-box-]').hide(); 
		$('#blackout').hide(); 
		$('html').scrollTop(scrollPos);
	});
});
