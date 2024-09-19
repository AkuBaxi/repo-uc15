// Nível Iniciante
// Escreva um programa que verifica se um número é positivo, negativo ou zero.
function checkNumber(num) {
    if (num > 0) {
      console.log("O número é positivo");
    } else if (num < 0) {
      console.log("O número é negativo");
    } else {
      console.log("O número é zero");
    }
  }
  checkNumber(5);

// Crie uma função que recebe a idade de uma pessoa e retorna se ela pode votar (idade >= 16) ou não.
function vota(age) {
    if (age >= 16) {
      return "Você pode votar!";
    } else {
      return "Você não pode votar!";
    }
  }
  console.log(vota(15));  

// Faça um programa que recebe três números e retorna o maior deles.
function acharMaior(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  console.log(acharMaior(10, 20, 30));

// Escreva uma função que verifica se um ano é bissexto.

function bissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(bissexto(2020));  

// Crie um programa que classifica um triângulo como equilátero, isósceles ou escaleno com base no comprimento de seus lados.

function triangulo(a, b, c) {
    if (a === b && b === c) {
      return "Equilátero";
    } else if (a === b || b === c || a === c) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }
  console.log(triangulo(5, 5, 5));
  console.log(triangulo(5, 5, 7));  
  console.log(triangulo(5, 7, 9));  

// Nível Intermediário

// Implemente uma calculadora simples que realiza operações básicas (+, -, *, /) entre dois números.

function calculador(num1, num2, operador) {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Erro: Divisão por zero!";
        } else {
          return num1 / num2;
        }
      default:
        return "Erro: Operador inválido!";
    }
  }
  
  console.log(calculador(5, 2, '+'));  

// Escreva um programa que converte uma nota numérica para uma letra (A, B, C, D, F) seguindo uma escala predefinida.

function nota(grade) {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  console.log(nota(80));  


// Crie uma função que verifica se uma string é um palíndromo.
// versão 0.1
function palindromo(str) {
    const limpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return limpa === limpa.split('').reverse().join('');
  }

  console.log(palindromo("luca")); 


// Implemente um validador de senhas que verifica se uma senha atende a critérios específicos.

function validarSenha(senha) {
    if (senha.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(senha)) {
      return false;
    }
    if (!/[a-z]/.test(senha)) {
      return false;
    }
    if (!/\d/.test(senha)) {
      return false;
    }
    if (!/[^A-Za-z0-9]/.test(senha)) {
      return false;
    }
      return true;
  }

  const senha = "Senha123!";
  console.log(validarSenha(senha)); 


// Desenvolva um programa que determina o dia da semana com base em um número de 1 a 7.

function setdiadaSemana(dia) {
    // Array com os dias da semana
    const diadaSemana = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado"
    ];
  
    if (dia < 1 || dia > 7) {
      return "Número inválido";
    }
  
    return diadaSemana[dia - 1];
  }
  const dia = 3;
  console.log(setdiadaSemana(dia));
