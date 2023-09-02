var Button = document.getElementById('identification');
const tl = gsap.timeline({default : {ease : 'power2.out'}});

setTimeout(function() {
	tl.to(".slider", {x : "0%", duration : 1});
}, 3000)
setTimeout(function() {
	location.href = "../index-sec.html";
}, 4000);
