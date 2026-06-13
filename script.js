document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INICIALIZAR CARRUSEL 3D (SWIPER)
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: 1,
        loop: true,
        coverflowEffect: {
            rotate: 20,      
            stretch: 0,       
            depth: 200,      
            modifier: 1,     
            slideShadows: true, 
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3500, 
            disableOnInteraction: false,
        }
    });

    // 2. EFECTOS MOTION EN SCROLL // 
    const animatedElements = document.querySelectorAll(
        '.animate-fade-up, .animate-fade-down, .animate-slide-left, .animate-slide-right'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // 3. BOTÓN VOLVER ARRIBA
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

}); // <--  DOMContentLoaded