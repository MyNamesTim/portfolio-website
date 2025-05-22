gsap.to(".navbar", { opacity: 1, duration: 1.25 });

gsap.to(".navbar", { y: -500 });
gsap.to(".navbar", { y: 0, duration: 1.25 });

const big_box = document.querySelector(".navbar img");

const hoverTween = gsap.to(big_box, {
    scale: 1.25,
    duration: 0.25,
    ease: "power1.out",
    paused: true
});

big_box.addEventListener("mouseenter", () => hoverTween.play());
big_box.addEventListener("mouseleave", () => hoverTween.reverse());

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link"); 

navbarLinks.forEach(link => {
    const hoverHighlight = gsap.to(link, {
        scale: 1.1, 
        color: "white",
        duration: 0.2, 
        ease: "power2.out",
        paused: true
    });

    link.addEventListener("mouseenter", () => hoverHighlight.play());
    link.addEventListener("mouseleave", () => hoverHighlight.reverse());
});

const descriptor = document.querySelectorAll("#description_card");

gsap.to(descriptor, { scale: 2.5, x: -500});
gsap.to(descriptor, { scale: 1, x:0, duration: 1.25});

const cardTween = gsap.to(descriptor, {
    
})
