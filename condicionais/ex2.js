/* Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e
estado civil seja “CASADA”, solicitar o tempo de casada (anos). */

const input = require('readline-sync')

const nome = input.question('Nome: ')
    console.log(nome)

let sexo = input.question('Gênero (F para feminino, M para masculino, ou NB para Não-binárie): ')
    switch(sexo) {
        case "F":
            sexo = "Feminino"
            break;
        case "M":
            sexo = "Masculino" 
            break;
        case "NB": 
            sexo = "Não-binárie";
            break;
        default: 
            sexo = "Digite uma opção válida";
    }
    console.log(sexo);

let estadoCivil = input.question('Estado civil (S para solteire, C para casade, V para viúve, D para divorciade, O para outro): ')
    switch(estadoCivil) {
        case "S":
            estadoCivil = "Solteire";
            break;
        case "C":
            estadoCivil = "Casade";
            break;
        case "V":
            estadoCivil = "Viúve";
            break;
        case "D":
            estadoCivil = "Divorciade";
            break;
        case "O":
            estadoCivil = "Outro";
            break
        default:
            estadoCivil = "Digite uma opção válida";
        }
        console.log(estadoCivil);

if (sexo === "Feminino" && estadoCivil === "Casade") {
    const tempo = parseInt(input.question('Tempo de casada: '))
    console.log(`${nome} tem ${tempo} anos de casada.`)
}else {
    console.log(`${nome} é do gênero ${sexo} e seu estado civil é ${estadoCivil}.`)
}