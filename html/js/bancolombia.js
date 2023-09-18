let slider = document.getElementById("slider");
let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let contSlider = 1;

arrowRight.addEventListener("click", function() {
    if (contSlider < 3 && contSlider >= 1) {
        switch(contSlider) {
            case 1:
                slider.classList.add("slider-view-2");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-3");
                break;
            case 2:
                slider.classList.add("slider-view-3");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-2");
                break;
        }
        contSlider++;
    }
});
arrowLeft.addEventListener("click", function() {
    if (contSlider <= 3 && contSlider > 1) {
        switch(contSlider) {
            case 2:
                slider.classList.add("slider-view-1");
                slider.classList.remove("slider-view-2");
                slider.classList.remove("slider-view-3");
                break;
            case 3:
                slider.classList.add("slider-view-2");
                slider.classList.remove("slider-view-1");
                slider.classList.remove("slider-view-3");
                break;
        }
        contSlider--;
    }
});


//barras

let iconChevronRight = document.getElementById("iconChevronRight");
let iconChevronLeft = document.getElementById("iconChevronLeft");
let boxCarousel = document.getElementById("boxCarousel");
let barraSignal1= document.getElementById("barraSignal1");
let barraSignal2= document.getElementById("barraSignal2");
let barraSignal3= document.getElementById("barraSignal3");

iconChevronRight.addEventListener("click", function(){
   if (barraSignal1.classList.contains("barra-signal-current")) {
    barraSignal1.classList.remove("barra-signal-current");
    barraSignal2.classList.add("barra-signal-current");
   } else if(barraSignal2.classList.contains("barra-signal-current")){
    barraSignal2.classList.remove("barra-signal-current");
    barraSignal3.classList.add("barra-signal-current");
   }
}
)

iconChevronLeft.addEventListener("click", function(){
    if (barraSignal3.classList.contains("barra-signal-current")) {
     barraSignal3.classList.remove("barra-signal-current");
     barraSignal2.classList.add("barra-signal-current");
    } else if(barraSignal2.classList.contains("barra-signal-current")){
     barraSignal2.classList.remove("barra-signal-current");
     barraSignal1.classList.add("barra-signal-current");
    }
 }
 )
//segundo slider
