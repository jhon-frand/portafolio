let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
};

inputBusqueda.addEventListener("keydown", function(event){
    if (event.key == "Enter"){ 
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
    imgAuto.setAttribute("src", "css/img/stalk.jpg");
    imgAuto.setAttribute("class","img-auto");

    //caja información
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");
}

});
