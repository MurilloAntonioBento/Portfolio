let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let main = document.getElementById('main')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

main.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

let overlay = document.getElementById('overlay-fundo')
