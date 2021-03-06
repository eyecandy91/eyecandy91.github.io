$(document).ready(function () {

	// Check for click events on the navbar burger icon
	$(".navbar-burger").click(function () {

		// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
		$(".navbar-burger").toggleClass("is-active");
		$(".navbar-menu").toggleClass("is-active");

	});

	$("#service").click(function () {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 500);
	});


});

$(window).scroll(function () {
	$("#main").css("opacity", 1 - $(window).scrollTop() / 400);
});

$(window).scroll(function () {
	var numPix = 400; // number of pixels before bottom of page that you want to start fading
	var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / numPix;
	if (op <= 0) {
		$(".arrow").hide();
	} else {
		$(".arrow").show();
	}
	$(".arrow").css("opacity", op);
});

if ($('#back-to-top').length) {
	var scrollTrigger = 400, // px
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};
	backToTop();
	$(window).on('scroll', function () {
		backToTop();
	});
	$('#back-to-top').on('click', function (e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
}