// Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.

let soma = 0

for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        soma += i
        console.log(soma)
    }
}