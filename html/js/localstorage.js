function enviar(){
    let val1, val2, val3
    val1 = document.getElementById("p1").value
    val2 = document.getElementById("p2").value
    val3 = document.getElementById("p3").value
    
    //guardar localmente
    localStorage.setItem("p1",val1)
    localStorage.setItem("p2",val2)
    localStorage.setItem("p3",val3)
    //enviar al archivo respuesta.html   
    window.location="respuesta.html"
}
