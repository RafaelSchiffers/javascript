let arraylist = []
let total = 0
let menorNum = 0
let maiorNum = 0
let somaNum = 0
let mediaNum = 0

function addNum() {
    let num = Number(document.getElementById('txtn').value)
    let listTab = document.getElementById('seltab')
    let item = document.createElement('option')
    if (num === 0 || num > 100) {
        window.alert('Apenas Números entre 1 e 100')
    } else {
        item.text = `Valor ${num} Adicionado`
        listTab.appendChild(item);
        arraylist.push(num)
        total = total + 1
        somaNum = somaNum + num
        if (num > maiorNum) {
            maiorNum = num
        } else {
            menorNum = num
        }
    }
}
function Endlist() {
    let divSec = document.getElementById('resSec');
    let item = document.createElement('div');
    divSec.appendChild(item);
    if (arraylist.length == 0) {
        window.alert('Adicione Números')
    } else {
        item.innerHTML += `Array é ${arraylist}<br>`
        item.innerHTML += `O total de números é ${total}<br>`
        item.innerHTML += `Maior número é ${maiorNum}<br>`
        item.innerHTML += `Menor número é ${menorNum}<br>`
        item.innerHTML += `Soma é ${somaNum}<br>`
        divSec.appendChild(item);
    }

}