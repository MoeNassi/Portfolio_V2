var	stocker = [];
var index = 0;
var textPosition = 0;
var flag = true;
var destination = document.getElementById('dest');

const tl = gsap.timeline({default : {ease : 'power2.out'}});
var button = document.getElementById("make_it_move");

tl.to(".slider", {y : "-100%", duration : 1});
tl.to(".center", {y : "0%", duration : 1.5}, "-=1");
tl.fromTo(".header", {opacity : 0}, {opacity: 1, duration: 1.4});

button.addEventListener('mouseenter', () => {
	tl.to(".sec", {x : "-30%", duration: .3});
	tl.to(".slide", {x : "30%", duration: .3}, "-=.3");
});
button.addEventListener('mouseleave', () => {
	tl.to(".slide", {x : "100%", duration: .3});
	tl.to(".sec", {x : "0%", duration: .3}, "-=.3");
});

window.addEventListener('load', write());

function Data() {
	const url = "https://api.quotable.io/random";
	
	fetch(url)
	
	.then(response => {
		if (response.ok)
		return (response.json());
	else
	console.log(response.status);
})
.then(data => {
	stocker[index] = data.content;
})
}

function write() {
	if (flag) {
		Data();
		stocker[index] += ' ';
		flag = false;
	}
	destination.innerHTML = stocker[index].substring(0, textPosition) + '<span>\u25AE<span>';
	if (textPosition++ != stocker[index].length) {
		setTimeout('write()', 100);
	}
	else {
		stocker[index] = ' ';
		setTimeout('write()', 3000);
		textPosition = 0;
		flag = true;
	}
}
