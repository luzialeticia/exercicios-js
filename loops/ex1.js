/* Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500. */

var soma = 0
var i = 1

while (i <= 500) {
    if (i%2!==0 && i%3===0) {
        soma += i
        i++
    }
    console.log(soma)
}

//console.log(i)