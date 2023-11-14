
const varUl = document.querySelector('ul')
const varLi = document.querySelector('li')
const varBody = document.querySelector('body')


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

    showAll(newPricesMap);

    varBody.style.backgroundColor = 'red';
    alert("Aproveite seu desconto enquanto a tela estiver vermelha, você tem apenas 1 Segundo!!!")

    function DezSegundos(){
        varBody.style.backgroundColor = 'black';
        showAll(menuOptions) 
    }
    setTimeout(DezSegundos, 1000*1);




}

function showReduce (){

    const arrayReduce = menuOptions.reduce( (acc, cur)  =>{
        return acc + cur.price


    },0)
    console.log(arrayReduce)

    const newPricesMap = menuOptions.map((products) => ({

        ...products,
        price:products.price * 0.9,
    }))


    const arrayReduceTen = newPricesMap.reduce( (acc, cur)  =>{
        return acc + cur.price


    },0)
    console.log(arrayReduce)


    
    varUl.innerHTML = ` <li style="color:white"> A soma de Todos os Valores do Cardápio é de R$ ${arrayReduce}</li>
    <li style="color:white"> A soma de Todos os Valores do Cardápio com 10% de Desconto é de R$ ${arrayReduceTen}</li>
    `
   
}

function showFilter (){

  const arrayVeganFilter = menuOptions.filter( (item) =>{

    if ( item.vegan == true) { return true}
    else {return false}

  })
  showAll(arrayVeganFilter)
 

}



buttonforEach.addEventListener("click", showForEach)
buttonMap.addEventListener("click", showMap)
buttonReduce.addEventListener("click", showReduce)
buttonFilter.addEventListener("click", showFilter)




