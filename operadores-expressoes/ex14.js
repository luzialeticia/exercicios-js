//14. Calcule a área de uma pizza que possui um raio R (pi=3.14).

const input = require('readline-sync')

const r = parseFloat(input.question('Digite o valor do raio da pizza: '))
const area = (3.14*Math.pow(r,2)).toFixed(2)

console.log(`A área da pizza é ${area}`)