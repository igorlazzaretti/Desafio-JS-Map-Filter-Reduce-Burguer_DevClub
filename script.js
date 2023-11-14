
const varUl = document.querySelector('ul')


const buttonforEach = document.querySelector('#forEach-button')
const buttonMap     = document.querySelector('#map-button')
const buttonReduce  = document.querySelector('#reduce-button')
const buttonFilter  = document.querySelector('#filter-button')


function showAll(array){
        let varMyLi = ''
        array.forEach( (products) => {
        varMyLi += 
     `
     <li class="list">
      <img src=${products.src} alt="Foto do Hamburguer">
    <p>${products.name}</p>
    <p class="item-price">R$ ${products.price}</p>
    </li>
    `
    
});

varUl.innerHTML = varMyLi
}



function showForEach(){

    showAll(menuOptions) 

}


function showMap(){

    const newPricesMap = menuOptions.map((products) => ({

        ...products,
        price:products.price * 0.9,
    }))

    showAll(newPricesMap)

}

function showReduce (){




}

function showFilter (){

    


}



buttonforEach.addEventListener("click", showForEach)
buttonMap.addEventListener("click", showMap)
buttonReduce.addEventListener("click", showReduce)
buttonFilter.addEventListener("click", showFilter)




