console.log("Atividade 1")

function inverterString(texto) {
    return texto.split('').reverse().join('');
}

let palavra = "Joao"
let palavraInvertida = inverterString(palavra)

console.log(palavraInvertida)

console.log("")

console.log("atividade 2")

console.log("")

let numeros = [10, 5, 20, 8, 15]; 

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) { 
    if (numeros[i] > maior) { 
        maior = numeros[i]
    }
}
console.log(maior)

console.log("")

console.log("Atividade 3")

console.log("")

let numero = 5
let éPrimo = true

if (numero < 2) { 
    éPrimo = false
} else {
    for (let i = 2; i < numero; i++) { 
        if (numero % i === 0) { 
            éPrimo = false 
            break
        }
    }
}

if (éPrimo) {
    console.log("Essse numero é primo")
} else {
    console.log("Esse numero não é primo")
}

console.log("")

console.log("atividade 4")

let num1 = 10
let num2 = [0, 1]

while (true) { 
    let proximo = num2[num2.length - 1] + num2[num2.length - 2] 
    

    if (proximo > num1) { 
        break
    }

    num2.push(proximo)
}

console.log(num2)

console.log("")

console.log("atividade 5")
console.log("")

let palavraa = "banana"
let contagem = {}

for (let letra of palavraa) { 
    if (contagem[letra]) {
        contagem[letra]++
    } else { 
        contagem[letra] = 1
    }
}

console.log(contagem)
