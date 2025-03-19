/** Objetos Globales (a toda la aplicacion) */

// window (objeto global) => Document (entrar al DOM)

// window.setTimeout() => simular la respuesta de un servicio

// podemos generar nuestras propies propiedades en el window

// Document (objeto: crear/obtener/agregar/remover (elementos))

// WINDOW:

//document
//buscar nodos(tags, event target, object())

//SIN LIBRERIAS => CREAR A PARTIR DE LA NECESIDAD
//buscar etiquetas:
const box = document.getElementById('box'); //node (encuentra el elemento/retorna), null
box.style.backgroundColor = 'red'; //TypeError Cannot read properties of null
box.style.color = 'white';
console.log(box__proto__);
box.addEventListener('click', (event) => {
    console.log('Me dio click el usuario', event);
}); //forma imperativa (nombre del evento y lo que se quiere hacer con esa informacion), tambien se puede hacer en el body pero no esta bien
box.dispatchEvent(new Event('click')); //dispara => genera el evento




//buscar etiquetas:
const span = document.querySelector('.class') // solo uno como selector de CSS => menos optimo, (nodo||null)
span.style.backgroundColor = '#DDD';
// buscar etiquetas:
const listOfDivs = document.querySelectorAll('div'); //todas coleccion que cumplan la seleccion del elemento
console.log(listOfDivs);

//crear etiquetas
const newDiv = document.createElement('div'); //crea no cambia referencias
newDiv.innerText = 'Soy el nuevo Div';
//agregar etiquetas al DOM
document.body.appendChild(newDiv);
console.log(document.body);

/** PROMESAS */
//otro objeto que se puede usar dentro de javascript
//cumple resolve, no cumple reject (callbacks)
const callback = (resolve, reject) => { //son funciones y se puede cambiar el nombre
    let exito = false; //bandera 
    window.setTimeout(() => { //pausa/tiempo fuera al terminar se ejecuta algo
        if(exito === true){
            resolve('Si me amo toda la vida');
        } else {
            reject('No se cumplio con esta morra');
        }
        
    }, 5000); //simulacion de algo asincrono.
                //se tardo en contestar el servivio,
                //se tardo en renderizar el DOM
};

//esto es un objeto
const promise = new Promise (callback);// (callback) => controlar acciones asincronas (controlar el resultado de la promesa)
console.log(promise);
//funcion que determine si la promesa se va a cumplir o no (callback => controlar el estado de la promesa)
//metodos de instancia (objetos)//
promise
.then ((result) => { //si
    console.log(result);
    console.log(promise); //estado final de la promesa
})
.catch (error => { //no
    console.log(error);
    console.log(promise);
})


const obtenerInfoPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    fetch (url)
    .then((response) => {
        console.log(response);
        return response.json(); //devolver el valor real ( otra promesa)
    })
    .then(data => {
        console.log(`Aqui obtuve la informacion de ditto ${data.sprintes.front_default}`);
    })
    .catch (error => {
        console.log(error);
    })
}
obtenerInfoPokemon();

/** mañana (?) */
Promise.prototype.all = (promisesArray) =>{
    let resultsArray = [];
    for (let i = 0; i < promisesArray.length; i++){
        promisesArray [i].then(() => {
            resultsArray.push(true)
        })
    }
    return resultsArray.includes(true);
}

Promise.all() //se llama desde un constructor
//.race(), === myOwspromise


/** REVISAR DOCUMENTACION */
//https://web.dev/learn/javascript (Learn)
//https://es.javascript.info/ (Moderno)
//row map .ia
//https://lenguajejs.com/asincronia/promesas/que-son/

// (video) Event Loop 
// https://www.youtube.com/watch?v=eiC58R16hb8&t=109s
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=405s





