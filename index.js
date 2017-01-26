$(document).ready(function(){
	function openMenu(){
		$("nav ul").show(slideDown();
		$(".hamburger").css("float", "right");

	)};

		$(".hamburger").click(openMenu);
			
	function closeMenu(){
		$("nav ul").slideUp();
		$(".hamburger").css("position", "absolute", "top", "0.3em", "right", "0.5em");
	};

		$(".hamburger").click(closeMenu)
});