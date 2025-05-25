// ./assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-content");
    if (hero) {
        hero.style.transition = "opacity 2s ease, transform 2s ease";
        hero.style.opacity = "0";
        hero.style.transform = "translateY(20px)";
        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 100);
    }

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const arrow = document.querySelector('.hero-scroll-indicator');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            arrow.style.opacity = '0';
            arrow.style.pointerEvents = 'none';
        } else {
            arrow.style.opacity = '1';
            arrow.style.pointerEvents = 'auto';
        }
    });

    // Content fade-in only
    const slides = document.querySelectorAll(".slide");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view");
                }
            });
        },
        { threshold: 0.6 }
    );

    slides.forEach(slide => observer.observe(slide));
});
