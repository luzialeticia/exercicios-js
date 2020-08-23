/* Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do
ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias. */

const input = require('readline-sync')

const dia = parseInt(input.question("Dia: "))
const mes = parseInt(input.question("Mês: "))