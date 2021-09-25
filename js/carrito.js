

// ARMAR LA PRESENTACION DE PRODUCTOS DEL CARRITO ALMACENADOS EN LOCALSTORAGE
let productosCarrito = document.querySelector(".carrito__row__tusProductos");
generarCarritoHtml();
function generarCarritoHtml(){

    let defaultCarrito="<hr><h3>TUS PRODUCTOS</h3><hr>";
    productosCarrito.innerHTML=defaultCarrito;

    if(localStorage.length==0){

        productosCarrito.innerHTML="";
        let mensajeVacio=document.createElement("h1");
        mensajeVacio.style.textAlign="center";
        mensajeVacio.style.paddingTop="35px";
        mensajeVacio.textContent="Tu carrito está vacío."
        productosCarrito.appendChild(mensajeVacio);
        return

    }

    let subTotal=0;
    for(let i = 0 ; i< localStorage.length; i++){
                
        let clave=localStorage.key(i);
        let item = JSON.parse(localStorage[`${clave}`])
        let divPadre= document.createElement("div");
        let div1 =document.createElement("div");
        div1.classList.add("carrito__row__div__div__productosCarrito");
        let img = document.createElement("img");
        let div2 = document.createElement("div");
        div2.classList.add("carrito__row__div__div__productosCarrito__texto");
        img.src = item.img[0];
        img.alt= item.img[1];
        img.classList.add("img-fluid");
        img.classList.add("carrito__row__div__div__productosCarrito__img");
        let nombre= document.createElement("p");
        nombre.textContent= item.nombre;
        let priceTotal=0;


        let buttonX = document.createElement("button");
        buttonX.classList.add("btn-primary");
        buttonX.classList.add("buttonXCarritoHtml");
        buttonX.type="button";
        buttonX.textContent="X";
        buttonX.style.justifyContent="right";
        buttonX.addEventListener("click",eliminarElementoCarrito);
        buttonX.addEventListener("click",generarCarritoHtml);
        
        let precio=document.createElement("p");
        
        let hr= document.createElement("hr");

        productosCarrito.appendChild(divPadre);

            divPadre.appendChild(div1);

                div1.appendChild(img);

                div1.appendChild(div2);

                for(let talle of item.talle){

                    let cantTalle= document.createElement("p");
                    cantTalle.textContent=`cantidad: ${talle.stock} de talle: ${talle.talle}`;
                    priceTotal += item.precio * talle.stock;

                    div2.appendChild(cantTalle);
                    div2.appendChild(buttonX);
                
                }

                    precio.textContent = `$${item.precio} c/u, total: $${priceTotal}`;
                    subTotal+=priceTotal;

                    div2.appendChild(precio);

            divPadre.appendChild(hr);

    }
    let total=subTotal;
    let footerCarritoHtml = document.createElement("div");
    footerCarritoHtml.classList.add("carrito__row__div__pieCarrito");
    let subTotalDom = document.createElement("p");
    let subTotalText = document.createElement("strong");
    subTotalText.textContent="SUBTOTAL: ";
    let hr = document.createElement("hr");
    subTotalDom.textContent=`$${subTotal}`;

    // COMO SE VE EN EL DOM EL FOOTER CON EL SUBTOTAL DEL CARRITO EN HTML
    productosCarrito.appendChild(footerCarritoHtml);

        footerCarritoHtml.appendChild(subTotalDom);

            subTotalDom.prepend(subTotalText);
        
        footerCarritoHtml.appendChild(hr);


    //PARTE DONDE SE SELECCIONA EL METODO DE ENVIO

    let hEnvio = document.createElement("h5");
    hEnvio.textContent="ENVÍO"
    let hr1 = document.createElement("hr");
    let formEnvio= document.createElement("form");
    let divFormEnvio = document.createElement("div");
    divFormEnvio.classList.add("form-group");

    //OPCION 1 -------------------------------------------------------------------------- DOMICILIO

    let divFormEnvioOp1 = document.createElement("div");
    divFormEnvioOp1.classList.add("custom-control");
    divFormEnvioOp1.classList.add("custom-radio");
    let inputOp1 = document.createElement("input");
    inputOp1.classList.add("custom-control-input");
    inputOp1.type="radio";
    inputOp1.name="customRadio";
    inputOp1.id="customRadio1Carrito";
    inputOp1.addEventListener("change", sumarEnvio);
    let labelOp1= document.createElement("label");
    labelOp1.classList.add("custom-control-label");
    labelOp1.setAttribute("for", "customRadio1Carrito");
    labelOp1.innerHTML="POR CORREO ARGENTINO A <strong>DOMICILIO</strong> (TODO EL PAIS): $500.";


    //OPCION 2 -------------------------------------------------------------------------- SUCURSAL

    let divFormEnvioOp2 = document.createElement("div");
    divFormEnvioOp2.classList.add("custom-control");
    divFormEnvioOp2.classList.add("custom-radio");
    let inputOp2 = document.createElement("input");
    inputOp2.classList.add("custom-control-input");
    inputOp2.type="radio";
    inputOp2.name="customRadio";
    inputOp2.id="customRadio2Carrito";
    inputOp2.addEventListener("change", sumarEnvio);
    let labelOp2= document.createElement("label");
    labelOp2.classList.add("custom-control-label");
    labelOp2.setAttribute("for", "customRadio2Carrito");
    labelOp2.innerHTML="POR CORREO ARGENTINO A <strong>SUCURSAL</strong> (TODO EL PAIS): $500.";


    //OPCION 3 -------------------------------------------------------------------------- DELIVERY

    let divFormEnvioOp3 = document.createElement("div");
    divFormEnvioOp3.classList.add("custom-control");
    divFormEnvioOp3.classList.add("custom-radio");
    let inputOp3 = document.createElement("input");
    inputOp3.classList.add("custom-control-input");
    inputOp3.type="radio";
    inputOp3.name="customRadio";
    inputOp3.id="customRadio3Carrito";
    inputOp3.addEventListener("change", sumarEnvio);
    let labelOp3= document.createElement("label");
    labelOp3.classList.add("custom-control-label");
    labelOp3.setAttribute("for", "customRadio3Carrito");
    labelOp3.textContent="DELIVERY DENTRO DE CÓRDOBA CAPITAL (A COORDINAR): $0.";

    // PUESTO EN EL DOM

    productosCarrito.appendChild(hEnvio);

    productosCarrito.appendChild(hr1);

    productosCarrito.appendChild(formEnvio);

        formEnvio.appendChild(divFormEnvio);

            divFormEnvio.appendChild(divFormEnvioOp1);

                divFormEnvioOp1.appendChild(inputOp1);

                divFormEnvioOp1.appendChild(labelOp1);      
                
                //div

            divFormEnvio.appendChild(divFormEnvioOp2);

                divFormEnvioOp2.appendChild(inputOp2);

                divFormEnvioOp2.appendChild(labelOp2);

            
                //div  
            
            divFormEnvio.appendChild(divFormEnvioOp3);

                divFormEnvioOp3.appendChild(inputOp3);

                divFormEnvioOp3.appendChild(labelOp3);
                
                //div   

    // FINAL DEL CARRITO CON EL TOTAL


    let footerCarritoHtmlTotal = document.createElement("div");
    footerCarritoHtmlTotal.classList.add("carrito__row__div__pieCarrito");
    let pTotal = document.createElement("p");
    pTotal.innerHTML=`<strong>TOTAL: $${total}</strong>`

    function sumarEnvio(){

        total=subTotal;
        if(inputOp1.checked || inputOp2.checked){
            total += 500;
        }
        footerCarritoHtmlTotal.innerHTML="";
        pTotal.innerHTML="";
        pTotal.innerHTML=`<strong>TOTAL: $${total}</strong>`;
        footerCarritoHtmlTotal.appendChild(hr1);
        footerCarritoHtmlTotal.appendChild(pTotal);
    }
        

    //TOTAL PUESTO EN EL DOM

    productosCarrito.appendChild(footerCarritoHtmlTotal);

        footerCarritoHtmlTotal.appendChild(hr1);

        footerCarritoHtmlTotal.appendChild(pTotal);
    
}


// GENERAR EL MODAL DE CARRITO EN EL ICONO DEL HEADER            
let modalCarritoHTML = document.querySelector(".modalCarrito__div__modalContent");
let iconoCarritoHeader = document.querySelector(".header__row__div__nav__div__ul__li__nav-link--icon");
iconoCarritoHeader.addEventListener("click", generarModalCarrito)

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
                        buttonX.addEventListener("click",generarCarritoHtml);
                        
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
}

//GENERAR EL CONTADOR DE PRODUCTOS EN EL CARRITO

let carritoIcon = document.querySelector(".header__row__div__nav__div__ul__li__nav-link--icon");
let contadorCarrito = document.createElement("div");
agregarContadorCarrito();
carritoIcon.appendChild(contadorCarrito);

function agregarContadorCarrito(){
    let numContadorCarrito=0;
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


    for(let i = 0 ; i< localStorage.length; i++){
    
        let key=localStorage.key(i);
        let accesorio = JSON.parse(localStorage[`${key}`])
        for(talle of accesorio.talle){

            numContadorCarrito+=talle.stock; 
        }

    }
    if(numContadorCarrito > 5){

        contadorCarrito.style.fontSize="11px"
    
        contadorCarrito.textContent=5+"+";
        return;
    }
    contadorCarrito.textContent=numContadorCarrito;
    
    if(localStorage.length==0){
        contadorCarrito.style.display="none";
    }
}

//funcion para eliminar un elemento del carrito y el localstorage
function eliminarElementoCarrito(){

    for(let i = 0 ; i< localStorage.length; i++){
                
        let clave=localStorage.key(i);
        let item = JSON.parse(localStorage[`${clave}`]);
        if(item.talle[item.talle.length-1].stock>0){

            item.talle[item.talle.length-1].stock-=1;
            

            localStorage.setItem(clave, JSON.stringify(item)); 
            if(item.talle[item.talle.length-1].stock==0){


               
                item.talle.splice(item.talle.length-1,1);
                localStorage.setItem(clave, JSON.stringify(item)); 
                if(item.talle.length==0){

                    localStorage.removeItem(`${item.id}`);
                    

                    
                }
            }
            

        }

        agregarContadorCarrito();
    }

}
