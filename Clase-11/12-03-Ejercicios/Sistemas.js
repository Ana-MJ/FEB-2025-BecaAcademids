//Ejercicicio (1)
const productos = [
    { nombre:'Pantalon', precios: 30, stock: 3},
    { nombre:'Gorra', precios: 20, stock: 0},
    { nombre:'Sudadera', precios: 40, stock: 5},
    { nombre:'Zapatilla', precios: 50, stock: 0},
];
for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    if (producto.stock > 0) {
        console.log('Producto: '+ producto.nombre + ' Stock disponible: ' + producto.stock);
    }
}
/**[i] elemento en la posicion de productos */

//Ejercicicio (2)
const estudiantes = [
    { nombre: 'Carlos', notas: [7, 8, 9, 9] },
    { nombre: 'Nora', notas: [5, 6, 5, 7] },
    { nombre: 'Juan', notas: [9, 8, 9, 10] },
    { nombre: 'Maria', notas: [7, 6, 9, 7] },
];

for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    let sumaN = 0;

    for (let b = 0; b < estudiante.notas.length; b++) {
        sumaN = sumaN + estudiante.notas[b];
    }
    const media = sumaN / estudiante.notas.length; //media notas

    let paso;
    if (media >= 6) {
        paso = "Aprobado";
    } else {
        paso = "No aprobado";
    }
    console.log(estudiante.nombre + media + ' : ' + paso);
}
/** (1) recorre los estudiantes,(2) almacena,(3) sumar las notas para la media */

//Ejercicicio (3)
let citas = [];
function registrarCita(fecha, paciente, doctor) {
    citas.push({ fecha, paciente, doctor });
}

let futurascitas = [];
let fechaH = "2025-03-12";

registrarCita("2025-03-20", "Carlos Lopez", "Dr. Simi");
registrarCita("2025-02-27", "Ana Sofia", "Dr. Casas");
registrarCita("2025-03-15", "Marco Garcia", "Dra. Martinez");

for (let i = 0; i < citas.length; i++) {
    if (citas[i].fecha >= fechaH) {  
        futurascitas.push(citas[i]);
    }
}
console.log("Citas a futuro:", futurascitas);
/**(1)almacena/registra, (2)agrega v, (3)filtra/compara, (4)agrega al final*/

//Ejercicicio (4)
const peliculas = [
    {titulo: "Mision imposible",genero: "accion"},
    {titulo: "JavasScript",genero: "terror"},
    {titulo: "Titanic",genero: "romantico"},
    {titulo: "The Avengers",genero: "accion"},
    {titulo: "Fragmentado",genero: "suspenso"},
];

const pAccion = []; 

for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === "accion") {
        pAccion.push(peliculas[i]);
    }
}
console.log(pAccion);
/** (1) almacena, (2) recorre, (3) accede/compara y (4) agrega final*/

//Ejercicicio (5)
let libros = [];
let dispobibles = [];

function registroL(titulo, autor, estado){
    const libro = {titulo, autor, estado};
    libros.push(libro);
}
registroL("Matar es facil","Agatha Christie","disponible");
registroL("El Quijote","Miguel de Cervantes","pestado");
registroL("La metamorfosis","Franz Kafka","disponible");
registroL("La vuelta al mundo en ochenta días","Julio Verne","prestado");

for (let i = 0; i < libros.length; i++) {
    if (libros[i].estado === "disponible") {
        dispobibles.push(libros[i]);
    }
}
console.log(dispobibles);
/** (1) almacena/registra,(2)recorre,(3) ccede/compara, (4) agrega */

//Ejercicicio (6)
let empleados = [
    { nombre: "Carlos", sueldo: 1000 },
    { nombre: "Nora", sueldo: 1800 },
    { nombre: "Juan", sueldo: 2000 },
    { nombre: "Maria", sueldo: 1700 }
];
let Total = 0;

for (let i = 0; i < empleados.length; i++) {
    Total = Total + empleados[i].sueldo;
}
console.log("El sueldo total a pagar es: $" + Total);
/** (1)guarda, (2) suma c/u, (3)accede/compara ,(4) suma monto */

//Ejercicicio (7)
let pLinea = [
    { nombre: "Mouse", precio: 150 },
    { nombre: "Teclado", precio: 1500 },
    { nombre: "Tablet", precio: 4000 },
    { nombre: "Monitor", precio: 4500 }
];

function buscar(nombre) {
    for (let i = 0; i < pLinea.length; i++) {
        if (pLinea[i].nombre === nombre) {
            return pLinea[i];  
        }
    }
    return "Producto no encontrado";
}
console.log(buscar("Tablet"));
console.log(buscar("Monitor"));
/**(1)busca, (2) compara, (3) detiene/devuelve */

//Ejercicicio (8)
const usuarios = [
    { nombre: "Carlos", rol: "admin" },
    { nombre: "Maria", rol: "usuario" },
    { nombre: "Juan", rol: "usuario" },
    { nombre: "Alex", rol: "usuario" },
];
const admin = []; 

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].rol === "admin") {
        admin.push(usuarios[i]); 
    }
}
console.log(admin);
/** (1)almacena, (2)recorre, (3)accede/compara, (4) agrega final */

//Ejercicicio (9)
let ventas = [
    {plato:"Pasta" ,monto:"70"},
    {plato:"Pozole" ,monto:"80"},
    {plato:"Langosta" ,monto:"100"},
    {plato:"Ensalada" ,monto:"50"},
];

let total = 0;

for (let i = 0; i < ventas.length; i++){
    total = total + +ventas[i].monto;
}

console.log("Total de ventas: $" + total);
/** (1)guarda, (2) suma c/u, (3)accede/compara ,(4) suma monto */

//Ejercicicio (10)
const alumnos = [
    { nombre: "Carlos", asistencia: "presente" },
    { nombre: "Maria", asistencia: "ausente" },
    { nombre: "Juan", asistencia: "presente" },
];

let alpresentes = 0;

for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].asistencia === "presente") {
        alpresentes++;
    }
}
console.log("Alumnos presentes: " + alpresentes);
/**(1)cuenta, (2) accede/compara, (3)cuenta */