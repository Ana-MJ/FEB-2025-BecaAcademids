/**
 *  Tabla dinámica con Array.prototype (métodos de instancia)
 */

const arrayMetodos = [
    {
        nombre: "at()",
        descripcion: "Te permite acceder a un elemento de un array usando un numero positivo (derecha a izquierda) o negativo (izquierda a derecha) para indicar la posicion.",
        ejemplo: `const arr1 = [5, 12, 8, 130, 44];
                    let posicion = 2;
                    console.log(arr1.at(posicion));

                    posicion = -2;
                    console.log(arr1.at(posicion));`,
        resultado: (function at() {
                        const arr1 = [5, 12, 8, 130, 44];
                        let posicion = 2;
                        let result = arr1.at(posicion);  
                        posicion = -2;
                        result = `${result}, ${arr1.at(posicion)}`;
                        return result;
                    })(),
    },

    {
        nombre: "concat()",
        descripcion: "Se usa para unir dos o más arrays, este método no cambia los arrays existentes, sino que devuelve uno nuevo.",
        ejemplo: `const first = ["1", "2", "3"];
                  const second = ["a", "b", "c"];
                  const nuevo = first.concat(second);
                  console.log(array3);`,
        resultado: (function concat() {
                        const first = ["1", "2", "3"];
                        const second = ["a", "b", "c"];
                        const nuevo = first.concat(second);
                        return nuevo;
                    })(),
    },

    {
        nombre: "copyWithin()",
        descripcion: "Sirve para copiar una sección de un array dentro de sí mismo, se puede especificar un rango (de dónde a dónde copiar) y dónde pegar esa sección dentro del mismo array.",
        ejemplo: `const ejemplo = [a, b, c, d, e];
                  console.log(ejemplo.copyWithin(2, 1));`,
        resultado: (function copyWithin() {
                        const ejemplo= ["a", "b", "c", "d", "e"];
                        ejemplo.copyWithin(2, 1);
                        return ejemplo; 
                    })(),
    },

    {
        nombre: "entries()",
        descripcion: "Retorna un nuevo objeto Array que contiene los pares (clave/valor) para cada índice de la matriz, (recorrer los elementos junto con su índice).",
        ejemplo: `let frutas = ["pera", "mango", "uva"];
                  let iterator = frutas.entries();
                  for (let a of iterator) { console.log(a); }`,
        resultado: (function entries() {
                        let frutas = ["pera", "mango", "uva"];
                        let iterator = frutas.entries();
                        let resultado = [];
            
                        for (let a of iterator) {resultado.push(a);}
                        return resultado;  
                    })(),
    },

    {
        nombre: "every()",
        descripcion: "Comprueba si todos los elementos de un array cumplen con una condición dada (true/false).",
        ejemplo: `function mayorEdad(edad) {
                  return edad >= 18;
                  }
                  let edades = [20, 25, 30, 18];
                  let resultado = edades.every(mayorEdad);
                  console.log(resultado);`,
        resultado: (function every() {
                        let edades = [20, 25, 30, 18];
                        let resultado = edades.every(function(edad) {return edad >= 18;});
                        return resultado;
                    })(),
    },

    {
        nombre: "fill()",
        descripcion: "Se usa para rellenar un array o parte de el con un valor específico, especificando el índice de inicio y el índice de fin.",
        ejemplo: `let arreglo = [1, 2, 3, 4];
                  console.log(arreglo.fill(1,2));`,
        resultado: (function fill() {
                        let arreglo = [1, 2, 3, 4];
                        arreglo.fill(1,2);
                        return arreglo;
                        
                    })(),
    },

    {
        nombre: "filter()",
        descripcion: "Se utiliza para crear un nuevo array con todos los elementos del original, que cumplen una condición determinada por una función proporcionada.",
        ejemplo: `const numeros = [1, 2, 3, 4, 5, 6];
                  const mayores = numeros.filter(num => num > 3);
                  console.log(mayores);`,
        resultado: (function filter() {
                        let numeros = [1, 2, 3, 4, 5, 6];
                        let resultado = numeros.filter(numero => numero > 3);
                        return resultado;
                    })(),
    },

    {
        nombre: "find()",
        descripcion: "Devuelve el valor del primer elemento del array que cumple la condicion proporcionada.",
        ejemplo: `const inventario = [
                    { nombre: "manzanas", cantidad: 2 },
                    { nombre: "bananas", cantidad: 0 },
                    { nombre: "cerezas", cantidad: 5 },
                ];
                const resultado = inventario.find((inventario) => inventario.nombre === "cerezas");
                console.log(resultado);`,
        resultado: (function find() {
                        const inventario = [
                            { nombre: "manzanas", cantidad: 2 },
                            { nombre: "bananas", cantidad: 0 },
                            { nombre: "cerezas", cantidad: 5 },
                        ];
                        const resultado = inventario.find((inventario) => inventario.nombre === "cerezas");
                        return `nombre: ${resultado.nombre}, cantidad: ${resultado.cantidad}`;
                    })(),
    },

    {
        nombre: "findIndex()",
        descripcion: "Devuelve el índice del primer elemento de un array que cumpla con la condicion proporcionada, en caso contrario devuelve -1.",
        ejemplo: `const nombres = ["Ana", "Juan", "Fernando"];
                  const indice = nombres.findIndex(nombre => nombre === "Pedro");
                  console.log(indice); `,
        resultado: (function findIndex() {
                        const nombres = ["Ana", "Juan", "Fernando"];
                        const indice = nombres.findIndex(nombre => nombre === "Pedro");
                        return indice;
                    })(),
    },

    {
        nombre: "findLast()",
        descripcion: "Busca el último elemento de un array que cumpla con una condición dada y lo devuelve.",
        ejemplo: `const numeros = [5, 7, 13, 4, 13, 1]
                  const ultimoMayor = numeros.findLast(num => num > 10);
                  console.log(ultimoMayor);`,
        resultado: (function findLast() {
                        const numeros = [5, 7, 13, 4, 13, 1]
                        const ultimoMayor = numeros.findLast(num => num > 10);
                        return ultimoMayor;
                    })(),
    },

    {
        nombre: "findLastIndex()",
        descripcion: "Busca el último elemento de un array que cumpla con una condición y devuelve su posición (índice), si ningún elemento cumple la condición devuelve -1.",
        ejemplo: `const numeros = [3, 7, 15, 5, 9, 50];
                  const indiceUltimoM = numeros.findLastIndex(num => num < 5);
                  console.log(indiceUltimoM);`,
        resultado: (function findLastIndex() {
                        const numeros = [3, 7, 15, 5, 9, 50];
                        const indiceUltimoM = numeros.findLastIndex(num => num < 5);
                        return indiceUltimoM;
                    })(),
    },

    {
        nombre: "flat()",
        descripcion: "Crea un nuevo array con todos los elementos del subarray concatenados en ella de forma recursiva hasta la profundidad especificada.",
        ejemplo: `const arr1 = [1, 2, [3, 4, [5, 6]]];
                  arr1.flat();
                  console.log(arr1);`,
        resultado: (function flat() {
                        const arr1 = [1, 2, [3, 4, [5, 6]]];
                        arr1.flat();
                        return arr1;
                    })(),
    },

    {
        nombre: "flatMap()",
        descripcion: "Devuelve un nuevo array formado al aplicar una función para traer a cada elemento y posteriormente, aplanar el resultado en un nivel.",
        ejemplo: `const numeros = [1, 2, 3];
                  const duplica = numeros.flatMap(num => [num, num * 5]);
                  console.log(duplica);`,
        resultado: (function flatMap() {
                        const numeros = [1, 2, 3];
                        const duplica = numeros.flatMap(num => [num, num * 5]); //original y multiplicado
                        return duplica;
                    })(),
    },

    {
        nombre: "forEach()",
        descripcion: "Se utiliza para recorrer todos los elementos de un array y ejecutar una función sobre cada uno de ellos.",
        ejemplo: `const numeros = [1, 2, 3, 4];
                  let suma = 0;
                  numeros.forEach(function(num) {suma += num;});
                  console.log(suma); `,
        resultado: (function forEach() {
                        const numeros = [1, 2, 3, 4];
                        let suma = 0;
                        numeros.forEach(function(num) {suma += num;});
                        return suma;
                    })(),
    },

    {
        nombre: "includes()",
        descripcion: "Verificar si un array contiene un valor específico, lo retorna (true) si se encuentra en el array y (false) si no lo encuentra.",
        ejemplo: `const frutas = ["platano", "melon", "uva"];
                  console.log(frutas.includes("melon"));
                  console.log(frutas.includes("naranja")); `,
        resultado: (function includes() {
                        const frutas = ["platano", "melon", "uva"];
                        const resultado = [
                            frutas.includes("melon"),
                            frutas.includes("naranja")
                        ];
                        return resultado;
                    })(),
    },

    {
        nombre: "indexOf()",
        descripcion: "Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.",
        ejemplo: `const elementos = ["agua", "tierra", "aire", "fuego"];
                  console.log(elementos.indexOf("aire")); 
                  console.log(elementos.indexOf("metal"));`,
        resultado: (function indexOf() {
                        const elementos = ["agua", "tierra", "aire", "fuego"];
                        const encontrado = [
                            elementos.indexOf("aire"),
                            elementos.indexOf("metal")
                        ];
                        return encontrado;
                    })(),
    },

    {
        nombre: "join()",
        descripcion: "Crea y devuelve una nueva cadena concatenando todos los elementos del array, separados por comas o una separador especificado.",
        ejemplo: `const numeros = [
                    [1,2,3],
                    [4,5,6]
                  ];
                  console.log(numeros.join(" / "));`,
        resultado: (function join() {
                        const numeros = [
                            [1, 2, 3],
                            [4, 5, 6]
                        ];
                        return (numeros.join(" / "));
                    })(),
    },

    {
        nombre: "keys()",
        descripcion: "Es útil cuando solo se interesa acceder a los índices de un array, no a los valores.",
        ejemplo: `const tienda = ["botona", "galletas", "cerveza"];
                  const iterator = tienda.keys();
                  for (let index of iterator) {console.log(index);}`,
        resultado: (function keys() {
                        const tienda = ["botona", "galletas", "cerveza"];
                        const iterator = tienda.keys();
                        const indices = [];
                    
                        for (let index of iterator) {
                            indices.push(index);
                        }
                        
                        return indices;
                    })(),
    },

    {
        nombre: "lastIndexOf()",
        descripcion: "Sirve para encontrar la última posición de un elemento dentro de un array, si el elemento no se encuentra devuelve -1.",
        ejemplo: `const numeros = [1, 2, 3, 4, 5];
                  const indice = numeros.lastIndexOf(7);
                  console.log(indice);`,
        resultado: (function lastIndexOf() {
                        const numeros = [1, 2, 3, 4, 5];
                        const indice = [
                            numeros.lastIndexOf(7)
                        ];
                        return indice;
                    })(),
    },

    {
        nombre: "map()",
        descripcion: "Crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.",
        ejemplo: `const numeros = [1, 2, 3, 4];
                  const resultado = numeros.map(num => num + 1);
                  console.log(resultado);`,
        resultado: (function map() {
                    const numeros = [1, 2, 3, 4];
                    const resultado = numeros.map(num => num + 1);  
                    return resultado;
                })(),
    },

    {
        nombre: "pop()",
        descripcion: "Elimina el último elemento del array y lo devuelve, este método modifica la longitud del array.",
        ejemplo: `const verduras = ["lechuga", "tomate", "zanahoria", "brocoli"];
                  const verduraE = verduras.pop();
                  console.log(verduras);`,
        resultado: (function pop() {
                        const verduras = ["lechuga", "tomate", "zanahoria","brocoli"];
                        const verduraEliminada = verduras.pop();  
                        return verduras;
                    })(),
    },

    {
        nombre: "push()",
        descripcion: "Agrega los elementos especificados al final del array y devuelve la nueva longitud de este.",
        ejemplo: `const animales = ["perro", "gato", "elefante"];
                  animales.push("león");
                  console.log(animales);`,
        resultado: (function push() {
                        const animales = ["perro", "gato", "elefante"];
                        animales.push("león");
                        return animales;
                    })(),
    },

    {
        nombre: "reduce()",
        descripcion: "Toma un arreglo y aplica una función callback a cada elemento, uno por uno, la función va acumulando un resultado, y al final te da un solo valor después de recorrer todos los elementos del arreglo.",
        ejemplo: `const numeros = [1, 2, 3, 4];
                  const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
                  console.log(suma);`,
        resultado: (function reduce() {
                        const numeros = [1, 2, 3, 4];
                        const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
                        return suma;
                    })(),
    },

    {
        nombre: "reduceRight()",
        descripcion: "Aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor.",
        ejemplo: `const numeros = [1, 2, 3, 4, 5];
                  const resultado = numeros.reduceRight((acumulador, num) => acumulador + num);
                  console.log(resultado);`,
        resultado: (function reduceRight() {
                        const numeros = [1, 2, 3, 4, 5];
                        const resultado = numeros.reduceRight((acumulador, num) => acumulador + num);
                        return resultado;
                    })(),
    },

    {
        nombre: "reverse()",
        descripcion: "Devuelve la referencia al mismo array, donde el primer elemento del array se convierte en el último y el último en el primero (se invierte el orden de los elementos en el array).",
        ejemplo: `const colores = ["rojo", "azul", "amarillo"];
                  colores.reverse();
                  console.log(frutas);`,
        resultado: (function reverse() {
                        const colores = ["rojo", "azul", "amarillo"];
                        colores.reverse()
                        return colores;
                    })(),
    },

    {
        nombre: "shift()",
        descripcion: "Elimina el primer elemento de un array y lo devuelve, este método modifica la longitud de este.",
        ejemplo: `let cosas = ["taza", "pluma", "goma", "vaso"];
                  let eliminado = cosas.shift();
                  colores.reverse();
                  console.log(cosas);`,
        resultado: (function shift() {
                        let cosas = ["taza", "pluma", "goma", "vaso"];
                        cosas.shift()
                        return cosas;
                    })(),
    },

    {
        nombre: "slice()",
        descripcion: "Se usa para crear una nueva copia de una sección del array original, sin modificar el original, toma dos parámetros: índice inicio (incluido) e índice fin (excluido).",
        ejemplo: `let frutas = ["manzana", "banana", "cereza", "durazno"];
                  let seleccion = frutas.slice(1, 3);
                  console.log(seleccion);`,
        resultado: (function slice() {
                        let frutas = ["manzana", "banana", "cereza", "durazno"];
                        let seleccion = frutas.slice(1, 3);
                        return seleccion;
                    })(),
    },

    {
        nombre: "some()",
        descripcion: "Comprueba si al menos un elemento de un array cumple una condición, devuelve un valor (true o false) y no modifica el array.",
        ejemplo: `const numeros = [1, 3, 5, 7, 10];
                  const par = numeros.some(num => num % 2 === 0);
                  console.log(par);`,
        resultado: (function some() {
                        const numeros = [1, 3, 5, 7, 10];
                        const par = numeros.some(num => num % 2 === 0);
                        return par;
                    })(),
    },

    {
        nombre: "sort()",
        descripcion: "Ordena los elementos de un array en su lugar y devuelve ordenada, el orden predeterminado es ascendente, basado en los elementos de cadena y la comparación de secuencias de valores.",
        ejemplo: `const palabras = ["elefante", "perro", "gato", "dinosaurio"];
                  palabras.sort((a, b) => a.length - b.length);
                  console.log(palabras);`,
        resultado: (function sort() {
                        const palabras = ["elefante", "perro", "gato", "dinosaurio"];
                        palabras.sort((a, b) => a.length - b.length);
                        return(palabras);
                    })(),
    },

    {
        nombre: "splice()",
        descripcion: "Cambia el contenido del array eliminando o reemplazando elementos existentes y/o agregando elementos nuevo.",
        ejemplo: `const ropa = ["pantalon", "sueter", "chamarra", "gorra"];
                  ropa.splice(1, 2, "playera", "cinturon"); 
                  console.log(ropa); `,
        resultado: (function splice() {
                    const ropa = ["pantalon", "sueter", "chamarra", "gorra"];
                    ropa.splice(1, 2, "playera", "cinturon");
                    return(ropa);
                })(),
    },

    {
        nombre: "toLocaleString()",
        descripcion: "Convierte un valor (número o una fecha) a una cadena de texto, respetando las convenciones locales de un idioma o región.",
        ejemplo: `let fecha = new Date();
                  console.log(fecha.toLocaleString('es-ES')); 
                  console.log(fecha.toLocaleString('ja-JP')); `,
        resultado: (function toLocaleString() {
                        const fecha = new Date();
                        const fechaEspañol = fecha.toLocaleString('es-ES');
                        const fechaJapon = fecha.toLocaleString('ja-JP');
                        return [fechaEspañol + '\n' + fechaJapon];
                    })(),
    },

    {
        nombre: "toReversed()",
        descripcion: "Es la contraparte de copia del metodo reverse(), devuelve un nuevo array con los elementos en orden inverso.",
        ejemplo: `const numeros = [1, 2, 3, 4, 5];
                  const invertidos = numeros.toReversed();
                  console.log(invertidos); `,
        resultado: (function toReversed() {
                        const numeros = [1, 2, 3, 4, 5];;
                        const invertidos = numeros.toReversed();
                        return(invertidos);
                    })(),
    },

    {
        nombre: "toSorted()",
        descripcion: "Permite crear una copia ordenada de un array, pero sin modificar el arreglo original, es la versión de copia del sort().",
        ejemplo: `const numeros = [5, 3, 8, 1, 2];
                  const numerosOrdenados = numeros.toSorted();    
                  console.log(numerosOrdenados);`,
        resultado: (function toSorted() {
                        const numeros = [5, 3, 8, 1, 2];
                        const ordenados = numeros.toSorted(); 
                        return(ordenados);
                    })(),
    },
   
    {
        nombre: "toSpliced()",
        descripcion: "Permite crear una copia modificada de un arreglo con algunos elementos eliminados y/o agregados, es la versión de copia del splice().",
        ejemplo: `const frutas = ["manzana", "banana", "cereza", "mango"];
                  const modificado = frutas.toSpliced(1, 2, "pera", "kiwi");
                  console.log(modificado);`,
        resultado: (function toSpliced() {
                        const frutas = ["manzana", "banana", "cereza", "mango"];
                        const modificado = frutas.toSpliced(1, 2, "pera", "kiwi");
                        return(modificado);
                    })(),
    },

    {
        nombre: "toString()",
        descripcion: "Se utiliza para convertir un objeto a su representación en cadena de texto (string).",
        ejemplo: `const fecha = new Date();
                  console.log(fecha.toString('es-ES'));`,
        resultado: (function toString() {
                        const fecha = new Date();
                        const fechaString = fecha.toString();
                        return(fechaString);
                    })(),
    },

    {
        nombre: "unshift()",
        descripcion: "Agrega los elementos especificados al comienzo de un array y devuelve la nueva longitud de este.",
        ejemplo: `let arr = [4, 5, 6];
                  arr.unshift(1, 2, 3);
                  console.log(arr);`,
        resultado: (function unshift() {
                        let arr = [4, 5, 6];
                        arr.unshift(1, 2, 3);
                        return arr;
                    })(),
    },

    {
        nombre: "values()",
        descripcion: "Devuelve un nuevo objeto iterador del array que itera el valor de cada elemento del array.",
        ejemplo: `const cosas = ["lapiz", "silla", "puerta"];
                  const iterador = cosas.values();
                  console.log(iterador.next().value);
                  console.log(iterador.next().value);
                  console.log(iterador.next().value);`,
        resultado: (function values() {
                        const cosas = ["lapiz", "silla", "puerta"];
                        const iterador = cosas.values();
                        return [iterador.next().value, iterador.next().value, iterador.next().value];
                    })(),
    },

    {
        nombre: "with()",
        descripcion: "Accede a las propiedades de un objeto sin tener que escribir el nombre del objeto repetidamente.",
        ejemplo: `const persona = {
                  nombre: "Pedro",
                  edad: 30,
                  ciudad: "New York"
                  };

                  with (persona) {
                  console.log(nombre); 
                  console.log(edad);    
                  console.log(ciudad); }`,
        resultado: (function () {
                        const persona = {
                            nombre: "Pedro",
                            edad: 30,
                            ciudad: "New York"
                        };
                        with (persona) {return [nombre, edad, ciudad];}
                    })(),
    },

    {
        nombre: "[Symbol.iterator]()",
        descripcion: "Permite que un objeto sea iterable, osea pueda ser recorrido mediante bucles (for...of) o con métodos como Array.from(). Los objetos que implementan pueden ser usados en estos bucles o funciones.",
        ejemplo: `const array1 = ["a", "b", "c"];
                  const it1 = array1[Symbol.iterator]();

                  for (const value of it1) {
                  console.log(value);
                  }`,
        resultado: (function () {
                        const array1 = ["a", "b", "c"];
                        const iterador1 = array1[Symbol.iterator]();
                        let valores = [];
                        for (const value of iterador1) {valores.push(value);}
                    
                        return valores; 
                    })(),
    },
];

/** Object/Function (Metodos de Instancia) */

const objectMetodos = [
    {
        nombre: "hasOwnProperty()",
        descripcion: "Devuelve un valor (true/false) que indica si este objeto tiene la propiedad especificada como su propia propiedad (en lugar de heredarla).",
        ejemplo: `const persona = {
                  nombre: "Ana",
                  edad: 22
                  };

                  console.log(persona.hasOwnProperty("nombre"));  
                  console.log(persona.hasOwnProperty("altura")); `,
        resultado: (function hasOwnProperty() {
                        const persona = { nombre: "Ana", edad: 22 };
                    
                        const resultado = [
                            persona.hasOwnProperty("nombre"),
                            persona.hasOwnProperty("altura")
                        ];
                    
                        return resultado;
                    })(),
    },

    {
        nombre: "isPrototypeOf()",
        descripcion: "Verifica si este objeto existe en la cadena de prototipos de otro objeto, es decir, si el primer objeto se encuentra en la cadena de prototipos del segundo.",
        ejemplo: `const animal = {
                  habla() { console.log("Hace ruido");}
                  };
                  
                  const perro = Object.create(animal);
                  perro.nombre = "Rex"; 
                  console.log(animal.isPrototypeOf(perro));
                  console.log({ nombre: 'Pepe' }.isPrototypeOf(perro)); `,
        resultado: (function isPrototypeOf() {
                        const animal = {
                            habla() { console.log("Hace ruido"); }
                        };
            
                        const perro = Object.create(animal);
                        perro.nombre = "Firo";
                    
                        const resultado = [
                            animal.isPrototypeOf(perro),
                            ({ nombre: 'Rex' }).isPrototypeOf(perro)
                        ];
                    
                        return resultado;
                    })(),
    },

    {
        nombre: "propertyIsEnumerable()",
        descripcion: "Verificar si una propiedad de un objeto es enumerable y devuelve un valor (true/false) que indica si la propiedad especificada es la propieda.",
        ejemplo: `const persona = {
                  nombre: "Ana",
                  edad: 22 };

                  console.log(persona.propertyIsEnumerable('nombre'));
                  console.log(persona.propertyIsEnumerable('toString')); `,
        resultado: (function propertyIsEnumerable() {
                        const persona = { nombre: "Ana", edad: 22 };
                    
                        const resultado = [
                            persona.propertyIsEnumerable("nombre"),
                            persona.propertyIsEnumerable("toString") 
                        ];
                        return resultado;
                    })(),
    },

    {
        nombre: "toLocaleString()",
        descripcion: "Convierte un objeto (como Date o un número) en una cadena de texto formateada según el idioma y las opciones que se le especifique.",
        ejemplo: `const fecha = new Date();
                  console.log(fecha.toLocaleString("es-ES"));
                  console.log(fecha.toLocaleString("ja-JP")); `,
        resultado: (function toLocaleString() {
                        const fecha = new Date();
                        
                        return fecha.toLocaleString("es-ES") + '\n' + fecha.toLocaleString("ja-JP");
                    })(),
    },

    {
        nombre: "toString()",
        descripcion: "Convierte un valor en su representación en forma de cadena de texto (string).",
        ejemplo: `const num = 123;
                  console.log(num.toString()); `,
        resultado: (function toString() {
                        const num = 123;
                        return num.toString();
                    })(),
    },

    {
        nombre: "valueOf()",
        descripcion: "Devuelve el valor primitivo de un objeto, en tipos de datos como números, cadenas, booleanos, fechas y objetos personalizados.",
        ejemplo: `const str = new String("Hola");
                  console.log(str.valueOf()); `,
        resultado: (function valueOf() {
                        const str = new String("Hola");
                        return str.valueOf();
                    })(),
    },
];


const fillTabla = () => {
    const tbody1 = document.querySelector("#tabla1 tbody");
    const tbody2 = document.querySelector("#tabla2 tbody");

    // primera tabla
    arrayMetodos.forEach(metodo => {
        const fila1 = document.createElement("tr");
        fila1.innerHTML = `
            <td>${metodo.nombre}</td>
            <td>${metodo.descripcion}</td>
            <td><code>${metodo.ejemplo}</code></td>
            <td>${metodo.resultado}</td>
        `;
        tbody1.appendChild(fila1);
    });

    //segunda tabla
    objectMetodos.forEach(metodo => {
        const fila2 = document.createElement("tr");
        fila2.innerHTML = `
            <td>${metodo.nombre}</td>
            <td>${metodo.descripcion}</td>
            <td><code>${metodo.ejemplo}</code></td>
            <td>${metodo.resultado}</td>
        `;
        tbody2.appendChild(fila2);
    });
};

fillTabla();

