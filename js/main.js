var styles = {
	background: "#fff",
	color: "orange",
	fontsize: "30px;"
}
$(".toggle-btn").click(function() {
	$("h1").css(styles);
	$("div").slideToggle(2000);
	$("div").css(styles);
});
$("li").click(function() {
	$(this).toggleClass("completed");
});
$(".x").on("click", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event) {
	if(event.which === 13) {
		alert("you pressed enter!");
	}
});

