var typed = new Typed(".text", {
    strings: ["Frontend Developer.", "Programmer.","Designer.","Python Developer."],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    showCursor: false
  });
  
  // Navigation menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Scroll to section
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        const section = document.querySelector(id);
        section.scrollIntoView({ behavior: "smooth" });
    });
});
// Active link
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 10) {
            current = section.getAttribute("id");
        }
    });
    links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// Scroll reveal animation
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 1000,
    delay: 500,
});

scrollReveal.reveal(".home-content h3, .home-content h1, .home-content p, .home-sci a, .btn-box", {
    interval: 500,
});

  