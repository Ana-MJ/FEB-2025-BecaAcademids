//Ejercicio (1)
function palindromo(palabra){
    let palabraInvertida = palabra.split("").reverse().join('');
    if(palabraInvertida === palabra){
        console.log("Es palindromo");
    } else {
        console.log("No es palindromo");
    }

}
palindromo('oso');
/** split (texto en array), reverse (invierte el array), join(une el array) */

//Ejercicio (2) Iterativa
function factorial(numero){
    let resultado = 1;
    for (let i = 1; i <= numero; i++){
        resultado = resultado * i;
        console.log(resultado);
    }
}
factorial(5);
/** se inizializa en 1 para ser el punto de partida del factorial */

//Ejercicio (3)
function fibonacci(numero){
    let a = 0; 
    let b = 1;
    console.log(a);
    for (let i = 2; i <= numero; i++) {
        console.log(b); 
        let siguiente = a + b; 
        a = b;
        b = siguiente;
    }
}
fibonacci(7);
/** 0, 1 (primeros terminos de fibonacci), calcula el siguiente número sumando los 2 anteriores, y luego actualiza a y b para continuar con el siguiente ciclo.*/

//Ejercicio (4)
function ordenar(num){
    let n = num.length;

    for (let i = 0; i < n - 1; i++){
        for (let p = 0; p < n - i - 1; p++){
            if (num[p] > num [p+1]){
                let orden = num [p];
                num [p] = num[p+1];
                num [p+1] = orden;
            }
        }
    }
    return num;
}

let ejemplo = [5, 1, 3, 2, 4];
console.log(ordenar(ejemplo));
/**corre la  secuencia, compara y si elemento es mayor que el que sigue los intecambia  */

//Ejercicio (5)
function Pnumero(){
    let palabra = prompt("La palabra es:");
    console.log(palabra);
    console.log("El numero de palabras son:" + palabra.split("").length);
}
Pnumero();

//Ejercicio (6)
function Faltante(num){
    let n = num.length + 1; 
    let sumat = (n * (n + 1)) / 2; 
    let sumanum = 0;

    for (let i = 0; i < num.length; i++) {
        sumanum = sumanum +  num[i];
    }
    return sumat - sumanum;
}
let example = [1, 2, 3, 4, 6]; 
console.log("Falta el: "+ Faltante(example)); 
/** el tamaño es n incluyendo numero faltante, suma los primeros numeros, for suma elementos, devuelve la diferencia */

//Ejercicio (7)
function SubLarga() {
    let texto = prompt("Ingresa un texto:");
    let palabras = texto.split(" ");
    let subcadenaLarga = "";
    
    palabras.forEach(function(palabra) {
        if (palabra.length > subcadenaLarga.length) {
            subcadenaLarga = palabra;
        }
    });
    console.log('La subcadena más larga es:' + subcadenaLarga);
}
SubLarga();
/** ""; (guarda la palabra), forEach recorre cada palabra, subcadenaLarga guarda la pabra mas larga */


//Ejercicio (8)


//Ejercicio (9)


//Ejercicio (10)
function NumeroUnico(num){
    let contador = new Map();

    for (let i = 0; i < num.length; i++){
        let n = num[i];
        if (contador.has(n)){
            contador.set(n, contador.get(n) + 1);
        } else {
            contador.set(n,1);
        }
    }

    for (let [n, count] of contador) { 
        if (count === 1) {
            return n;
        }
    }
}

let repite = [4, 5, 6, 4, 5, 7, 6];
console.log(NumeroUnico(repite));
/** cuenta las veces que aparece cada numero, recorre, toma cada numero, si ya +1/no solo 1, se busca y retorna */
