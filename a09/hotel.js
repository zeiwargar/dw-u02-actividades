const HAB_STANDARD = 60;
const HAB_SUPERIOR = 90;
const MAYORIA_EDAD = 18;
const MIN_NOCHES_DESCUENTO = 7;

let isNombreOk = false;
let isEdadOk = false;
let isNochesOk = false;
let isTipoHabOk = false;

const reserva = prompt("Introduce tu nombre, edad, numero de noches y tipo de habitación(separado por espacios)")

 const [nombre, edad, noches, tipoHab] = reserva.split(" ")

 if (nombre == null || nombre.length < 3 || nombre.trim() == "") nombre = "Cliente"
 isNombreOk = true

 Integer(edad);
 (edad < 0 || edad > 120) ? 
                            console.log("Edad no válida") 
                            : (edad < MAYORIA_EDAD ? 
                                                    console.log("Eres menor de edad.")
                                                    : isEdadOk = true)

Integer(noches)
noches > 0 ? isNochesOk = true ?? isNochesOk

tipoHab = tipoHab.toLowerCase
if (tipoHab === "standard" || tipoHab === "superior"){
    isTipoHabOk = true
}






