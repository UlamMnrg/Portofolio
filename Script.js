document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling (Untuk navigasi navbar ke section)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) { 
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. AOS Initialization
    AOS.init({
        duration: 800,
        once: true,
    });
});
