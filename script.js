// Set current build date
document.addEventListener('DOMContentLoaded', function() {
    const buildDateElement = document.getElementById('buildDate');
    if (buildDateElement) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        buildDateElement.textContent = formattedDate;
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initially hide cards and prepare for animation
    document.querySelectorAll('.feature-card, .step, .tech-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Console message
    console.log('%c🎉 Git Deployment Successful!', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
    console.log('%cThis website was deployed using DirectAdmin Git integration', 'color: #8b5cf6; font-size: 14px;');
    console.log('%cBuild Date:', 'color: #6b7280; font-weight: bold;', new Date().toISOString());
});
