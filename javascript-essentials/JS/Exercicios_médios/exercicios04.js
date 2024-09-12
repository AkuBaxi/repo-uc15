// Exercício 4: Calculadora de IMC Avançada
// Descrição: Expanda o exercício da calculadora de IMC para incluir mais categorias e informações detalhadas. O programa deve calcular o IMC, determinar a categoria de peso e fornecer uma breve descrição da categoria.

const prompt = require('readline-sync');

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
  }
  
  // Função para determinar a categoria de peso
  function determinarCategoria(imc) {
    if (imc < 16) {
      return "Magreza grave";
    } else if (imc < 17) {
      return "Magreza moderada";
    } else if (imc < 18.5) {
      return "Magreza leve";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade de grau I";
    } else if (imc < 40) {
      return "Obesidade de grau II";
    } else {
      return "Obesidade de grau III";
    }
  }


  // Programa principal
  console.log("Calculadora de IMC Avançada");
  console.log("---------------------------");
  
  // Perguntar ao usuário o peso e a altura
  const peso = parseFloat(prompt("Digite o seu peso (em kg): "));
  const altura = parseFloat(prompt("Digite a sua altura (em metros): "));
  
  // Calcular o IMC
  const imc = calcularIMC(peso, altura);
  
  // Determinar a categoria de peso
  const categoria = determinarCategoria(imc);
  
  // Fornecer uma breve descrição da categoria
  const descricao = descricaoCategoria(categoria);
  
  // Exibir os resultados
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);
  console.log(`Sua categoria de peso é: ${categoria}`);
  console.log(`${descricao}`);