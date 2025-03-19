/** SET */
// Ejercicio (1)
let Listaproductos = ["Pera", "Uva", "Pera", "Naranja", "Uva", "Mango"];
const set = new Set(Listaproductos); 
console.log(set);

//Ejercicio (2)
let palabras = "Hola estoy usando SET";
let cpalabras = palabras.split(' ');
const contar = new Set(cpalabras); 
console.log(contar);
console.log(contar.size);

//Ejercicio (3)
let usuarios = ["user1", "user2", "user3", "user4"];
let verificar = "user3";
const sesion = new Set (usuarios);
console.log(sesion.has(verificar));

//Ejercicio (4)
let ListaInvitados = ["Juan", "Pedro", "Luisa"];
const invitados = new Set(ListaInvitados);
function registro(invitado){
    if (invitados.has(invitado)){
        console.log("Ya se ha registrado este invitado");
    } else {
        invitados.add(invitado);
        console.log("Se ha registrado el invitado");
    }
}
registro("Paola");
registro("Pedro");
registro("Uriel");
console.log(invitados);
console.log(invitados.size);

//Ejercicio (5) es similar el ejercicio (4)
let Placas = ["ABC123", "LMN789"];
const autos = new Set(Placas);
function registro(placaunica) {
    if (autos.has(placaunica)) {
        console.log("La placa ya está registrada");
    } else {
        autos.add(placaunica);
        console.log("Bienvenido al estacionamiento!");
    }
}
registro("XYZ456");
registro("LMN789");
registro("TMP083");
console.log(autos);
console.log(autos.size);

/** MAP */
// Ejercicio (6) 
let texto = "Hola hola otra vez pero con MAP map";
let ctextos = texto.toLowerCase().split(' ');
let conteo = new Map();
for (let ctexto of ctextos) {
    if (conteo.has(ctexto)){
        conteo.set(ctexto, conteo.get(ctexto)+1);
    } else {
        conteo.set(ctexto,1);
    }
}
for (let[ctexto, cantidad] of conteo){ 
    console.log(ctexto + " aparece " + cantidad);
}
/**.toLowerCase convierte mayusculas a minusculas, for..of recorre los datos divididos para optenrlos, + 1 actualiza (conteo)   */

//Ejercicio (7)
const productos = ["Botana", "Agua", "Galleras","Cerveza"];
const precios = new Map();
precios.set("Botana", 12);
precios.set("Agua", 10);
precios.set("Galletas", 22);
precios.set("Cerveza", 30);

console.log(precios.get("Cerveza"));
console.log(precios.get("Botana")); 

//Ejercicio (8)
const agenda = new Map();
function agregar(nombre, numero) {
    agenda.set(nombre, numero);
    console.log("El agrego el contacto" + nombre);
}
function buscar(nombre) {
    if (agenda.has(nombre)) {
        console.log("El número de " + nombre + " es: " + agenda.get(nombre));
    } 
}
agregar("Juan", "555-450-9494");
agregar("Ana", "898-760-4321");
buscar("Juan");
console.log(agenda);

//Ejercicio (9)
let votos = ["Juan", "Pedro", "Juan", "Paola", "Pedro", "Juan"];
const cvotos = new Map();
for (let i = 0; i < votos.length; i++) {
    let candidato = votos[i];
    
    if (cvotos.has(candidato)) {
        let votosactuales = cvotos.get(candidato);
        cvotos.set(candidato, votosactuales + 1);  
    } else {
        cvotos.set(candidato, 1);  
    }
}

for (let [candidato, votos] of cvotos) {
    console.log(candidato + " tiene " + votos);
}
/**tiene la clave(candidato)y valor(votos) , for...of recorre cada elemento y obtiene el valor*/

//Ejercicio (10)
const historial = new Map();
function Compraregis(cliente, producto) {
    if (historial.has(cliente)) {
        historial.get(cliente).push(producto);
    } else {
        historial.set(cliente, [producto]);
    }
}

Compraregis("Juan", "Botana");
Compraregis("Juan", "Cerveza");
Compraregis("Maria", "Fresas");
Compraregis("Pedro", "Uvas");

console.log("Historial de compras Juan: " +  historial.get("Juan"));
console.log("Historial de compras Maria: " + historial.get("Maria"));
