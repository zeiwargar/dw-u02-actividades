let userInput = prompt("Introduce un nombre y una edad separados por un espacio: ");

let parts = userInput.split(" ");

let nombre = parts[0];
let edad = Number(parts[1]);

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);

if (edad <= 0 || edad > 120) {
    console.log("La edad introducida no es válida.");
    //salir del programa???
}

if (edad < 18) {
    console.log("Eres menor de edad.");
    //salir del programa???
}

if (!nombre || nombre.trim() === "" || nombre.length < 3) {
    console.log("No has introducido un nombre válido. Se te cambiará a Anonimo");
    nombre = "Anonimo";
}

console.log("Nombre: " + nombre);
console.log("Edad: " + edad);

//probar de otras maneras???





