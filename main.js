$("body").on("change", ".filter", function (e) {
	const this_select = e.target;
	const choice = $(this_select).val();

	$(".item.active").removeClass("active");
	$(`.item.${choice}`).addClass("active");


});