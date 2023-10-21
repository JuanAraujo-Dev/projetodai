

const listOpcoes = document.querySelector(".secaoMembros")

listOpcoes.addEventListener("click", identificarOpcoes)

function identificarOpcoes(event){

const elemento = event.target

    if(elemento.tagName == "LI"){
        
        const id = elemento.id
        console.log(id)

        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        removeClassMostrar()

        secaoEscolha.classList.add("mostrar")

    }
}

function removeClassMostrar(){
    const divs =  document.querySelectorAll(".info-container .container div")

    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}