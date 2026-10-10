let numero = Number(prompt("Escribe un numero: "));


    if (numero > 0) {
        console.log("El numero es positivo.");
    } else if (numero < 0) {
        console.log("El numero es negativo.");
    } else {
        console.log("El numero es cero.");
    }



numero > 0 ? console.log("El numero es positivo.")
        : (numero < 0 ? console.log("El numero es negativo.") 
        : console.log("El numero es cero."));


