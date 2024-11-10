
const prompt = require('readline-sync');
/*
Exercício 10: Gerador de Tabuada
Desenvolva um programa que receba um número do usuário e mostre a tabuada desse número de 1 a 10. Use o loop for para gerar a tabuada.
*/
const numero = prompt.questionInt('Digite um número para ver sua tabuada: ');
console.log(`\nTabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
