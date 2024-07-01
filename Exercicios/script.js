var agora = new Date()
var time = agora.getHours()
var minutes = agora.getMinutes()

var texto = document.querySelector('div>p')
texto.innerHTML = `Agora são ${time}:${minutes}`
var imagem = document.getElementById('imagem')

if(time>=6 && time <12){
    imagem.style.background ='url(imagens/manha.jpg)'
    imagem.style.backgroundSize = 'cover'
    imagem.style.backgroundPosition = 'center'
}else{
    if(time>12 && time<18){
        imagem.style.background ='url(imagens/tarde.jpg)'
        imagem.style.backgroundSize = 'cover'

    }else{
        imagem.style.background ='url(imagens/noite.jpg)'
        imagem.style.backgroundSize = 'cover'
    }
}

