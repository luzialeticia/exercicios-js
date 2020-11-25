/* 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
calcule seu peso ideal, utilizando as seguintes fórmulas:
● para homens: (72.7 * h) – 58;
● para mulheres: (62.1 * h) – 44.7. */

const input = require('readline-sync')

const nome = input.question("Qual o seu nome: ")
const genero = input.question("Qual seu gênero? (F para feminino ou M para masculino) ")
const altura = parseFloat(input.question("Digite sua altura: "))

if(genero === "M" || genero === "m") {
    const pesoIdeal = ((72.7 * altura) - 58).toFixed(1)
    console.log(`${nome}, seu peso ideal é ${pesoIdeal}kg.`)
} else if (genero === "F" || genero === "f") {
    const pesoIdeal = ((72.7 * altura) - 44.7).toFixed(1)
    console.log(`${nome}, seu peso ideal é ${pesoIdeal}kg.`)
} else {
    console.log("Gênero inválido.")
}