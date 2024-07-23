function fatorialTrad(n){
    let fat = 1
    for(let c = n; c>1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorialTrad(5))
//fatorial tradicional
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorialRec(n){
    if(n == 1){
        return 1
    } else{
        return n * fatorialRec(n-1)
    }
}
console.log(fatorialRec(5))
/*
    fatorial recursiva
    5! = 5 x 4 x 3 x 2 x 1
    5! = 5 x 4!

    n! = n x (n-1)!
    1! = 1
*/