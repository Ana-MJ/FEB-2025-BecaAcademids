// Seleccionar todos los artículos dentro de las secciones
const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('section');

// Hacer los artículos arrastrables
cards.forEach(card => {
    card.setAttribute('draggable', 'true');

    // Cuando el artículo empieza a ser arrastrado
    card.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
    });

    // Cuando el artículo deja de ser arrastrado
    card.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

// Permitir que las secciones acepten los artículos
sections.forEach(section => {
    section.addEventListener('dragover', (e) => {
        e.preventDefault(); // Necesario para permitir la acción de soltar
        const draggingCard = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(section, e.clientY);
        if (afterElement == null) {
            section.appendChild(draggingCard);
        } else {
            section.insertBefore(draggingCard, afterElement);
        }
    });
});

// Función para determinar la posición donde se soltará el artículo
function getDragAfterElement(section, y) {
    const draggableElements = [...section.querySelectorAll('.card:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
