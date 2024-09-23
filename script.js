document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Obtener el valor del atributo data-section
        const targetSectionId = this.getAttribute('data-section');
        // Buscar el elemento de la sección correspondiente
        const targetSection = document.getElementById(targetSectionId);
        // Hacer scroll suave hasta la sección
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});