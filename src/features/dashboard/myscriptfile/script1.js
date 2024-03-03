import ScrollReveal from "scrollreveal";
ScrollReveal({ 
    reset: true,
    distance: '20px',
    duration: '5000',
    delay: '200'
});

ScrollReveal().reveal('.text-box',{delay: 500, origin:'top'});
ScrollReveal().reveal('.text-box1',{delay: 600, origin:'bottom'});
ScrollReveal().reveal('.text-box2',{delay: 700, origin:'left'});
ScrollReveal().reveal('.text-box3',{delay: 800, origin:'right'});