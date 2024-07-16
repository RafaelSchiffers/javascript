/*function clicar() {

    
    let inicio = Number(document.getElementById('iInicio').value);
    let fim = Number(document.getElementById('iFim').value);
    let passo = Number(document.getElementById('iPasso').value); 
    var res = document.getElementById('res')
    // var texto = document.createElement('p');
    // res.appendChild(texto)
    res.innerHTML = 'Contando: '
    
    if (inicio == 0 || fim <=0 || passo <=0) {
        texto.innerHTML = 'Inicio e Fim Não pode ser abaixado de 0'
    }else{
        for (inicio;inicio<=fim;inicio+=passo) {
            res.innerHTML += `${inicio} `
        }
    }
    
    
     
}
*/
function clicar() {
    let inicio = document.getElementById('iInicio');
    let fim = document.getElementById('iFim');
    let passo = document.getElementById('iPasso');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p<=0){
            window.alert('Passo inválido! Considerando Passo 1' )
            p = 1
        }
        if (i < f) {

            for (i; i <= f; i += p) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            for (i; i => f; i -= p) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        }
        res.innerHTML + = ` \u{1FC1}`




    }
}