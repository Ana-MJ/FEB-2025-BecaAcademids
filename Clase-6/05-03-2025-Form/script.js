let username, email, phone; //1
let  plan; //2
let extras = []; //3

// PASO 1
document.getElementById("nextP1").addEventListener("click", function(){
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;

    if (username && email && phone) {
        document.getElementById("paso1").style.display = "none"; //ocultar
        document.getElementById("paso2").style.display = "block"; //mostrar

        // Actualiza la barra lateral
        ActualizaBarra('p2'); //activa el paso 2

        console.log("Paso 1 completado")
    } else {
        alert ("Completa todos los campos");
    }
});

// PASO 2
document.getElementById("nextP2").addEventListener("click", function() {
    plan = document.getElementById("plan").value;

    if (plan === "arcade") {
        precio = "$9/mo";
    } else if (plan === "avanzado") {
        precio = "$12/mo";
    } else if (plan === "pro") {
        precio = "$15/mo";
    }

    if (plan) {
        document.getElementById("paso2").style.display = "none"; //ocultar
        document.getElementById("paso3").style.display = "block"; //mostrar 

        // Actualiza la barra lateral
        ActualizaBarra('p3'); //activa el paso 3

        console.log("Paso 2 completado");
    } else {
        alert ("No se ha seleccionado un plan");
    }
});

//PASO 3 
document.getElementById("nextP3").addEventListener("click", function() {

    extras = [];

    // checked (determina si esta seleccionado para devolver true/ en caso contrario es false)
    //.push() => añade un nuevo elemento al final de un arreglo, util para guardar cosas de maera ordenada
    if (document.getElementById("extra").checked)extras.push("Servicios en línea"); 
    if (document.getElementById("extra2").checked)extras.push("Más Almacenamiento");
    if (document.getElementById("extra3").checked)extras.push("Personalizado");

    document.getElementById("paso3").style.display = "none"; //ocultar
    document.getElementById("paso4").style.display = "block"; //mostrar 

    // Actualiza la barra lateral
    ActualizaBarra('p4'); //activa el paso 4

    console.log("Paso 3 completado");

    //Muestra el resumen del paso 4
    showResumen ();
});

//PASO 4
function showResumen (){
    const info = document.getElementById ("resumen");

    //innerHTML => permite agregar el contenido dentro del elemento info
    //${} => reemplaza el valor de la variable por el que se ingreso en el formulario
    info.innerHTML = `
        <p><strong>Nombre:</strong> ${username}</p> 
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Plan elegido:</strong> ${plan} ${precio}</p>
        <p><strong>Servicios adicionales:</strong> ${extras}</p>
    `;
}
    //modal
    document.getElementById("final").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
    
    console.log("Formulario completado");
});

    // cerrar modal
    document.getElementById("cerrarModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

    // Funcion para identificar que paso debe marcarce como active
    function ActualizaBarra(stepId) {
    // Restablecer todas las clases 'active' a su estado inicial
    document.querySelectorAll('.barra-lateral li').forEach(function(item) {
        item.classList.remove('active');
        // item => es el <li> de la barra lateral
        // classList.remove => que te permite trabajar con las clases CSS de ese elemento 
        // .remove => elimina la clase especificada del elemento, en este caso se elimina la clase active del elemento item
    });

    // Agregar la clase 'active' al paso actual donde estoy en el formulario
    document.getElementById(stepId).classList.add('active');
}
