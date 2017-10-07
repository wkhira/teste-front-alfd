$(function () {
	slider();
});

function slider() {
	var btnBack = $("#btn-back");
	var btnNext = $("#btn-next");
	var bullet1 = $("#bullet1");
	var bullet2 = $("#bullet2");
	var bullet3 = $("#bullet3");
	var slider1 = $("#slider1");
	var slider2 = $("#slider2");
	var slider3 = $("#slider3");


	btnBack.click(function () {
		if(bullet3.hasClass("bullet-active") && slider3.hasClass("slider-active")) {
			bullet2.addClass("bullet-active");
			bullet3.removeClass("bullet-active");
			slider3.addClass("slider-offset");
			slider3.removeClass("slider-active");
			slider2.addClass("slider-active");
			slider2.removeClass("slider-offset");

		} else if(bullet2.hasClass("bullet-active")) {
			bullet1.addClass("bullet-active");
			bullet2.removeClass("bullet-active");
			slider2.addClass("slider-offset");
			slider2.removeClass("slider-active");
			slider1.addClass("slider-active");
			slider1.removeClass("slider-offset");

		}
	});

	btnNext.click(function () {
		if(bullet1.hasClass("bullet-active") && slider1.hasClass("slider-active")) {
			bullet2.addClass("bullet-active");
			bullet1.removeClass("bullet-active");
			slider1.addClass("slider-offset");
			slider1.removeClass("slider-active");
			slider2.addClass("slider-active");
			slider2.removeClass("slider-offset");


		} else if(bullet2.hasClass("bullet-active") && slider2.hasClass("slider-active")) {
			bullet3.addClass("bullet-active");
			bullet2.removeClass("bullet-active");
			slider2.addClass("slider-offset");
			slider2.removeClass("slider-active");
			slider3.addClass("slider-active");
			slider3.removeClass("slider-offset");
		}

	});

}
