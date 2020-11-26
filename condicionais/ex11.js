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
const condicaoPagamento = parseInt(input.question("Qual a forma de pagamento?\n    À vista em dinheiro ou cheque DIGITE 1\n    À vista no cartão de crédito ou débito DIGITE 2\n    Parcelado em 2X DIGITE 3\n    Parcelado em 3x DIGITE 4\n"))
let desconto;
let juros;
let precoFinal;
let parcelas;

switch(condicaoPagamento) {
  case 1:
    desconto = precoNormal*(10/100)
    precoFinal = (precoNormal - desconto).toFixed(2)
    console.log(`O total a pagar é R$${precoFinal} reais.`)
    break
  case 2:
    desconto = precoNormal*(15/100)
    precoFinal = (precoNormal - desconto.toFixed(2))
    console.log(`O total a pagar é R$${precoFinal} reais.`)
    break
  case 3:
    parcelas = (precoNormal/2).toFixed(2)
    console.log(`O total a pagar é R$${precoNormal} reais. Em 2 parcelas de R$${parcelas} reais.`)
    break
  case 4:
    juros = precoNormal*(10/100)
    precoFinal = (precoNormal+juros).toFixed(2)
    parcelas = (precoFinal/3).toFixed(2)
    console.log(`O total a pagar é R$${precoFinal} reais, em 3 parcelas de R$${parcelas} reais.`)
    break
  default:
    console.log("Opção de pagamento inválida.")
}