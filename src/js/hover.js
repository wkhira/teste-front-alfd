$(function () {
	projHover();
});

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
