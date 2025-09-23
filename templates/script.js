// document.addEventListener('DOMContentLoaded', function() {

//     // 1. Initialize Particles.js for the live background
//     particlesJS("particles-js", {
//         "particles": {
//             "number": {
//                 "value": 80,
//                 "density": {
//                     "enable": true,
//                     "value_area": 800
//                 }
//             },
//             "color": {
//                 "value": "#2dd4bf" // Teal color for particles
//             },
//             "shape": {
//                 "type": "circle",
//             },
//             "opacity": {
//                 "value": 0.5,
//                 "random": false,
//             },
//             "size": {
//                 "value": 3,
//                 "random": true,
//             },
//             "line_linked": {
//                 "enable": true,
//                 "distance": 150,
//                 "color": "#9ca3af", // Gray color for lines
//                 "opacity": 0.4,
//                 "width": 1
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 2,
//                 "direction": "none",
//                 "random": false,
//                 "straight": false,
//                 "out_mode": "out",
//                 "bounce": false,
//             }
//         },
//         "interactivity": {
//             "detect_on": "canvas",
//             "events": {
//                 "onhover": {
//                     "enable": true,
//                     "mode": "grab"
//                 },
//                 "onclick": {
//                     "enable": true,
//                     "mode": "push"
//                 },
//                 "resize": true
//             },
//              "modes": {
//                 "grab": {
//                     "distance": 140,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 }
//             }
//         },
//         "retina_detect": true
//     });


//     // 2. Initialize Typed.js for the dynamic sub-heading
//     const options = {
//         strings: ['Technology & Design.', 'Generative AI.', 'Full-Stack Development.', 'Machine Learning.'],
//         typeSpeed: 50,
//         backSpeed: 25,
//         backDelay: 1500,
//         loop: true
//     };
//     const typed = new Typed('.type-effect', options);


//     // 3. Initialize AOS (Animate on Scroll)
//     AOS.init({
//         duration: 1000, // animation duration
//         once: true, // whether animation should happen only once
//         offset: 100, // offset (in px) from the original trigger point
//     });

// });






document.addEventListener('DOMContentLoaded', function() {

    // --- PARTICLE.JS CONFIGURATIONS ---
    const particlesDark = {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.5, random: false }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#9ca3af", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }},
        interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}},
        retina_detect: true
    };
    
    const particlesLight = {
        particles: { number: { value: 80, density: { enable: true, value_area: 800 }}, color: { value: "#7452c3" }, shape: { type: "circle" }, opacity: { value: 0.6, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 150, color: "#4b5563", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }},
        interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true }, modes: { grab: { distance: 140, line_linked: { opacity: 1 }}, push: { particles_nb: 4 }}},
        retina_detect: true
    };

    function loadParticles(themeConfig) {
        // particles.js expects the ID of the div
        particlesJS('particles-js', themeConfig);
    }
    
    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = themeToggle.querySelector('i');
    const currentTheme = localStorage.getItem('theme');

    // Function to set the theme
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

    // Check for saved theme on load
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        // Default to dark theme if no preference is saved
        setTheme('dark');
    }

    // Add click event listener to the toggle button
    themeToggle.addEventListener('click', () => {
        const activeTheme = document.documentElement.getAttribute('data-theme');
        if (activeTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });


    // --- TYPED.JS INITIALIZATION ---
    const options = {
        strings: ['Technology and Design.', 'Machine Learning.', 'Full-Stack Development.', 'Artificial Intelligence.'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    const typed = new Typed('.type-effect', options);


    // --- AOS (ANIMATE ON SCROLL) INITIALIZATION ---
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

});