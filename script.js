document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los enlaces del menú
    const menuItems = document.querySelectorAll('nav ul li a');
    
    // Añadimos un evento click a cada enlace
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página recargue

            // Ocultamos todas las secciones
            document.querySelectorAll('.seccion').forEach(section => {
                section.classList.remove('visible');
            });

            // Mostramos la sección correspondiente al enlace clicado
            const sectionToShow = this.getAttribute('data-section');
            document.getElementById(sectionToShow).classList.add('visible');
        });
    });
});

const elementoClick = document.querySelector('#portafolio');
elementoClick.addEventListener('click', function() {
    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 10,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            },
        }
    
      });
});




