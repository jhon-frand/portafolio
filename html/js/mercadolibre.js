let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo, precio, año, kms, direccion, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.año = año;
        this.kms = kms;
        this.direccion = direccion;
        this.imagen = imagen;
    }
};

let auto1 = new Automovil("Jeep", "Rubicon", 150000000, 2019, 51000, "Pitalito - Huila", "css/img/rubicon.jpg" );
let auto2 = new Automovil("Mazda", "6", 243000000, 2023, 0, "Bogotá DC", "css/img/mazda.jpg" );
let auto3 = new Automovil("Toyota", "xl", 200000000, 2023, 12000, "Cali", "css/img/toyota2.jpg" );
let auto4 = new Automovil("Bettle", "Clasic", 134000000, 2023,5000, "Medellín", "css/img/bettle2.jpg" );


    cargarVehiculo(auto1);
    cargarVehiculo(auto2);
    cargarVehiculo(auto3);
    cargarVehiculo(auto4);

function cargarVehiculo(auto){

 // if (event.key == "Enter"){ 
    let mainContent = document.getElementById("mainContent");
    //caja producto
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
    //caja imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");

    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class","img-auto");

    let icon = document.createElement("i");
    boxImg.appendChild(icon);
    icon.setAttribute("class","icon-heart fa-regular fa-heart");

    //caja información
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto.marca + " " + auto.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class", "marca");

    ///precio
    let precio = document.createElement("label");
    boxInfo.appendChild(precio);

    //línea para convertir el número a formato de precio con . en los miles
    let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);


    let txtNodePrecio = document.createTextNode("$ "+ precioStr);
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class", "precio");

    let año = document.createElement("label");
    boxInfo.appendChild(año);
    let txtNodeAño = document.createTextNode(auto.año + " ");
    año.appendChild(txtNodeAño);
    año.setAttribute("class", "año");

    let kms = document.createElement("label");
    boxInfo.appendChild(kms);
    let kmStr = Intl.NumberFormat("de-DE").format(auto.kms);
    let txtNodeKm = document.createTextNode(kmStr +" km ");
    kms.appendChild(txtNodeKm);
    kms.setAttribute("class", "kms");

    let direccion = document.createElement("label");
    boxInfo.appendChild(direccion);
    let txtNodeDir = document.createTextNode(auto.direccion)
    direccion.appendChild(txtNodeDir);
    direccion.setAttribute("class", "direccion");
// }

};
inputBusqueda.addEventListener("click", function(event){
   
});
