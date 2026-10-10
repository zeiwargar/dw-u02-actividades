var number = 5;
var bigint = 9007199254740991n;
var string = "Hello, World!";
var bollean = true;
var nulo = null;
var indefinido = undefined;
var simbolo = Symbol("symbol");
var objeto = { pelicula: "Tototro" };

console.log(number + " es de tipo " + typeof number);
console.log(bigint + " es de tipo " + typeof bigint);
console.log(string + " es de tipo " + typeof string);
console.log(bollean + " es de tipo " + typeof bollean);
console.log(nulo + " es de tipo " + typeof nulo);
console.log(indefinido + " es de tipo " + typeof indefinido);
console.log(String(simbolo) + " es de tipo " + typeof simbolo);
console.log(objeto + " es de tipo " + typeof objeto);
console.log("alert es un tipo de " + typeof alert);