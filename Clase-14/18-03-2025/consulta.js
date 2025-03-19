/** 
 *  1.- Buscar elementos en el dom 
    2.- Crear y eliminar elementos
    3.- Modificar atributos
    4.- Modificar estilos y clases
    5.- Modificar el contenido
 */


/** BUSCAR ELEMENTOS EN EL DOM: */ 
//(1.1) único elemento con un ID específico.
const elemento1 = document.getElementById('elemento');
console.log(elemento1);

//(1.2) buscar usando selectores CSS.
const elemento2 = document.querySelector('.celement');
console.log(elemento2);

//(1.3) todos los elementos que coincidan.
const elementos1 = document.querySelectorAll('div');
console.log(elementos1);

//(1.4) de una etiqueta específica.
const parrafos = document.getElementsByTagName("p");
console.log(parrafos); 

//(1.5) elementos con la clase indicada.
const elementos2 = document.getElementsByClassName("celement");
console.log(elementos2);



/** CREAR / ELIMINAR ELEMENTOS: */ 
//(2.1) crear un nuevo elemento.
const newParrafo = document.createElement("p");
newParrafo.textContent = "soy un nuevo parrafo";
document.body.appendChild(newParrafo);

//(2.2) eliminar elementos.
const eliminarE = document.getElementById("elemento3");
eliminarE.remove();

//(2.3) elimina un elemento hijo de un elemento padre removeChild(childElement).
element.insertAdjacentText("beforeend", "Texto adyacente");

//(2.4) añade un nuevo nodo antes de un nodo existente insertBefore().


//(2.5) insertar un nuevo elemento en una posición específica en relación con un elemento existente insertAdjacentElement() 
// => beforebegin, afterbegin || beforeend, afterend.
let new1 = document.createElement("div");
new1.innerText = "Elemento adyacente";
element.insertAdjacentElement("afterend", new1);

//(2.6) insertar contenido HTML directamente en una posición específica en el DOM insertAdjacentHTML().
// => beforebegin, afterbegin || beforeend, afterend.
element.insertAdjacentHTML("beforebegin", "<div>HTML adyacente</div>");

//(2.7) permite insertar texto en una posición específica en el DOM insertAdjacentText().
element.insertAdjacentText("beforeend", "Texto adyacente");



/** MODIFICAR ATRIBUTOS: */
//(3.1) permite cambiar o agregar un atributo a un elemento.
// => href, src
enlace.setAttribute("href", "https://ejemplo.com");
imagen.setAttribute("src", "https://ejemplo/200");

//(3.2) obtener el valor de un atributo de un elemento.
const claseParrafo = parrafo.getAttribute('class');

//(3.3) elimina un atributo de un elemento.
document.getElementById("link").removeAttribute("href");




/** MODIFICAR ESTILOS Y CLASES: */
//(4.1) obtiene o establece un valor de clase className.

//(4.2) agrega uno o más valores de clase classList.add().

//(4.3) activa o desactiva una clase classList.toggle().

//(4.4) comprueba si el valor de clase existe classList.contains().

//(4.5) sustituye un valor de clase existente por uno nuevo classList.replace().

//(4.6) elimina un valor de clase classList.remove().

//(4.7) para estilos puede ser con css <div class="..."> o directo <div style="..."> || elem.style




/** MODIFICAR CONTENIDO: */
//(5.1) permite cambiar el contenido HTML de un elemento innerHTML:.
let parentElement = document.getElementById("parentElement");
let newElement = document.createElement("div");
newElement.innerText = "Nuevo elemento hijo";
parentElement.appendChild(newElement);

//(5.2) permite modificar el contenido textual de un nodo y sus hijos textContent:.


//(5.3) permite devolver true si el atributo que le especifiquemos existe en el elemento hasAttribute():.