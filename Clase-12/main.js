/** 
 * OPERADORES 
 * es un caracter que nos permite realizar operaciones operando
 * */

//OPERADORES ARITMETICOS
// +,  -,  *, /,  Math.pow(2,2)(potencia), % (modulo), ++, --

//operandos
 const resultado = [1,2,3].reduce((acumulador, item) => {
    acumulador += item; //acumulador = acumulador + item
    return acumulador;
},0).toString(); //todo esto es una expresion tambien

console.log(resultado + 10); //16 => 610 por el .toString();
console.log('resultado' + 10); // type cohersion
console.log([10] + 'resultado'); //No se puede
console.log([10] + {} ); //lo combiente en string, le da preferencia el string
console.log(typeof NaN); //identificar el tipo de dato de una exprecion
console.log(typeof undefined); //'undefinide' es string
console.log(typeof null); //objeto 


const string = `adfsasfsdf ${resultado}`; //back ticks

console.log(4%2); //log tambien recive expresiones
console.log(`4%2 = ${4%2}`);

const pow = Math.pow (); //potencia => expresion
const potencia = Math.pow(2,2);
console.log(2**2); //** tambien calcula la potencia

//OPERADORES COMPARACION
// == (no estricto), === (estricto), >, <, <=, >= : (true || false) valor resultante de esa operacion 

0 == 0 //comparacion no estricta, true (regresa un booleano)
'0' == '0' //comparacion no estricta, type cohersion, true (valor) => el problema de esto es type cohersion

const a = typeof 0; //number
const b = typeof '0'; //string
0 === '0' // 0 '0' false => 'number' !== 'string' (valor y tipo de dato)

//FALSY (valores falsos) => pueden ser a favor o contra
//'', undefined, null //(false)
let variable = null;
if(!!variable == false){
    console.log('fsfadfgsdfg');
}

//TRUTHY
//'', 1, undefined, null //(true)
let variable1 = 1;
if(!variable1){
    console.log('var 2');
}

//OPERADORES LOGICOS
// &&, ||, ! (validar o compara valores booleanos) // truthy y falsy

/** && (AND) */
// 1 && 0 = 0  true && false = false => // !!'asdasd' && false => true && false = false
// 0 && 1 = 0  false && false = false => // !'asdasd' && false => false && false = false
// 0 && 0 = 0  false && true = false => // !'asdasd' && -1 => false && true = false
// 1 && 1 = 1  true && true = true => // !! 'asdasd' && !! 'asdasd'  => true && true = true


//true && true = true
//!![] && !![] = true

 console.log(!false && false);
 console.log(10 && !!true);

 const operador = [1,2,3].reduce((acum, ite) => {
    acum += ite;
    return acum;
 });
 console.log(operador);

 const nombre = 'juan';
 const edad = 10;
 const valor = edad && null;
 console.log(valor);

 console.log( 10 && 'juan'); //toma el ultimo valor verdadero truthy


 if(!!edad && !!nombre){
    console.log('afdfafasdffsdf');
 }


/** || (OR) */ //siempre que haya un valor true siempre sera true 

//true || true => true
//true || false => true
//false || true => true
//true || true => false


