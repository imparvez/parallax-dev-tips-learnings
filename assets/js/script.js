$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	// console.log(wScroll);

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.descriptive-text p').css({
		'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
	});
});