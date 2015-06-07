$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	// console.log(wScroll);

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
	});

	$('.descriptive-text p').css({
		'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
	});

	//Calculating when the scrollTop is more than cloth-pics
	//If wScroll is more than the top offset of cloth-pics, perform the below action
	if(wScroll > $('.clothes-pics').offset().top) {
		// console.log('hihih');
		$('.clothes-pics figure').each(function(){
			$('.clothes-pics figure').addClass('.is-showing');
			//is-showing is coded in style.scss
		});
	}
});