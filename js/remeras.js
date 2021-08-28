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
 1,
 20200127,
 true,
 [[1,"S"], [1,"M"], [1,"L"],[1,"XL"]],
 1230,
["../assets/img/remeraGrisCalifornia.png", "remeraGrisCalifornia"],
);

const remera2 = new Prenda("Remera rosa - don't touch",
 2,
 20200213,
 true,
 [[0,"S"], [1,"M"], [0,"L"],[1,"XL"]],
 1100,
["../assets/img/remeraRosaDontTouch.png", "remeraRosaDontTouch"],
);

const remera3 = new Prenda("Remera gris - corazón",
 1,
 20200117,
 true,
 [[1,"S"], [1,"M"], [0,"L"],[1,"XL"]],
 1200,
["../assets/img/remeraGrisCorazon.png", "remeraGrisCorazon"],
);

const remera4 = new Prenda("Remera gris - underwather",
 1,
 20210927,
 true,
 [[1,"S"], [0,"M"], [1,"L"],[1,"XL"]],
 1100,
["../assets/img/remeraGrisUnderwater.png", "remeraGrisUnderwater"],
);

const remera5 = new Prenda("Remeron mariposa - gris",
 1,
 20211121,
 true,
 [[1,"S"], [0,"M"], [0,"L"],[1,"XL"]],
 1250,
["../assets/img/remeraGrisMariposa.png", "remeronGrisMariposa"],
);

const remera6 = new Prenda("Remera gris - cohete",
 1,
 20210401,
 true,
 [[0,"S"], [0,"M"], [1,"L"],[1,"XL"]],
 1500,
["../assets/img/remeraGrisCohete.png", "remeraGrisCohete"],
);

const remera7 = new Prenda("Remera AS - marron",
 1,
 20210107,
 true,
 [[1,"S"], [0,"M"], [0,"L"],[0,"XL"]],
 1600,
["../assets/img/remeraMarronAmericanSummer.png", "remeraMarronAmericanSummer"],
);

const remera8 = new Prenda("Remera ocre - Ojo",
 1,
 20200424,
 true,
 [[1,"S"], [1,"M"], [1,"L"],[1,"XL"]],
 1350,
["../assets/img/remeraOcreOjo.png", "remeraOcreOjo"],
);

const remera9 = new Prenda("Remera negra - bolsillo rosas",
 1,
 20210727,
 true,
 [[1,"S"], [1,"M"], [1,"L"],[0,"XL"]],
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

    remerasOrdenFecha1.push(arr[0]);
    

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
                    
                    
                        const optionSelected = document.createElement('option');
                        optionSelected.selected = "selected";
                        optionSelected.textContent = "Talle";

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionSelected);

                        if(remera.talle[0][0]>0){
                        const optionS = document.createElement('option');
                        optionS.value = "S";
                        optionS.textContent= remera.talle[0][1];

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionS);
                        }

                        if(remera.talle[1][0]>0){
                        const optionM = document.createElement('option');
                        optionM.value = "M";
                        optionM.textContent= remera.talle[1][1];

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionM);
                        }

                        if(remera.talle[2][0]>0){
                        const optionL = document.createElement('option');
                        optionL.value = "L";
                        optionL.textContent= remera.talle[2][1];

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionL);
                        }

                        if(remera.talle[3][0]>0){
                        const optionXL = document.createElement('option');
                        optionXL.value = "XL";
                        optionXL.textContent= remera.talle[3][1];

                        //HIJOS DEL SELECTOR DE TALLES SELECT
                        select.appendChild(optionXL);
                        }


                    
                    //DIV FINAL DEL CARD CON EL BOTON AÑADIR
                    const div3 = document.createElement('div');
                    div3.classList.add("input-group-append");
                    

                        //BOTON AÑADIR
                        const aniadir = document.createElement('a');
                        aniadir.classList.add("btn");
                        aniadir.classList.add("btn-primary");
                        aniadir.textContent="AÑADIR  ";
                        

                            //ICONO DEL BOTON AÑADIR
                            const iconoAniadir = document.createElement('i');
                            iconoAniadir.classList.add("fas");
                            iconoAniadir.classList.add("fa-cart-plus");


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
    
    //document.write("</div>");
    //document.write("</section>");
}




seleccionarOrden();

