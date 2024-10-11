# Exercícios Teóricos 10

## Questões Dissertativas

1. **Explique a diferença principal entre o loop for...in e o loop for...of em JavaScript.**
   - A principal diferença é que o loop for...in itera sobre as chaves de um objeto, enquanto o loop for...of itera sobre os valores de objetos iteráveis (como arrays).

## Questões de Múltipla Escolha

1. **Qual é a saída do seguinte código?**
   ```javascript
   for (let i = 0; i < 3; i++) {
       console.log(i);
   }
   ```
   - [ ] 1 2 3
   - [X] 0 1 2
   - [ ] 0 1 2 3
   - [ ] 1 2

## Questões de Caixa de Múltiplas Escolhas

1. **Quais das seguintes afirmações sobre o loop for em JavaScript são verdadeiras? (Selecione todas as aplicáveis)**
   - [X] A inicialização no loop `for` é executada apenas uma vez
   - [X] A condição no loop `for` é verificada antes de cada iteração
   - [X] A expressão final no loop `for` é executada após cada iteração
   - [ ] O loop `for` sempre precisa ter os três componentes (inicialização, condição, expressão final) preenchidos
   - [X] É possível ter múltiplas expressões na inicialização e na expressão final do loop `for`

## Questões Verdadeiro ou Falso

- **F** a) O loop for...in é recomendado para iterar sobre arrays em JavaScript
- **F** b) O loop for...of pode ser usado para iterar sobre as propriedades de um objeto simples

## Questão de Associação

Associe os loops com suas características mais apropriadas:

| Coluna A | Coluna B |
|----------|----------|
| 1. For | B) Permite controle preciso sobre o número de iterações |
| 2. for...in | C) Usado para iterar sobre as propriedades de um objeto |
| 3. for...of | A) Melhor para iterar sobre os valores de um array |

### Respostas
1 - For - B) Permite controle preciso sobre o número de iterações  
2 - for...in - C) Usado para iterar sobre as propriedades de um objeto  
3 - for...of - A) Melhor para iterar sobre os valores de um array
