document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for internal navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form handling
    const formBtn = document.getElementById('btn-enviar');
    const form = document.getElementById('contact-form');
    
    if (formBtn && form) {
        formBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Gather form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Since there is no backend, we alert the user locally for now
                alert(`¡Gracias por tu mensaje, ${name}! Nos pondremos en contacto pronto.`);
                form.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Update Active Link in Navbar based on Scroll Position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});