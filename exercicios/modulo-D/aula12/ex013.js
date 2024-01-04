var agora = new Date()
var diaSem = agora.getDay()

/* Dias da semana usando .getDay():
   0 → Domingo
   1 → Segunda-feira
   2 → Terça-feira
   3 → Quarta-feira
   4 → Quinta-feira
   5 → Sexta-feira
   6 → Sábado
*/

switch (diaSem) { // Condição múltipla
    case 0:
        console.log('Hoje cai em um domingo.')
        break
    case 1:
        console.log('Hoje cai em uma segunda-feira.')
        break
    case 2:
        console.log('Hoje cai em uma terça-feira.')
        break
    case 3:
        console.log('Hoje cai em uma quarta-feira.')
        break
    case 4:
        console.log('Hoje cai em uma quinta-feira.')
        break
    case 5:
        console.log('Hoje cai em uma sexta-feira.')
        break
    case 6:
        console.log('Hoje cai em um sábado.')
        break
    default:
        console.log('Oops, esse dia é inválido!')
        break
}