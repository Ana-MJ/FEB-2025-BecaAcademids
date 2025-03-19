console.log('HOLA ESTE ES MI PRIMER SCRIPT');

//(PRIMITIVOS):
let nombre = 'aldo'; //string
nombre[0] = 'Ron'; // tipo de dato primitivo y eso significa que es inmutable
nombre = 'Ronaldo';
let edad = 30; //numero
let masculino = true; //boolean
let sobrinos = null; //nulos
let papas = undefined; //valor no definido
let id = Symbol("foo"); //Symbol => identidicador unico
console.log(id);
let saldo = 221348123081283n //Bigint

console.log (typeof nombre, typeof edad); // saber el tipo de dato


//new genera objetos
const number1 = new Number('0');  //expresiones, funcion cosntructora, clase, prototipo
const number2 = new Number(2+3);
const number3 = new Number(true); //conversion de typos
const number4 = new Number(false); //conversion de typos
const number5 = new Number([].length);

//const number1 = Number('0');  //expresiones, funcion cosntructora, clase, prototipo
//const number2 = Number(2+3);
//const number3 = Number(true);
//const number4 = Number(false);
//const number5 = Number([].length);
//console.log();

/////////////////////////////////////////////////////////////////////////

//(COMPLEJOS): POO => abstraccion de obejtos de la vida real
let persona = {
    nombre: 'Aldo',
    edad: 30, 
    papas: [{nombre: 'Aldo', edad:30}]
}; // literal object

//si se puede mutar es cambiar una pequeña parte  del valor (cambiar/transformar)
persona.nombre = 'Ronaldo';
//persona['nombre']; //Ronaldo
console.log(persona);
const aldo = persona; // direccion de memoria
aldo.nombre = 'Rogelio';
console.log(persona); //ronaldo
console.log(aldo); //rogelio

let coleccion = ['aldo', 'magaly', 'judit'];
//Elemento de arreglo:
// coleccion [0]; //aldo
// coleccion [1]; //magaly
// coleccion [2]; //judit
console.log(coleccion);

const arreglo = [0,1,2,3,3,5];
//metrodo constructor o clase
const set = new Set(arreglo); //arreglo, colecciones de valores unicos limpia los duplicados
//new genera un nuevo tipo de dato (memoria)
console.log(set);
console.log(set.size); //conjunto de elementos que tiene
set.add('asd');
console.log(set);
console.log(set.size);
set.add('5');
console.log(set);
console.log(set.size);
console.log(set.delete(5));
console.log(set.has(15)); //has valida si existe o no, retornando un booleando

//map
const map = new Map();
map.set(1, 'uno');
const value = map.has(1);
console.log(value);
const otherValue = map.get(1);
console.log(otherValue);
//let deleteResult = map.delete(0);
//console.log(deleteResult);
console.log(map);
map.clear();
console.log(map);
console.log(map.size);

/**
 *  Sistema de Inventario de una Tienda
Crea un arreglo de objetos donde cada objeto represente un producto con nombre, precio y stock. Luego, muestra en consola los productos con stock disponible.
 */

/**
 * Lista de Estudiantes y Promedios
Dado un arreglo de estudiantes con sus notas, calcula su promedio y determina si aprobaron (nota mínima 6).
 */

/**
 * Gestión de Citas Médicas
Crea un sistema que registre citas médicas con fecha, paciente y doctor. Luego, muestra las citas futuras.
 */

/**
 * Filtrar Películas por Género
Crea una lista de películas con título y género. Filtra solo las de acción.
 */

/**
 * Registro de Empleados y Sueldos
Dado un listado de empleados con su sueldo, calcula el sueldo total que debe pagar la empresa.
 */

/**
 * Tienda en Línea - Buscar Productos por Nombre
Crea una función que permita buscar un producto por su nombre en un catálogo.
 */

/**
 * Gestión de Usuarios en una Plataforma
Dado un listado de usuarios con nombre y rol (admin o usuario), filtra solo los administradores
 */

/**
 * Análisis de Ventas en un Restaurante
Dado un arreglo de ventas con nombre de plato y monto, calcula el total vendido.
 */

/**
 * Registro de Asistencia en una Clase
Crea un sistema que registre alumnos y su asistencia (presente o ausente). Luego, muestra cuántos asistieron.
 */

//SET y MAP

/**
 * (1) Eliminar Duplicados en una Lista de Productos (Set)
Dada una lista de productos donde algunos están repetidos, usa Set para eliminar duplicados.
2️⃣ Contar Palabras Únicas en un Texto (Set)
Dado un párrafo, cuenta cuántas palabras únicas tiene.
3️⃣ Verificar si un Usuario ya ha Iniciado Sesión (Set)
Dado un conjunto de usuarios en sesión, verifica si uno en específico ya inició sesión.
 Lista de Invitados Únicos en un Evento (Set)
Asegura que cada invitado solo pueda registrarse una vez en la lista.
5️⃣ Registro de Placas de Autos en un Estacionamiento (Set)
Solo se pueden registrar autos únicos.
6️⃣ Contar la Frecuencia de Palabras en un Texto (Map)
Cuenta cuántas veces aparece cada palabra en un texto.
Almacenar Precios de Productos (Map)
Usa un Map para almacenar los precios de productos y consultar por nombre.
8️⃣ Agenda Telefónica con Búsqueda Rápida (Map)
Crea una agenda telefónica donde puedas buscar el número de una persona por su nombre.
9️⃣ Registro de Votos en una Elección (Map)
Dado un conjunto de votos, cuenta cuántos votos tiene cada candidato.
🔟 Historial de Compras de un Cliente (Map)
Registra el historial de compras de un cliente, donde cada cliente tiene una lista de productos comprados.
 */