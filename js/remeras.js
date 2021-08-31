/*document.addEventListener('DOMContentLoaded', () => {
    mostrarPrendas();
})
*/

// ROW CREADA PREVIAMENTE EN REMERAS.HTML
const remerasRow=document.querySelector(".remeras__row");


//CLASE PRENDA PARA CONSTRUIR CADA REMERA COMO OBJETO PRENDA
class Prenda {

    constructor(nombre,id,fecha,stock,talle,precio,img){
        this.nombre=nombre;
        this.id=id;
        this.fecha=fecha;
        this.stock=stock;
        this.talle=talle;
        this.precio=precio;
        this.img=img;
    }

}


// CREACION DE CADA PRODUCTO OBJETO PRENDA
const remera1 = new Prenda("Remera gris - california",
 "1",
 20200127,
 true,
 [{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"},{"stock":1,"talle":"XL"}],
 1230,
["../assets/img/remeraGrisCalifornia.png", "remeraGrisCalifornia"],
);

const remera2 = new Prenda("Remera rosa - don't touch",
 "2",
 20200213,
 true,
 [{"stock":0,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"},{"stock":1,"talle":"XL"}],
 1100,
["../assets/img/remeraRosaDontTouch.png", "remeraRosaDontTouch"],
);

const remera3 = new Prenda("Remera gris - corazón",
 "3",
 20200117,
 true,
 [{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"},{"stock":0,"talle":"XL"}],
 1200,
["../assets/img/remeraGrisCorazon.png", "remeraGrisCorazon"],
);

const remera4 = new Prenda("Remera gris - underwather",
 "4",
 20210927,
 true,
 [{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"},{"stock":0,"talle":"XL"}],
 1100,
["../assets/img/remeraGrisUnderwater.png", "remeraGrisUnderwater"],
);

const remera5 = new Prenda("Remeron mariposa - gris",
 "5",
 20211121,
 true,
 [{"stock":0,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"},{"stock":1,"talle":"XL"}],
 1250,
["../assets/img/remeraGrisMariposa.png", "remeronGrisMariposa"],
);

const remera6 = new Prenda("Remera gris - cohete",
 "6",
 20210401,
 true,
 [{"stock":1,"talle":"S"}, {"stock":0,"talle":"M"}, {"stock":0,"talle":"L"},{"stock":1,"talle":"XL"}],
 1500,
["../assets/img/remeraGrisCohete.png", "remeraGrisCohete"],
);

const remera7 = new Prenda("Remera AS - marron",
 "7",
 20210107,
 true,
 [{"stock":1,"talle":"S"}, {"stock":0,"talle":"M"}, {"stock":0,"talle":"L"},{"stock":0,"talle":"XL"}],
 1600,
["../assets/img/remeraMarronAmericanSummer.png", "remeraMarronAmericanSummer"],
);

const remera8 = new Prenda("Remera ocre - Ojo",
 "8",
 20200424,
 true,
 [{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"},{"stock":1,"talle":"XL"}],
 1350,
["../assets/img/remeraOcreOjo.png", "remeraOcreOjo"],
);

const remera9 = new Prenda("Remera negra - bolsillo rosas",
 "9",
 20210727,
 true,
 [{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"},{"stock":1,"talle":"XL"}],
 1250,
["../assets/img/remeraNegraRosas.png", "remeraNegraRosasConBolsillo"],
);


//CREACION DE ARRAY CON TODOS LOS PRODUCTOS PRENDAS REMERAS
const remeras=[remera1,remera2,remera3,remera4,remera5,remera6,remera7,remera8,remera9];

//ORDENAMIENTO DEL ARRAY DE REMERAS


//por fecha

let remerasOrdenFecha = remeras.slice();

arrayRemerasOrdenFecha = []

//recorrer la copia del array de objetos remeras (remerasOrdenFecha) para guardar las fechas en arrayRemerasOrdenFecha

for(let i=0; i < remerasOrdenFecha.length; i+=1){

    arrayRemerasOrdenFecha.push(remerasOrdenFecha[i].fecha);
}

//funcion para ordener el arrayRemerasOrdenFecha

function comparar(a,b){return a - b};

function ordenarRemerasFecha(){

    return arrayRemerasOrdenFecha.sort(comparar);

}

arrayRemerasOrdenFecha = ordenarRemerasFecha();

//recorrer el arrayRemerasOrdenFecha con las fechas de todos los objetos en orden

let remerasOrdenFecha1=[];

arrayRemerasOrdenFecha.forEach((remeraFecha) => {

   
    let arr = remerasOrdenFecha.filter((remera) => {

        if(remera.fecha === remeraFecha){

            return remera;

        }

    })

    remerasOrdenFecha1.unshift(arr[0]);
    

});

remerasOrdenFecha = remerasOrdenFecha1;

//por precio

let remerasOrdenPrecio = remeras.slice();

arrayRemerasOrdenPrecio = []

//recorrer la copia del array de objetos remeras (remerasOrdenPrecio) para guardar las fechas en arrayRemerasOrdenPrecio



for(let i=0; i < remerasOrdenPrecio.length; i+=1){

    arrayRemerasOrdenPrecio.push(remerasOrdenPrecio[i].precio);
}

//funcion para ordener el arrayRemerasOrdenPrecio



function ordenarRemerasPrecio(){

    return arrayRemerasOrdenPrecio.sort(comparar);

}

arrayRemerasOrdenPrecio = ordenarRemerasPrecio();



//recorrer el arrayRemerasOrdenPrecio con las fechas de todos los objetos en orden

let remerasOrdenPrecio1=[];
let remerasOrdenPrecioDesc=[];


//ALGORITMO FOREACH PARA LLENAR EL ARRAY remerasOrdenPrecio1 Y remerasOrdenPrecioDesc 

//CON LOS OBJETOS REMERAS ORDENADOS POR PRECIO



arrayRemerasOrdenPrecio.forEach((remeraPrecio) => {

   
    let arr = remerasOrdenPrecio.filter((remera) => {

        if(remera.precio === remeraPrecio){

            return remera;

        }

    })
    console.log(arr);

    if(arr.length>1){
        
        if(remerasOrdenPrecio1.length>0){

            if(arr[0].precio != remerasOrdenPrecio1[remerasOrdenPrecio1.length - 1].precio){

                for(let s=0; s < arr.length; s += 1){

                    remerasOrdenPrecio1.push(arr[s]);
                    remerasOrdenPrecioDesc.unshift(arr[s]);
        
                }

            }
            
        }else{

            for(let s=0; s < arr.length; s += 1){

                remerasOrdenPrecio1.push(arr[s]);
                remerasOrdenPrecioDesc.unshift(arr[s]);
    
            }

        }
                
   
            
    }else{

        remerasOrdenPrecio1.push(arr[0]);
        remerasOrdenPrecioDesc.unshift(arr[0]);

    }
    
    
});


remerasOrdenPrecio = remerasOrdenPrecio1;




let ordenSeccion = document.querySelector(".ordenSeccion");



//funcion para seleccionar orden puesto en onchange de select .ordenSeccion

function seleccionarOrden(){
    
    
    remerasRow.innerHTML="";
    
    if(ordenSeccion.value == "date")
    {
        mostrarPrendas(remerasOrdenFecha);
        
    }

    if(ordenSeccion.value == "price")
    {

        mostrarPrendas(remerasOrdenPrecio);
        
    }

    if(ordenSeccion.value == "price-desc")
    {

        mostrarPrendas(remerasOrdenPrecioDesc);
    }
    
}


//FUNCION PARA CONVERTIR LA FECHA DEL OBJETO EN UN TEXTO PARA EL HTML
function convertirFechaTexto(fecha){

    let fechaString = fecha.toString();
    let dia = fechaString.charAt(6)+fechaString.charAt(7)+"/";
    let mes = fechaString.charAt(4)+fechaString.charAt(5)+"/";
    let año = fechaString.charAt(0)+fechaString.charAt(1)+fechaString.charAt(2)+fechaString.charAt(3);
    let fechaTexto = dia + mes + año;
    return fechaTexto;
}


//FUNCION PARA MOSTRAR PRENDAS REMERAS DENTRO DE REMERAS.HTML


function mostrarPrendas(remeras){

/*
document.write(`<section class="container remeras">`);
document.write(`<div class="row remeras__row">`)
*/
    remeras.forEach((remera)=>{
    //document.write(`<div class="col-lg-4 col-sm-6 col-12" data-aos="fade-down-right" data-aos-duration="1000">`);

    //DIV COLUMNA

    const col = document.createElement('div');
    col.classList.add("col-lg-4");
    col.classList.add("col-sm-6");
    col.classList.add("col-12");
    

        //DIV PADRE CARD
        const div = document.createElement('div');
        div.classList.add("card");
        
        
            //IMAGEN DEL PRODUCTO
            const imagen = document.createElement('img');
            imagen.src = remera.img[0];
            imagen.alt = remera.img[1];
            imagen.classList.add("card-img-top");
            imagen.classList.add("img-fluid");
            imagen.alt.add = "";

            //RESTO DEL CONTENIDO DE LA CARD
            const div1 = document.createElement('div');
            div1.classList.add("card-body");



       

                //TITULO DE LA CARD QUE COINCIDE CON EL ATRIBUTO NOMBRE DE LA PRENDA
                const titulo = document.createElement('h5');
                titulo.classList.add("card-title");
                titulo.textContent = remera.nombre;

                //PRECIO  - ATRIBUTO PRECIO DE LA PRENDA
                const precio = document.createElement('p');
                precio.classList.add("card-text");
                precio.textContent = `$${remera.precio}`;

                //FECHA  - ATRIBUTO FECHA DE LA PRENDA
                const fecha = document.createElement('p');
                fecha.classList.add("card-text");
                fecha.textContent = `fecha de ingreso: ${convertirFechaTexto(remera.fecha)}`;

                //UN HR PARA SEPARAR CONTENIDO
                const hr = document.createElement('hr');

                //DIV CON EL SELECTOR DE TALLES
                const div2 = document.createElement('div');
                div2.classList.add("input-group");
                

            



                    //SELECTOR DE TALLES
                    const select = document.createElement('select');
                    select.classList.add("custom-select");
                    select.classList.add("selectTalles");
                    select.classList.add(`selectRemeras${remera.id}`);
                    
                    
                        const optionSelected = document.createElement('option');
                        optionSelected.selected = "selected";
                        optionSelected.textContent = "Talle";

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionSelected);

                        if(remera.talle[0].stock>0){
                        const optionS = document.createElement('option');
                        optionS.value = "S";
                        optionS.classList.add="talleS";
                        optionS.textContent= remera.talle[0].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionS);
                        }

                        if(remera.talle[1].stock>0){
                        const optionM = document.createElement('option');
                        optionM.value = "M";
                        optionM.classList.add="talleM";
                        optionM.textContent= remera.talle[1].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionM);
                        }

                        if(remera.talle[2].stock>0){
                        const optionL = document.createElement('option');
                        optionL.value = "L";
                        optionL.classList.add="talleL";
                        optionL.textContent= remera.talle[2].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionL);
                        }

                        if(remera.talle[3].stock>0){
                        const optionXL = document.createElement('option');
                        optionXL.value = "XL";
                        optionXL.classList.add="talleXL";
                        optionXL.textContent= remera.talle[3].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionXL);
                        }


                    
                    //DIV FINAL DEL CARD CON EL BOTON AÑADIR
                    const div3 = document.createElement('div');
                    div3.classList.add("input-group-append");
                    

                        //BOTON AÑADIR
                        const aniadir = document.createElement('button');
                        aniadir.classList.add("btn");
                        aniadir.classList.add("btn-primary");
                        aniadir.classList.add("btn-aniadirCarrito");
                        aniadir.textContent="AÑADIR  ";
                        aniadir.addEventListener("click", function(){
                            clickAniadirCarrito(remera, select);
                        });
                        
                        
    
                          
       

    
                       
                        
                            //ICONO DEL BOTON AÑADIR
                            const iconoAniadir = document.createElement('i');
                            iconoAniadir.classList.add("fas");
                            iconoAniadir.classList.add("fa-cart-plus");
                            iconoAniadir.classList.add("iconoAniadirCarrito");


                        //HIJO DEL BOTON AÑADIR
                        aniadir.appendChild(iconoAniadir);


                    //HIJOS DEL DIV3 CON EL BOTON AÑADIR    
                    div3.appendChild(aniadir);  


                //HIJOS DEL DIV CON EL SELECTOR DE TALLES DIV2
                div2.appendChild(select);
                div2.appendChild(div3);


            //HIJOS DIV1 CARD BODY
            div1.appendChild(titulo);
            div1.appendChild(precio);
            div1.appendChild(fecha);
            div1.appendChild(hr);
            div1.appendChild(div2);


        // HIJOS DIV PADRE CARD    
        div.appendChild(imagen);
        div.appendChild(div1);


    //document.write("</div>");


    //TODOS HIJOS DE LA COLUMNA
    col.appendChild(div);
    //COLUMNA HIJO DE LA ROW DEL HTML
    remerasRow.appendChild(col);

    
    })
    
    
}   
//AÑADIR CARRITO


//FUNCION PARA GUARDAR EL PRODUCTO EN EL CARRITO LOCALSTORAGE AL HACER CLICK EN AÑADIR
   

let iconoBtnAniadir = document.querySelector("fa-cart-plus");

    


function clickAniadirCarrito(remera,select){
            
    let remeraJson = JSON.stringify(remera);
    console.log(remeraJson);
    let remeraEnCarrito = JSON.parse(remeraJson);
    console.log(remeraEnCarrito);
    
    let talleSeleccionado = select.value;
    console.log(talleSeleccionado);
    remeraEnCarrito.talle.length=0;

    if(talleSeleccionado=="Talle"){

        
        return alert("Debe elegir un talle");
        

    }
    
    if(talleSeleccionado=="S"){

        
        remeraEnCarrito.talle.push({"stock":1,"talle":"S"});
    }

    if(talleSeleccionado=="M"){

        remeraEnCarrito.talle.push({"stock":1,"talle":"M"});
    }

    if(talleSeleccionado.value=="L"){

        
        remeraEnCarrito.talle.push({"stock":1,"talle":"L"});
    }

    if(talleSeleccionado=="XL"){

        
        remeraEnCarrito.talle.push({"stock":1,"talle":"XL"});
    }
    
    if(typeof(localStorage[`${remera.id}`]) == "undefined"){
        console.log("se agrega")
        localStorage.setItem(remera.id, JSON.stringify(remeraEnCarrito));

    }else{
        
        let remeraEnCarrito1 = JSON.parse(localStorage[`${remera.id}`])

        for(let y=0;y<remeraEnCarrito1.talle.length;y++){

            if(remeraEnCarrito1.talle[y].talle==remeraEnCarrito.talle[0].talle){
                remeraEnCarrito.talle[0].stock=remeraEnCarrito1.talle[y].stock+1;
                remeraEnCarrito1.talle.splice(y,1);
                remeraEnCarrito.talle=remeraEnCarrito.talle.concat(remeraEnCarrito1.talle);
                break
            }
            if(y==(remeraEnCarrito1.talle.length-1)){

                remeraEnCarrito.talle=remeraEnCarrito.talle.concat(remeraEnCarrito1.talle);
                
            }
        }

        localStorage.removeItem(`${remera.id}`);
        localStorage.setItem(remera.id, JSON.stringify(remeraEnCarrito));

    }
   
    mensajeAniadirCarrito();

}

seleccionarOrden();

//MENSAJE CUANDO SE AGREGA UN PRODUCTO AL CARRITO



function mensajeAniadirCarrito(){

    let mensajeAniadidoCarrito = document.querySelector(".mensajeAniadidoCarrito");
    let mensaje = document.createElement('span');
    mensaje.textContent= "El producto fue añadido al carrito con éxito!";
    mensajeAniadidoCarrito.appendChild(mensaje);
    mensajeAniadidoCarrito.style.display="block";
    mensajeAniadidoCarrito.style.backgroundColor="transparent";
    mensajeAniadidoCarrito.style.color="black";
    mensajeAniadidoCarrito.style.border="solid green";
    mensajeAniadidoCarrito.style.fontSize="18px";
    mensajeAniadidoCarrito.style.textAlign="center";
    let btn =document.getElementsByClassName("btn-aniadirCarrito");
    console.log(btn);
    let iconoAniadir = JSON.stringify(document.querySelector(".iconoAniadirCarrito"));
    console.log(iconoAniadir);
    for (btns of btn){

        btns.disabled=true;
        btns.textContent="Añadiendo..."
    }
    
    
    

    //TIEMPO QUE DURA EL MENSAJE

    function esconderMsjAniadirCarrito(){
        
        mensajeAniadidoCarrito.style.display="none";


        for (btns of btn){

            btns.disabled=false;
            btns.textContent=`AÑADIR `;
            const iconoAniadir = document.createElement('i');
            iconoAniadir.classList.add("fas");
            iconoAniadir.classList.add("fa-cart-plus");
            iconoAniadir.classList.add("iconoAniadirCarrito");
            btns.appendChild(iconoAniadir);

            
        }

       

        
        mensajeAniadidoCarrito.innerHTML="";
        

    }


    setTimeout(esconderMsjAniadirCarrito,2000);

    }


/*
for(btnAniadir of btnAniadirCarrito){


    btnAniadir.addEventListener("click", mensajeAniadirCarrito);
   
}

*/


