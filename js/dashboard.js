/**
 * ANTIGRAVITY ELITE: Dashboard Interaction Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initEliteDashboard();
});

function initEliteDashboard() {
    const html = document.documentElement;

    // 1. Theme Initialization
    const savedTheme = localStorage.getItem('elite-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', target);
            localStorage.setItem('elite-theme', target);
            updateThemeIcon(target);
        });
    }

    // 2. Sidebar Management (Collapsible & Mobile)
    const sidebar = document.querySelector('.sidebar-elite');
    const main = document.querySelector('.main-elite');
    const toggleBtn = document.getElementById('sidebar-toggle');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth > 1024) {
                // Desktop: Collapse/Expand
                sidebar.classList.toggle('collapsed');
                main.classList.toggle('expanded');
            } else {
                // Mobile: Overlay Toggle
                sidebar.classList.toggle('mobile-active');
            }
        });
    }

    // 3. Section Switching
    const navItems = document.querySelectorAll('.nav-item-elite');
    const sections = document.querySelectorAll('.section-elite');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = item.getAttribute('data-target');
            if (!target) return; // For logout or external links

            e.preventDefault();
            
            // Update Active Nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update Active Section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `section-${target}`) {
                    section.classList.add('active');
                }
            });

            // Auto-close sidebar on mobile
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('mobile-active');
            }
        });
    });

    // 4. Live Feed Simulator
    initLiveFeed();
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

function initLiveFeed() {
    const feed = document.querySelector('.feed-elite');
    if (!feed) return;

    const activities = [
        { type: 'SUCCESS', msg: 'Squad Alpha-9 extracted from "The Lab" in 42:10', time: '2m ago' },
        { type: 'BOOKING', msg: 'New mission scheduled for "Cyber Heist" at 18:00', time: '5m ago' },
        { type: 'ALERT', msg: 'System update: AI difficulty Level 03 deployed to all nodes', time: '15m ago' },
        { type: 'SUCCESS', msg: 'Agent Sterling achieved "Phantom Rank" status', time: '1h ago' }
    ];

    feed.innerHTML = activities.map(act => `
        <div class="feed-item" style="display: flex; gap: 1rem; margin-bottom: 1.2rem; border-left: 2px solid ${getColor(act.type)}; padding-left: 1rem;">
            <div class="feed-text">
                <p style="font-size: 0.9rem; font-weight: 600;">${act.msg}</p>
                <p style="font-size: 0.75rem; color: var(--text-muted);">${act.time}</p>
            </div>
        </div>
    `).join('');
}

function getColor(type) {
    switch(type) {
        case 'SUCCESS': return '#4caf50';
        case 'ALERT': return '#ffb400';
        case 'BOOKING': return '#2196f3';
        default: return '#888';
    }
}


/**
 * RTL TOGGLE LOGIC
 */
const rtlBtn = document.getElementById("rtl-toggle");
if (rtlBtn) {
    rtlBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isRtl = document.body.getAttribute("dir") === "rtl";
        document.body.setAttribute("dir", isRtl ? "ltr" : "rtl");
        rtlBtn.innerText = isRtl ? "RTL" : "LTR";

        // Auto-close sidebar on mobile during RTL shift to prevent glitches
        const sidebar = document.querySelector('.sidebar-elite');
        if (window.innerWidth <= 1024 && sidebar) {
            sidebar.classList.remove('mobile-active');
        }
    });
}

/**
 * MOBILE CLOSE BUTTON
 */
const closeBtn = document.getElementById("sidebar-close");
const sidebarOverlay = document.querySelector(".sidebar-elite");
if (closeBtn && sidebarOverlay) {
    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebarOverlay.classList.remove("mobile-active");
    });
}

