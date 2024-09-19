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

    let currentIndex = {
        'web-carousel': 0,
        'app-carousel': 0
    };
    
    function moverCarrusel(id, direction) {
        const carrusel = document.getElementById(id);
        const items = carrusel.querySelectorAll('.item');
        const totalItems = items.length;
        
        // Calcular el nuevo índice
        currentIndex[id] += direction;
        if (currentIndex[id] < 0) {
            currentIndex[id] = totalItems - 1;
        } else if (currentIndex[id] >= totalItems) {
            currentIndex[id] = 0;
        }
    
        // Desplazar el carrusel
        const offset = -currentIndex[id] * 100; // Desplazar en porcentaje
        carrusel.style.transform = `translateX(${offset}%)`;
    }
});


