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
$("li").on("click", function() {
	$(this).css("text-decoration", "line-through");
});

