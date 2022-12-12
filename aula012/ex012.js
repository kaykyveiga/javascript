var horário = new Date()
var horas = horário.getHours()
var minutos = horário.getMinutes()

console.log(`Agora são exatamente ${horas} horas e ${minutos} minutos`)
if(horas < 12){
    console.log('Bom Dia!')
} else if(horas <18){
    console.log('Boa tarde!')
}else{
    console.log('Boa Noite!') 
} 