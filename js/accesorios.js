// ROW CREADA PREVIAMENTE EN REMERAS.HTML
const accesoriosRow=document.querySelector(".accesorios__row");


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

const accesorio1 = new Prenda("Gorra Crazy Hair",
"10",
20200127,
true,
[{"stock":1,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":1,"talle":"60"}],
2100,
["../assets/img/gorraCrazyHair.png", "gorraCrazyHair"],
);

const accesorio2 = new Prenda("Gorra negra - cactus",
 "11",
 20200213,
 true,
 [{"stock":0,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":1,"talle":"60"}],
 2000,
["../assets/img/gorraNegraCactus.png", "gorraNegraCactus"],
);

const accesorio3 = new Prenda("Gorro gris - unicornio",
 "12",
 20200117,
 true,
 [{"stock":1,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":0,"talle":"60"}],
 2350,
["../assets/img/gorroGrisUnicornio.png", "gorroGrisUnicornio"],
);

const accesorio4 = new Prenda("Mochila - bordo",
 "13",
 20210927,
 true,
 [{"stock":3,"talle":"all"}],
 4250,
["../assets/img/mochilaBordo.png", "mochilaBordo"],
);

const accesorio5 = new Prenda("Pañuelo negro - dibujo blanco",
 "14",
 20211121,
 true,
 [{"stock":0,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":0,"talle":"60"}],
 1230,
["../assets/img/pañueloNegroBlanco.png", "pañueloNegroBlanco"],
);

const accesorio6 = new Prenda("Piluso gris - jean",
 "15",
 20210401,
 true,
 [{"stock":1,"talle":"58"}, {"stock":0,"talle":"59"}, {"stock":0,"talle":"60"}],
 1300,
["../assets/img/pilusoGrisJean.png", "pilusoGrisJean"],
);

const accesorio7 = new Prenda("Piluso negro - mariposas",
 "16",
 20210107,
 true,
 [{"stock":1,"talle":"58"}, {"stock":0,"talle":"59"}, {"stock":0,"talle":"60"}],
 1350,
["../assets/img/pilusoNegroMariposas.png", "pilusoNegroMariposas"],
);

const accesorio8 = new Prenda("Mochila - azul",
 "17",
 20200424,
 true,
 [{"stock":4,"talle":"all"}],
 2200,
["../assets/img/riñoneraAzul.png", "riñoneraAzul"],
);

const accesorio9 = new Prenda("Aros luna - negro",
 "18",
 20210727,
 true,
 [{"stock":4,"talle":"all"}],
 250,
["../assets/img/arosNegrosLunas.png", "arosNegrosLunas"],
);

const accesorio10 = new Prenda("Cinturon negro - cuero",
 "19",
 20200117,
 true,
 [{"stock":1,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":0,"talle":"60"}],
 2100,
["../assets/img/cinturonNegroCuero.png", "cinturonNegroCuero"],
);

const accesorio11 = new Prenda("Gorra a cuadros - B/N",
 "20",
 20210927,
 true,
 [{"stock":1,"talle":"58"}, {"stock":1,"talle":"59"}, {"stock":1,"talle":"60"}],
 2050,
["../assets/img/gorraNegroBlancoCuadros.png", "gorraNegroBlancoCuadros"],
);

const accesorio12 = new Prenda("Anillo de serpiente - acero",
 "21",
 20211121,
 true,
 [{"stock":2,"talle":"10"},{"stock":1,"talle":"12"}],
 350,
["../assets/img/anilloSerpiente.png", "anilloSerpiente"],
);

const accesorio13 = new Prenda("Pulsera circulos - plata",
 "22",
 20211121,
 true,
 [{"stock":4,"talle":"all"}],
 1350,
["../assets/img/pulseraCirculosPlata.png", "pulseraCirculosPlata"],
);

const accesorios = [accesorio1,accesorio2,accesorio3,accesorio4,accesorio5,accesorio6,accesorio7,accesorio8,accesorio9,accesorio10,accesorio11,accesorio12,accesorio13];

//ORDENAMIENTO DEL ARRAY DE ACCESORIOS


//por fecha

let accesoriosOrdenFecha = accesorios.slice();

arrayAccesoriosOrdenFecha = []


//recorrer la copia del array de objetos accesorios (accesoriosOrdenFecha) para guardar las fechas en arrayaccesoriosOrdenFecha

for(let i=0; i < accesoriosOrdenFecha.length; i+=1){

    arrayAccesoriosOrdenFecha.push(accesoriosOrdenFecha[i].fecha);
}

//funcion para ordener el arrayaccesoriosOrdenFecha

function comparar(a,b){return a - b};

function ordenarAccesoriosFecha(){

    return arrayAccesoriosOrdenFecha.sort(comparar);

}

arrayAccesoriosOrdenFecha = ordenarAccesoriosFecha();
console.log(arrayAccesoriosOrdenFecha);

//recorrer el arrayaccesoriosOrdenFecha con las fechas de todos los objetos en orden

let accesoriosOrdenFecha1=[];
console.log("----------------------------------------------"+accesoriosOrdenFecha);

arrayAccesoriosOrdenFecha.forEach((accesorioFecha) => {

   
   
    let arr = accesoriosOrdenFecha.filter((accesorio) => {

        if(accesorio.fecha === accesorioFecha){

            return accesorio;

        }

    })
    console.log(arr);

   
    
        if(arr.length>1){
        
            if(accesoriosOrdenFecha1.length>0){
                
               
               
                if(arr[0].fecha != accesoriosOrdenFecha1[0].fecha){

    
                    for(let s=0; s < arr.length; s += 1){
    
                        accesoriosOrdenFecha1.unshift(arr[s]);
                        console.log("--------------------"+accesoriosOrdenFecha1)
                        
            
                    }
    
                }
                
            }else{
    
                for(let s=0; s < arr.length; s += 1){
    
                    accesoriosOrdenFecha1.unshift(arr[s]);
                    console.log("--------------------"+accesoriosOrdenFecha1);
                   
        
                }
    
            }
                    
       
                
        }else{
    
            accesoriosOrdenFecha1.unshift(arr[0]);
            console.log("--------------------"+accesoriosOrdenFecha1)
            
    
        }

    

    
    
    

});

accesoriosOrdenFecha = accesoriosOrdenFecha1;
console.log(accesoriosOrdenFecha);

//por precio

let accesoriosOrdenPrecio = accesorios.slice();

arrayAccesoriosOrdenPrecio = []

//recorrer la copia del array de objetos accesorios (accesoriosOrdenPrecio) para guardar las fechas en arrayaccesoriosOrdenPrecio



for(let i=0; i < accesoriosOrdenPrecio.length; i+=1){

    arrayAccesoriosOrdenPrecio.push(accesoriosOrdenPrecio[i].precio);
}

//funcion para ordener el arrayaccesoriosOrdenPrecio



function ordenarAccesoriosPrecio(){

    return arrayAccesoriosOrdenPrecio.sort(comparar);

}

arrayAccesoriosOrdenPrecio = ordenarAccesoriosPrecio();



//recorrer el arrayaccesoriosOrdenPrecio con las fechas de todos los objetos en orden

let accesoriosOrdenPrecio1=[];
let accesoriosOrdenPrecioDesc=[];


//ALGORITMO FOREACH PARA LLENAR EL ARRAY accesoriosOrdenPrecio1 Y accesoriosOrdenPrecioDesc 

//CON LOS OBJETOS REMERAS ORDENADOS POR PRECIO



arrayAccesoriosOrdenPrecio.forEach((accesorioPrecio) => {

   
    let arr = accesoriosOrdenPrecio.filter((accesorio) => {

        if(accesorio.precio === accesorioPrecio){

            return accesorio;

        }

    })
    console.log(arr);

    if(arr.length>1){
        
        if(accesoriosOrdenPrecio1.length>0){

            if(arr[0].precio != accesoriosOrdenPrecio1[accesoriosOrdenPrecio1.length - 1].precio){

                for(let s=0; s < arr.length; s += 1){

                    accesoriosOrdenPrecio1.push(arr[s]);
                    accesoriosOrdenPrecioDesc.unshift(arr[s]);
        
                }

            }
            
        }else{

            for(let s=0; s < arr.length; s += 1){

                accesoriosOrdenPrecio1.push(arr[s]);
                accesoriosOrdenPrecioDesc.unshift(arr[s]);
    
            }

        }
                
   
            
    }else{

        accesoriosOrdenPrecio1.push(arr[0]);
        accesoriosOrdenPrecioDesc.unshift(arr[0]);

    }
    
    
});

accesoriosOrdenPrecio = accesoriosOrdenPrecio1;




let ordenSeccion = document.querySelector(".ordenSeccion");





//funcion para seleccionar orden puesto en onchange de select .ordenSeccion



function seleccionarOrden(){
    
    
    accesoriosRow.innerHTML="";
    let accesoriosOrdenFechaPage=accesoriosOrdenFecha.slice();
    let accesoriosOrdenPrecioPage=accesoriosOrdenPrecio.slice();
    let accesoriosOrdenPrecioDescPage=accesoriosOrdenPrecioDesc.slice();
    if(ordenSeccion.value == "date")
    {
        
        mostrarPrendas(accesoriosOrdenFechaPage.slice(0,9));
        getPaginacion(accesoriosOrdenFechaPage);
        
    }

    if(ordenSeccion.value == "price")
    {

        mostrarPrendas(accesoriosOrdenPrecioPage.slice(0,9));
        getPaginacion(accesoriosOrdenPrecioPage);
        
    }

    if(ordenSeccion.value == "price-desc")
    {

        mostrarPrendas(accesoriosOrdenPrecioDescPage.slice(0,9));
        getPaginacion(accesoriosOrdenPrecioDescPage);
    }

        function getPaginacion(orden){
            let pag= document.querySelector(".paginacionAccesorios--ul");
            let pages = Math.ceil(orden.length/9);
            let orden1 = orden.slice();
            pag.innerHTML ="";
            let linkPrev=document.createElement("a");
            for(let i=1;i<=pages;i++){
    
                /*<li class="page-item"><a class="page-link paginacionAccesorios__nav__ul__li__paginaActiva" href="accesorios.html">
                1</a></li>*/
                let a = i * 9;
                let li = document.createElement("li");
                let link = document.createElement("a");
                link.classList.add("page-link")
                li.classList.add("page-item");
                link.href="#tituloAccesorios";
                
               
                link.textContent= i;
                console.log(orden1.slice(0,9));
                link.addEventListener("click", () => { 

                    linkPrev.classList.remove("paginacionAccesorios__nav__ul__li__paginaActiva");
                   
                    linkPrev=link;
                    
                    link.classList.add("paginacionAccesorios__nav__ul__li__paginaActiva");
                    
                    accesoriosRow.innerHTML="";

                    mostrarPrendas(orden1.slice(a-9,a));

                    console.log(orden1.slice(0,orden1.length));

                } )
                
                console.log(orden1);
                pag.appendChild(li);
                li.appendChild(link);
                
            }
            
        
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


function mostrarPrendas(accesorios){

/*
document.write(`<section class="container remeras">`);
document.write(`<div class="row remeras__row">`)
*/
    accesorios.forEach((accesorio)=>{
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
            imagen.src = accesorio.img[0];
            imagen.alt = accesorio.img[1];
            imagen.classList.add("card-img-top");
            imagen.classList.add("img-fluid");
            imagen.alt.add = "";

            //RESTO DEL CONTENIDO DE LA CARD
            const div1 = document.createElement('div');
            div1.classList.add("card-body");



       

                //TITULO DE LA CARD QUE COINCIDE CON EL ATRIBUTO NOMBRE DE LA PRENDA
                const titulo = document.createElement('h5');
                titulo.classList.add("card-title");
                titulo.textContent = accesorio.nombre;

                //PRECIO  - ATRIBUTO PRECIO DE LA PRENDA
                const precio = document.createElement('p');
                precio.classList.add("card-text");
                precio.textContent = `$${accesorio.precio}`;

                //FECHA  - ATRIBUTO FECHA DE LA PRENDA
                const fecha = document.createElement('p');
                fecha.classList.add("card-text");
                fecha.textContent = `fecha de ingreso: ${convertirFechaTexto(accesorio.fecha)}`;

                //UN HR PARA SEPARAR CONTENIDO
                const hr = document.createElement('hr');

                //DIV CON EL SELECTOR DE TALLES
                const div2 = document.createElement('div');
                div2.classList.add("input-group");
                

            
                if(accesorio.talle[0].talle!="all"){

                    if(accesorio.talle[0].talle=="10"){

                        //SELECTOR DE TALLES
                const select = document.createElement('select');
                select.classList.add("custom-select");
                select.classList.add("selectTalles");
                select.classList.add(`selectRemeras${accesorio.id}`);
                
                
                    const optionSelected = document.createElement('option');
                    optionSelected.selected = "selected";
                    optionSelected.textContent = "Talle";

                    //HIJOS DEL SELECTOR DE TALLES SELECT
                    select.appendChild(optionSelected);

                   

                    if(accesorio.talle[0].stock>0){
                    const optionS = document.createElement('option');
                    optionS.value = "10";
                    optionS.classList.add="talleS";
                    optionS.textContent= accesorio.talle[0].talle;

                    //HIJOS DEL SELECTOR DE TALLES SELECT
                    select.appendChild(optionS);
                    }
                    

                    if(accesorio.talle[1].stock>0){
                    const optionM = document.createElement('option');
                    optionM.value = "12";
                    optionM.classList.add="talleM";
                    optionM.textContent= accesorio.talle[1].talle;

                    //HIJOS DEL SELECTOR DE TALLES SELECT
                    select.appendChild(optionM);
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
                            clickAniadirCarrito(accesorio, select);
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

                    }else{


                    //SELECTOR DE TALLES
                    const select = document.createElement('select');
                    select.classList.add("custom-select");
                    select.classList.add("selectTalles");
                    select.classList.add(`selectRemeras${accesorio.id}`);
                    
                    
                        const optionSelected = document.createElement('option');
                        optionSelected.selected = "selected";
                        optionSelected.textContent = "Talle";

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionSelected);

                       

                        if(accesorio.talle[0].stock>0){
                        const optionS = document.createElement('option');
                        optionS.value = "58";
                        optionS.classList.add="talleS";
                        optionS.textContent= accesorio.talle[0].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionS);
                        }
                        

                        if(accesorio.talle[1].stock>0){
                        const optionM = document.createElement('option');
                        optionM.value = "59";
                        optionM.classList.add="talleM";
                        optionM.textContent= accesorio.talle[1].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionM);
                        }

                        if(accesorio.talle[2].stock>0){
                        const optionL = document.createElement('option');
                        optionL.value = "60";
                        optionL.classList.add="talleL";
                        optionL.textContent= accesorio.talle[2].talle;

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionL);
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
                                clickAniadirCarrito(accesorio, select);
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

                        }
                }else{

                        
                        //DIV FINAL DEL CARD CON EL BOTON AÑADIR
                        div2.classList.add("accesorios__row__div__card__card-body__div--sinTalles");
                        const div3 = document.createElement('div');
                        div3.classList.add("input-group-append");
                    

                            //BOTON AÑADIR
                            const aniadir = document.createElement('button');
                            aniadir.classList.add("btn");
                            aniadir.classList.add("btn-primary");
                            aniadir.classList.add("btn-aniadirCarrito");
                            aniadir.textContent="AÑADIR  ";
                            aniadir.addEventListener("click", function(){
                                clickAniadirCarrito(accesorio);
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
                   
                    div2.appendChild(div3);

                }

    
                    


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
    accesoriosRow.appendChild(col);

    
    })
    
    
}   
//AÑADIR CARRITO


//FUNCION PARA GUARDAR EL PRODUCTO EN EL CARRITO LOCALSTORAGE AL HACER CLICK EN AÑADIR
   

let iconoBtnAniadir = document.querySelector("fa-cart-plus");

    


function clickAniadirCarrito(accesorio,select){
            
    let accesorioJson = JSON.stringify(accesorio);
    console.log(accesorioJson);
    let accesorioEnCarrito = JSON.parse(accesorioJson);
    console.log(accesorioEnCarrito);

   
    accesorioEnCarrito.talle.length=0;

    if(typeof(select) != "undefined"){

        let talleSeleccionado = select.value;
        console.log(talleSeleccionado);

    if(talleSeleccionado=="Talle"){

        
        return alert("Debe elegir un talle");
        

    }
    
    if(talleSeleccionado=="58"){

        
        accesorioEnCarrito.talle.push({"stock":1,"talle":"58"});
    }

    if(talleSeleccionado=="59"){

        accesorioEnCarrito.talle.push({"stock":1,"talle":"59"});
    }

    if(talleSeleccionado=="60"){

        
        accesorioEnCarrito.talle.push({"stock":1,"talle":"60"});
    }

    
    if(talleSeleccionado=="10"){

        accesorioEnCarrito.talle.push({"stock":1,"talle":"10"});

    }

    if(talleSeleccionado=="12"){

        accesorioEnCarrito.talle.push({"stock":1,"talle":"12"});

    }

}else{

   
    accesorioEnCarrito.talle.length=0;
    accesorioEnCarrito.talle.stock=0;
    accesorioEnCarrito.talle.push({"stock":1,"talle":"all"});

    
}
    
    if(typeof(localStorage[`${accesorio.id}`]) == "undefined"){
        console.log("se agrega")
        localStorage.setItem(accesorio.id, JSON.stringify(accesorioEnCarrito));

    }else{
        
        let accesorioEnCarrito1 = JSON.parse(localStorage[`${accesorio.id}`])

        for(let y=0;y<accesorioEnCarrito1.talle.length;y++){

            
            if(accesorioEnCarrito1.talle[y].talle==accesorioEnCarrito.talle[0].talle){
                accesorioEnCarrito.talle[0].stock=accesorioEnCarrito1.talle[y].stock+1;
                accesorioEnCarrito1.talle.splice(y,1);
                accesorioEnCarrito.talle=accesorioEnCarrito.talle.concat(accesorioEnCarrito1.talle);
                break
            }
            if(y==(accesorioEnCarrito1.talle.length-1)){

                accesorioEnCarrito.talle=accesorioEnCarrito.talle.concat(accesorioEnCarrito1.talle);
                
            }
        }

        localStorage.removeItem(`${accesorio.id}`);
        localStorage.setItem(accesorio.id, JSON.stringify(accesorioEnCarrito));

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
    mensajeAniadidoCarrito.style.color="#1a1919";
    mensajeAniadidoCarrito.style.border="solid green 0.8px";
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

    let modalCarritoHTML = document.querySelector(".modalCarrito__div__modalContent");
    let iconoCarritoHeader = document.querySelector(".header__row__div__nav__div__ul__li__nav-link--icon");
    iconoCarritoHeader.addEventListener("click", generarModalCarrito)


//MODAL DEL CARRITO
    function generarModalCarrito(){
        modalCarritoHTML.innerHTML="";
        let h3=document.createElement("h3");
        h3.style.textAlign = "center";
        h3.textContent="TUS PRODUCTOS";

        let k= document.createElement("div");

            let hr0= document.createElement("hr");

        k.appendChild(hr0);
        
        let total=0;
        modalCarritoHTML.appendChild(h3);
        modalCarritoHTML.appendChild(k);

        for(let i = 0 ; i< localStorage.length; i++){
            
            let clave=localStorage.key(i);
            let item = JSON.parse(localStorage[`${clave}`])
            let price = 0;
            function modalCarrito(){

               
                let divContenedor = document.createElement("div");
                
        
                    let div1 = document.createElement("div");
                    div1.classList.add("modalCarrito__div__modalContent__div__bodyModalCarrito");
        
                        let img = document.createElement("img");
                        img.src = item.img[0];
                        img.alt = item.img[1];
                        img.classList.add("img-fluid");
                        img.classList.add("modalCarrito__div__modalContent__div__bodyModalCarrito__imgModalCarrito");
        
                        let div2= document.createElement("div");

                            let buttonX = document.createElement("button");
                            buttonX.classList.add("btn-primary");
                            buttonX.classList.add("buttonXmodalCarrito");
                            buttonX.type="button";
                            buttonX.textContent="X";
                            buttonX.style.justifyContent="right";
                            buttonX.addEventListener("click",eliminarElementoCarrito);
                            buttonX.addEventListener("click",refreshFooterModal);

                            function eliminarElementoCarrito(){

                                total=total-price;
                                console.log(total);
                                divContenedor.innerHTML="";
                                localStorage.removeItem(clave);
                                
                                
                            }
            
                            let titulo = document.createElement("p");
                            titulo.textContent = item.nombre;

                            let cantidad= document.createElement("div");

                            for(let talle of item.talle){

                                let cantidad1= document.createElement("p");
                                cantidad1.textContent+=`cantidad: ${talle.stock} de talle: ${talle.talle}`;
                                cantidad.appendChild(cantidad1);
                                price += item.precio * talle.stock;
                            }
        
                            let precio = document.createElement("p");
                            precio.textContent = `$${item.precio} c/u, total: $${price}`;
                            

                            

                            


        
                        div2.appendChild(titulo);
                        div2.appendChild(precio);
                        div2.appendChild(cantidad);
                        div2.appendChild(buttonX);
                        
        
                    div1.appendChild(img);
                    div1.appendChild(div2);

                    let hr = document.createElement("hr");
        
                divContenedor.appendChild(div1);
                divContenedor.appendChild(hr);
                modalCarritoHTML.appendChild(divContenedor);
            }

            modalCarrito();
           
            total+=price;

        }

       
        let footer = document.createElement("div");
        footer.classList.add("modalCarrito__div__modalContent__modalCarritoFooter");

            let pFooter = document.createElement("p");

                let strong = document.createElement("strong");
                strong.textContent=`SUBTOTAL: ${total}`;

            pFooter.appendChild(strong);

            let hr5= document.createElement("hr");

            let button1 = document.createElement("button");
            button1.classList.add("btn");
            button1.classList.add("btn-outline-success");
            button1.classList.add("my-2");
            button1.classList.add("my-sm-0");
            button1.type="button";

            

                let a1= document.createElement("a");
                a1.href="carrito.html";
                a1.textContent="VER CARRITO";

                button1.appendChild(a1);


        
        footer.appendChild(pFooter);
        footer.appendChild(hr5);
        footer.appendChild(button1);
        
        modalCarritoHTML.appendChild(footer);
      /*  
        function jqueryClose(){
                let buttonC = "<button type='button' class='btn btn-outline-success btnCloseModal my-2 my-sm-0'>CERRAR</button>";
                $(".modalCarrito__div__modalContent__modalCarritoFooter").append(buttonC);
                $(".btnCloseModal").click(() => { 
                    
                    $(".modalCarrito").modal().slideUp(1100);
                    
                    

            });
            */

/*
            function cla(){
                setTimeout(() => {
                        
                    $(".btnCloseModal").attr("data-dismiss", "modal");
                    $(".btnCloseModal").click();
                
                }, 1080);
            }


            for(let i =0; i<2 ; i++){

                if(i=0){
                    $(".btnCloseModal").attr("data-dismiss", "modal");

                }

            }
            
            
                $(".btnCloseModal").css("margin-left", "20px");
                
        }

        
*/


        function refreshFooterModal(){

            footer.innerHTML="";
            footer.classList.add("modalCarrito__div__modalContent__modalCarritoFooter");

                let pFooter = document.createElement("p");

                    let strong = document.createElement("strong");
                    strong.textContent=`SUBTOTAL: ${total}`;

                pFooter.appendChild(strong);

                let hr5= document.createElement("hr");

                let button1 = document.createElement("button");
                button1.classList.add("btn");
                button1.classList.add("btn-outline-success");
                button1.classList.add("my-2");
                button1.classList.add("my-sm-0");
                button1.type="button";

                    let a1= document.createElement("a");
                    a1.href="carrito.html";
                    a1.textContent="VER CARRITO";

                button1.appendChild(a1);

            
            footer.appendChild(pFooter);
            footer.appendChild(hr5);
            footer.appendChild(button1);
            modalCarritoHTML.appendChild(footer);
          
            
            
        }
        /*
        jqueryClose();
        */
    }

        
        