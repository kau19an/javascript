var agora = new Date()
var hora = agora.getHours()
var mins = agora.getMinutes()
console.log(`Agora são ${hora}:${mins}.`)

// Condição aninhada (parte 2)
if (hora == 0 && mins == 0) { // 00:00
    console.log('Meia-noite!')
} else if (hora >= 0 && hora <= 5 && mins >= 0 && mins < 60) { // 00:01-05:59
    console.log('Tenha uma ótima madrugada!')
} else if (hora >= 6 && hora <= 11 && mins >= 0 && mins < 60) { // 06:00-11:59
    console.log('Tenha um ótimo dia!')
} else if (hora == 12 && mins == 0) { // 12:00
    console.log('Meio-dia!')
} else if (hora >= 12 && hora <= 18 && mins >= 0 && mins < 60) { // 12:01-18:59
    console.log('Tenha uma ótima tarde!')
} else if (hora >= 19 && hora <= 23 && mins >= 0 && mins < 60) { // 19:00-23:59
    console.log('Tenha uma ótima noite!')
}

// Probleminhas: Caso a hora e/ou o minuto for entre 0-9, ele não adicionará um "0" extra. Exemplo: ficará 3:5 e não 03:05.