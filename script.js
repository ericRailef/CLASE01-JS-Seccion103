

// var x = 15;

let nombre = "Eric";

console.log("Mi nombre es:" + nombre);

let alumnos = ["José", "Claudio", "Javier", "Sergio", "Juan"];

console.log(alumnos);

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

//Ejercicio de Validación

let edad = Number(prompt("Ingresa tu edad"));

if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("Acceso denegado");
}