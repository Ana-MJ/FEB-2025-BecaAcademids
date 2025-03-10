const box = document.querySelector('.box');

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        
        if (!box.style.top) {
            box.style.top = '0px';
        }
        box.style.top = `${+box.style.top.replace('px', '') + 10}px`;
    }
}); 