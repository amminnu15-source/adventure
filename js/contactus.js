/**
 * ESCAPEQUEST Premium Contact Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initContactAnimations();
    initFormHandling();
});

/**
 * Smooth staggered reveal animations
 */
function initContactAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

/**
 * Handle Contact Form Submission with premium feedback
 */
function initFormHandling() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Premium feedback simulation
            submitBtn.innerHTML = 'Encrypting Transmission... <i class="fas fa-sync-alt fa-spin"></i>';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Success State
                submitBtn.innerHTML = 'Transmission Sent <i class="fas fa-check"></i>';
                submitBtn.style.background = '#4CAF50';
                submitBtn.style.color = '#fff';
                submitBtn.style.opacity = '1';
                
                // Show success modal or simple alert
                alert('MESSAGE RECEIVED: Your message has been encrypted and sent to HQ. We will respond shortly.');
                
                form.reset();
                
                // Revert after some time
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
}
