# Exercícios Teóricos 8

## Questão Dissertativa

Explique a diferença entre o uso de `switch case` e múltiplos `if...else if` em termos de legibilidade e performance.

**R:** O uso de `switch case` geralmente melhora a legibilidade quando se tem muitas condições a serem verificadas, pois organiza melhor os casos em blocos. Em termos de performance, `switch case` pode ser mais eficiente em alguns ambientes, mas a diferença é mínima na maioria das situações.

## Questão de Múltipla Escolha

Qual é a função principal da palavra-chave `break` em um `switch case`?

- a) Iniciar um novo bloco de código
- X b) Encerrar a execução do `switch` e passar para o código seguinte
- c) Definir um caso padrão
- d) Comparar o valor da expressão com o caso

## Questão de Caixa de Múltiplas Escolhas

Quais das seguintes afirmações sobre o `switch case` em JavaScript são verdadeiras? (Selecione todas as aplicáveis)

- O `switch case` pode ser usado com tipos de dados não primitivos como objetos.
- A cláusula `default` é obrigatória em todo `switch case`.
- X Se não houver `break` ao final de um case, a execução continuará para o próximo case.
- X O `switch case` é mais eficiente que `if...else` para comparar uma variável com muitos valores possíveis.

## Questão Verdadeiro ou Falso

Determine se as seguintes afirmações são verdadeiras ou falsas:

- F a) O `switch case` só pode ser usado com valores numéricos.
- V b) É possível ter múltiplos `case` que executem o mesmo bloco de código.
- F c) A cláusula `default` deve sempre ser a última no `switch case`.
- F d) O `break` é sempre necessário ao final de cada `case`.

## Questão de Associação

Associe os conceitos da coluna da esquerda com suas descrições na coluna da direita:

| Conceito | Descrição                                                  |
|----------|-----------------------------------------------------------|
| 1. switch | A. Palavra-chave que define um caso específico            |
| 2. case   | B. Bloco executado se nenhum caso corresponder            |
| 3. break  | C. Inicia a estrutura de decisão                           |
| 4. default| D. Previne a execução do próximo caso                     |

- 1 - switch - C. Inicia a estrutura de decisão
- 2 - case - A. Palavra-chave que define um caso específico
- 3 - break - D. Previne a execução do próximo caso
- 4 - default - B. Bloco executado se nenhum caso corresponder
