// Declaración de variables usadas.
let jugadaUsuario;
let jugadaCompu;
let compu;
let ganador;
let nombre;
let nombrev;
let totalUsuario = 0;
let totalCompu = 0;
let totalEmpate = 0;
let cantidad = -1;
let cantidadt = true;

// Tres funciones para adquirir la jugada del usuario y verificar que haya ingresado el nombre.
function jugarPiedra() {
    jugadaUsuario = "Piedra";
    nombreu();
    if (nombrev == true) {
    if (cantidadt == true) {
    juego();
    }
    }
}

function jugarPapel() {
    jugadaUsuario = "Papel";
    nombreu();
    if (nombrev == true) {
    if (cantidadt == true) {
    juego();
    }
    }
}

function jugarTijera() {
    jugadaUsuario = "Tijera";
    nombreu();
    if (nombrev == true) {
    if (cantidadt == true) {
    juego();
    }
    }
}

// Función que verifica que el usuario haya ingresado un nombre.
function nombreu() {
    nombre = (document.getElementById("nombre").value);
    if (nombre == "") {
    alert("Error: Ingrese su Nombre.");
    nombrev = false;
    } else {
    nombrev = true; 
    }
}

// Función que adquiere el juego de la computadora y define el ganador parcial y total y lo publica.
function juego() {
compu = Math.floor(Math.random() * 3);
if (compu == 0) {
jugadaCompu = "Piedra";
} else if (compu == 1) {
jugadaCompu = "Papel";
} else {
jugadaCompu = "Tijera";
}

if ((jugadaUsuario == "Piedra" & jugadaCompu == "Tijera") || (jugadaUsuario == "Tijera" & jugadaCompu == "Papel") || (jugadaUsuario == "Papel" & jugadaCompu == "Piedra")) {
ganador = "Gana el Usuario";
totalUsuario++;
} else if (jugadaUsuario == jugadaCompu) {
ganador = "Empate";
totalEmpate++;
} else {
ganador = "Gana la Computadora";
totalCompu++;
}

document.getElementById("eleccionusuario").textContent = "El Usuario eligió: " + jugadaUsuario;
document.getElementById("eleccionpc").textContent = "La Computadora eligió: " + jugadaCompu;
document.getElementById("resultadoparcial").textContent = "El resultado de la jugada fue: " + ganador;

document.getElementById("resultadousuario").textContent = "Usuario: " + totalUsuario;
document.getElementById("resultadopc").textContent = "Computadora: " + totalCompu;
document.getElementById("resultadoempate").textContent = "Empates: " + totalEmpate;

cantidad++;
cantidadjugadas();
}

// Función que determina si se alcanzaron las 5 jugadas o si alguien alcanzó 3 victorias para terminar el juego.
function cantidadjugadas() {
if (cantidad == 4 || totalUsuario == 3 || totalCompu == 3 || totalEmpate == 3) {
cantidadt = false;
ganadorfinal();
}
}

// Función que declara y publica el ganador final.
function ganadorfinal() {
if (totalUsuario > totalCompu & totalUsuario >= totalEmpate) {
document.getElementById("resultadofinal").textContent = "Ganador: Usuario";
} else if (totalCompu > totalUsuario & totalCompu >= totalEmpate) {
document.getElementById("resultadofinal").textContent = "Ganador: Computadora";
} else if (totalEmpate > (totalCompu & totalEmpate > totalUsuario) || (totalCompu == totalUsuario)) {
document.getElementById("resultadofinal").textContent = "Ganador: Empate";
}
}

// Función para reiniciar el juego mediante el botón provisto.
function reiniciar() {
    document.getElementById("nombre").value = "";
    document.getElementById("eleccionusuario").textContent = "El Usuario eligió: ";
    document.getElementById("eleccionpc").textContent = "La Computadora eligió: ";
    document.getElementById("resultadoparcial").textContent = "El resultado de la jugada fue: ";
    document.getElementById("resultadousuario").textContent = "Usuario: ";
    document.getElementById("resultadopc").textContent = "Computadora: ";
    document.getElementById("resultadoempate").textContent = "Empates: ";
    document.getElementById("resultadofinal").textContent = "Ganador: ";
    totalUsuario = 0;
    totalCompu = 0;
    totalEmpate = 0;
    cantidad = -1;
    cantidadt = true;
}
