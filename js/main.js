// Mobile View Drawer Menu DOM Controller Element nodes
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Trigger visibility toggle configuration for responsive menu grid drawer
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Auto-collapse navigation panel drawer upon specific item route link target selection event
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Scroll Listener Loop engine controlling structural height optimization of standard header nav element bar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'bg-[#0B0F19]/95');
    } else {
        nav.classList.remove('py-2', 'bg-[#0B0F19]/95');
    }
});
