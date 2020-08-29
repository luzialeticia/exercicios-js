/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
decrescente. */

function ordem(a, b, c) {
    if(a > b && a > c) {
        return `${a}\n${b}\n${c}`
    }else if(b > a && b > c) {
        return `${b}\n${b}\n${c}`
    }
}