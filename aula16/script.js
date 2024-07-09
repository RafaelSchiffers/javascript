function clicar() {


    let inicio = Number(document.getElementById('iInicio').value);
    let fim = Number(document.getElementById('iFim').value);
    let passo = Number(document.getElementById('iPasso').value); 
    var res = document.getElementById('res')
    // var texto = document.createElement('p');
    // res.appendChild(texto)
    res.innerHTML = 'Contando: '
    
    if (inicio <= 0 && fim <=0 && passo <=0) {
        texto.innerHTML = 'Inicio e Fim Não pode ser abaixado de 0'
    }else{
        for (inicio;inicio<=fim;inicio+=passo) {
            res.innerHTML += `${inicio} `
        }
    }
    
    
     
}