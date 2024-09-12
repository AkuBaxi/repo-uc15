// Exercício 2: Calculadora de Descontos
// Descrição: Desenvolva um programa que calcule o preço final de um produto após aplicar um desconto. O programa deve pedir ao usuário o preço original do produto e a porcentagem de desconto. Em seguida, deve calcular e exibir o valor do desconto e o preço final do produto

const prompt = require('readline-sync');


const preço = parseFloat(prompt("Digite o preço da mercadoria:"));
const desconto = parseFloat(prompt("Digite o percentual de desconto:"));
const valorDesconto = preço * desconto / 100;
const pagar = preço - valorDesconto;

console.log(`Um desconto de ${desconto.toFixed(2)}% em uma mercadoria de R$ ${preço.toFixed(2)}`);
console.log(`vale R$ ${valorDesconto.toFixed(2)}.`);
console.log(`O valor a pagar é de R$ ${pagar.toFixed(2)}`);