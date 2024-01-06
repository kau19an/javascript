function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    // Se um dos campos não estiverem preenchidos:
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Por favor, preencha todos os campos.')
        res.innerHTML = `<p style="margin-bottom: 2px;">Não foi possível contar.</p>`
    } else {
        res.innerHTML = `<p style="margin-bottom: 2px;">Contando...</p>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) { // Se o passo for 0 ou menor:
            window.alert('[ERRO] "Passos" precisa ser maior que 0. Considerando-o como 1.')
            p = 1
        }
        if (i < f) { // Se o número inicial for menor que o número final:
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449;&#x1F3FC; `
            }
        } else { // Se o número inicial for maior que o número final:
            // Contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449;&#x1F3FC; `
            }
        }
        res.innerHTML += '<strong>FIM</strong>'
    }
}