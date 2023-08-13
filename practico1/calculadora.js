// Las cuatro funciones básicas de la calculadora.
function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

// La división incluye la invalidación de la división por cero y la verificación de que el divisor no sea vacío.
function division(num1, num2) {
    if (num2 == 0 & !document.getElementById("num2").value == "") {
        alert("Error: No se puede dividir por cero. Ingrese otro valor.");
    } else
    return num1 / num2;
}

// Función principal Calculadora llamada desde el HTML.
function calculadora() {
// Valida que los operandos estén ingresados por el usuario y los ingresa a la función Calculadora.
    if (document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
    alert("Error: Ingrese los operandos.")
    }
    let num1 = (document.getElementById("num1").value);
    num1 = Number(num1);
    let num2 = (document.getElementById("num2").value);
    num2 = Number(num2);
    let operacion = (document.getElementById("operacion").value);
    let resultado;

// Valida que los operandos ingresados sean números válidos.
    if (isNaN(num1) || isNaN(num2)) {    
    alert("Error: Ingrese solo valores numéricos.");
    }

// Selecciona la operación seleccionada y valida que haya una selección de operación.
    switch (operacion) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
        default:
            alert("Error: Seleccione una operación.")
            break;
    }

// Pone un límite máximo al resultado.
    if (Math.abs(resultado) > 100000000) {
        alert("El resultado es demasiado grande.");
    }
        
// Pone un límite mínimo al resultado.
    if (Math.abs(resultado) < 0.000001 & resultado !== 0) {
        alert("El resultado es demasiado pequeño.");
    }

// Valida que el resultado sea un número válido y en ese caso devuelve el resultado.
    if (isNaN(resultado) || Math.abs(resultado) > 100000000 || (Math.abs(resultado) < 0.000001 & resultado !== 0) || document.getElementById("num1").value == "" || document.getElementById("num2").value == "") {
        document.getElementById("resultado").textContent = "Resultado: ";
    }
    else {
        document.getElementById("resultado").textContent = "Resultado: " + resultado;
    }
}

// Función para limpiar todos los campos llamada desde el botón correspondiente del HTML.
function AC() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").textContent = "Resultado: ";
    document.getElementById("operacion").value = "selecciona";
}
