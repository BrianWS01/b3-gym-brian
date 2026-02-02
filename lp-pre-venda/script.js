document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // If it's a section, trigger inner animations
                if (entry.target.classList.contains('hero-slider')) {
                    entry.target.classList.add('ready');
                }
            }
        });
    }, observerOptions);

    // Track sections and elements
    document.querySelectorAll('section, .plan-card, .structure-item, .section-title').forEach(el => {
        observer.observe(el);
    });

    // Forced entrance for Hero if user is already at top
    setTimeout(() => {
        const hero = document.querySelector('.hero-slider');
        if (hero) hero.classList.add('ready');

        // Staggered reveal for cards if they are in view
        document.querySelectorAll('.plan-card.visible').forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.15}s`;
        });
    }, 100);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 80) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.padding = '1rem 3rem';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
            nav.style.padding = '1.5rem 3rem';
        }
    });

    // Fix for scroll issues with hidden elements
    window.scrollTo(0, 0);
});
