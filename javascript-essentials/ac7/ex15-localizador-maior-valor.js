const readline = require('readline-sync');
/*
Exercício 15: Localizador de Maior Valor
Crie um programa que encontre e mostre o maior valor em um array de números. 
Use um loop para comparar cada valor com uma variável que armazena o maior valor encontrado até o momento.
*/


const numeros = [];

for (let i = 0; i < 4; i++) {

    const numero = parseFloat(readline.question(`Digite o número ${i + 1}: `));

    numeros.push(numero);

}

let maiorValor = numeros[0];

for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
}
console.log(`O maior valor no array é: ${maiorValor}`);