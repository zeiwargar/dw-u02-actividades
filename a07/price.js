const input = prompt("Introduce un precio y un IVA separado por un espacio (ejemplo: 100 21):");
const [precio, iva] = input.split(" ").map(Number);

if (isNaN(precio) || isNaN(iva) || precio < 0 || iva < 0) {
    alert("Por favor, introduce valores numéricos válidos para el precio y el IVA.");
}else {
    const precioFinal = precio * (1 + iva / 100);
    alert(`El precio final con IVA es: ${precioFinal.toFixed(2)}€`);
    //toFixed(2) se utiliza para limitar el número de decimales a 2, que es común en precios.
}