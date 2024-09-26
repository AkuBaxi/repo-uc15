

// Nível Iniciante
// Contagem Regressiva Crie um programa que faça uma contagem regressiva de 10 até 1 usando um loop while.
let contador = 10;

while (contador > 0) {
    console.log(contador);
    contador--;
}

console.log("Feliz Ano Novo!"); 


// Soma de Números Escreva um programa que some todos os números de 1 a 100 usando um loop while.
let soma = 0;
let contador = 1;

while (contador <= 100) {
    soma += contador; // Adiciona o valor do contador à soma
    contador++; // Incrementa o contador
}

console.log("A soma dos números de 1 a 100 é: " + soma);


// Tabuada Crie um programa que imprima a tabuada de um número fornecido pelo usuário.
const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita ao usuário que insira um número
// Tabuada Crie um programa que imprima a tabuada de um número fornecido pelo usuário.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (num) => {
  num = parseInt(num);
  console.log(`Tabuada de ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  rl.close();
});



// Nível Intermediário
// Sequência de Fibonacci Crie um programa que gere os primeiros 20 números da sequência de Fibonacci usando um loop while.

let a = 0;
let b = 1;
let count = 0;

console.log("Sequência de Fibonacci:");
while (count < 20) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
  count++;
}


// Validação de Senha Implemente um sistema que peça ao usuário para criar uma senha que atenda a certos critérios (por exemplo, pelo menos 8 caracteres, contendo letras e números).
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validatePassword(password) {
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
}

rl.question("Create a password that meets the following criteria:\n  - At least 8 characters long\n  - Contains at least one letter\n  - Contains at least one number\nEnter a password: ", (password) => {
  if (validatePassword(password)) {
    console.log("Password is valid!");
  } else {
    console.log("Password is not valid. Please try again.");
  }
  rl.close();
});