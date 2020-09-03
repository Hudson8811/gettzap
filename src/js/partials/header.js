$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
		$('body').toggleClass('body-menu-open');
	});

	$('.js-my-search-btn').click(function () {
		$(this).closest('.my-search-wrap').toggleClass('my-search-wrap--active');
		//$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

	$('.site-menu-item--has-l2').click(function () {
		$(this).siblings('.site-menu-l2').slideToggle(300);
		$(this).toggleClass('site-menu-item--active-l2');
		//$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});


});