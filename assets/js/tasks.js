$(document).ready(function () {
	$(".toast").each(function () {
		$(this).addClass("show");
	});
});

function toastClose(id) {
	// $(id).removeClass("show");
	$(id).toast("hide");
}

var count = 5;

function addNewTask() {
	count++;

	$("#tasks-container").append($(`<div class="toast m-3 show" id="task${count}" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="false">
					<div class="toast-header bg-warning">
						<ion-icon name="document"></ion-icon>
						<strong class="mr-auto">${$("#taskTitle").val()}</strong>
						<small>X time ago</small>
						<button class="ml-2 mb-1 close" aria-label="Close" onclick="toastClose('#task${count}')" type="button" data-dismiss="toast">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="toast-body">
						${$("#contentTask").val()}
					</div>
				</div>`));



	$("#taskTitle").val("");
	$("#contentTask").val("");
}