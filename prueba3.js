// Selección de elementos
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = items.length;

// Función para mover el carrusel
function moveCarousel(index) {
    const itemWidth = items[0].clientWidth; // Ancho de un elemento
    const newPosition = -(itemWidth * index); // Nueva posición en el track
    track.style.transform = `translateX(${newPosition}px)`;
}

// Rotación automática del carrusel
function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems; // Avanzar al siguiente índice
        moveCarousel(currentIndex);
    }, 3000); // Cambiar cada 3 segundos
}

// Iniciar el carrusel
startCarousel();
