/* Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e
estado civil seja “CASADA”, solicitar o tempo de casada (anos). */

const input = require('readline-sync')

const nome = input.question('Nome: ')
    console.log(nome)

const sexo = input.question('Gênero (F para feminino, M para masculino, ou NB para Não-binárie): ')
    switch(sexo) {
        case "F":
            console.log("Feminino");
            break;
        case "M": 
            console.log("Masculino");
            break;
        case "NB": 
            console.log("Não-binárie");
            break;
        default: 
            console.log("Digite uma opção válida");
    }

const estadoCivil = input.question('Estado civil (S para solteire, C para casade, V para viúve, D para divorciade, O para outro): ')
   switch(estadoCivil) {
        case "S":
            console.log("Solteire");
            break;
        case "C":
            console.log("Casade");
            break;
        case "V":
            console.log("Viúve");
            break;
        case "D":
            console.log("Divorciade");
            break;
        case "O":
            console.log("Outro");
            break;
        default:
            console.log("Digite uma opção válida");
   }

if (sexo === "F" && estadoCivil === "C") {
    const tempo = parseInt(input.question('Tempo de casada: '))
    console.log(`${nome} tem ${tempo} anos de casada.`)
}else {
    console.log(`${nome} é do gênero ${sexo} e seus estado civil é ${estadoCivil}.`)
}