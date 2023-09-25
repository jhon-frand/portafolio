let count = document.getElementById("count")
let subTotal = document.getElementById("subTotal")
let cantProductos = document.getElementById("cantProducts")
let deleteButton = document.getElementById("delete")
let btn3 = document.getElementById("btn-3")
let btn1 = document.getElementById("btn-1")

let num = 0;
let valor = 25300;
btn3.addEventListener("click", function() {
    
    num++;
    count.textContent = num;
    subTotal.textContent = valor * num;
    cantProductos.textContent = num;
    
})

btn1.addEventListener("click", function() {
    if (num > 0 ) {
        num--;
        count.textContent = num;
        subTotal.textContent = valor * num;
        cantProductos.textContent = num;
    } else if (num <= 0) {
        count.textContent = 0;
        subTotal.textContent = 0;
    }
})
deleteButton.addEventListener("click", function() {
    num = 0;
    count.textContent = 0;
    subTotal.textContent = 0;
    cantProductos.textContent = 0;
   
})   