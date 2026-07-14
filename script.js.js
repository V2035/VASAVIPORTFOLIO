/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Aspiring Software Engineer",
    "AI Enthusiast",
    "Backend Developer",
    "Full Stack Learner",
    "Problem Solver",
    "Tech Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1400);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

/* =====================================================
   CLOSE MENU AFTER CLICK
===================================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks.classList.contains("show")) {

            navLinks.classList.remove("show");

        }

    });

});

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".glass-card,.project-card,.skill-card,.timeline-card,.certificate-card,.contact-info,.contact-form"
);

function reveal() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            element.classList.add("fade-in");

        }

    });

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size / 2 + "px";

        ripple.style.top = e.clientY - rect.top - size / 2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill in all fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        alert(
            "Thank you for contacting me! Your message has been recorded."
        );

        contactForm.reset();

    });

}

/* =====================================================
   NAVBAR SHADOW
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(140,82,255,.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

/* =====================================================
   SMOOTH FADE ON LOAD
===================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});