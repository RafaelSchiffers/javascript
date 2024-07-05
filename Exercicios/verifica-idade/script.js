function enableClick(){
    let ano = document.getElementById('iano').value;
    if(ano===''){
        return
    }
    try{
        let sexo = document.querySelector('input[name="sexo"]:checked').value
        document.getElementById('verificar').disabled = false;
    }catch{
        console.log('Sexo não informado')
    }
   
}



function clicar(){  
    var imagem = document.getElementById('imagem')
    var texto = document.querySelector('p')
    var sexo = document.querySelector('input[name="sexo"]:checked').value
    var ano = Number(document.getElementById('iano').value)
    var date = new Date()
    var year = date.getFullYear()
    var idade = year - ano
    let mapeamento = {
        "masculino":{
            'crianca': {
                'background':'imagens/menino.jpg',
                'texto':'um menino'
            },
            'adolescente': {
                'background':'imagens/adolescente-homem.jpg',
                'texto':'um adolescente'
            },
            'adulto': {
                'background':'imagens/homem44.jpg',
                'texto':'um adulto'
            },
            'idoso': {
                'background':'imagens/idoso.jpg',
                'texto':'um idoso'
            }
        },
        "feminino":{
            'crianca': {
                'background':'imagens/menina.jpg',
                'texto':'uma menina'
            },
            'adolescente': {
                'background':'imagens/adolescente-mulher.jpg',
                'texto':'uma adolescente'
            },
            'adulto': {
                'background':'imagens/mulher44.jpg',
                'texto':'um adulto'
            },
            'idoso': {
                'background':'imagens/idosa.jpg',
                'texto':'uma idosa'
            }
        }

    }
    let faixaEtaria = null;
    if(idade<=12){
        faixaEtaria = 'crianca';
    }else if(idade<18){
        faixaEtaria = 'adolescente'
    }else if(idade<60){
        faixaEtaria = 'adulto'
    }else{
        faixaEtaria = 'idoso'
    }
     texto.innerHTML = `Detecamos ${mapeamento[sexo][faixaEtaria].texto} de ${idade} anos`
     imagem.style.background = `url(${mapeamento[sexo][faixaEtaria].background})`
     imagem.style.display = 'block'
     imagem.style.backgroundSize = 'cover'
    /*if(sexo.value=='masculino' && idade<=12){
        texto.innerHTML = `Detecamos um Menino de ${idade} anos`
        imagem.style.background = 'url(imagens/menino.jpg)'
       
    }else{
        if(sexo.value=='masculino' && idade>12 && idade <=25){
            texto.innerHTML = `Detecamos uma Homem de ${idade} anos`
            imagem.style.background = 'url(imagens/adolescente-homem.jpg)'
            imagem.style.backgroundSize = 'cover' 
            imagem.style.display = 'block'
        }else{
            if(sexo.value=='masculino' && idade>25 && idade <60){
                texto.innerHTML = `Detecamos uma Homem de ${idade} anos`
                imagem.style.background = 'url(imagens/homem44.jpg)'
                imagem.style.backgroundSize = 'cover' 
                imagem.style.display = 'block'
            }else{
                if(sexo.value=='masculino' && idade>=60){
                    texto.innerHTML = `Detecamos um Idoso de ${idade} anos`
                    imagem.style.background = 'url(imagens/idoso.jpg)'
                    imagem.style.backgroundSize = 'cover' 
                    imagem.style.display = 'block'
                }
            }
        } 
    }
    if(sexo.value=='feminino' && idade<=12){
        texto.innerHTML = `Detecamos uma menina de ${idade} anos`
        imagem.style.background = 'url(imagens/menina.jpg)'
        imagem.style.backgroundSize = 'cover' 
        imagem.style.display = 'block'
    }else{
        if(sexo.value=='feminino' && idade>12 && idade <=25){
            texto.innerHTML = `Detecamos uma Mulher de ${idade} anos`
            imagem.style.background = 'url(imagens/adolescente-mulher.jpg)'
            imagem.style.backgroundSize = 'cover' 
            imagem.style.display = 'block'
        }else{
            if(sexo.value=='feminino' && idade>25 && idade <60){
                texto.innerHTML = `Detecamos um Mulher de ${idade} anos`
                imagem.style.background = 'url(imagens/mulher44.jpg)'
                imagem.style.backgroundSize = 'cover' 
                imagem.style.display = 'block'
            }else{
                if(sexo.value=='feminino' && idade>=60){
                    texto.innerHTML = `Detecamos um Idosa de ${idade} anos`
                    imagem.style.background = 'url(imagens/idosa.jpg)'
                    imagem.style.backgroundSize = 'cover' 
                    imagem.style.display = 'block'
                }
            }
        } 
    }
 */       
    
    
}