/* Deve gerar dois números aleatórios entre 1 e 100.
Em seguida, some estes números e devolva uma string com o resultado no formato:
"a soma de [número aleatório] e [número aleatório] é XXX". Você vai ter que pesquisar o método do
JS para gerar números aleatórios, `Math.random()` e como utilizá-lo. */

function random1() {
    return Math.round(Math.random()*100)
}

function random2() {
    return Math.round(Math.random()*100)
}

function soma(a, b) {
    return `A soma de ${a} e ${b} é ${a + b}`
}

console.log(soma(random1(), random2()))