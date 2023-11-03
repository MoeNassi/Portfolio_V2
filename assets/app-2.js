var show = document.getElementById('center');
const tl = gsap.timeline({default : {ease : 'power2.out'}});
var	get_Parent = document.getElementById('center');

function styleElements() {
	var	Childs = document.querySelectorAll('.stars');

	Childs.forEach(child => {
		var randomize = Math.floor(Math.random() * 100);
		var randomize_1 = Math.floor(Math.random() * 100);
		var randomize_2 = Math.floor(Math.random() * 12);
		var oneOf_ = Math.floor(Math.random() * ran);
		child.style.position = "absolute";
		child.style.top = randomize + "%"
		child.style.right = randomize_1 + "%"
		child.style.animationDuration = randomize_2 + "s";
	});
}

tl.fromTo(".center", {opacity : 0}, {opacity: 1, duration: 3});
var ran = Math.floor(Math.random() * 150);
for (let i = 0; i < ran; i++) {
	var stars = document.createElement('div');
	stars.classList.add("stars");
	if (stars)
		get_Parent.appendChild(stars);
}
styleElements();