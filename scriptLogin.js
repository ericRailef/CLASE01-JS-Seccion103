// Captura el evento click
// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//     console.log("Hiciste click en el boton");
// });

//Capturar datos de los input
// let boton = document.getElementById("btnIngresar");
// boton.addEventListener("click", function(){
//     let usuario = document.getElementById("usuario").value;
//     let clave = document.getElementById("clave").value;

//     console.log("Usuario ingresado:" + usuario);
//     console.log("Password ingresada:" + clave);

// });


//Validación 
let boton = document.getElementById("btnIngresar");
boton.addEventListener("click", function(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    let usuarioCorrecto  = "admin";
    let claveCorrecta = "1234";

    if(usuario === "" || clave ===""){
        mensaje.textContent ="Debes completar todos los campos";
        mensaje.style.color = "orange";
    }else if(usuario === usuarioCorrecto && clave=== claveCorrecta) {
        mensaje.textContent = "Acceso Permitido. Se te redireccionara en 3 segundos";
        mensaje.style.color ="green";

        setTimeout(function(){
            window.location.href = "index.html";
        }, 3000);
    }else {
        mensaje.textContent = "Usuario o Contraseña incorrectos";
        mensaje.style.color ="red";
    }
   

});