


const form1 = $(".contacto__row__div__form");



const btnFormContactoSubmit = $("#btnFormContactoSubmit");
let miMail= $("<a></a>");
miMail.addClass("btnEnviarMail");
form1.append(miMail);
miMail.attr("href", `mailto:santiago.foti1@gmail.com?subject=nombre: ${form1.get('name')} mail: ${form1.get('email')} cel: ${form1.get('tel')}&body=${form1.get('msj')}`)
miMail.css("opacity", "0");
miMail.css("display", "none");
    
  
  
const validarFormContacto = function() {
    
    const formContactoNombre = $('#formContactoNombre');
    const formContactoMail = $("#formContactoMail");
    const formContactoTel = $("#formContactoTel");
    const formContactoMsj = $("#formContactoMsj");
    const mensajeValidarFormContacto = $("#mensajeValidarFormContacto");
    
    if(formContactoNombreValido(formContactoNombre.val()) && formContactoMailValido(formContactoMail.val()) && formContactoTel.val()!="(+54 9) " && formContactoMensajeValido(formContactoMsj.val())){
        // color si todos los datos fueron ingresados correctamente
            /*const form1 = new FormData(this);
            const enviarMail= document.querySelector(".btnEnviarMail");
            miMail.attr("href", `mailto:santiago.foti1@gmail.com?subject=nombre: ${form1.get('name')} email: ${form1.get('email')} cel: ${form1.get('tel')}&body=${form1.get('msj')}`)
            miMail.text("mail");
            enviarMail.click();*/
           
           const loader=document.querySelector(".contact-form-loader"); 
           console.log(loader);
           const response=document.querySelector(".contact-form-response");
           loader.classList.remove("none");
           loader.style.position="absolute";
           loader.style.top="48%";
           loader.style.right="48%";
            
          
           setTimeout(()=>{
                loader.classList.add("none");
                
                mensajeValidarFormContacto.html("Gracias por contactarnos!");
                mensajeValidarFormContacto.css("display","block")
                mensajeValidarFormContacto.css("backgroundColor", "trasnparent");
                mensajeValidarFormContacto.css("color", "white");
                mensajeValidarFormContacto.css("border", "solid green");
           }, 3000)
        }  
  

//validar que el nombre de usuario no este vacio

if(!formContactoNombreValido(formContactoNombre.val())){
    mensajeValidarFormContacto.html("Debe completar el campo con su nombre completo");
    mensajeValidarFormContacto.slideDown('fast');
    setTimeout(()=>{mensajeValidarFormContacto.slideUp('slow')}, 2000);
    formContactoNombre.focus();
    return false;
}



if(formContactoTel.val()==="(+54 9) "){
    mensajeValidarFormContacto.html("Debe completar el campo con su telefono");
    mensajeValidarFormContacto.slideDown('fast');
    setTimeout(()=>{mensajeValidarFormContacto.slideUp('slow')}, 2000);
    formContactoTel.focus();
    return false;
}

if(!formContactoMensajeValido(formContactoMsj.val())){
    mensajeValidarFormContacto.html("El mensaje no puede estar vacío, ni pasar los 255 caracteres");
    mensajeValidarFormContacto.slideDown('fast');
    setTimeout(()=>{mensajeValidarFormContacto.slideUp('slow')}, 2000);
    formContactoMsj.focus();
    return false;
}

// validar que el mail se un mail valido


if(!formContactoMailValido(formContactoMail.val())){
    mensajeValidarFormContacto.html("Debe escribir un email válido");
    mensajeValidarFormContacto.slideDown('fast');
    setTimeout(()=>{mensajeValidarFormContacto.slideUp('slow')}, 3000);
    formContactoMail.focus();
    return false;
}


    

//FUNCION ----Si el formulario fue completado con exito el mensaje desaparece en x tiempo
function esconderMsjDeExito(){
    mensajeValidarFormContacto.fadeOut('slow');

}
setTimeout(esconderMsjDeExito,6000);
};
const formContactoMensajeValido= (mensaje) => { return /^.{1,255}$/.test(mensaje)};
const formContactoNombreValido= (nombre) => { return /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre)};
const formContactoMailValido = (mail) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); }
    

form1.on('submit',validarFormContacto);
btnFormContactoSubmit.on('click', ()=>{
    form1.submit(validarFormContacto);

})

//ANIMACION CON JQUERY
const divIconoG = $(".divIconoGrandeContacto");
const backHome = "<a class='volverContacto' style='display: none;'><h1 class= 'volverContactoH1'style='text-align: center; padding-bottom: 100px; padding-top: 60px;'>HAZ CLICK PARA VOLVER AL INICIO</h1></a>";
const iconoG=$(".contacto__row__div__a__logoContacto");
const footerContacto =$(".footerContacto");
iconoG.click(() => {iconoG.fadeOut(800, ()=>{

    
    divIconoG.append(backHome);
    let asd=$(".volverContacto");
    let asd1=document.querySelector(".volverContacto");
    let h1=$(".volverContactoH1");
    asd.slideDown('slow');
    h1.click(()=> {
        
       
       h1.slideUp('5000', ()=>{

           
            asd.attr('href', '../index.html');
            asd1.click();

       });
        

    });


})});




