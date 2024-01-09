var num = [5, 8, 2, 9, 3]
num.push(1) // Adiciona o valor '1' ao vetor
num.sort() // Ordena o vetor de maneira crescente
console.log(num)
console.log(`O vetor tem ${num.length} elementos.`) // Calcula quantos elementos o vetor possui
console.log(`O primeiro valor do vetor é ${num[0]}.`) // Indica qual é o primeiro valor do vetor

let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado.')
} else {
    console.log(`O valor está na posição ${pos}.`)
}
