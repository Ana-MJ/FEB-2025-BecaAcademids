function Auto(tipo, color, modelo) {
    let carro = {
        tipo: tipo,
        color: color,
        modelo: modelo,
    };
    return carro;
};

const carro1 = Auto('deportivo', 'rojo', 'ferrari');
const carro2 = Auto('electrico', 'azul', 'tesla');
const carro3 = Auto('estandar', 'verde', 'toyota');
console.log(carro1);
console.log(carro2);
console.log(carro3);



function Animales(tipo, nombre,habitad) {
    let animal = {
        tipo: tipo,
        nombre: nombre,
        habitad: habitad,
    };
    return animal;
};

const ani1 = Animales('herbivoro', 'jirafa', 'africa');
const ani2 = Animales('carniboro', 'lobo', 'bosques');
const ani3 = Animales('carnivoro', 'leon', 'selva');
console.log(ani1);
console.log(ani2);
console.log(ani3);



function Cosas(tipo, color, tamano) {
    let cosas = {
        tipo: tipo,
        color: color,
        tamano: tamano,
    };
    return cosas;
};

const cosa1 = Cosas('lapiz', 'amarillo', 'pequeno');
const cosa2 = Cosas('pluma', 'negro', 'pequeno');
const cosa3 = Cosas('taza', 'morada con blanco', 'mediana');
console.log(cosa1);
console.log(cosa2);
console.log(cosa3);



function Computadoras(marca, modelo, procesador, ram) {
    let computadora = {
        marca: marca,
        modelo: modelo,
        procesador: procesador,
        ram: ram
    };
    return computadora;
};

const compu1 = Computadoras('Dell', 'XPS 15', 'Intel Core i9', '1TB');
const compu2 = Computadoras('HP', 'Pavilion', 'AMD Ryzen 3', '8GB');
const compu3 = Computadoras('Apple', 'MacBook Air', 'M2', '16GB');
console.log(compu1);
console.log(compu2);
console.log(compu3);



function Celulares(marca, modelo, almacenamiento) {
    let celular = {
        marca: marca,
        modelo: modelo,
        almacenamiento: almacenamiento
    };
    return celular;
};

const cel1 = Celulares('Samsung', 'Galaxy S23', '256GB');
const cel2 = Celulares('Apple', 'iPhone 10', '128GB');
const cel3 = Celulares('Xiaomi', 'POCO Pro 12', '128GB');
console.log(cel1);
console.log(cel2);
console.log(cel3);
