/* ULTIMO DESAFIO ----------------------------------------------*/

const formulario = document.querySelector("#formulario");
const divResultado = document.querySelector("#resultado");
formulario.addEventListener("submit", 

(e) => {
    e.preventDefault();
    console.log("enviando..");
    validarDesafio();

})

function validarDesafio(){

    const terminoBusqueda = document.querySelector(".termino").value;
    console.log(terminoBusqueda);
    if(!terminoBusqueda){
       console.log("el campo de busqueda no puede estar vacio");
       return
    }
    obtenerDatosApi(terminoBusqueda);

}

function obtenerDatosApi(termino){

    const key="23410723-9954f1565b526e587b70fb5d7";
    const url=`https://pixabay.com/api/?key=${key}&q=${termino}`;
    console.log(url);
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => mostrarImagen(data.hits))
        .catch(error => console.log(error))
}
const resultado=document.querySelector("#resultado");
function mostrarImagen(imagen){
    resultado.innerHTML="";
    imagen.forEach(imagen => {

        
        resultado.innerHTML+=`<img src=${imagen.previewURL}></img>`
        
    }
        )

}