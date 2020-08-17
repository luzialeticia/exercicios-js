/* A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber
quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de
poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com
base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular
os dados solicitados. */

const input = require('readline-sync')

const paes = parseInt(input.question('Quantos pães foram vendidos? '))
const broas = parseInt(input.question('Quantas broas foram vendidas? '))

/*const totalPaes = parseFloat(paes * 0.12).toFixed(2)
const totalBroas = parseFloat(broas * 1.50).toFixed(2)
const totalVendidos = parseFloat((totalPaes + totalBroas)).toFixed(2)*/

console.log(`O total arrecadado no dia foi de R$ ${(paes*0.12)+(broas*1.50)}.`)

//const porcentagem = (totalVendidos /10*100).toFixed(2)

console.log(`O valor que você deverá guardar na poupança é R$ ${(((paes*0.12)+(broas*1.50))*(10.00/100.00)).toFixed(2)}`)