/**
 * ESCAPEQUEST Antigravity Blog Engine (Hash-Based Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
    initBlogEngine();
});

function initBlogEngine() {
    initReadingProgress();
    initBlogReveals();
    
    // Check if we are on a detail page
    if (document.querySelector('.blog-details-minimal')) {
        loadDynamicBlogContent();
        
        // Listen for hash changes to update content instantly
        window.addEventListener('hashchange', loadDynamicBlogContent);
    }

    // FAQ logic
    if (document.querySelector('.faq-minimal')) {
        initFAQ();
    }
}

/**
 * Dynamic Content Loader (Reads from URL Hash)
 */
function loadDynamicBlogContent() {
    // Get the ID from the hash (e.g., #psychology -> psychology)
    const blogId = window.location.hash.substring(1) || 'psychology';

    if (blogId && window.BLOG_INTEL && window.BLOG_INTEL[blogId]) {
        const data = window.BLOG_INTEL[blogId];
        
        // Update DOM Elements
        const titleEl = document.querySelector('.d-title-minimal');
        const catEl = document.querySelector('.d-cat-minimal');
        const infoEl = document.querySelector('.d-info-minimal');
        const imgEl = document.querySelector('.d-img-wrap img');
        const contentEl = document.querySelector('.d-content-minimal');

        if (titleEl) titleEl.innerText = data.title;
        if (catEl) catEl.innerText = data.category;
        if (imgEl) imgEl.src = data.image;
        if (contentEl) contentEl.innerHTML = data.content;
        
        if (infoEl) {
            infoEl.innerHTML = `
                <span>By ${data.author}</span>
                <span class="dot"></span>
                <span>${data.date}</span>
                <span class="dot"></span>
                <span>${data.readTime}</span>
            `;
        }

        // Smooth Scroll to Top on change
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        document.title = `${data.title} | ESCAPEQUEST Intel`;
    }
}

/**
 * FAQ Accordion Logic
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item-minimal');
    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/**
 * Smooth Reading Progress
 */
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.height = '3px';
        progressBar.style.backgroundColor = '#D4AF37';
        progressBar.style.zIndex = '9999';
    });
}

/**
 * Subtle Reveal Observer
 */
function initBlogReveals() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}
