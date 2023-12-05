/* Cuando trabajamos con objetos, debo tener en cuenta
que un objeto se construye teniendo en cuenta una clase */

let inputBusqueda = document.getElementById("inputBusqueda");
class Automovil {
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Jeep", "Rubicon", 130000000, 2022, 15400, "Pitalito-Huila", "./css/img/rubicon.jpg");
let auto2 = new Automovil("Mazda", "3", 53000000, 2013, 62812, "Medellín", "./css/img/mazda.jpg");
let auto3 = new Automovil("Jeep", "Fortuner", 185000000, 2022, 6500, "Bogotá-DC", "./css/img/rubicon.jpg");
let auto4 = new Automovil("Bettle", "CX-50", 100000000, 2020, 8600, "Barranquilla", "./css/img/bettle2.jpg");
let auto5 = new Automovil("Toyota", "Corolla Cross", 159000000, 2024, 3700, "Bogotá", "./css/img/toyota2.jpg");
/* 

/* Función  para cargar el vehículo*/
cargarVehiculo(auto1);
cargarVehiculo(auto2);
cargarVehiculo(auto3);
cargarVehiculo(auto4);
cargarVehiculo(auto5);

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("inputBusqueda").value;
    if (event.key == "Enter") {
        boxProductos.innerHTML = "";
        let inputUser = busqueda.toLowerCase();
        if (inputUser == "mazda") {
            cargarVehiculo(auto2);
            cargarVehiculo(auto4);
        }  
        else if (inputUser == "toyota") {
            cargarVehiculo(auto1);
            cargarVehiculo(auto3);
            cargarVehiculo(auto5);
        } 
    }     
});
/* Función  con parámetro*/
function cargarVehiculo(auto) {
    let boxProductos = document.getElementById("boxProductos");

    /* Caja para el producto */
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    /* Caja para la imagen */
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-auto");

    /* Caja para la información */
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");
    /* Precio */
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);
    let txtNodePrecio = document.createTextNode("$" + Intl.NumberFormat("de-DE").format(auto.precio));
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");
    /* año */
    let anyo = document.createElement("label");
    boxInfo.appendChild(anyo);
    let txtNodeAnyo = document.createTextNode(auto.anyo + " · ");
    anyo.appendChild(txtNodeAnyo);
    anyo.setAttribute("class", "info-anyo");
    /* Kilometros */
    let kilometros = document.createElement("label");
    boxInfo.appendChild(kilometros);
    let kilometrosStr = Intl.NumberFormat("de-DE").format(auto.kilometros);
    let txtNodeKilometros = document.createTextNode(kilometrosStr + " km" + " · ");

    kilometros.appendChild(txtNodeKilometros);
    kilometros.setAttribute("class", "info-kilometros");
    /* Ciudad  */
    let ciudad = document.createElement("label");
    boxInfo.appendChild(ciudad);
    let txtNodeCiudad = document.createTextNode(auto.ciudad);
    ciudad.appendChild(txtNodeCiudad);
    ciudad.setAttribute("class", "info-ciudad");

    /* ícono corazón */
    let boxCorazon = document.createElement("div");
    boxImg.appendChild(boxCorazon);
    let iconoCorazon = document.createElement("i");
    boxCorazon.appendChild(iconoCorazon);
    boxCorazon.setAttribute("class", "box-corazon");
    iconoCorazon.setAttribute("class", "icon-corazon fa-regular fa-heart");

    /* Línea divisora */
    let lineaDiv = document.createElement("div");
    boxProducto.appendChild(lineaDiv);
    lineaDiv.setAttribute("class", "linea-div");
}

/* FILTROS */
cargarFiltro();

function cargarFiltro() {
    
    mainContent.appendChild(boxFiltro);
    boxFiltro.setAttribute("class", "box-filtro");
}

/* Toggle */
let boxToggle = document.getElementById("boxToggle");
let buttonToggle = document.getElementById("buttonToggle");

boxToggle.addEventListener("click", () => {
    if (boxToggle.classList.contains("box-toggle-off")) {
        boxToggle.classList.add("box-toggle-on");
        boxToggle.classList.remove("box-toggle-off");
        buttonToggle.classList.add("button-toggle-on");
        buttonToggle.classList.remove("button-toggle-off");
    }
    else {
        boxToggle.classList.remove("box-toggle-on");
        boxToggle.classList.add("box-toggle-off");
        buttonToggle.classList.remove("button-toggle-on");
        buttonToggle.classList.add("button-toggle-off");
    }
});

// let inputBusqueda = document.getElementById('inputBusqueda');

// class Automovil {
//     constructor(marca, modelo, precio, año, kms, direccion, imagen){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.precio = precio;
//         this.año = año;
//         this.kms = kms;
//         this.direccion = direccion;
//         this.imagen = imagen;
//     }
// };

// let img1 = "./css/img/rubicon.jpg";
// let img2 = "./css/img/mazda.jpg";
// let img3 = "./css/img/toyota2.jpg";
// let img4 = "./css/img/bettle2.jpg";
// let auto1 = new Automovil("Jeep", "Rubicon", 150000000, 2019, 51000, "Pitalito - Huila", img1 );
// let auto2 = new Automovil("Mazda", "6", 243000000, 2023, 0, "Bogotá DC", img2 );
// let auto3 = new Automovil("Toyota", "xl", 200000000, 2023, 12000, "Cali", img3 );
// let auto4 = new Automovil("Bettle", "Clasic", 134000000, 2023,5000, "Medellín", img4 );

// let autos = [auto1, auto2, auto3, auto4];

//     cargarVehiculo(auto1);
//     cargarVehiculo(auto2);
//     cargarVehiculo(auto3);
//     cargarVehiculo(auto4);



// function cargarVehiculo(auto){

//     let mainContent = document.getElementById("mainContent");
//     //caja producto 
//     let boxProducto = document.createElement("div");
//     mainContent.appendChild(boxProducto);
//     boxProducto.setAttribute("class", "box-producto");
//     //caja imagen
//     let boxImg = document.createElement("div");
//     boxProducto.appendChild(boxImg);
//     boxImg.setAttribute("class", "box-img");

//     let imgAuto = document.createElement("img");
//     boxImg.appendChild(imgAuto);
//     imgAuto.setAttribute("src", auto.imagen);
//     imgAuto.setAttribute("class","img-auto");

//     let icon = document.createElement("i");
//     boxImg.appendChild(icon);
//     icon.setAttribute("class","icon-heart fa-regular fa-heart");

//     //caja información
//     let boxInfo = document.createElement("div");
//     boxProducto.appendChild(boxInfo);
//     boxInfo.setAttribute("class", "box-info");

//     let marca = document.createElement("label");
//     boxInfo.appendChild(marca);
//     let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
//     marca.appendChild(txtNodeMarca);
//     marca.setAttribute("class", "marca");

//     ///precio
//     let precio = document.createElement("label");
//     boxInfo.appendChild(precio);

//     //línea para convertir el número a formato de precio con . en los miles
//     let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);


//     let txtNodePrecio = document.createTextNode("$ "+ precioStr);
//     precio.appendChild(txtNodePrecio);
//     precio.setAttribute("class", "precio");

//     let año = document.createElement("label");
//     boxInfo.appendChild(año);
//     let txtNodeAño = document.createTextNode(auto.año + " ");
//     año.appendChild(txtNodeAño);
//     año.setAttribute("class", "año");

//     let kms = document.createElement("label");
//     boxInfo.appendChild(kms);
//     let kmStr = Intl.NumberFormat("de-DE").format(auto.kms);
//     let txtNodeKm = document.createTextNode(kmStr +" km ");
//     kms.appendChild(txtNodeKm);
//     kms.setAttribute("class", "kms");

//     let direccion = document.createElement("label");
//     boxInfo.appendChild(direccion);
//     let txtNodeDir = document.createTextNode(auto.direccion)
//     direccion.appendChild(txtNodeDir);
//     direccion.setAttribute("class", "direccion");


// };


// inputBusqueda.addEventListener("input", function(event) {
//     let userInput = event.target.value.toLowerCase();
//     mainContent.innerHTML = ''; // Limpia el contenido anterior

//     for (let auto of autos) {
//         if (auto.marca.toLowerCase().startsWith(userInput)) {
//             // Crea la caja de producto para el auto correspondiente
        
//             let mainContent = document.getElementById("mainContent");
//             //caja producto
//             let boxProducto = document.createElement("div");
//             mainContent.appendChild(boxProducto);
//             boxProducto.setAttribute("class", "box-producto");
//             //caja imagen
//             let boxImg = document.createElement("div");
//             boxProducto.appendChild(boxImg);
//             boxImg.setAttribute("class", "box-img");
        
//             let imgAuto = document.createElement("img");
//             boxImg.appendChild(imgAuto);
//             imgAuto.setAttribute("src", auto.imagen);
//             imgAuto.setAttribute("class","img-auto");
        
//             let icon = document.createElement("i");
//             boxImg.appendChild(icon);
//             icon.setAttribute("class","icon-heart fa-regular fa-heart");
        
//             //caja información
//             let boxInfo = document.createElement("div");
//             boxProducto.appendChild(boxInfo);
//             boxInfo.setAttribute("class", "box-info");
        
//             let marca = document.createElement("label");
//             boxInfo.appendChild(marca);
//             let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
//             marca.appendChild(txtNodeMarca);
//             marca.setAttribute("class", "marca");
        
//             ///precio
//             let precio = document.createElement("label");
//             boxInfo.appendChild(precio);
        
//             //línea para convertir el número a formato de precio con . en los miles
//             let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
        
        
//             let txtNodePrecio = document.createTextNode("$ "+ precioStr);
//             precio.appendChild(txtNodePrecio);
//             precio.setAttribute("class", "precio");
        
//             let año = document.createElement("label");
//             boxInfo.appendChild(año);
//             let txtNodeAño = document.createTextNode(auto.año + " ");
//             año.appendChild(txtNodeAño);
//             año.setAttribute("class", "año");
        
//             let kms = document.createElement("label");
//             boxInfo.appendChild(kms);
//             let kmStr = Intl.NumberFormat("de-DE").format(auto.kms);
//             let txtNodeKm = document.createTextNode(kmStr +" km ");
//             kms.appendChild(txtNodeKm);
//             kms.setAttribute("class", "kms");
        
//             let direccion = document.createElement("label");
//             boxInfo.appendChild(direccion);
//             let txtNodeDir = document.createTextNode(auto.direccion)
//             direccion.appendChild(txtNodeDir);
//             direccion.setAttribute("class", "direccion");

//         } 
//     }});
        
        