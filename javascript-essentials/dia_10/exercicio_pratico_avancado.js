// Exercício 5: Matriz em Espiral
// Nível: Intermediário/Avançado

// Descrição:
// Escreva uma função que receba um número n como entrada e retorne uma matriz n x n preenchida em espiral
// com números de 1 a n^2, começando do canto superior esquerdo e movendo-se no sentido horário.

// Dicas:
// - Crie uma matriz n x n preenchida com zeros.
// - Use quatro loops for para preencher cada lado da espiral.
// - Mantenha controle das bordas da espiral que já foram preenchidas.

// Solução:
function matrizEspiral(n) {
    const matriz = Array.from({ length: n }, () => Array(n).fill(0));
    
    let numero = 1; 
    let esquerda = 0, direita = n - 1; 
    let cima = 0, baixo = n - 1; 
  
    while (numero <= n * n) {
      for (let i = esquerda; i <= direita; i++) {
        matriz[cima][i] = numero++;
      }
      cima++;
  
      for (let i = cima; i <= baixo; i++) {
        matriz[i][direita] = numero++;
      }
      direita--;
  
      if (cima <= baixo) {
        for (let i = direita; i >= esquerda; i--) {
          matriz[baixo][i] = numero++;
        }
        baixo--;
      }
  
      if (esquerda <= direita) {
        for (let i = baixo; i >= cima; i--) {
          matriz[i][esquerda] = numero++;
        }
        esquerda++;
      }
    }
  
    return matriz;
  }
  
  const n = 5;
  const resultado = matrizEspiral(n);
  console.log(`Matriz ${n} x ${n} preenchida em espiral:`);
  resultado.forEach(linha => console.log(linha));
  