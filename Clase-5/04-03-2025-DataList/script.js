// Enlaces para el DataList
const juegos = {
    "Elden Ring": "https://www.google.com/search?q=Elden+Ring&sca_esv",
    "The Legend of Zelda: Tears of the Kingdom": "https://www.google.com/search?q=The+Legend+of+Zelda%3A+Tears+of+the+Kingdom&sca_esv",
    "Final Fantasy VII Rebirth": "https://www.google.com/search?q=Final+Fantasy+VII+Rebirth&sca_esv",
    "Cyberpunk 2077 Phantom Liberty": "https://www.google.com/search?q=Cyberpunk+2077+Phantom+Liberty&sca_esv",
    "Hollow Knight: Silksong": "https://www.google.com/search?q=Hollow+Knight%3A+Silksong&sca_esv",
    "Resident Evil 4 Remake": "https://www.google.com/search?q=Resident+Evil+4+Remake&sca_esv",
    "God of War Ragnarök": "https://www.google.com/search?q=God+of+War+Ragnar%C3%B6k&sca_esv",
    "GTA VI noticias": "https://www.google.com/search?q=noticias+gta+vi&sca_esv",
    "Mejores RPGs de 2025": "https://www.google.com/search?q=Mejores+RPGs+de+2025&sca_esv",
    "Tendencias en eSports": "https://www.google.com/search?q=Tendencias+en+eSports&sca_esv"
};

// "Buscar con Google"
document.getElementById("search-btn").addEventListener("click", searchGame);
document.getElementById("btn").addEventListener("click", searchGame);
function searchGame() {
    const input = document.getElementById("buscar");
    const selectedOption = input.value;
    // si esta en el DataList lo redirige
    if (juegos[selectedOption]) {
        window.location.href = juegos[selectedOption];  // Redirige a la URL correspondiente
    }
}

// "Voy a tener suerte"
document.getElementById("lucky-btn").addEventListener("click", luckySearch);
function luckySearch() {
    window.location.href = "https://doodles.google/";
}