/* 13. Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
CENTENA = x
DEZENA = x
UNIDADE = x */

const input = require('readline-sync')

const numero = input.question("Escolha um nº inteiro de até 3 dígitos: ")

if(numero.length > 3 || numero.length < 0) {
    console.log(`Número inválido`)
} else {
    const unidade = numero.charAt(0)
    const dezena = numero.charAt(1)
    const centena = numero.charAt(2)

    console.log(`CENTENA = ${centena}`);
    console.log(`DEZENA = ${dezena}`);
    console.log(`UNIDADE = ${unidade}`);
}