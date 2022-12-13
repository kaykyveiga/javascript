function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var horário = new Date()
    var horas = horário.getHours()
    var min = horário.getMinutes()
    msg.innerHTML = `Agora são ${horas} horas e ${min} minutos`
    if(horas > 0 && horas < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(horas >= 12 && horas < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}