// Exercício 3: Verificador de Ano Bissexto
// Descrição: Crie um programa que determine se um ano é bissexto ou não. O programa deve solicitar ao usuário que insira um ano e, em seguida, informar se é bissexto. Um ano é bissexto se for divisível por 4, exceto anos centenários (divisíveis por 100) que não são divisíveis por 400.

const prompt = require('readline-sync');

// Função para verificar se um ano é bissexto
function isBissexto(ano) {
    if (ano % 4 === 0) {
      if (ano % 100 === 0) {
        if (ano % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Programa principal
  console.log("Verificador de Ano Bissexto");
  console.log("---------------------------");
  
  // Perguntar ao usuário o ano
  const ano = parseInt(prompt("Digite um ano: "));
  
  // Verificar se o ano é bissexto
  const resultado = isBissexto(ano);
  
  // Exibir o resultado
  if (resultado) {
    console.log(`O ano ${ano} é bissexto.`);
  } else {
    console.log(`O ano ${ano} não é bissexto.`);
  }