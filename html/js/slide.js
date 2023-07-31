let rightArrow = document.getElementById("rightArrow");
let motocicleta = document.getElementById("motocicleta");
let playa = document.getElementById("playa");

rightArrow.addEventListener("click", function(){
    motocicleta.classList.remove("motocicleta");
    motocicleta.classList.add("motocicleta-hidden");
    playa.classList.remove("playa-hidden");
    playa.classList.add("playa");
});
