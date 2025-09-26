document.addEventListener('DOMContentLoaded', function() {

    // --- SCROLL TO TOP ON RELOAD ---
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);


    // --- PARTICLE.JS CONFIGURATIONS ---
    const particlesDark = { particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.5, random: false }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#9ca3af", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }}, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}}, retina_detect: true };
    const particlesLight = { particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.6, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#4b5563", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }}, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}}, retina_detect: true };
    function loadParticles(themeConfig) { particlesJS('particles-js', themeConfig); }

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');

    // 1. Make the cursor follow the mouse
    window.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 2. Add effects when hovering over specific elements
    const interactiveElements = document.querySelectorAll('a, button');

    interactiveElements.forEach(el => {
        // Add the simple hover effect
        el.addEventListener('mouseenter', () => cursor.classList.add('hover-effect'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover-effect'));
    });

    // 3. Add the text effect for elements with a data-attribute
    const textElements = document.querySelectorAll('[data-cursor-text]');

    textElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.remove('hover-effect'); // Remove the other effect
            cursor.classList.add('text-state');
            cursor.setAttribute('data-cursor-text', el.getAttribute('data-cursor-text'));
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('text-state');
            cursor.removeAttribute('data-cursor-text');
        });
    });


    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'light') {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
            loadParticles(particlesLight);
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
            loadParticles(particlesDark);
        }
    }
    if (currentTheme) { setTheme(currentTheme); } else { setTheme('dark'); }
    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        if (activeTheme === 'light') { setTheme('dark'); } else { setTheme('light'); }
    });


    // --- TYPED.JS INITIALIZATION (USER'S CHANGE APPLIED) ---
    const options = {
        strings: ['Technology and Design.', 'Machine Learning.', 'Full-Stack Development.', 'Artificial Intelligence.'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    const typed = new Typed('.type-effect', options);


    // --- AOS (ANIMATE ON SCROLL) INITIALIZATION ---
    AOS.init({ duration: 1000, once: true, offset: 100, });


    // --- MOBILE MENU LOGIC - ADDED ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle.querySelector('i');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon from bars to X and back
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
    // Close mobile menu when a link is clicked
    document.querySelectorAll('#nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });


    // --- SCROLL TO TOP BUTTON LOGIC - ADDED ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after 300px of scroll
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

});