function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fAno.value.length == 0) { // Se nada for informado, diga:
        window.alert('[ERRO] Por favor, informe um ano de nascimento. Esse campo não pode estar vazio.')
    } else if (fAno.value > ano) { // Se o ano de nascimento for maior que o ano atual, diga:
        window.alert('[ERRO] Essa pessoa ainda não nasceu. Por favor, informe um ano de nascimento válido.')
    } else {
        var fSex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = window.document.createElement('img') // Crio a tag <img> pelo JavaScript dinamicamente.
        img.setAttribute('id', 'foto') // Digo que a tag <img> terá um 'id' de nome 'foto'.
        if (fSex[0].checked) { // Se for masculino, então:
            gênero = 'masculino'
            res.innerHTML = `<p>A pessoa possui <strong>sexo ${gênero}</strong> e tem/terá <strong>${idade} anos</strong>.</p>`
            if (idade >= 0 && idade <= 14) { // 0-14 anos: criança
                img.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade >= 15 && idade <= 24) { // 15-24 anos: adolescente
                img.setAttribute('src', 'imagens/teen-m.png')
            } else if (idade >= 25 && idade <= 60) { // 25-60 anos: adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else if (idade > 60 && idade <= 115) { // 60-115 anos: idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            } else { // +115 anos: foi de arrasta pra cima (só uma zoeirinha, AHUAHUAHA!)
                img.setAttribute('src', 'imagens/fantasma.png')
                res.innerHTML = `<p>A pessoa possuía <strong>sexo ${gênero}</strong> e teria <strong>${idade} anos</strong>.</p>`
            }
        } else { // Se for feminino, então:
            gênero = 'feminino'
            res.innerHTML = `<p>A pessoa possui <strong>sexo ${gênero}</strong> e tem/terá <strong>${idade} anos</strong>.</p>`
            if (idade >= 0 && idade <= 14) { // 0-14 anos: criança
                img.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade >= 15 && idade <= 24) { // 15-24 anos: adolescente
                img.setAttribute('src', 'imagens/teen-f.png')
            } else if (idade >= 25 && idade <= 60) { // 25-60 anos: adulta
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else if (idade > 60 && idade <= 115) { // 60-115 anos: idosa
                img.setAttribute('src', 'imagens/idoso-f.png')
            } else { // +115 anos: foi de arrasta pra cima (só uma zoeirinha, AHUAHUAHA!)
                img.setAttribute('src', 'imagens/fantasma.png')
                res.innerHTML = `<p>A pessoa possuía <strong>sexo ${gênero}</strong> e teria <strong>${idade} anos</strong>.</p>`
            }
        }
        res.appendChild(img) // Adiciona a tag <img> à div de id 'res' como elemento-filho dela, aparecendo no HTML
    }
}