/* 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
com a tabela abaixo.
IMC em adultos Condição
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Entre 25 e 30 Acima do peso
Acima de 30 obeso */

const input = require('readline-sync')

const imc = (peso, altura) => {
    return (peso/(altura*altura)).toFixed(1)
}

const calculaIMC = (funcaoCalculaIMC) => {
    if (funcaoCalculaIMC < 18.5) {
        return `Seu IMC é ${funcaoCalculaIMC}. Você está abaixo do peso normal.`
    } else if (funcaoCalculaIMC >= 18.5 && funcaoCalculaIMC <= 25) {
        return `Seu IMC é ${funcaoCalculaIMC}. Você está no peso normal.`
    } else if (funcaoCalculaIMC > 25 && funcaoCalculaIMC <= 30) {
        return `Seu IMC é ${funcaoCalculaIMC}. Você está acima do peso.`
    } else {
        return `Seu IMC é ${funcaoCalculaIMC}. Você está obese.`
    }
}

const peso = parseFloat(input.question("Digite o peso: "))
const altura = parseFloat(input.question("Digite a altura: "))

console.log(calculaIMC(imc(peso, altura)));