//======================header=====================
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 430);
    header.style.transition = "all 1s";
})

//==================ScrollReveal=================
window.sr = ScrollReveal();
sr.reveal(".section1__content1",{
    delay:900,
    distance:'60px',
    duration:2500,
    origin:'left',
    easing:'linear'
});
sr.reveal('header',{
    delay:1000,
    duration:2500,
    origin:'top',
    distance:'60px'
});
sr.reveal('.footer__links',{
    delay:1000,
    duration:2500,
    origin:'top',
    distance:'60px'
})
sr.reveal('.footer__title',{
    delay:1000,
    duration:2500,
    origin:'top',
    distance:'60px'
})
sr.reveal('#moon',{
    delay:900,
    duration:2250,
    origin:'right',
    distance:'60px',
    easing:'linear'
});

sr.reveal('.box1',{
    delay:900,
    origin:'top',
    distance:'50px',
    duration:2500
    
});
sr.reveal('.sesion2__content1', {
    delay:900,
    origin:'top',
    distance:'top',
    duration:2500
});
sr.reveal('#imgart1',{
    delay:900,
    origin:'right',
    distance:'60px',
    duration:2500,
    easing:'linear'
});
sr.reveal('#letter', {
    delay:900,
    origin:'left',
    distance:'60px',
    duration:2500,
    easing:'linear'
});


//==================efecto parallax===============
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll(".layer").forEach(layer=>{
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.page*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}