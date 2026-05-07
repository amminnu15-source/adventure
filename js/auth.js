/**
 * ESCAPEQUEST Authentication Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initPasswordToggle();
    initThemeToggle();
    initRtlToggle();
});

/**
 * Password Visibility Toggle
 */
function initPasswordToggle() {
    const toggleIcons = document.querySelectorAll('.password-toggle');
    
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const wrapper = icon.closest('.input-wrapper');
            const input = wrapper.querySelector('input');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

/**
 * Theme Toggle (Light/Dark)
 */
function initThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (themeBtn) {
        // Initialize icon based on current theme
        const updateIcon = (theme) => {
            const icon = themeBtn.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            }
        };

        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            updateIcon(newTheme);
            
            // Sync with other tabs/pages if needed (optional)
            localStorage.setItem('theme', newTheme);
        });

        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        updateIcon(savedTheme);
    }
}

/**
 * RTL Toggle
 */
function initRtlToggle() {
    const rtlBtn = document.getElementById('rtl-toggle');
    const html = document.documentElement;

    if (rtlBtn) {
        rtlBtn.addEventListener('click', () => {
            const currentDir = html.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            html.setAttribute('dir', newDir);
            
            localStorage.setItem('dir', newDir);
        });

        // Load saved direction
        const savedDir = localStorage.getItem('dir');
        if (savedDir) {
            html.setAttribute('dir', savedDir);
        }
    }
}
