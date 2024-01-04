function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora é/são ${hora} hora(s).`

    if (hora >= 5 && hora <= 11) { // 05:00-11:00: manhã
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#826007'
    } else if (hora >= 12 && hora <= 18) { // 12:00-18:00: tarde
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#97B379'
    } else { // 19:00-04:00: noite/madrugada
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#0E1D20'
    }
}