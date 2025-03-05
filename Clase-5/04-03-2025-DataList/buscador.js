const input = document.querySelector('#buscar');
const dataList = document.querySelector('#sugerencias');

// Lista de sugerencias
const listaGames = [
    "Elden Ring",
    "The Legend of Zelda: Tears of the Kingdom",
    "Final Fantasy VII Rebirth",
    "Cyberpunk 2077 Phantom Liberty",
    "Hollow Knight: Silksong",
    "Resident Evil 4 Remake",
    "God of War Ragnarök",
    "GTA VI noticias",
    "Mejores RPGs de 2025",
    "Tendencias en eSports"
];

// Evento cuando el usuario escribe en el input
input.addEventListener('input', () => {
    const texto = input.value.toLowerCase().trim(); // .toLowerCase() = Convierte el texto a minúsculas. || .trim() = Elimina los espacios en blanco al principio y al final del texto
    if (texto === '') return; // Si el input está vacío no se ven sugerencias

    const filtroLista = listaGames.filter(option => option.toLowerCase().includes(texto)); //corre la lista y verifica si el juego contiene el texto que se escribio.

    //Sugerencias (aparezcan como sugerencias en la barra de búsqueda)
    filtroLista.forEach(option => {
        const newOp = document.createElement('option'); //Crea una nueva opción para el <datalist>
        newOp.value = option;
        dataList.appendChild(newOption);
    });
});
