// Exercício 1: Conversor de Temperatura
// Descrição: Crie um programa que converta uma temperatura de Celsius para Fahrenheit. O programa deve solicitar ao usuário que insira uma temperatura em Celsius e, em seguida, exibir a temperatura equivalente em Fahrenheit. Use a fórmula: F = (C * 9/5) + 32.

const prompt = require('readline-sync');

const CELSIUS = parseFloat(prompt.question("Digite a temperatura em Celsius: "))
let fahrenheit =(CELSIUS * 9/5)+32