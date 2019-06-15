var current_page = 1;
var max_pages = 0;
var menuBtn;
var menu_is_opened = true;

$(window).on("load", function() {
	$("#menu").hide();

	menuBtn = $("#menu");
	max_pages = $(".page-wrapper").children().length;

	$(".page").bind("mousewheel", scrollToPage());

	menuBtn.on("click", function() {
		menuBtn.hide();
		showMenu();
	});
});

// $(".page").bind("swipeleft", nextPage());
// $(".page").bind("swiperight", previousPage());

function scrollToPage() {
	return function (e) {
		$(".page").unbind();
		if(e.originalEvent.wheelDelta /120 > 0) {
			previousPage();
		}
		else{
			if (current_page == 1 || menu_is_opened) {
				hideMenu();
			}
			nextPage();
		}
	}
}

function nextPage() {
	current_page++;
	validate();
	let next_page = "#page" + current_page;
	$('.page-wrapper').animate({
		scrollLeft: "+=" + $(next_page).offset().left
	}, 500, function () {
		$(".page").bind("mousewheel", scrollToPage());
	});
	console.log(next_page + " " + $(next_page).offset().left);
	console.log('scrolling up !');
}

function previousPage() {
	current_page--;
	validate();
	if (current_page != 1 && menu_is_opened) {
		hideMenu();
	}else if (current_page == 1 && menu_is_opened == false) {
		menuBtn.hide();
		showMenu();
	}

	let perv_page = "#page" + current_page;
	$('.page-wrapper').animate({
		scrollLeft: "+=" + $(perv_page).offset().left
	}, 500, function () {
		$(".page").bind("mousewheel", scrollToPage());
	});
	console.log(perv_page + " " + $(perv_page).offset().left);
	console.log('scrolling down !');
}

function validate() {
	if (current_page > max_pages) {
		current_page = max_pages;
	} else if (current_page < 1) {
		current_page = 1;
	}
}

function hideMenu() {
	menu_is_opened = false;
	$("nav").toggle(500, function() {
		$(this).hide();
		menuBtn.show();
	});
}

function showMenu(){
	menu_is_opened = true;
	$("nav").toggle(500, function() {
		$(this).show();
	});
}