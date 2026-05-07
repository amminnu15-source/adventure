/**
 * BREAKOUT Components JS
 * Handles Hamburger, Mobile Dropdowns, Theme Switching, and RTL Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
    loadComponents();
});

window.addEventListener('hashchange', setActiveLink);

/**
 * Load Modular Components (Navbar, Footer)
 */
async function loadComponents() {
    const navbarPlaceholder = document.getElementById('navbar');
    const footerPlaceholder = document.getElementById('footer');

    if (navbarPlaceholder) {
        try {
            const response = await fetch('navigation/navbar.html');
            const data = await response.text();
            navbarPlaceholder.innerHTML = data;
            
            // Re-initialize nav-related logic after loading
            initHamburger();
            initMobileDropdowns();
            initThemeSwitcher();
            initRtlSwitcher();
            
            // Set active state for current page
            setActiveLink();
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    }

    if (footerPlaceholder) {
        try {
            const response = await fetch('navigation/footer.html');
            const data = await response.text();
            footerPlaceholder.innerHTML = data;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }

    initScrollAnimations();
}

/**
 * Set Active State for Nav Links
 */
function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;

        // Strip hash for path comparison
        const linkPath = href.split('#')[0] || 'index.html';
        const linkHash = href.includes('#') ? '#' + href.split('#')[1] : '';

        let isActive = false;

        // Exact match (including index.html default)
        if (linkPath === currentPath) {
            // If the link has a hash, only mark as active if the current hash matches
            if (linkHash) {
                if (linkHash === currentHash) isActive = true;
            } else {
                // If it's a path match without hash, only active if current URL has no hash 
                // OR if it's the main page link for a sub-page (like blog.html for blog-details.html)
                if (!currentHash || currentPath === 'index.html') isActive = true;
            }
        }

        // Special case: Blog Parent highlighting
        if (currentPath.startsWith('blog-') && linkPath === 'blog.html') {
            isActive = true;
        }

        if (isActive) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Hamburger Menu Logic
 */
function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking links (except dropdown parents)
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024 && link.nextElementSibling?.classList.contains('dropdown-menu')) {
                    // Handled by initMobileDropdowns
                } else {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }
}

/**
 * Mobile Dropdown Logic
 */
function initMobileDropdowns() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (link && dropdown) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    item.classList.toggle('active');
                }
            });
        }
    });
}

/**
 * Theme Switcher Logic (Light/Dark)
 */
function initThemeSwitcher() {
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            
            // Update icon
            const icon = themeBtn.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            }
        });
    }
}

/**
 * RTL Switcher Logic
 */
function initRtlSwitcher() {
    const rtlBtn = document.getElementById('rtl-toggle');
    const html = document.documentElement;

    if (rtlBtn) {
        rtlBtn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            html.setAttribute('dir', newDir);
        });
    }
}

/**
 * Scroll Animations (Intersection Observer)
 */
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
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
 * Header Scroll Behavior
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.padding = '0';
        navbar.style.background = 'var(--nav-bg)';
        navbar.style.boxShadow = 'none';
    }
});
