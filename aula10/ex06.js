var a = window.document.getElementById('area')

a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)
function clicar(){
    a.style.backgroundColor = 'blue'
    a.innerText = 'Ficou azul manow'
}
function entrar(){
    a.style.backgroundColor = 'pink'
    a.innerText = 'Ficou Rosa'
}
function sair(){
    a.style.backgroundColor = 'gray'
    a.innerText = 'ficou cinza'
}





