const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".scrren2")


function open(){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
} 

function close(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
} 

const closeCoockie = document.querySelector("#biscoitoAberto")
const openCoockie = document.querySelector("#biscoitoFechado")

closeCoockie.addEventListener('click', open)
openCoockie.addEventListener('click', close)
