// Exercício 3: Gerador de Padrão de Asteriscos
// Nível: Intermediário

// Descrição:
// Escreva uma função que receba um número n como entrada e imprima um padrão de asteriscos em forma de triângulo.
// O padrão deve ter n linhas, com a primeira linha contendo 1 asterisco e a última contendo n asteriscos.

// Dicas:
// - Use loops aninhados: um para as linhas e outro para os asteriscos em cada linha.
// - Use console.log() para imprimir cada linha.
// - Lembre-se de que cada linha deve ter um número de asteriscos igual ao número da linha.

// Solução:
function imprimirTriangulo(n) {
    for (let i = 1; i <= n; i++) {
      let linha = '';
  
      for (let j = 1; j <= i; j++) {
        linha += '*'; 
      }
  
      console.log(linha);
    }
  }
  
  imprimirTriangulo(5);

  
  // Exercício 4: Encontrar Números Primos
// Nível: Intermediário

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne um array contendo todos os números primos até n (inclusive).
// Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

// Dicas:
// - Use um loop for para verificar cada número de 2 até n.
// - Crie uma função auxiliar para verificar se um número é primo.
// - Use um array para armazenar os números primos encontrados.

// Solução:

function isPrimo(num) {
    if (num < 2) return false;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function encontrarPrimos(n) {
    const primos = [];
  
    for (let i = 2; i <= n; i++) {
      if (isPrimo(i)) {
        primos.push(i);
      }
    }
  
    return primos;
  }
  
  const resultado = encontrarPrimos(50);
  console.log(`Números primos até 50: ${resultado}`);
  