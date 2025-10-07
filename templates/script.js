document.addEventListener('DOMContentLoaded', function() {

    // --- SCROLL TO TOP ON RELOAD ---
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // --- PARTICLE.JS CONFIGURATIONS ---
    const particlesDark = { particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.5, random: false }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#9ca3af", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }}, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}}, retina_detect: true };
    const particlesLight = { particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.6, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#4b5563", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }}, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}}, retina_detect: true };
    function loadParticles(themeConfig) { particlesJS('particles-js', themeConfig); }

    // --- CUSTOM CURSOR WITH TRAIL LOGIC ---
    const cursorContainer = document.querySelector('.cursor-container');
    if (cursorContainer) {
        const numCircles = 5; // The total number of circles (1 head + 4 tail)
        const circles = [];
        const coords = { x: 0, y: 0 };

        // Create the circle elements
        for (let i = 0; i < numCircles; i++) {
            const circle = document.createElement('div');
            circle.classList.add('cursor-dot');
            cursorContainer.appendChild(circle);
            circles.push(circle);
        }

        // Give each circle a unique size and opacity
        circles.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            
            const size = (numCircles - index) * 4; // Circles get smaller
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            
            // First circle (the "head") is fully opaque, others fade out
            circle.style.opacity = index === 0 ? 1 : 1 - (index / numCircles) * 0.8;
        });

        // Update mouse coordinates
        window.addEventListener("mousemove", function(e){
        coords.x = e.clientX;
        coords.y = e.clientY;
        });

        // The animation loop
        function animateCircles() {
            let x = coords.x;
            let y = coords.y;
            
            // The head circle follows the mouse directly with a delay
            circles[0].style.left = x - (circles[0].offsetWidth / 2) + 'px';
            circles[0].style.top = y - (circles[0].offsetHeight / 2) + 'px';
            circles[0].x = x;
            circles[0].y = y;

            // Each subsequent circle follows the one in front of it
            for (let i = 1; i < numCircles; i++) {
                const prevCircle = circles[i - 1];
                const nextCircle = circles[i];
                
                // Use linear interpolation (lerp) for a smooth delay
                const easing = 0.25;
                nextCircle.x += (prevCircle.x - nextCircle.x) * easing;
                nextCircle.y += (prevCircle.y - nextCircle.y) * easing;
                
                nextCircle.style.left = nextCircle.x - (nextCircle.offsetWidth / 2) + 'px';
                nextCircle.style.top = nextCircle.y - (nextCircle.offsetHeight / 2) + 'px';
            }
            
            requestAnimationFrame(animateCircles);
        }
        animateCircles();

        // Add the hover effect
        const interactiveElements = document.querySelectorAll('a, button, [data-skill]');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                // We only apply the effect to the main circle
                if (circles.length > 0) {
                    circles[0].classList.add('hover-effect');
                }
            });
            el.addEventListener('mouseleave', () => {
                if (circles.length > 0) {
                    circles[0].classList.remove('hover-effect');
                }
            });
        });
    }

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
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
    }

    // --- TYPED.JS INITIALIZATION ---
    if (document.querySelector('.type-effect')) {
        const options = {
            strings: ['Technology and Design.', 'Machine Learning.', 'Full-Stack Development.', 'Artificial Intelligence.'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true
        };
        const typed = new Typed('.type-effect', options);
    }

    // --- AOS (ANIMATE ON SCROLL) INITIALIZATION ---
    AOS.init({ duration: 1000, once: true, offset: 100 });

    // --- MOBILE MENU LOGIC ---
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        const navLinks = document.getElementById('nav-links');
        const menuIcon = menuToggle.querySelector('i');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        document.querySelectorAll('#nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- SCROLL TO TOP BUTTON LOGIC ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
    }

    // --- EMAILJS CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // IMPORTANT: Paste your keys here for local use.
        // Your .gitignore file will prevent this from being uploaded to GitHub.
        // Vercel will use the secure variables you set in its dashboard for the live site.
        const publicKey = '***';
        const serviceID = '***';
        const templateID = '***';

        emailjs.init({ publicKey: publicKey });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const statusMessage = document.getElementById('status-message');
            submitBtn.textContent = 'Sending...';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitBtn.textContent = 'Send Message';
                    statusMessage.textContent = 'Message sent successfully!';
                    statusMessage.style.color = '#2dd4bf'; // A success color
                    contactForm.reset();
                    setTimeout(() => { statusMessage.textContent = ''; }, 5000);
                }, (err) => {
                    submitBtn.textContent = 'Send Message';
                    statusMessage.textContent = 'Failed to send message. Please try again.';
                    statusMessage.style.color = '#f87171'; // An error color
                    console.log('EmailJS Error:', JSON.stringify(err));
                });
        });
    }

});