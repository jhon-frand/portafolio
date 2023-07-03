let menuburguer = document.getElementById("menuburguer");
let lista = document.getElementById("mainMenu");
menuburguer.addEventListener("click", 
function(){
    if (mainMenu.classList.contains("main-menu")){
        mainMenu.classList.add("item")
        mainMenu.classList.remove("main-menu")
    } else
        mainMenu.classList.add("main-menu")
        mainMenu.classList.remove("item")
})
