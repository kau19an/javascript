function gerar() {
    var res = window.document.getElementById('res')
    var num = window.document.getElementById('num')
    var max = window.document.getElementById('max')
    var n = Number(num.value)
    var m = Number(max.value)
    
    // Se um dos campos não forem preenchidos:
    if (num.value.length == 0 || max.value.length == 0) {
        window.alert('[ERRO] Por favor, preencha todos os campos.')
        res.innerHTML = '<p style="margin-bottom: 2px;">Não foi possível gerar a tabuada.</p>'
    } else

    // Tabuada
    if (n >= 0 && m >= 0) { // Número positivo e tabuada positiva (+/+)
        res.innerHTML = `<h2 style="margin-top: 15px; margin-bottom: 5px;">A tabuada de ${n} é...</h2>`
        for (var c = 0; c <= m; c++) {
            res.innerHTML += `${n} &times; ${c} = ${n * c}<br>`
        }
    } else if (n >= 0 && m < 0) { // Número positivo e tabuada negativa (+/-)
        res.innerHTML = `<h2 style="margin-top: 15px; margin-bottom: 5px;">A tabuada de ${n} é...</h2>`
        for (var c = 0; c >= m; c--) {
            res.innerHTML += `${n} &times; (${c}) = ${n * c}<br>`
        }
    } else if (n < 0 && m >= 0) { // Número negativo e tabuada positiva (-/+)
        res.innerHTML = `<h2 style="margin-top: 15px; margin-bottom: 5px;">A tabuada de ${n} é...</h2>`
        for (var c = 0; c <= m; c++) {
            res.innerHTML += `(${n}) &times; ${c} = ${n * c}<br>`
        }
    } else if (n < 0 && m < 0) { // Número negativo e tabuada negativa (-/-)
        res.innerHTML = `<h2 style="margin-top: 15px; margin-bottom: 5px;">A tabuada de ${n} é...</h2>`
        for (var c = 0; c >= m; c--) {
            res.innerHTML += `(${n}) &times; (${c}) = ${n * c}<br>`
        }
    }
}

// Ficou grande mas é porque eu quis deixá-la bem completinha!