$(document).ready(function() {

	let openbtn = $(".mobile-menu__btn");
	let menu = $(".mobile-menu__dropdown");
	let close = $(".mobile-menu__close");

	openbtn.on("click", function(e) {

		if(openbtn.hasClass("active")) {

			openbtn.removeClass("active");
			menu.removeClass("show");

		} else {

			openbtn.addClass("active");
			menu.addClass("show");

		} // else

	}); // click
});
