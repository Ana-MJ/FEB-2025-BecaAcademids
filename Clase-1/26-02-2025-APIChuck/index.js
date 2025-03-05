function APIChiste(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById("chiste").innerText = data.value;
        })
        .catch(error => {
            console.error("Error al cargar el chiste", error);
        });
}
    document.getElementById("btn").addEventListener("click", APIChiste);
