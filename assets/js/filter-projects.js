$(document).ready(function(){
	var $container = $('.portfolioContainer');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
 
	$('.our-projects-nav li a').click(function(){
		$('.our-projects-nav li .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		 });
		 return false;
	}); 
});