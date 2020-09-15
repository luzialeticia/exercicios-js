/* 15. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um
algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que
Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para
Carlos, R$33,00 para André e R$35,53 para Felipe. */

const input = require('readline-sync')

const totalConta = (parseFloat(input.question('Valor total da conta: R$ '))).toFixed(2)
//let divisao;
let resto;
let carlos = totalConta/3
let andre = totalConta/3
let felipe = totalConta/3

const divisao = () => {
    if(totalConta % 3 !== 0) {
        resto = totalConta % 3
        felipe = (totalConta/3)+resto
        carlos = (totalConta/3)-resto
        andre = (totalConta/3)-resto
    }
}

divisao()
console.log(totalConta, carlos, andre, felipe);