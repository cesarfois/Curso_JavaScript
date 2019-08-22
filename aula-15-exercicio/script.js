function verificar(){
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique que os valores!")

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        // Elemento img dentro utilizando JS TAD
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')





        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebe.png')
            }else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-homem.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-homem.png')
            }else{
                // Idoso
                img.setAttribute('src', 'foto-anciano.png')
            }
        }else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-beba.png')
            }else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'foto-mulher.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-mulher.png')
            }else{
                // Idoso
                img.setAttribute('src', 'foto-anciana.png')
            }
        }
        // alinhar elementos com js
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}