$(document).ready(function(){
	x = 0;
	
	// for next slide
	
	$('.next').click(function(){
		x = (x<=0)?(x+100):0; 
		
		$('figure').css('top', -x+"%");
	});
	
	// for previous slide
	
	$('.prev').click(function(){
		x = (x>=100)?(x-100):100; 
		
		$('figure').css('top', -x+"%");
	});
	
	//toggle menubar
	
	$(".fa-bars").click(function(){
		$(".menu").slideToggle(500);
	});
})
