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

    // Navbar scroll effect removed to keep it static as requested

    // Fix for scroll issues with hidden elements
    window.scrollTo(0, 0);

    // Mobile Menu Toggle
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const closeBtn = document.querySelector('.close-menu');

    function closeMobileMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeMobileMenu);
        }

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close when clicking outside (backdrop)
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }
});
