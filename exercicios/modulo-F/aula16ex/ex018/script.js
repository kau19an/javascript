let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // Se o número for entre 1 e 100:
        return true // Ok, é um número válido.
    } else {
        return false // Oops, não é um número válido.
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Se o número não for encontrado na lista:
        return true
    } else { // Caso seja encontrado:
        return false
    }
}

function addNum() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Se for um número e não estiver na lista:
        valores.push(Number(num.value)) // Adiciona o número na lista.
        let item = window.document.createElement('option')
        item.setAttribute('value', `val${valores.indexOf(num.value)}`)
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // Adiciona a mensagem de valor adicionado ao <select>.
        res.innerHTML = ''

    } else { // Se não for um número ou já estiver na lista:
        window.alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Após a tentativa de adicionar um número, limpa seu campo
    num.focus()   // e trás foco a ele novamente.
}

function mostrarRes() {
    if (valores.length == 0) { // Se não houver nada na lista:
        window.alert('[ERRO] Por favor, insira valores antes de finalizar.')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        // Analisa quem é o maior e o menor número da lista:
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        média = soma / valores.length
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p><p>O menor valor informado foi ${menor}.</p><p style="margin-bottom: 3px;">A média dos valores digitados foi ${média.toFixed(2)}.</p>`
    }
}