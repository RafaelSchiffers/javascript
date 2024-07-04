var agora = new Date()
var hora = agora.getHours()
if (hora <12){
    console.log(`agora são exatamente ${hora} horas da manhã`)
    console.log(`Bom dia!`)
    
}else if (hora <=18){
    console.log(`agora são exatamente ${hora} horas da tarde`)
    console.log(`Boa tarde`)
}else{
    console.log(`agora são exatamente ${hora} horas da noite`)
    console.log(`Boa Noite`)
}