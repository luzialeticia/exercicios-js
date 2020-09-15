/* 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento
1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% */

const input = require('readline-sync')

const precoNormal = parseFloat(input.question("Digite o valor do produto: R$ "))
const condicaoPagamento = input.question("Qual a forma de pagamento?\nÀ vista em dinheiro ou cheque DIGITE 1\nÀ vista no cartão de crédito ou débito DIGITE 2\nParcelado em 2X DIGITE 3\nParcelado em 3x DIGITE4")