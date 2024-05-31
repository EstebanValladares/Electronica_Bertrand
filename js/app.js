const btonCar = document.querySelector('.carShop');
const divCar = document.querySelector('.ProductosShop');
const btonProducts = document.querySelectorAll('.bton-product');
const nameProduct = document.querySelectorAll('.title-product');
const price = document.querySelectorAll('.price-product');
const noProduc = document.querySelector('.notProducts');
const boyArticles = document.querySelector('.buy');

btonCar.addEventListener('click',watchCar)
document.addEventListener('click',watchCarOff);
btonProducts.forEach(AllProductsBton =>{
    AllProductsBton.addEventListener('click',selectionProducts)
})

function watchCarOff(event){
    if (!divCar.contains(event.target) && !btonCar.contains(event.target)) {
        divCar.style.display = 'none';
    }
}
function watchCar(){
    divCar.style.display = 'flex'
}
function selectionProducts(e){
    const title = this.previousElementSibling.previousElementSibling.textContent;
    const subtitle = this.previousElementSibling.textContent;
    noProduc.style.display = 'none';
    boyArticles.style.display = 'block'
    const divProducts = document.createElement('div');
    divProducts.innerHTML = title + `<br>` + subtitle;
    divProducts.classList.add('styleProductsCard')
    divCar.appendChild(divProducts);
    divCar.appendChild(boyArticles)
    e.target.removeEventListener('click', selectionProducts);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const formDom = document.querySelector('.form');
    const inputs = document.querySelectorAll('.Dom');

    formDom.addEventListener('submit',validation);

    function validation(e){
        e.preventDefault();
        const nameUserDom = document.querySelector('.nameUser').value;
        const numberUserDom = document.querySelector('.numberUser').value;
        const mmUserDom = document.querySelector('.mmUser').value;
        const yyUserUserDom = document.querySelector('.yyUser').value;
        const cvcUserUserDom = document.querySelector('.cvcUser').value;

        const textOne = document.querySelector('.textNew1');
        const textTwo = document.querySelector('.textNew2');
        const textTree = document.querySelector('.textNew3');
        const textFor = document.querySelector('.textNew4');

        if(nameUserDom === '' || isNaN(numberUserDom) || isNaN(mmUserDom) || isNaN(yyUserUserDom) || isNaN(cvcUserUserDom)){
            inputs.forEach(inputsBorder => inputsBorder.style.border = '1px solid #e78282');
            textOne.innerHTML = 'complete field';
            textTwo.innerHTML = 'Wrong format, numbers only';
            textTree.innerHTML = 'Can´t be blank';
            textFor.innerHTML = 'Can´t be blank';
        }else{
            const nameUser = document.querySelector('.nameDate');
            const numdateUser = document.querySelector('.numDates');
            const dateMonth = document.querySelector('.dateMont');
            const dateDayUser = document.querySelector('.dateDay');
            const dateCvcUser = document.querySelector('.dateCvc');
            const newSection = document.querySelector('.messageThank');
            const btonContinued = document.querySelector('.continuedDate')

            inputs.forEach(inputsBorder => inputsBorder.style.border = '1px solid #818181');
            textOne.innerHTML = '';
            textTwo.innerHTML = '';
            textTree.innerHTML = '';
            textFor.innerHTML = '';
            nameUser.textContent = nameUserDom;
            numdateUser.textContent = numberUserDom;
            dateMonth.textContent = mmUserDom;
            dateDayUser.textContent = yyUserUserDom;
            dateCvcUser.textContent = cvcUserUserDom;
            formDom.style.display = 'none';
            newSection.style.display = 'block'
            btonContinued.addEventListener('click', newFresh =>{ location.reload(); })
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const formDom = document.querySelector('.form');
    const inputs = document.querySelectorAll('.Dom');

    formDom.addEventListener('submit',validation);

    function validation(e){
        e.preventDefault();
        const nameUserDom = document.querySelector('.nameUser').value;
        const numberUserDom = document.querySelector('.numberUser').value;
        const mmUserDom = document.querySelector('.mmUser').value;
        const yyUserUserDom = document.querySelector('.yyUser').value;
        const cvcUserUserDom = document.querySelector('.cvcUser').value;

        const textOne = document.querySelector('.textNew1');
        const textTwo = document.querySelector('.textNew2');
        const textTree = document.querySelector('.textNew3');
        const textFor = document.querySelector('.textNew4');

        if(nameUserDom === '' || isNaN(numberUserDom) || isNaN(mmUserDom) || isNaN(yyUserUserDom) || isNaN(cvcUserUserDom)){
            inputs.forEach(inputsBorder => inputsBorder.style.border = '1px solid #e78282');
            textOne.innerHTML = 'complete field';
            textTwo.innerHTML = 'Wrong format, numbers only';
            textTree.innerHTML = 'Can´t be blank';
            textFor.innerHTML = 'Can´t be blank';
        }else{
            const nameUser = document.querySelector('.nameDate');
            const numdateUser = document.querySelector('.numDates');
            const dateMonth = document.querySelector('.dateMont');
            const dateDayUser = document.querySelector('.dateDay');
            const dateCvcUser = document.querySelector('.dateCvc');
            const newSection = document.querySelector('.messageThank');
            const btonContinued = document.querySelector('.continuedDate')

            inputs.forEach(inputsBorder => inputsBorder.style.border = '1px solid #818181');
            textOne.innerHTML = '';
            textTwo.innerHTML = '';
            textTree.innerHTML = '';
            textFor.innerHTML = '';
            nameUser.textContent = nameUserDom;
            numdateUser.textContent = numberUserDom;
            dateMonth.textContent = mmUserDom;
            dateDayUser.textContent = yyUserUserDom;
            dateCvcUser.textContent = cvcUserUserDom;
            formDom.style.display = 'none';
            newSection.style.display = 'block'
            btonContinued.addEventListener('click', newFresh =>{ location.reload(); })
        }
    }
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'esteban' && password === '123') {
        window.location.href = '../src/index.html';
    } else {
        alert('Usuario no válido');
    }
});