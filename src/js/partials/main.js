$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");
	if ($('.js-autosize').length > 0) {
		autosize($('.js-autosize'));
	}

	if ($('.js-fa-select').length > 0) {
		$('.js-fa-select').niceSelect();
	}
	$('.js-custom-file-inp').on('change', function() {
		var splittedFakePath = this.value.split('\\');
		$(this).closest('.file-input').siblings('.tap-file-inp-text').addClass('tap-file-inp-text--non-empty').find('.tap-file-inp-text__name').text(splittedFakePath[splittedFakePath.length - 1]);
  });
});