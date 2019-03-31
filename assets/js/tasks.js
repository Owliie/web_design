$(document).ready(function () {
	$(".toast").each(function () {
		$(this).addClass("show");
	});
});

function toastClose(id) {
	// $(id).removeClass("show");
	$(id).toast("hide");
}