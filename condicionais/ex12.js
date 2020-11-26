/* 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
aproveitamento, usando a fórmula:
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 

A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
Média de aproveitamento Conceito
>= 90 A
>= 75 e < 90 B
>= 60 e < 75 C
>= 40 e < 60 D
< 40 E
*/

const input = require('readline-sync')

const idAluno = input.question('Digite o nº de identificação do aluno: ')
const nota1 = parseFloat(input.question('Digite a 1ª nota: '))
const nota2 = parseFloat(input.question('Digite a 2ª nota: '))
const nota3 = parseFloat(input.question('Digite a 3ª nota: '))
const ME = parseInt(input.question('Digite a média de exercícios da avaliação: '))
const MA = ((nota1 + nota2 * 2 + nota3 * 3 + ME)/7).toFixed(1)
let conceito;

switch(MA) {
  case MA>=90:
    conceito = 'A'
    break
  case MA>=75 && MA<90:
    conceito = 'B'
    break
  case MA>=60 && MA<75:
    conceito = 'C'
    break
  case MA>=40 && MA<60:
    conceito = 'D'
    break
  case MA<40:
    conceito = 'E'
    break
  default:
    'Média inválida.'
}

if(conceito === 'A' || conceito === 'B' || conceito === 'C') {
  console.log(`A média do aluno ID ${idAluno} é: ${MA}\nO aluno está APROVADO.`)
} else {
  console.log(`A média do aluno ID ${idAluno} é: ${MA}\nO aluno está REPROVADO.`)
}
