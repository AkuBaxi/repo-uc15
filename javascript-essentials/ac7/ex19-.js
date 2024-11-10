/*
Exercício 19: Calculadora com Funções
Crie uma função chamada calculadora que receba dois números e uma operação (+, -, *, /) como parâmetros e retorne o resultado da operação matemática.
*/

const prompt = require('readline-sync');

function calculadora(num1, num2, operacao) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, digite números válidos.");
        return null;
    }

    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log("Não é possível dividir por zero");
                return null;
            }
        default:
            console.log("Operação inválida");
            return null;
    }
}

function main() {
    while (true) {
        console.log("Qual operação deseja realizar?");
        console.log(" '+' Para soma \n '-' Para Subtração \n '*' Para Multiplicação \n '/' Para divisão\n");
        console.log("Digite '0' a qualquer momento para sair");
        
        let operacao = prompt.question("Digite a operação: ").trim();
        
        if (operacao === '0') {
            console.log("Saindo da calculadora. Até logo!");
            break;
        }

        if (!['+', '-', '*', '/'].includes(operacao)) {
            console.log("Operação inválida");
            continue;
        }
        
        let num1 = prompt.question("Digite o primeiro número: ").trim();
        let num2 = prompt.question("Digite o segundo número: ").trim();
        
        let resultado = calculadora(num1, num2, operacao);
        
        if (resultado !== null) {
            console.log(`Resultado: ${resultado}`);
        }

        console.log();
    }
}

main();