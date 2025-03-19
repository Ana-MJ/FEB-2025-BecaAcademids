/** Funciones básicas */
const sumar = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b; 
const division = (a, b) => {
    if (b === 0) return "Error";
    return a / b;
};
const modulo = (a, b) => a % b;


function agregar(valor) {
    document.getElementById("contenedor").value += valor;
}


const realizarCalculo = (expresion) => {
    const operaciones = [
        { operador: "+", funcion: sumar },
        { operador: "-", funcion: resta },
        { operador: "*", funcion: multiplicacion },
        { operador: "/", funcion: division },
        { operador: "%", funcion: modulo }
    ];

    for (let i = 0; i < operaciones.length; i++) {
        if (expresion.includes(operaciones[i].operador)) {
            const operador = operaciones[i].operador;
            const funcion = operaciones[i].funcion;

            let elementos = expresion.split(operador);
            let num1 = parseFloat(elementos[0]);
            let num2 = parseFloat(elementos[1]);

            let resultado = funcion(num1, num2);
            document.getElementById("contenedor").value = resultado;
            return; 
        }
    }

    document.getElementById("contenedor").value = "Error"; 
};


const calcular = () => {
    const expresion = document.getElementById("contenedor").value;
    if (expresion){
        realizarCalculo(expresion);
    }
};

const limpiar = () => document.getElementById("contenedor").value = "";

document.getElementById("btn-igual").addEventListener("click", calcular);

document.getElementById("btn-igual").addEventListener("keydown", (event => {
    if (event.key === "Enter" || event.key === " "){
        calcular();
    }
    
}));
