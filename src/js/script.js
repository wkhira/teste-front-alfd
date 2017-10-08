$(function () {
	slider();
	projHover();
});

function slider() {
	var btnBack = $("#btn-back");
	var btnNext = $("#btn-next");
	var bullet1 = $("#bullet1");
	var bullet2 = $("#bullet2");
	var bullet3 = $("#bullet3");
	var info1 = $("#slider1");
	var info2 = $("#slider2");
	var info3 = $("#slider3");
	var bg = $(".bg-slider");


	btnBack.click(function () {

		if(bullet3.hasClass("bullet-active") && info3.hasClass("slider-active")) {
			bullet2.addClass("bullet-active");
			bullet3.removeClass("bullet-active");
			info3.addClass("slider-offset");
			info3.removeClass("slider-active");
			info2.addClass("slider-active");
			info2.removeClass("slider-offset");
			bg.css("background-image", "url('../assets/img/slider2.jpg')");


		} else if(bullet2.hasClass("bullet-active") && info2.hasClass("slider-active")) {
			bullet1.addClass("bullet-active");
			bullet2.removeClass("bullet-active");
			info2.addClass("slider-offset");
			info2.removeClass("slider-active");
			info1.addClass("slider-active");
			info1.removeClass("slider-offset");
			bg.css("background-image", "url('../assets/img/slider1.jpg')");
		}
	});

	btnNext.click(function () {
		if(bullet1.hasClass("bullet-active") && info1.hasClass("slider-active")) {
			bullet2.addClass("bullet-active");
			bullet1.removeClass("bullet-active");
			info1.addClass("slider-offset");
			info1.removeClass("slider-active");
			info2.addClass("slider-active");
			info2.removeClass("slider-offset");
			bg.css("background-image", "url('../assets/img/slider2.jpg')");


		} else if(bullet2.hasClass("bullet-active") && info2.hasClass("slider-active")) {
			bullet3.addClass("bullet-active");
			bullet2.removeClass("bullet-active");
			info2.addClass("slider-offset");
			info2.removeClass("slider-active");
			info3.addClass("slider-active");
			info3.removeClass("slider-offset");
			bg.css("background-image", "url('../assets/img/slider3.jpg')");
		}

	});
}


function projHover() {

	var proj1 = $("#proj1");
	var hov1 = $("#proj1 > div");
	var proj2 = $("#proj2");
	var hov2 = $("#proj2 > div");
	var proj3 = $("#proj3");
	var hov3 = $("#proj3 > div");

	proj1.mouseover(function() {
		hov1.removeClass("hover-inativo");
	});

	proj1.mouseout(function() {
		hov1.addClass("hover-inativo");
	});

	proj2.mouseover(function() {
		hov2.removeClass("hover-inativo");
	});

	proj2.mouseout(function() {
		hov2.addClass("hover-inativo");
	});

	proj3.mouseover(function() {
		hov3.removeClass("hover-inativo");
	});

	proj3.mouseout(function() {
		hov3.addClass("hover-inativo");
	});
}

