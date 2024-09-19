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

    $('.carousel').carousel({
        interval: 2000
      })
});


