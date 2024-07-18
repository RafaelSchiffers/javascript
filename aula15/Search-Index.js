

/*
console.log(`o vetor tem  ${num.length} posições`);
console.log(`o primeiro valor do vetor é ${num[0]}`);
console.log(`A ordem dos números do vetor é ${num.sort()}`);
*/
/*let i = 0
for(i;i<num.length;i++){
    console.log(`O numero na posição ${i} é ${num[i]}`);
}
*/

/*
console.log(searchNum)
if(searchNum=== -1){
   
}else{
    console.log(`numero que estou procurando é ${num[searchNum]}`)
    for(let i in num){
        console.log(`O numero na posição ${i} é ${num[i]}` );
    }
}
*/
/*let search = num.filter((Current,index)=>{if(Current===searchNum)return true; else return false;})
console.log(search)

num.filter(function(Current,index){
    if(Current===searchNum){
        return true
    }else{
        return false
    }
})
*/
let num = [5,8,2,9,2,2]
let searchNum = 5;
let search = num.map(function (current,index){
    retorno = {}
    if( current % 2 === 1){
        retorno[index] = current;
    }
    return retorno;
}).filter(current => Object.keys(current).length > 0);
console.log(search)





