document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize Particles.js for the live background
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#2dd4bf" // Teal color for particles
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#9ca3af", // Gray color for lines
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
             "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });


    // 2. Initialize Typed.js for the dynamic sub-heading
    const options = {
        strings: ['Technology & Design.', 'Generative AI.', 'Full-Stack Development.', 'Machine Learning.'],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    const typed = new Typed('.type-effect', options);


    // 3. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000, // animation duration
        once: true, // whether animation should happen only once
        offset: 100, // offset (in px) from the original trigger point
    });

});