function verFicha(){
    let version1,version2, version3, version4, version5, version6,
        cantidad1, cantidad2, cantidad3, cantidad4, cantidad5, cantidad6,
        total1, total2, total3, total4, total5, total6, total
        
        version1 = document.getElementById("version1").value
        version2 = document.getElementById("version2").value
        version3 = document.getElementById("version3").value
        version4 = document.getElementById("version4").value
        version5 = document.getElementById("version5").value
        version6 = document.getElementById("version6").value

        cantidad1 = document.getElementById("cantidad1").value
        cantidad2 = document.getElementById("cantidad2").value
        cantidad3 = document.getElementById("cantidad3").value
        cantidad4 = document.getElementById("cantidad4").value
        cantidad5 = document.getElementById("cantidad5").value
        cantidad6 = document.getElementById("cantidad6").value

        total1= cantidad1 * (240000)
        total2= cantidad2 * (310000)
        total3= cantidad3 * (125000)
        total4= cantidad4 * (1285000)
        total5= cantidad5 * (480000)
        total6= cantidad6 * (789700)

        total = total1 + total2 + total3 + total4 + total5 + total6

        document.getElementById("valor1").innerHTML=" CAJA REGISTRADORA,   Versión:  " + version1 + "  precio unitario: 240.000$, cantidad: " + cantidad1+ "  Precio total: " + total1 +"$"
        document.getElementById("valor2").innerHTML=" IMPRESORA TÉRMICA,   Versión:  " + version2 + "  precio unitario: 310.000$, cantidad: " + cantidad2+ "  Precio total: " + total2 +"$"
        document.getElementById("valor3").innerHTML=" LECTOR DE CÓDIGOS,   Versión:  " + version3 + "  precio unitario: 125.000$, cantidad: " + cantidad3+ "  Precio total: " + total3 +"$"
        document.getElementById("valor4").innerHTML=" COMPUTADOR,   Versión:  " + version4 + "  precio unitario: 1.285.000$, cantidad: " + cantidad4+ "  Precio total: " + total4 +"$"
        document.getElementById("valor5").innerHTML=" IMPRESORA DE CÓDIGOS,   Versión:  " + version5 + "  precio unitario: 480.000$, cantidad: " + cantidad5+ "  Precio total: " + total5 +"$"
        document.getElementById("valor6").innerHTML=" BÁSCULA,   Versión:  " + version6 + "  precio unitario: 789.700$, cantidad: " + cantidad6+ "  Precio total: " + total6 +"$"
        document.getElementById("valor").innerHTML= " PRECIO TOTAL DE LOS PRODUCTOS:  " + total + "$"
               
}