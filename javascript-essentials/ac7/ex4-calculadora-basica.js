const prompt = require('readline-sync');
/*
Exercício 4: Calculadora Básica
Crie uma calculadora que receba a operação desejada (+, -, *, /) e dois números.
O programa deve realizar a operação escolhida e mostrar o resultado.
Utilize switch case para implementar as diferentes operações.
*/
function calculadora() {
    let operacao = prompt.question('Qual operação deseja realizar entre essas?: 1: soma, 2: subtação, 3: multiplicação, 4: divisão: ').trim();  // o trim() tira os espaços
    let num1 = prompt.questionFloat('Digite o primeiro número: ');
    let num2 = prompt.questionFloat('Digite o segundo número: ');
    switch (operacao) {
        case '1':
            result = num1 + num2;
            console.log(`${result} é o resultado da sua Soma`)
            break;
        case '2':
            result =  num1 - num2
            console.log(`${result} é o resultado da sua Subtração`)
            break;
        case '3':
            result = num1 * num2
            console.log(`${result} é o resultado da sua Multicação`)
            break;
        case '4':
            result = num1 / num2
            console.log(`${result} é o resultado da sua Divisão`)
            if (num2 === 0){
                console.log('Não existe divisão por 0')
            }
            break;
        default: 
        console.log('DIGITE UM NUMERO VALIDO SEU MERDA LIXO BOSTA SEU MINETA INÚTIL')
    };
}

calculadora()