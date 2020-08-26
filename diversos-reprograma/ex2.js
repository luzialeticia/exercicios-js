/* Solicite o preço de uma mercadoria e o percentual de desconto.
Exiba o valor do desconto e o preço a pagar. */

const input = require('readline-sync')

const preco = parseFloat(input.question("Valor da mercadoria: "))
const percentualDesconto = parseFloat(input.question("Percentual do desconto: "))

const valorDesconto = ((percentualDesconto/100)*preco).toFixed(2)
const precoPagar = (preco - valorDesconto).toFixed(2)

console.log(`O desconto, em reais, é de R$ ${valorDesconto}. Você pagará R$ ${precoPagar}.`)