/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
decrescente. */

//const input = require('readline-sync')

// const num1 = parseInt(input.question("Digite um nº inteiro para comparar: "))
// const num2 = parseInt(input.question("Digite outro nº inteiro para comparar: "))
// const num3 = parseInt(input.question("Digite o último nº inteiro para comparar: "))

const ordem = (a, b, c) => {
    switch(a, b, c) {
        case a > b && b > c:
            `A ordem decrescente é ${a}, ${b} e ${c}`
            break
        case a > c && c > b:
            `A ordem decrescente é ${a}, ${c} e ${b}`
            break
        case b > a && a > c:
            `A ordem decrescente é ${b}, ${a} e ${c}`
            break
        case b > c && c > a:
            `A ordem decrescente é ${b}, ${c} e ${a}`
            break
        case c > a && a > b:
            `A ordem decrescente é ${c}, ${a} e ${b}`
            break
        case c > b && b > a:
            `A ordem decrescente é ${c}, ${b} e ${a}`
            break
        default:
            `Os nºs são iguais.`
            break
    }
}

console.log(ordem(2, 3, 4));