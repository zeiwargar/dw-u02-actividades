alert("Vas a intiroducir dos numeros.");
const n1 = prompt("Primer numero: ");
const n2 = prompt("Segundo numero: ");

console.log("Primer numero: " + n1);
console.log("Segundo numero: " + n2);
console.log("La suma es: " + (Number(n1) + Number(n2)));
console.log("La resta es: " + (Number(n1) - Number(n2)));
console.log("La multiplicación es: " + (Number(n1) * Number(n2)));

if (Number(n2) !== 0) {
    console.log("La división es: " + (Number(n1) / Number(n2)));
}else {
    console.log("No se puede dividir entre 0");
}

console.log("El resto es: " + (Number(n1) % Number(n2)));

n1 > n2 ? console.log("El primer número es mayor.")
    : n1 < n2 ? console.log("El segundo número es mayor.")
    : console.log("Los números son iguales.");
    
//falta redondear
(Number(n1) % 2) === 0 ? console.log("El primer número es par.")
    : console.log("El primer número es impar.");

(Number(n2) % 2) === 0 ? console.log("El segundo número es par.")
    : console.log("El segundo número es impar.");


