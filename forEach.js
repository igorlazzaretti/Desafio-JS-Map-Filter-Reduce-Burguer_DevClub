
const varUl = document.querySelector('ul')

const buttonforEach = document.querySelector('#forEach-button')

function showAll(){
    let varMyLi = ''
menuOptions.forEach( (products) => {
    varMyLi += 
    `
    <li class="list">
    <img src=${products.src} alt="Foto do Hamburguer">
    <p>${products.name}</p>
    <p class="item-price">R$ ${products.price}</p>
    </li>
    `
    console.log(varMyLi)
});

varUl.innerHTML = varMyLi
}
buttonforEach.addEventListener("click", showAll)