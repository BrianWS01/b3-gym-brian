document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    // Add visibility class after a short delay for smooth entrance
    setTimeout(() => {
        container.classList.add('visible');
    }, 100);

    // Subtle parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;

        const headline = document.getElementById('headline');
        const subtitle = document.getElementById('subtitle');
        const logo = document.querySelector('.logo-container');

        if (headline && subtitle) {
            headline.style.transform = `translate3d(${moveX * 0.5}px, ${moveY * 0.5}px, 0)`;
            subtitle.style.transform = `translate3d(${moveX * 0.2}px, ${moveY * 0.2}px, 0)`;
        }

        if (logo) {
            logo.style.transform = `translate3d(${moveX * 0.3}px, ${moveY * 0.3}px, 0)`;
        }
    });

    // Handle hover interactions for the social link
    const igLink = document.getElementById('instagram');
    if (igLink) {
        igLink.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'none';
            // Custom cursor logic could be added here
        });

        igLink.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    }
});
