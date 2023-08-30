var Button = document.getElementById('identification');
Button.addEventListener('mouseenter', () => {
	Button.style.transition = "4s";
	Button.style.color = "rgb(255,255,0)";
	setTimeout(function() {
		location.href = "../index-sec.html";
	}, 2000)
});

Button.addEventListener('mouseleave', () => {
	Button.style.transition = ".7s"
	Button.style.color = "white";
});
