
"use strict";




const validarFormContacto = function(e) {
    e.preventDefault();
    const formContactoNombre = document.querySelector("#formContactoNombre");
    const formContactoMail = document.querySelector("#formContactoMail");
    const formContactoTel = document.querySelector("#formContactoTel");
    const formContactoMsj = document.querySelector("#formContactoMsj");
    const mensajeValidarFormContacto = document.querySelector("#mensajeValidarFormContacto");
    const btnFormContactoSubmit = document.querySelector("#btnFormContactoSubmit");




//validar que el nombre de usuario no este vacio

if(formContactoNombre.value===""){
    mensajeValidarFormContacto.innerHTML= "Debe completar el campo con su nombre completo";
    mensajeValidarFormContacto.style.display="block";
    formContactoNombre.focus();
    return false;
}

if(formContactoMail.value===""){
    mensajeValidarFormContacto.innerHTML= "Debe completar el campo con su usuario@mail.com";
    mensajeValidarFormContacto.style.display="block";
    formContactoMail.focus();
    return false;
}

if(formContactoTel.value==="(+54) "){
    mensajeValidarFormContacto.innerHTML= "Debe completar el campo con su telefono";
    mensajeValidarFormContacto.style.display="block";
    formContactoTel.focus();
    return false;
}

if(formContactoMsj.value===""){
    mensajeValidarFormContacto.innerHTML= "Debe completar el campo con su mensaje";
    mensajeValidarFormContacto.style.display="block";
    formContactoMsj.focus();
    return false;
}

// validar que el mail se un mail valido


if(!formContactoMailValido(formContactoMail.value)){
    mensajeValidarFormContacto.innerHTML="Debe escribir un email válido";
    mensajeValidarFormContacto.style.display="block";
    formContactoMail.focus();
    return false;
}


// color si todos los datos fueron ingresados correctamente

mensajeValidarFormContacto.innerHTML="Gracias por contactarnos!";
mensajeValidarFormContacto.style.display="block";
mensajeValidarFormContacto.style.backgroundColor="transparent";
mensajeValidarFormContacto.style.color="black";
mensajeValidarFormContacto.style.border="solid green";

//FUNCION ----Si el formulario fue completado con exito el mensaje desaparece en x tiempo
function esconderMsjDeExito(){
    mensajeValidarFormContacto.style.display="none";

}
setTimeout(esconderMsjDeExito,3000);
};

const formContactoMailValido = (mail) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); }
    




btnFormContactoSubmit.addEventListener('click', validarFormContacto);

