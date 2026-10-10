const VALID_USER = "admin";
const VALID_PASSWORD = "1234";
let user;
let password;
const isBlocked = false;

do{
    user = prompt("Introduce tu nombre de usuario");
    password = prompt("Introduce tu password"); 
    
    //este if nunca se ejecuta???
    if(user == null
        || user.trim === ""
        || password == null
        || password.trim === ""
    ){
        alert("Debes Introducir un usuario y contraseña")
        continue;
    }

    //si ambos estan mal sale del bucle bloqueando la cuenta???
    if (password === VALID_PASSWORD && user === VALID_USER){
        if (isBlocked){ 
            alert("Acceso denegado: Cuneta bloqueada.")
        }else{
            alert("Acceso concedido");
        }        
    }else if (user === VALID_USER){
        alert("Contraseña incorrecta")
    }else if (password === VALID_PASSWORD){
        alert("Usuario incorrecto")
    }else {
        alert("Usuario bloqueado");
        isBlocked = true;
    }
}while(password !== VALID_PASSWORD || user !== VALID_USER)






