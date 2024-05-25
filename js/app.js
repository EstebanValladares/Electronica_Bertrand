const btonCar = document.querySelector('.carShop');
const divCar = document.querySelector('.ProductosShop');

btonCar.addEventListener('click',watchCar)
document.addEventListener('click',watchCarOff);

function watchCarOff(event){
    if (!divCar.contains(event.target) && !btonCar.contains(event.target)) {
        divCar.style.display = 'none';
    }
}
function watchCar(){
    divCar.style.display = 'flex'
}