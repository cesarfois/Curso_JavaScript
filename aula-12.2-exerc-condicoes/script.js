function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var bom = window.document.getElementById('divbom')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
   
    if (hora >= 0 && hora < 12 ) {
        // bom dia
        img.src = 'foto-manha.png'
        bom.innerHTML = 'BOM DIA!!!'
        // Estilo css dentro de js
        document.body.style.background = '#e2cd9f'

    }else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'foto-tarde.png'
        bom.innerHTML = 'BOA TARDE!!!'
        document.body.style.background = '#b9846f'

    }else {
        // Boa noite!
        img.src = 'foto-noite.png'
        bom.innerHTML = 'BOA NOITE!!!'
        document.body.style.background = '#515154'

    }

}
