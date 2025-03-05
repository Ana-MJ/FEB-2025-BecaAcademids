document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    // Obtenemos el usuario y la contraseña
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    //Datos
    var validUsuario = "admin";
    var validPassword = "1234";

    // Verificamos si los datos coinciden
    if (usuario === validUsuario && password === validPassword) {
        // si los datos son correctos, guardamos el estado de sesión
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html"; //se redirige a index.html si los datos son correctos
    } else {
        // Si no es válido, mostramos un mensaje de error
        alert("Usuario o contraseña incorrectos");
    }
});
