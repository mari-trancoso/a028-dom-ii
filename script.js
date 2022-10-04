//-----------------------------------------EXERCICIO 1
// function adicionaItem(event){
//     let botao = document.getElementById("botao")
//                 document.queryselector("#botao")

//     const itemNovo = document.createElement("item")

//     itemNovo.innerHTML = "item novo"
    
//     const elementoReferencia = document.getElementById("container")
//     elementoReferencia.insertAdjacentElement("beforeend", itemNovo)
// }


//-----------------------------------------EXERCICIO 2

function adicionaItem(event){

    //criando o item novo quando aperta o botão
    const itemNovo = document.createElement("item")

    itemNovo.classList.add("item")
    itemNovo.onclick = removeItem

    const elementoReferencia = document.querySelector(".container")
    elementoReferencia.insertAdjacentElement("beforeend", itemNovo)
}



//-----------------------------------------EXERCICIO 3

function removeItem(event){

    let quadrado = document.querySelector(".item")

    quadrado.classList.remove("item")
    // if (quadrado === event.target){
       
    // } 

}