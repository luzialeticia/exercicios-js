/* Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500. */

var soma = 0
var i = 3

while (i <= 500) {
    if (i%2!==0 && i%3===0) {
        soma += i
        console.log(soma)
    }
    i+=3
}


/*for (i <= 500; i+3;) {
    if (i%2!==0 && i%3===0) {
        soma = soma + i
        //i+3
        console.log(soma)
    }
    i+=3
}*/