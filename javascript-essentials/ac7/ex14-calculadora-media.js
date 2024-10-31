const prompt = require('readline-sync');
/*
Exercício 14: Calculadora de Média
Desenvolva um programa que contenha um array com 5 notas. O programa deve calcular e mostrar a média das notas utilizando um loop para somar todos os valores.
*/

var nota1 = Number(prompt.question('Qual a primeira nota?: '))
var nota2 = Number(prompt.question('Qual a segunda nota?: '))
var nota3 = Number(prompt.question('Qual a terceira nota?: '))

let soma = nota1 + nota2 + nota3
let media = soma / 3
console.log(`Essa é a média:  ${media}`) 