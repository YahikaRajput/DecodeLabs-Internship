// 1st project

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.style.background = "rgba(10,15,35,0.95)";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    }
    else{
        header.style.background = "rgba(10,15,35,0.75)";
        header.style.boxShadow = "none";
    }

});

// Active Navigation Link

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});

// Scroll Animation

const revealElements = document.querySelectorAll(
".service-card, .project-card, .team-card, .stat-box, .about-content"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
