var show = document.getElementById('center');
const tl = gsap.timeline({default : {ease : 'power2.out'}});

tl.fromTo(".center", {opacity : 0}, {opacity: 1, duration: 2});