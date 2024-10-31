const prompt = require('readline-sync');
/*
Exercício 6: Classificador de Produtos
Crie um programa que classifique produtos com base em seus códigos:
1 - Alimento não perecível
2 - Alimento perecível
3 - Vestuário
4 - Limpeza
Qualquer outro código - Inválido
*/


var codigo = prompt.questionInt('Selecione uma dessas opções:\n1 - Alimento não perecível\n2 - Alimento perecível\n3 - Vestuário\n4 - Limpeza\n\nDigite o código: ');

if (codigo === 1) {
    console.log("Alimento não perecível");
} else if (codigo === 2) {
    console.log("Alimento perecível");
} else if (codigo === 3) {
    console.log("Vestuário");
} else if (codigo === 4) {
    console.log("Limpeza");
} else {
    console.log("Código inválido");
}