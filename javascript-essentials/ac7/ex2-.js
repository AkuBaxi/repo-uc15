const prompt = require('readline-sync');
/*
Exercício 2: Sistema de Notas
Desenvolva um programa que receba a nota de um aluno (0-100) e retorne seu conceito seguindo a escala:
    Igual ou Acima de 90: Nota A -> Excelente
    Igual ou Acima de 80: Nota B -> Muito Bom 
    Igual ou Acima de 70: Nota C -> Bom
    Igual ou Acima de 60: Nota D -> Irregular
    Abaixo de 60: Nota E -> Reprovado
*/

let nota = Number(prompt.questionFloat("Digite a nota do aluno: "))
    if (nota >= 90) {
        console.log(`${nota} é igual a Nota A -> Excelente. Parabéns você o mínimo :D`)
    } else if (nota >= 80) {
        console.log(`${nota} é igual a Nota B -> Muito Bom `)
    } else if (nota >= 70) {
        console.log(`${nota} é igual a Nota C -> Bom`)
    } else if (nota >= 60) {
        console.log(`${nota} é igual a Nota D -> Irregular`)
    } else if (nota < 60) {
        console.log(`${nota} é igual a Nota E -> Reprovado. PARABÉNS POR NÃO FAZER O MÍNIMO`)
    } else {
        console.log(`Nota inválida`)
    }
