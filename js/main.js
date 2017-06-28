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
	var sure = alert("Are you sure you want to delete this?");
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text'").keypress(function(event) {
	if(event.which === 13) {
		var input =$(this).val();
		$(this).val("");
		console.log(input);
		$("ul").append("<li>" + ("<span class='x'>X</span> ") + input + "</li>");

	}
});

