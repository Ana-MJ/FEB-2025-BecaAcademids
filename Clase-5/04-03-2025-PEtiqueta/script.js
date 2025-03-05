document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón y el template
    const showTemplateButton = document.getElementById("showTemplateButton");
    const extraContent = document.getElementById("extraContent");
    const template = document.getElementById("extraTemplate");

    // Agregar evento al botón para mostrar el contenido del template
    showTemplateButton.addEventListener("click", function() {
        // clonar contenido
        const clone = template.content.cloneNode(true);
        // Agregar el contenido clonado al DOM
        extraContent.appendChild(clone);
        // Opcional: Desactivar el botón después de hacer clic para evitar que se muestre más de una vez
        showTemplateButton.disabled = true;
    });

    // Hacer el pedido
    const orderButton = document.querySelector("button"); 
    const sizeRadios = document.getElementsByName("size");  
    const friesCheckbox = document.getElementById("fries");  
    const drinksCheckbox = document.getElementById("drinks");  

    orderButton.addEventListener("click", function(event) {
        event.preventDefault();  // Evitar que se recargue la página

        // Verificar si al menos una opción está seleccionada
        if (!friesCheckbox.checked && !drinksCheckbox.checked && !Array.from(sizeRadios).some(radio => radio.checked)) {
            alert("¡Selecciona algo!"); 
        } else {
            alert("Pedido realizado con éxito"); 
        }
    });
});
