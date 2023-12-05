const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const sorte = ["Você será feliz este ano.", "O amor está onde menos se espera.", "Aproveite o hoje, pois é uma dádiva.","Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."]
const openCoockie = document.querySelector("#outroBiscoito")
const closeCoockie = document.querySelector("#biscoitoFechado")

function open(){
    let frase = sorte[Math.round(Math.random() * sorte.length)]
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    document.querySelector("#frase-sorte").textContent = frase  
} 

function close(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    document.querySelector("#frase-sorte").textContent = frase
} 

closeCoockie.addEventListener('click', open)
openCoockie.addEventListener('click', close)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        open()
    }
})
