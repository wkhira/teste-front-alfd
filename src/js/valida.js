$(function () {
	validaForm();
});

function validaForm() {
	$.validate({
		form : formCont
	});

	var formCont = $("#cont-form");

	formCont.submit(function(event) {
		event.preventDefault();
		$.validate({
			form : formCont
		});

		formCont.get(0).reset();
	});
}
