/** FUNCIONES => responsable de retornar un valor especifico dentro de la funcion*/
/** function => declarando la function,
 * nombre de la funcion (no mayusculas),
 * parametros (nombre de variable local que solo van a vivir dentro de funcion) => referencia,
 * unico valor de salida */

/**
 * Metodo para mover el cuerpo de una persona
 * @param {Object} persona
 */

//camel case (moverCuerpo), dash case (mover-cuerpo), slash case (/)

let nombre = 'aldo'; //variable global

//DECLARACION
function moverCuerpo (persona, nombreNovia) {
    // persona = {nombre: 'oscar', edad: 19, sexo:'m'}
    console.log('Este es estatico');
    console.log(`Se esta moviendo ${persona.nombre} y ${nombreNovia}`);
    if(persona.edad > 18) {
        console.log(`${persona.nombre} es mayor de edad y su edad es ${persona.nombre}`);
    }  else {
        console.log(`${persona.nombre} es menor de edad`);
    }
    return 'el usuario se llama: ' + persona.nombre; //cualquier tipo de dato
    // return undefined => retorno implicito
    
} 

// EJECUCION
const resultado = moverCuerpo({nombre: 'aldo', edad: 17, sexo:'m'}, 'Milenka'); //argumentos => valor de entrada
console.log(resultado);
moverCuerpo({nombre: 'oscar', edad: 19, sexo:'m'}, 'Amanda');
// else if (persona.nombre === 'aldo') { console.log(`Ah es aldo, pasale`);}


//VALORES POR DEFECTO
/** valor de paramentros por derecto (=[]), si no resive  un valor y no validamos es underfined */

//sirven para evitar errores de ejecucion


/**ELEMENTOS DE ORDEN SUPERIOR */
//function expression funciones almacenadads en variables, argumento o retonadas
//almacenada en una variable
const baz = function(){
    console.log('Alv');
}; //referencia 
baz();

//funcion retornada desde otra funcion
function saludar (){
    //valores === expression (valores = expresion = funsion)
    return function () { //referencia
        console.log('Mensaje dentro de la funcion que se retorna ');
        console.log('OJO');
        console.log('Estos son mensajes');
    }
    
}
const resultadoSaludar = saludar();
resultadoSaludar;

//funcion pasada como argumento a otra funcion (CALLBACK)
function despedir (obtenerNombre){ //obtenerNombre => callback encargado de decir el proceso
    const resultado = obtenerNombre(); // optiene este texto Esta es mi nombre:Aldo'
    console.log(resultado);

}

despedir(function(){ return 'Esta es mi nombre:Aldo';});//declaracion de la funcion 


// ARROW FUNCTION (anonimas) => tarea asincrona (event loop, callback queue, callstack)
//se pueden poner valores por defecto
const sumar = (a,b) => { //solo importa ponerla de forma descrita
    return a + b;
};

console.log(sumar(10,10)); //se manda a llamar

const aldo = {
    nombre: 'Aldo',
    saludar: (...arguments ) => {
        console.log ();
    }
};


//arguments => es una especie de arreglo (this)
//arrow / arguments => no existe a menos de poner (...arguments)(objetos y arreglos) = sprint operation


//FUNCIONES CONSTRUCTORAS
function PersonaF(nombre, edad, sexo) {
    let persona = {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        saludar (){
            console.log('Hola soy: ', this.nombre);
        }
    };
    return persona;
};

const alberto = PersonaF('alberto', 40, 'M');
alberto.saludar();
const monse = PersonaF('monse', 22, 'F');
alberto.saludar();
console.log(alberto, monse); // [] o . (valor de la propiedad de un objeto)

function Persona(nombre, edad, sexo) {
        this.nombre = nombre,
        this.edad = edad, //liga cada propiedad para el objeto
        this.sexo = sexo,
        this.saludar = function () {
            console.log('Hola soy: ', this.nombre);
    }
}

/** instancia de clase */
//Este es el objeto
const emilio = new Persona('Emilio',29,'M'); //prototipo
console.log(emilio);


class Carro {
    constructor (puertas = 4, modelo = 'genrico', anio = 2025) {
        this.puertas = puertas;
        this.modelo = 'genrico';
        this.anio = anio ?? 2025; //nullish coleadding operator, evita errores underfined o nulos
    }
    mover () {
        if (this.___anio > 2024) {
            this._modelo = 'S4';
        }
        console.log(` Èl ${this._modelo} run run run`);
    }
}

 // sugar syntax
class Persona extends Carro { //compartan propiedades, se deben de inicializar super(); (hace referencia a la herencia padre)
    constructor(nombre, edad, sexo) {
        super(4, 2024);
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    // acciones que puede hacer un objeto de tipo Persona
    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
}
// instancia
const jeronimo = new Persona('Jeronimo', 29, 'M');
jeronimo.saludar();
jeronimo.mover();
console.log(jeronimo);

Array.prototype.myOwnReduce = function (callback, initialValue){ //sobre escribir el prototipo
    let acumulador = initialValue;
    for (let i =0; i < array.leng; i++) {
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}
 const resultRed = [1,2,3].myOwnReduce((acumulador,item) => {
    acumulador += item;
    return acumulador;
 }, 0);

console.log(resultRed);
// let telefono = 5513044563;
// telefono.toFixed(); // toFixed esta dentro del prototipo
// const aa = [1,2,3];
// console.log(aa);

const bmw = new Carro(5);
bmw.mover(); 
    


/** YA VISTOS (INVESTIGAR) */
//clases
//conceptos de POO
//prototipos => objetos
//conceptos de POO * HERENCIA, ENCAPSULAMINETO, ASOCIACION, COMPOSICION (como generarlos atraves de JS)
// (PROTOTIPOS) ARRAY, NUMBER, STRING, OBJECT, MAP, SET, BOOLEAN, 


// PROMISE (SEGUNDA EVALUACION)
//JS EN NAVEGADOR (DOCUMENTS Y EVENTS)
//MODULOS DE ES
//WEB COMPONETS (EJERCICIOS)
//LIT ELEMENT (3RA EVALUACION) => COMPONENTE CONSTRUIDO 
//PROYECTO

