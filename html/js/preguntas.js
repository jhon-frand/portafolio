/*function Respuesta() {
    let respuestaCorrecta = "doss";
    let respuestaCorrecta2 = "seiss"
    let opciones = document.getElementsByName("opciones");
    let seleccionado = "";
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        seleccionado = opciones[i].value;
        break;
      }
    }
    if (seleccionado === respuestaCorrecta) {
      document.getElementById("res").innerHTML="Respuesta 1 es correcta";
    } else {
        document.getElementById("res").innerHTML="Respuesta 1 es incorrecta";
    }
}*/
function Respuesta() {
    // Obtener todas las respuestas
    const respuesta1 = document.querySelector('input[name="opciones"]:checked').value;
    const respuesta2 = document.querySelector('input[name="opciones2"]:checked').value;
    const respuesta3 = document.querySelector('input[name="opciones3"]:checked').value;

    // Comprobar respuestas y mostrar resultados
    if (respuesta1 === 'doss' && respuesta2 === 'seiss' && respuesta3 === 'nuevee') {
       // alert("¡Todas las respuestas son correctas!");
       document.getElementById("res").innerHTML="Todas las respuestas son correctas";
    } else {
        let mensaje = "Respuestas incorrectas:\n";
        if (respuesta1 !== 'doss') {
            mensaje += "Pregunta 1\n";
        }
        if (respuesta2 !== 'seiss') {
            mensaje += "Pregunta 2\n";
        }
        if (respuesta3 !== 'nuevee') {
            mensaje += "Pregunta 3\n";
        }
        /*alert(mensaje);*/
        document.getElementById("res").innerHTML=mensaje;
    }
}
 
  