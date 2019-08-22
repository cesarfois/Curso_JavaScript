function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    hora = 22

    if (hora >= 0 && hora < 12 ) {
        // bom dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9846f'

    }else {
        // Boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'

    }

}
