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
						<iiii class="sc-ion-icon-h hydrated" role="img" aria-label="document" name="document"><div class="icon-inner sc-ion-icon"><svg xmlns="http://www.w3.org/2000/svg" class="sc-ion-icon" viewBox="0 0 512 512"><path d="M 288 48 H 136 c -22.092 0 -40 17.908 -40 40 v 336 c 0 22.092 17.908 40 40 40 h 240 c 22.092 0 40 -17.908 40 -40 V 176 L 288 48 Z m -16 144 V 80 l 112 112 H 272 Z" /></svg></div></iiii>
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
	$("#contentTask").text("");
}