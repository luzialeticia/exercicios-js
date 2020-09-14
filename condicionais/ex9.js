/* 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
calcule seu peso ideal, utilizando as seguintes fórmulas:
● para homens: (72.7 * h) – 58;
● para mulheres: (62.1 * h) – 44.7. */

const input = require('readline-sync')

const pesoIdeal = (sexo, altura) => {
    if (sexo === "M" || sexo === "m") {
        return ((72.7 * altura) - 58).toFixed(1)
    } else if (sexo === "F" || sexo === "f") {
        return ((72.7 * altura) - 44.7).toFixed(1)
    } else {
        return "Inválido."
    }
}

const nome = input.question("Qual o seu nome: ")
const genero = input.question("Qual seu gênero? (F para feminino ou M para masculino) ")
const altura = parseFloat(input.question("Digite sua altura: "))

pesoIdeal(genero, altura)

console.log(`${nome}, seu peso ideal é ${pesoIdeal(genero, altura)}kg.`);