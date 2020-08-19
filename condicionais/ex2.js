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
   if (estadoCivil === "S") {
       console.log("Solteire")
   }else if (estadoCivil === "C") {
        console.log("Casade")
   }else if (estadoCivil === "V") {
       console.log("Viúve")
   }else if (estadoCivil === "D") {
    console.log("Divorciade")
   }else if (estadoCivil === "O") {
    console.log("Outro")
   }else {
    console.log("Digite uma opção válida")
   }

if (sexo === "F" && estadoCivil === "C") {
    const tempo = parseInt(input.question('Tempo de casada: '))
    console.log(`${nome} tem ${tempo} anos de casada.`)
}else {
    console.log(`${nome} é do gênero ${sexo} e seus estado civil é ${estadoCivil}.`)
}