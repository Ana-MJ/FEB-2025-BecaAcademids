
/** true && false = false */
const expreTFF = [
    { operador: "&&", expresion: "true && false", resultado: true && false + ""}, // (+ "") fuerza que sea tratado como cadena string para mostrarlo en la tabla
    { operador: "&&", expresion: "(4 > 2) && (2 < 1)", resultado: (4 > 2) && (2 < 1) + "" },
    { operador: "&&", expresion: "1 && false", resultado: 1 && false + "" },
    { operador: "&&", expresion: "('juan' === 'juan') && ('pedro' === 'diego')", resultado: ('juan' === 'juan') && ('pedro' === 'diego') + "" },
    { operador: "&&", expresion: "(5 <= 4) && (1 < 2)", resultado: (5 <= 4) && (1 < 2) + "" },
    { operador: "&&", expresion: "16 && false", resultado: 16 && false + "" },
    { operador: "&&", expresion: "(10 === 10) && (1 != 1)", resultado: (10 === 10) && (1 != 1) + "" },
    { operador: "&&", expresion: "(50 >= 50) && (10 > 20)", resultado: (50 >= 50) && (10 > 20) + "" },
    { operador: "&&", expresion: "'juan' && 0", resultado: 'juan' && 0 + "" },  // Falsy
    { operador: "&&", expresion: "1 && !1", resultado: 1 && !1 + "" }           // Truthy
];
console.log(expreTFF);


/** false && false = false */
const expreFFF = [
    { operador: "&&", expresion: "false && false", resultado: (false && false) + "" }, 
    { operador: "&&", expresion: "0 && 0", resultado: (0 && 0) + "" }, 
    { operador: "&&", expresion: "false && 0", resultado: (false && 0) + "" },  
    { operador: "&&", expresion: "null && null", resultado: (null && null) + "" },
    { operador: "&&", expresion: "(5 < 1) && (1 > 3)", resultado: ((5 < 1) && (1 > 3)) + "" }, 
    { operador: "&&", expresion: "![] && ![]", resultado: (![] && ![]) + "" },
    { operador: "&&", expresion: "(1 > 2) && (2 < 1)", resultado: ((1 > 2) && (2 < 1)) + "" },
    { operador: "&&", expresion: "!true && !true", resultado: (!true && !true) + "" },  
    { operador: "&&", expresion: "(1 === 0) && !(1 < 3)", resultado: ((1 === 0) && !(1 < 3)) + "" },  //  Falsy
    { operador: "&&", expresion: "!0 && ![]", resultado: (!0 && ![]) + "" }  // Truthy)
];
console.log(expreFFF);


/** false && true = false */
const expreFTF = [
    { operador: "&&", expresion: "0 && 1", resultado: (0 && 1) + "" }, 
    { operador: "&&", expresion: "!1 && 1", resultado: (!1 && 1) + "" },  
    { operador: "&&", expresion: "!{} && {}", resultado: (!{} && {}) + "" }, 
    { operador: "&&", expresion: "false && !false", resultado: (false && !false) + "" }, 
    { operador: "&&", expresion: "!'pedro' && 'pedro'", resultado: (!'pedro' && 'pedro') + "" }, 
    { operador: "&&", expresion: "(10 === 8) && (8 === 8)", resultado: ((10 === 8) && (8 === 8)) + "" }, 
    { operador: "&&", expresion: "(3 > 6) && (1 < 2)", resultado: ((3 > 6) && (1 < 2)) + "" }, 
    { operador: "&&", expresion: "false && !0", resultado: (false && !0) + "" }, 
    { operador: "&&", expresion: "0 && !0", resultado: (0 && !0) + "" },  // Falsy
    { operador: "&&", expresion: "!1 && !!1", resultado: (!1 && !!1) + "" }  // Truthy
];
console.log(expreFTF)


/** true && true = true */
const expreTTT = [
    { operador: "&&", expresion: "true && true", resultado: (true && true) + "" },
    { operador: "&&", expresion: "1 && 1", resultado: (1 && 1) + "" }, 
    { operador: "&&", expresion: "(1 === 1) && (2 === 2)", resultado: ((1 === 1) && (2 === 2)) + "" }, 
    { operador: "&&", expresion: "(1 < 2) && (2 < 3)", resultado: ((1 < 2) && (2 < 3)) + "" },
    { operador: "&&", expresion: "!false && !false", resultado: (!false && !false) + "" },
    { operador: "&&", expresion: "!0 && true", resultado: (!0 && true) + "" }, 
    { operador: "&&", expresion: "(1 >= 1) && (2 < 3)", resultado: ((1 >= 1) && (2 < 3)) + "" }, 
    { operador: "&&", expresion: "!0 && !0", resultado: (!0 && !0) + "" }, 
    { operador: "&&", expresion: "!0 && 1", resultado: (!0 && 1) + "" },  // Truthy
    { operador: "&&", expresion: "!!1 && 'pedro'", resultado: (null && 'pedro') + "" }  // Falsy
];
console.log(expreTTT);


/** true || true = true */
const orTTT = [
    { operador: "||", expresion: "true || true", resultado: (true || true) + "" }, 
    { operador: "||", expresion: "1 || 1", resultado: (1 || 1) + "" }, 
    { operador: "||", expresion: "(1 < 2) || (2 < 3)", resultado: ((1 < 2) || (2 < 3)) + "" }, 
    { operador: "||", expresion: "(1 === 1) || (2 === 2)", resultado: ((1 === 1) || (2 === 2)) + "" }, 
    { operador: "||", expresion: "!0 || !0", resultado: (!0 || !0) + "" }, 
    { operador: "||", expresion: "1 || !0", resultado: (1 || !0) + "" }, 
    { operador: "||", expresion: "'juan' || 1", resultado: ('juan' || 1) + "" }, 
    { operador: "||", expresion: "(1 <= 1) || (4 > 2)", resultado: ((1 <= 1) || (4 > 2)) + "" }, 
    { operador: "||", expresion: "null || true", resultado: (null || false) + "" },  // Falsy
    { operador: "||", expresion: "1 || false", resultado: (1 || false) + "" }  // Truthy
]; 
console.log(orTTT);


/** true || false = true */
const orTFT = [
    { operador: "||", expresion: "true || false", resultado: (true || false) + "" }, 
    { operador: "||", expresion: "1 || 0", resultado: (1 || 0) + "" },  
    { operador: "||", expresion: "'juan' || 0", resultado: ('juan' || 0) + "" }, 
    { operador: "||", expresion: "!0 || 0", resultado: (!0 || 0) + "" },  
    { operador: "||", expresion: "(0 === 0) || (1 > 3)", resultado: ((0 === 0) || (1 > 3)) + "" },  
    { operador: "||", expresion: "(10 > 5) || !1", resultado: ((10 > 5) || !1) + "" },  
    { operador: "||", expresion: "(5 >= 5) || (3 === 1)", resultado: ((5 >= 5) || (3 === 1)) + "" },  
    { operador: "||", expresion: "true || ![]", resultado: (true || ![]) + "" },  
    { operador: "||", expresion: "null || false", resultado: (null || false) + "" },  // Falsy)
    { operador: "||", expresion: "!0 || !true", resultado: (!0 || !true) + "" }  //  Truthy
];
console.log(orTFT);

//Mostrar tablas
function agregarFilas(tablaId, expresiones) {
    const tabla = document.getElementById(tablaId);
    for (let i = 0; i < expresiones.length; i++) {
        const exp = expresiones[i];
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${exp.operador}</td><td>${exp.expresion}</td><td>${exp.resultado}</td>`;
        tabla.appendChild(fila);
    }
}

agregarFilas("expreTFF", expreTFF); //id y expresion
agregarFilas("expreFFF", expreFFF);
agregarFilas("expreFTF", expreFTF);
agregarFilas("expreTTT", expreTTT);
agregarFilas("orTTT", orTTT);
agregarFilas("orTFT", orTFT);

/** (2) obtiene la tabla con id,(4) crea elemento fila*,(5) obtiene/establece contenido html,
 *  (6) se asigna a fila creada contenido, (7)añade fila creada como nueva fila */