


const form1 = $(".contacto__row__div__form");



const btnFormContactoSubmit = $("#btnFormContactoSubmit");
let miMail= $("<a></a>");
miMail.addClass("btnEnviarMail");
form1.append(miMail);
miMail.attr("href", `mailto:santiago.foti1@gmail.com?subject=nombre: ${form1.get('name')} mail: ${form1.get('email')} cel: ${form1.get('tel')}&body=${form1.get('msj')}`)
miMail.css("opacity", "0");
miMail.css("display", "none");
    
  
  
const validarFormContacto = function(event) {
    event.preventDefault();
    const formContactoNombre = $('#formContactoNombre');
    const formContactoMail = $("#formContactoMail");
    const formContactoTel = $("#formContactoTel");
    const formContactoMsj = $("#formContactoMsj");
    const mensajeValidarFormContacto = $("#mensajeValidarFormContacto");
    
    if(formContactoNombre.val()!="" && formContactoMail.val()!="" && formContactoTel.val()!="(+54 9) " && formContactoMsj.val()!="" && formContactoMailValido(formContactoMail.val()) ){
        // color si todos los datos fueron ingresados correctamente
            const form1 = new FormData(this);
            const enviarMail= document.querySelector(".btnEnviarMail");
            miMail.attr("href", `mailto:santiago.foti1@gmail.com?subject=nombre: ${form1.get('name')} email: ${form1.get('email')} cel: ${form1.get('tel')}&body=${form1.get('msj')}`)
            miMail.text("mail");
            enviarMail.click();
            mensajeValidarFormContacto.html("Gracias por contactarnos!");
            mensajeValidarFormContacto.css("display","block")
            mensajeValidarFormContacto.css("backgroundColor", "trasnparent");
            mensajeValidarFormContacto.css("color", "white");
            mensajeValidarFormContacto.css("border", "solid green");
            
        }  
  

//validar que el nombre de usuario no este vacio

if(formContactoNombre.val()===""){
    mensajeValidarFormContacto.html("Debe completar el campo con su nombre completo");
    mensajeValidarFormContacto.css("display", "block");
    formContactoNombre.focus();
    return false;
}

if(formContactoMail.val()===""){
    mensajeValidarFormContacto.html("Debe completar el campo con su usuario@mail.com");
    mensajeValidarFormContacto.css("display", "block");
    formContactoMail.focus();
    return false;
}

if(formContactoTel.val()==="(+54 9) "){
    mensajeValidarFormContacto.html("Debe completar el campo con su telefono");
    mensajeValidarFormContacto.css("display", "block");
    formContactoTel.focus();
    return false;
}

if(formContactoMsj.val()===""){
    mensajeValidarFormContacto.html("Debe completar el campo con su mensaje");
    mensajeValidarFormContacto.css("display", "block");
    formContactoMsj.focus();
    return false;
}

// validar que el mail se un mail valido


if(!formContactoMailValido(formContactoMail.val())){
    mensajeValidarFormContacto.html("Debe escribir un email válido");
    mensajeValidarFormContacto.css("display","block");
    formContactoMail.focus();
    return false;
}


    

//FUNCION ----Si el formulario fue completado con exito el mensaje desaparece en x tiempo
function esconderMsjDeExito(){
    mensajeValidarFormContacto.css("display", "none");

}
setTimeout(esconderMsjDeExito,3000);
};

const formContactoMailValido = (mail) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); }
    

form1.on('submit',validarFormContacto);
btnFormContactoSubmit.on('click', ()=>{
    form1.submit(validarFormContacto);
})









