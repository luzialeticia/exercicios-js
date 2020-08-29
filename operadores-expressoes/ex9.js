/* 9. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo
vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a
quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina
informe quanto será o valor arrecadado. */

function totalVendas(p, m ,g) {
    return ((p*10.00)+(m*12.00)+(g*15.00)).toFixed(2)
}

const input = require('readline-sync')

const peq = parseInt(input.question("Quantas camisetas pequenas foram vendidas? "))
const med = parseInt(input.question("Quantas camisetas médias foram vendidas? "))
const gra = parseInt(input.question("Quantas camisetas grandes foram vendidas? "))

console.log(`O total arrecadado foi de R$ ${totalVendas(peq, med, gra)} reais.`)
