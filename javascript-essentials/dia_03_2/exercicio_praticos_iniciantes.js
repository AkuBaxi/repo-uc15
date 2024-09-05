// Iniciantes

// Crie uma variável para cada tipo de dado primitivo em JavaScript e imprima seu tipo usando o operador typeof.

let numberVar = 42         // Número
let stringVar = "Hello"    // String
let booleanVar = true      // Boolean
let undefinedVar           // Undefined
let nullVar = null         // Null
let symbolVar = Symbol()   // Symbol


console.log("Type of numberVar:", typeof numberVar)      
console.log("Type of stringVar:", typeof stringVar)     
console.log("Type of booleanVar:", typeof booleanVar)     
console.log("Type of undefinedVar:", typeof undefinedVar) 
console.log("Type of nullVar:", typeof nullVar)       
console.log("Type of symbolVar:", typeof symbolVar)       


// Escreva uma função que receba dois números como parâmetros e retorne true se o primeiro número for maior que o segundo, e false caso contrário.


function comparadordeNum(num1, num2) {
    return num1 > num2
}
console.log(comparadordeNum(10, 5))
console.log(comparadordeNum(3, 7))


// Declare uma variável sem atribuir um valor a ela. Em seguida, verifique se ela é do tipo undefined usando uma estrutura condicional.

let variavel;

if (typeof variavel === 'undefined') {
    console.log('A variável é do tipo undefined.');
} else {
    console.log('A variável não é do tipo undefined.');
}

// Crie uma string contendo seu nome completo e use métodos de string para: a) Imprimir o nome em maiúsculas b) Contar o número de caracteres c) Extrair o primeiro nome

let nome = "Lima Wallace Matheus ";

// a) Imprimir o nome em maiúsculas
console.log("Nome em maiúsculas:", nome.toUpperCase());

// b) Contar o número de caracteres
console.log("Número de caracteres:", nome.length);

// c) Extrair o primeiro nome
let primeiroNome = nome.split(' ')[0];
console.log("Primeiro nome:", primeiroNome);


// Declare uma variável com o valor null e outra com o valor undefined. Compare-as usando os operadores == e ===. Explique o resultado.

// Declarar variáveis
let numNull = null;
let indefinido;

// Comparar usando ==
console.log("null == undefined:", numNull == indefinido); // true

// Comparar usando ===
console.log("null === undefined:", numNull === indefinido); // false


// Nível Intermediário


// Crie uma função que aceite um número como entrada e retorne true se for um número primo, e false caso contrário.

function Primo(num) {
    // Números menores que 2 não são primos
    if (num <= 1) 
        return false;
    // 2 e 3 são primos
    if (num <= 3) 
        return true;
    // Números divisíveis por 2 ou 3 não são primos
    if (num % 2 === 0 || num % 3 === 0) 
        return false;
    // Verificar divisores de 5 até a raiz quadrada de num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) 
            return false;
    }
    return true;
}

// Exemplos de uso:
console.log(Primo(7));  // true
console.log(Primo(10)); // false
console.log(Primo(13)); // true
console.log(Primo(20)); // false


// Implemente uma função que receba uma string e retorne um objeto contendo a contagem de cada caractere na string.

function contagemDeCaras(str) {
    const contagem = {};

    for (let c of str) {
        if (contagem[c]) {
            contagem[c]++;
        } else {
            contagem[c] = 1;
        }
    }

    return contagem;
}

const teste ="O onibus está indo contra a parede" 
const contagem = contagemDeCaras(teste)
console.log(contagem)


