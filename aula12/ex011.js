var idade = 19

if (idade < 16) { // Condição aninhada
    console.log(`Você só tem ${idade} anos, portanto, ainda não vota.`)
} else if (idade < 18) {
        console.log(`Você tem ${idade} anos e já pode votar, porém ainda é opcional.`)
    } else if (idade > 65) {
        console.log(`Você já tem ${idade} anos, portanto, seu voto voltou a ser opcional.`)
    } else {
        console.log(`Você tem ${idade} anos, portanto, é obrigatório votar.`)
}