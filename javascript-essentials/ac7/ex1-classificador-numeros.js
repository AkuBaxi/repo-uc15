const prompt = require('readline-sync');
/*
Exercício 1: Classificador de Números
Crie um programa que receba um número do usuário e informe se ele é positivo, negativo ou zero. Use estruturas if, else if e else para fazer as verificações.
*/

var numero = Number(prompt.question('Digite um número positivo, negativo ou o zero: '))
if (numero > 0) {
    console.log(`O ${numero} é positivo`)
    } else if (numero < 0) {
        console.log(`O ${numero} é negativo`)
    } else if (numero == 0){
        console.log('O número é zero')
    } else {
        console.log('O número é inválido')
    }
