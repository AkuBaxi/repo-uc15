// Exercício 1: Contador de Vogais
// Nível: Iniciante

// Descrição:
// Escreva uma função que receba uma string como entrada e retorne o número de vogais na string.
// Considere as vogais como 'a', 'e', 'i', 'o', 'u' (maiúsculas ou minúsculas).

// Dicas:
// - Use um loop for...of para iterar sobre cada caractere da string.
// - Converta cada caractere para minúsculo antes de verificar se é uma vogal.
// - Use um conjunto (Set) para armazenar as vogais e facilitar a verificação.

// Solução:

function contarVogais(str) {
    const vogais = new Set(['a', 'e', 'i', 'o', 'u']);
    let contador = 0;
  
    for (const char of str.toLowerCase()) {
      if (vogais.has(char)) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const resultado = contarVogais("Olá, como você está?");
  console.log(`Número de vogais: ${resultado}`);
  

  // Exercício 2: Soma de Números Pares
// Nível: Iniciante

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne a soma de todos os números pares de 2 até n (inclusive).

// Dicas:
// - Use um loop for tradicional.
// - Verifique se cada número é par usando o operador módulo (%).
// - Acumule a soma em uma variável.

// Solução:

function somaPares(n) {
    let soma = 0;
  
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        soma += i;
      }
    }
  
    return soma;
  }
  
  const resultsoma = somaPares(10);
  console.log(`A soma dos números pares de 2 até 10 é: ${resultsoma}`);
  