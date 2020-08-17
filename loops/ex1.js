/* Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500. */

//let soma = 0
let i = 3

/*while (i <= 500 && i % 2 !== 0 && i%3 === 0) {
    soma += i
    i++
}*/

for (i<=500 && i%2!==0 && i%3===0; i++;) {
    //soma += i
    console.log(i)
}

/*console.log(i)
console.log(soma)*/