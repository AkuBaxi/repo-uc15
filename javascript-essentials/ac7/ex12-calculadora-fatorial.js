const prompt = require('readline-sync');
/*
Exercício 12: Calculadora de Fatorial
Desenvolva um programa que calcule o fatorial de um número fornecido pelo 
usuário. Por exemplo, o fatorial de 5 é: 5 x 4 x 3 x 2 x 1 = 120
*/

const numero = prompt.questionInt('Digite um número para calcular seu fatorial: ');
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é: ${fatorial}`);