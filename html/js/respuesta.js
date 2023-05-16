
function datos(){
    let r1, r2, r3
         //recuperando el dato de localstorage
         r1=localStorage.getItem("p1")  
         r2=localStorage.getItem("p2")  
         r3=localStorage.getItem("p3")   
         //enviarlo a la vista
        document.getElementById("respuesta").innerHTML = r1  
        document.getElementById("respuesta2").innerHTML = r2  
        document.getElementById("respuesta3").innerHTML = r3
}
    //llamar a la funcion para que se ejecute apenas redirecciona a respuesta.hml
    datos()

    