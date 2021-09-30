/*
function traerProductos(){

    fetch("buzos.json")
        .then( response => response.json())
        .then( data => productos = data.buzos); 

}
*/
document.addEventListener('DOMContentLoaded', () => { 
    
    generarModalCarrito();
    

})

//MODELO

const productos=[
    {"nombre":"Buzo amarillo - saturno","id":"23","fecha":20200127,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":0,"talle":"XL"}],"precio":2500,"img":["../assets/img/buzoAmarilloPlaneta.png", "buzoAmarilloPlaneta"]},
    {"nombre":"Buzo gris - canguro vintage","id":"24","fecha":20200129,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":0,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2600,"img":["../assets/img/buzoGrisCapucha.png", "buzoGrisCapucha"]},
    {"nombre":"Buzo negro - what?","id":"25","fecha":20210129,"stock":true,"talle":[{"stock":0,"talle":"S"}, {"stock":0,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2350,"img":["../assets/img/buzoNegroWhat.png", "buzoNegroWhat"]},
    {"nombre":"Buzo gris - ying y yang","id":"26","fecha":20210321,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2250,"img":["../assets/img/buzoGrisYing.png","buzoGrisYing"]},
    {"nombre":"Buzo rayado - azul y marrón","id":"27","fecha":20210321,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2230,"img":["../assets/img/buzoAzulRayado.png","buzoAzulRayado"]},
    {"nombre":"Buzo gris - moon","id":"28","fecha":20190321,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"}, {"stock":0,"talle":"XL"}],"precio":2130,"img":["../assets/img/buzoGrisLuna.png","buzoGrisLuna"]},
    {"nombre":"Buzo sol- bordo","id":"29","fecha":20190221,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":0,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2050,"img":["../assets/img/buzoSolBordo.png","buzoSolBordo"]},
    {"nombre":"Buzo gris - calavera","id":"30","fecha":20190205,"stock":true,"talle":[{"stock":1,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2200,"img":["../assets/img/buzoGrisCalavera.png","buzoGrisCalavera"]},
    {"nombre":"Buzo lila - liso","id":"31","fecha":20210205,"stock":true,"talle":[{"stock":0,"talle":"S"}, {"stock":"0","talle":"M"}, {"stock":1,"talle":"L"}, {"stock":0,"talle":"XL"}],"precio":2250,"img":["../assets/img/buzoLilaLiso.png","buzoLilaLiso"]},
    {"nombre":"Buzo negro - mangas cuadros","id":"32","fecha":20210321,"stock":true,"talle":[{"stock":0,"talle":"S"}, {"stock":1,"talle":"M"}, {"stock":1,"talle":"L"}, {"stock":1,"talle":"XL"}],"precio":2250,"img":["../assets/img/buzoNegroBlanco.png","buzoNegroBlanco"]}
]





console.log(productos)




//CONTROLADOR



//FUNCIoN PARA ORDENAR LOS PRODUCTOS POR FECHA


function ordenarProductosFecha(productos){

    //creo una variable donde se van a cagar los productos por oden de fecha

    let productosOrdenFecha = [];

    //guardamos una copia del array de productos traidos del json

    let productosCopia = productos.slice();
    console.log(productosCopia)


    // creo una variable que va a ser un array con solo las fechas de cada producto, la cargamos mediante un map
    
    let arrayProductosOrdenFecha = productosCopia.map((producto) => {return producto.fecha} );

    //ordeno el array con las fechas
    
    let comparar = (a,b) => {return a - b};
    
    arrayProductosOrdenFecha.sort(comparar);

    // recorro el array con las fechas de los productos en orden

    for(fecha of arrayProductosOrdenFecha){
        
        //guardo el indice donde se encuentra el producto que coincide con la fecha

        let indice = productosCopia.findIndex( (productoCopia) => { if(productoCopia.fecha==fecha){ 

            return productoCopia 

        } } );

        //guardo en el array de productos por orden de fecha que cree al principio de la funcion, el producto del array que coincida con el indice

        productosOrdenFecha.unshift(productosCopia[indice]);

        /*Luego de guardarlo, elimino ese producto del array copia ya que 
        el metodo findIndex devuelve el indice del primer elemto que coincida y si hay productos con la misma fecha
        se va a guardar siempre el primero que encuentre (resumen: lo elimino para que no se guarden elementos repetidos)*/

        productosCopia.splice(indice,1);
    
    }

    //retornamos el nuevo array de productos ordenados por fecha  

    return productosOrdenFecha;

}




// FUNCION PARA ORDENAR LOS PRODUCTOS POR PRECIO --------------------------------------------------

function ordenarProductosPrecio(productos, orden){

    //creo una variable donde se van a cagar los productos por orden de precio

    //variable de menor a mayor
    let productosOrdenPrecioAsc = [];
    //variable de mayor a menor
    let productosOrdenPrecioDesc = [];

    //guardamos una copia del array de productos traidos del json

    let productosCopia = productos.slice();

    // creo una variable que va a ser un array con solo los precios de cada producto, la cargamos mediante un map
    
    let arrayProductosOrdenPrecio = productosCopia.map((producto) => {return producto.precio} );

    //ordeno el array con los precios
    
    let comparar = (a,b) => {return a - b};
    
    arrayProductosOrdenPrecio.sort(comparar);

    // recorro el array con los precios de los productos en orden

    for(precio of arrayProductosOrdenPrecio){
        
        //guardo el indice donde se encuentra el producto que coincide con el precio del array con precios ordenados

        let indice = productosCopia.findIndex( (productoCopia) => { if(productoCopia.precio==precio){ 

            return productoCopia 

        } } );

        //guardo en el array de productos por orden de precio que cree al principio de la funcion, el producto del array que coincida con el indice

        //mayor a menor
        productosOrdenPrecioDesc.unshift(productosCopia[indice]);
        //menor a mayor
        productosOrdenPrecioAsc.push(productosCopia[indice]);

        /*Luego de guardarlo, elimino ese producto del array copia ya que 
        el metodo findIndex devuelve el indice del primer elemto que coincida y si hay productos con la misma fecha
        se va a guardar siempre el primero que encuentre (resumen: lo elimino para que no se guarden elementos repetidos)*/

        productosCopia.splice(indice,1);
    
    }

    //retornamos el nuevo array de productos ordenados por precio  

    if(orden == "asc"){

        return productosOrdenPrecioAsc;

    }

    if(orden == "des"){

        return productosOrdenPrecioDesc;

    }

    if(orden != "asc" && orden != "des"){

        console.log("ingrese correctamente el parametro indicador del ordenamiento por precio");

    }
    

}



//VISTA 

//funcionar para mostrar los productos en el html

function mostrarProductos(productos){

    //capturamos la row donde se van a mostrar los productos

    let rowProductos = document.querySelector(".buzos__row");

    //recorremos con for each para ir generando la vista para cada elemento del array

    productos.forEach((producto) => {

        // card
        let col = document.createElement("div");
        col.classList.add("col-lg-4", "col-sm-6", "col-12");
        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        img.classList.add("card-img-top", "img-fluid");
        img.src=producto.img[0];
        img.alt=producto.img[1];
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let tituloProducto= document.createElement("h5");
        tituloProducto.classList.add("card-title");
        tituloProducto.textContent=producto.nombre;
        let precioProducto = document.createElement("p");
        precioProducto.classList.add("card-text");
        precioProducto.textContent=`$${producto.precio}`;
        let fechaProducto = document.createElement("p");
        fechaProducto.classList.add("card-text")
        fechaProducto.textContent=`Fecha de ingreso: ${convertirFechaTexto(producto.fecha)}`;
        let hr = document.createElement("hr");

        //SELECTOR DE TALLES
        let divSelect = document.createElement("div");
        divSelect.classList.add("input-group");
        let select = document.createElement("select");
        select.classList.add("custom-select", "selectCardProductos");
        let optionSelected = document.createElement("option");
        optionSelected.selected = "selected";
        optionSelected.textContent = "Talle";
        select.appendChild(optionSelected);

        //OPCIONES DEL SELECTOR DE TALLE - RECORREMOS EL ARRAY DE TALLES PARA CREAR LAS OPCIONES SEGUN LOS TALLES QUE ESTEN DISPONIBLES

        producto.talle.forEach((talle) => {

            if(talle.stock > 0){

                const option = document.createElement('option');
                option.value = talle.talle;
                option.classList.add=`talle${talle.talle}`;
                option.textContent= talle.talle;
                select.appendChild(option)
            } 
        })

        //div con el boton para añadir al carrito

        let divAniadir = document.createElement("div");
        divAniadir.classList.add("input-group-append");

        let botonAniadir = document.createElement("button");
        botonAniadir.classList.add("btn", "btn-primary", "btn-aniadirCarrito");
        botonAniadir.textContent = "AÑADIR  ";
        botonAniadir.addEventListener('click', () => {
            
            agregarAlCarrito(producto, select)
            
            generarModalCarrito();

        });
        
        let iconBotonAniadir = document.createElement("i");
        iconBotonAniadir.classList.add("fas", "fa-cart-plus");

        // append  - visual
        
        rowProductos.appendChild(col);

            col.appendChild(card);

                card.appendChild(img);

                card.appendChild(cardBody);

                    cardBody.appendChild(tituloProducto);

                    cardBody.appendChild(precioProducto);

                    cardBody.appendChild(fechaProducto);

                    cardBody.appendChild(hr);

                    cardBody.appendChild(divSelect);

                        divSelect.appendChild(select);

                        divSelect.appendChild(divAniadir);

                            divAniadir.appendChild(botonAniadir);

                                botonAniadir.appendChild(iconBotonAniadir);

                            //</divAniadir>

                        //</divSelect>

                    //</cardBody>

                //</card>

            //</col>

        //</rowProductos>

    })

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



//funcion para seleccionar orden puesto en onchange de select .ordenSeccion



function seleccionarOrden(productos){
    

    let rowProductos = document.querySelector(".buzos__row");

    rowProductos.innerHTML="";

    let select = document.querySelector(".selectOrdenProductos");
    
    switch(select.value){

        case 'date':
            getPaginacion(ordenarProductosFecha(productos));
            break;
            
        case 'price-asc':
            getPaginacion(ordenarProductosPrecio(productos, "asc"));
            break;

        case 'price-des':
            getPaginacion(ordenarProductosPrecio(productos, "des"));
            break;

    }
    
}

seleccionarOrden(productos);



function getPaginacion(productos){

    let paginaDefault = productos.slice(0,9);
    mostrarProductos(paginaDefault);

    //capturamos la row de los productos

    let rowProductos = document.querySelector(".buzos__row");

    //capturamos el ul donde vamos a meter los li con los a a cada page

    let paginacion = document.querySelector(".paginacion--ul");
    paginacion.innerHTML="";

    //calculamos cuantas pages va a haber segun cuantos productos tenga el array

    let numeroDePages = Math.ceil(productos.length/9);

    //creamos una copia del array parametro para no modificarlo

    let productosPaginacion = productos.slice();

    let linkPrevio = document.createElement("a");

    //linkActual.classList.add("page-link", "paginacion__nav__ul__li__paginaActiva");

    let footer = document.querySelector(".footer")

    //ciclo para crear las pages

    for(let i=1; i <= numeroDePages; i++){

        let a = i * 9;

        let liLink = document.createElement("li");
        liLink.classList.add("page-item");

        let linkActual = document.createElement("a");
        linkActual.classList.add("page-link");
        linkActual.textContent = i;

        linkActual.addEventListener('click', ()=>{

            rowProductos.innerHTML = "";

            linkPrevio.classList.remove("paginacion__nav__ul__li__paginaActiva");

            linkPrevio=linkActual;

            linkActual.classList.add("paginacion__nav__ul__li__paginaActiva");

            if(productosPaginacion.slice(a-9,a).length<7){

                footer.removeAttribute("data-aos");

            }else{

                footer.setAttribute("data-aos", "fade-up");
            }

            mostrarProductos(productosPaginacion.slice(a-9,a));
            
        })

        paginacion.appendChild(liLink);

        liLink.appendChild(linkActual);

    }

}

function agregarAlCarrito(producto, select){

    let productoJSON = JSON.stringify(producto);

    let talleSeleccionado = select.value;

    let productoEnCarrito = JSON.parse(productoJSON);

    productoEnCarrito.talle.length = 0;

    switch(talleSeleccionado){

        case 'Talle':
            alert("Debe seleccionar un talle");
            return;

        case 'S':
            productoEnCarrito.talle.push({"stock":1, "talle":"S"})
            break;

        case 'M':
            productoEnCarrito.talle.push({"stock":1, "talle":"M"})
            break;

        case 'L':
            productoEnCarrito.talle.push({"stock":1, "talle":"L"})
            break;

        case 'XL':
            productoEnCarrito.talle.push({"stock":1, "talle":"XL"})
            break

    }
        
    if(typeof(localStorage[`${producto.id}`]) == "undefined"){

        console.log("se agrega")
        localStorage.setItem(producto.id, JSON.stringify(productoEnCarrito));

    }else{

        let productoEnCarritoCargado = JSON.parse(localStorage[`${producto.id}`]);

        for(let y=0; y<productoEnCarritoCargado.talle.length; y++){
            
            if( productoEnCarritoCargado.talle[y].talle == productoEnCarrito.talle[0].talle ){

                productoEnCarrito.talle[0].stock = productoEnCarritoCargado.talle[y].stock + 1;

                productoEnCarritoCargado.talle.splice(y,1);

                productoEnCarrito.talle = productoEnCarrito.talle.concat(productoEnCarritoCargado.talle);

                break
            }

            if( y == (productoEnCarritoCargado.talle.length - 1) ){

                productoEnCarrito.talle = productoEnCarrito.talle.concat(productoEnCarritoCargado.talle);
                
            }
        }

        localStorage.removeItem(producto.id);
        localStorage.setItem(producto.id, JSON.stringify(productoEnCarrito));
    }

    mensajeAniadidoCarrito();
}

//FUNCION PARA ELIMINAR DEL CARRITO
function eliminarDelCarrito(producto){

    let productoEnStorage = JSON.parse(localStorage[producto.id]);

    productoEnStorage.talle[0].stock -= 1;

    if(productoEnStorage.talle[0].stock == 0){

        productoEnStorage.talle.splice(0,1);

    }

    if(productoEnStorage.talle.length==0){

        localStorage.removeItem(producto.id);

    }else{

        localStorage.removeItem(producto.id);

        localStorage.setItem(producto.id, JSON.stringify(productoEnStorage));

    }

}

// FUNCION PARA CREAR UN MENSAJE DE EXITO EN CASO DE QUE EL PRODUCTO SEA AÑANIDAD AL LOCALSTORAGE
function mensajeAniadidoCarrito(){

    let mensajeAniadidoCarrito = document.querySelector(".mensajeAniadidoCarrito");

    mensajeAniadidoCarrito.innerHTML="";

    let mensaje = document.createElement('span');

    mensaje.textContent= "El producto fue añadido al carrito con éxito!";
   
    mensajeAniadidoCarrito.appendChild(mensaje);
    mensajeAniadidoCarrito.style.display="block";
    mensajeAniadidoCarrito.style.backgroundColor="transparent";
    mensajeAniadidoCarrito.style.color="#1a1919";
    mensajeAniadidoCarrito.style.padding="35px 0px";
    mensajeAniadidoCarrito.style.border="solid green 0.8px";
    mensajeAniadidoCarrito.style.fontSize="18px";
    mensajeAniadidoCarrito.style.textAlign="center";

    setTimeout( () => {mensajeAniadidoCarrito.style.display="none";}, 1400 );

}

//FUNCION PARA CREAR EL MODAL EN EL ICONO DEL CARRITO DEL HEADER

//MODAL DEL CARRITO

let carritoIcon = document.querySelector(".header__row__div__nav__div__ul__li__nav-link--icon");

let contadorCarrito = document.createElement("div");

function generarModalCarrito(){

    let cantidadDeProductosEnStorage = 0;

    let modalCarrito = document.querySelector(".modalCarrito__div__modalContent");

    modalCarrito.innerHTML = "";

    let tituloModal = document.createElement("h3");

    tituloModal.style.textAlign="center";

    tituloModal.textContent="TUS PRODUCTOS";

    let divHrTitutloModal = document.createElement("div");

    let hrTituloModal = document.createElement("hr");

    let subTotalCarritoNum = 0;

     //append titulo del modal

     modalCarrito.appendChild(tituloModal);

     modalCarrito.appendChild(divHrTitutloModal);

         divHrTitutloModal.appendChild(hrTituloModal);

     //</divHr>

    for(let i = 0; i < localStorage.length; i++){

        let key = localStorage.key(i);

        let productoEnStorage = JSON.parse(localStorage[key]);

        let totalProductoNum = 0;

        let hr = document.createElement("hr");

        let divContenedorProducto = document.createElement("div");

        let bodyModalProducto = document.createElement("div");

        bodyModalProducto.classList.add("modalCarrito__div__modalContent__div__bodyModalCarrito");

        let imgProducto = document.createElement("img");

        imgProducto.classList.add("img-fluid", "modalCarrito__div__modalContent__div__bodyModalCarrito__imgModalCarrito");

        imgProducto.src = productoEnStorage.img[0];

        imgProducto.alt = productoEnStorage.img[1];

        let descripcionProducto = document.createElement("div");

        let nombreProducto = document.createElement("p");

        nombreProducto.textContent = productoEnStorage.nombre;

        let precioProducto = document.createElement("p");

        productoEnStorage.talle.forEach( (talle) => {

            let cantidad = document.createElement("p");

            cantidad.textContent = `Cantidad: ${talle.stock}, Talle: ${talle.talle}`;

            descripcionProducto.appendChild(cantidad);

            totalProductoNum = talle.stock * productoEnStorage.precio;

            cantidadDeProductosEnStorage += talle.stock;

        } )

        precioProducto.textContent = `$${productoEnStorage.precio} c/u, Total: $${totalProductoNum}`;

        subTotalCarritoNum += totalProductoNum;

        let buttonX = document.createElement("button");

        buttonX.classList.add("btn-primary");

        buttonX.classList.add("buttonXmodalCarrito");

        buttonX.type="button";

        buttonX.textContent="X";

        buttonX.style.justifyContent="right";

        buttonX.addEventListener('click', () => { 

            eliminarDelCarrito(productoEnStorage);
            generarModalCarrito();
        
        });

        /*
        buttonX.addEventListener("click",eliminarElementoCarrito);
        buttonX.addEventListener("click",refreshFooterModal)
        */

        //append

        modalCarrito.appendChild(divContenedorProducto);

            divContenedorProducto.appendChild(bodyModalProducto);

                bodyModalProducto.appendChild(imgProducto);

                bodyModalProducto.appendChild(descripcionProducto);

                    descripcionProducto.appendChild(nombreProducto);

                    descripcionProducto.appendChild(precioProducto);

                    descripcionProducto.appendChild(buttonX);

                //</descripcionProducto>
                
            //</bodyModalProducto>
            
            divContenedorProducto.appendChild(hr);

        //</divContenedorProducto>   
   
    }

    //FOOTER DEL CARRITO
        
    let footerCarrito = document.createElement("div");

    footerCarrito.classList.add("modalCarrito__div__modalContent__modalCarritoFooter");

    let subTotalCarrito = document.createElement("p");

    subTotalCarrito.textContent = `SUBTOTAL: $${subTotalCarritoNum}`;

    subTotalCarrito.style.fontWeight = "bold";

    let buttonVerCarrito = document.createElement("button");

    buttonVerCarrito.classList.add("btn", "btn-outline-success", "my-2", "my-sm-0");

    buttonVerCarrito.type = 'submit';
    
    let linkVerCarrito = document.createElement("a");

    linkVerCarrito.href = 'carrito.html';

    linkVerCarrito.textContent = "VER CARRITO";

    let hr = document.createElement("hr");

    //append

    modalCarrito.appendChild(footerCarrito);

        footerCarrito.appendChild(subTotalCarrito);

        footerCarrito.appendChild(hr);

        footerCarrito.appendChild(buttonVerCarrito);

            buttonVerCarrito.appendChild(linkVerCarrito);

        //</buttonVerCarrito>    

    //</footerCarrito>

    //CONTADOR DEL CARRITO

    agregarContadorAlCarrito(cantidadDeProductosEnStorage);     
}


//FUNCION PARA AGREGAR CONTADOR AL CARRITO, ESTA FUNCION SOLO SE EJECUTARA DENTRO DE LA FUNCION QUE GENERA EL MODAL EN EL HEADER

function agregarContadorAlCarrito(cantidadDeProductosEnStorage){

    let numContadorCarrito = cantidadDeProductosEnStorage;
    
    //vista
    carritoIcon.style.position="relative";
    contadorCarrito.style.borderRadius="50px";
    contadorCarrito.style.backgroundColor="#6F5CF3";
    contadorCarrito.style.width="17px";
    contadorCarrito.style.height="17px";
    contadorCarrito.style.position="absolute";
    contadorCarrito.style.top="22px";
    contadorCarrito.style.left="22px";
    contadorCarrito.style.color="white";
    contadorCarrito.style.textAlign="center";
    contadorCarrito.style.fontSize="12px";
    contadorCarrito.style.display="inline-block";
    contadorCarrito.textContent=numContadorCarrito;
   
    if(numContadorCarrito > 5){

        contadorCarrito.style.fontSize="11px";
    
        contadorCarrito.textContent=5+"+";
        
    }

    if(localStorage.length == 0){

        contadorCarrito.style.display="none";

    }

    carritoIcon.append(contadorCarrito);
    
}

