$(document).ready(function() {


	$('body').append('<div class="popup-box" id="popup-box-1"><div class="close">X</div><div class="top"><img src="morz.jpg"><h2>Михаил Морж</h2><h2>Амплуа:Нападающий</h2><h2>Сыграно матчей:10</h2><h2>Забито очков:32</h2></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-2"><div class="close">X</div><div class="top"><img src="shaloshov.jpg"><h2>Павел Шалашов</h2><h2>Амплуа:Защитник</h2><h2>Сыграно матчей:15</h2><h2>Забито очков:45</h2></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-3"><div class="close">X</div><div class="top"><img src="frolov.jpg"><h2>Сергей Фролов</h2><h2>Амплуа:Разыгрывающий защитник</h2><h2>Сыграно матчей:65</h2><h2>Забито очков:300</h2></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-4"><div class="close">X</div><div class="top"><img src="gad.jpg"><h2>Гаджи Гаджиев</h2><h2>Амплуа:Легкий форвард</h2><h2>Сыграно матчей:107</h2><h2>Забито очков:456</h2></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-5"><div class="close">X</div><div class="top"><img src="Jordan.jpg"><h2>Michael Jeffrey Jordan</h2><h2>Амплуа:Атакующий защитник</h2><h2>Сыграно матчей:1072</h2><h2>Забито очков:32292</h2></div></div>');
	$('body').append('<div class="popup-box" id="popup-box-6"><div class="close">X</div><div class="top"><img src="putin.jpg"><h2>Володя Путин</h2><h2>Амплуа:Разыгрывающий защитник</h2><h2>Сыграно матчей:146</h2><h2>Забито очков:146</h2></div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-7"><div class="close">X</div><div class="top"><img src="savocko.jpg"><h2>Тимофей Савосько Jordan</h2><h2>Амплуа:Атакующий защитник</h2><h2>Сыграно матчей:10</h2><h2>Забито очков:90</h2></div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-8"><div class="close">X</div><div class="top"><img src="patme.jpg"><h2> Минь Патмэ</h2><h2>Амплуа:Тяжелый форвад</h2><h2>Сыграно матчей:107</h2><h2>Забито очков:177</h2></div></div>');	
	$('body').append('<div class="popup-box" id="popup-box-9"><div class="close">X</div><div class="top"><img src="leikin.jpg"><h2> Михаил Лейкин</h2><h2>Амплуа:Центровой</h2><h2>Сыграно матчей:234</h2><h2>Забито очков:598</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-a"><div class="close">X</div><div class="top"><img src="abamo.jpg"><h2> Виктор Амабо</h2><h2>Амплуа:Легкий форвад</h2><h2>Сыграно матчей:14</h2><h2>Забито очков:87</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-b"><div class="close">X</div><div class="top"><img src="Mavashi.jpg"><h2> Михаил Петухов</h2><h2>Амплуа:Тяжелый форвад</h2><h2>Сыграно матчей:100</h2><h2>Забито очков:277</div></div>');
    $('body').append('<div class="popup-box" id="popup-box-c"><div class="close">X</div><div class="top"><img src="stolbov.jpg"><h2> Минь Патмэ</h2><h2>Амплуа:Защитник</h2><h2>Сыграно матчей:9</h2><h2>Забито очков:30</div></div>');
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
