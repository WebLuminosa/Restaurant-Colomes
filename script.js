// Obtiene el elemento <header>
const header = document.querySelector('header');

// Si el elemento existe, define su posición de inicio
if (header) {
    const stickyPoint = header.offsetTop;

    // Función que se ejecuta cada vez que el usuario se desplaza
    function handleScroll() {
        // window.pageYOffset es la posición de scroll vertical
        if (window.pageYOffset > stickyPoint) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    // Asigna la función 'handleScroll' al evento de desplazamiento de la ventana
    window.onscroll = handleScroll;
}