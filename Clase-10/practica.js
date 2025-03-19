// Ejercicio (1)
let saludo = 'Hola Mundo';
console.log (saludo);

//Ejercicio (2)
function suma(){
    let num1 = 10;
    let num2 = 5;
    let resultado  = num1 + num2;
    console.log(resultado);
}
suma(); 

function valores(){
    let a = +prompt("valor 1:");
    let b = +prompt("valor 2:");
    console.log(a + b);
}
valores();

//Ejercicio (3)
function saludar(){
    let nombre = prompt("Coloca tu nombre:");
    console.log('Hola ' + nombre);
}
saludar();

//Ejercicio (4)
function validar(){
    let numero = prompt("Dame un numero:");

    if (numero % 2 == 0){
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
}
validar();

//Ejercicio (5)
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//Ejercicio (6)
function sumaN(){
    let n = 100;
    let number = (n * (n + 1)) / 2;
    console.log(number);
}
sumaN();

//Ejercicio (7)
let numb = prompt("Ingresa un numero:");
for (let i = 1; i <= 10; i++){
    console.log(numb + "x" + i + "=" + numb * i);
}

//Ejercicio (8)
function invertir(){
    let cadena = prompt("Ingresa un texto:");
    let cadenainv = "";

    for (let i = cadena.length - 1; i >= 0; i--){
        cadenainv = cadenainv + cadena[i];
    }
    console.log(cadenainv);
}
invertir();

//Ejercicio (9)
function NumLetras(){
    let cadena = prompt("Ingresa un texto:");
    let contador = 0;
    let palabra = "";

    for (let i = 0; i < cadena.length; i++){
        let caracter = cadena[i];

        if(caracter === " "|| caracter === "*" || caracter === "."){
            if (palabra){
                contador++;
                palabra = "";
            }
        } else {
            palabra = palabra + caracter;
        }
    }
    if (palabra){
        contador++;
    }
    console.log("Total:" + contador);
}
NumLetras();

//Ejercicio (10)
 function Nprimo(){
    let nump = +prompt("Ingresa un numero:");
    if (nump <= 1){
        console.log("No es primo");
    } else {
        let primo = 1;

        for (let i = 2; i < nump; i++){
            if(nump % i === 0){
                primo = 0;
            }
        }

        if (primo === 1){
            console.log("Es primo");
        } else {
            console.log("No es primo");
        }
    }
 }
 Nprimo();