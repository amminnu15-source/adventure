/**
 * ESCAPEQUEST — Home Page Interactions
 * Floating particles, animated stat counters, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initStatCounters();
});

/* ─── Floating Particles in Hero ─── */
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top  = (60 + Math.random() * 40) + '%';
        particle.style.animationDelay    = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.width  = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

/* ─── Animated Stat Counters ─── */
function initStatCounters() {
    const numbers = document.querySelectorAll('.stats__number[data-target]');
    if (!numbers.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    numbers.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();

    // Determine suffix
    let suffix = '';
    if (target >= 10000) suffix = 'k+';
    else if (target > 100) suffix = '+';
    else suffix = '%';

    const displayTarget = target >= 10000 ? target / 1000 : target;

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * displayTarget);

        el.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = displayTarget + suffix;
        }
    }

    requestAnimationFrame(update);
}
