
$(document).ready(function () {
	$('.sh-burger').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});
	$('.search-btn').click(function () {
		$(this).closest('.search-wrap').toggleClass('search-wrap--active');
		//$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});
	$('.site-menu-item--has-l2').click(function () {


		$(this).siblings('.site-menu-l2').slideToggle(300);
		//$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});


});