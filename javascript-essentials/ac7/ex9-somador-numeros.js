const prompt = require('readline-sync');
/*
Exercício 9: Somador de Números
Crie um programa que peça números ao usuário e some todos eles. 
O programa deve parar de pedir números quando o usuário digitar 0, e então mostrar a soma total.    
*/

let soma = 0;
let numero;

do {
    numero = prompt.questionFloat('Digite um número (0 para parar): ');
    soma += numero;
} while (numero !== 0);

console.log(`A soma total é: ${soma}`);
