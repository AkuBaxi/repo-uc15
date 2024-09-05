# Exercícios Teóricos 3.2

## Questões Dissertativas

1. **Explique a diferença entre tipos de dados primitivos e tipos de dados de referência em JavaScript.**

   R:
   Tipos Primitivos:
   - Não podem ser alterados depois de criados, sendo imutáveis
   - O valor é armazenado diretamente na variável
   - Exemplos: Number, String, Boolean, Undefined, Null, Symbol

   Tipos de Referência:
   - O conteúdo pode ser alterado após a criação, sendo mutáveis
   - A variável armazena uma referência ao objeto, não o objeto em si
   - Exemplos: Object, Array, Function, Date, RegExp, Map, Set

2. **Por que é importante entender os tipos de dados primitivos em JavaScript? Dê exemplos de situações onde esse conhecimento é crucial.**

   R: É crucial para evitar erros e garantir o funcionamento correto do código. Por exemplo, saber que o `prompt` retorna uma `string` ajuda a converter esse valor para `number` antes de realizar cálculos, prevenindo bugs e garantindo comparações e operações precisas.

## Questões de Múltipla Escolha

1. **Qual dos seguintes NÃO é um tipo de dado primitivo em JavaScript?**

   - [ ] Number
   - [ ] String
   - [ ] Boolean
   - [x] Array
   - [ ] Symbol

2. **Qual é o resultado da expressão typeof null em JavaScript?**

   - [ ] "null"
   - [ ] "undefined"
   - [x] "object"
   - [ ] "number"
   - [ ] "boolean"

## Questões de Caixa de Múltiplas Escolhas

1. **Quais dos seguintes são considerados valores "falsy" em JavaScript? (Selecione todas as opções corretas)**

   - [x] 0
   - [x] ""
   - [x] null
   - [x] undefined
   - [x] false
   - [x] NaN

2. **Quais dos seguintes métodos podem ser usados para converter outros tipos em String? (Selecione todas as opções corretas)**

   - [x] toString()
   - [x] String()
   - [ ] toFixed()
   - [ ] concat()
   - [ ] valueOf()

## Questões Verdadeiro ou Falso

1. **Em JavaScript, o tipo Number pode representar tanto números inteiros quanto números de ponto flutuante.**
   - [x] Verdadeiro
   - [ ] Falso

2. **O valor undefined é atribuído automaticamente a variáveis que são declaradas mas não inicializadas.**
   - [x] Verdadeiro
   - [ ] Falso

3. **Símbolos em JavaScript são automaticamente convertidos para strings quando usados em operações de concatenação.**
   - [ ] Verdadeiro
   - [x] Falso

4. **O tipo Boolean em JavaScript só pode ter os valores true ou false.**
   - [x] Verdadeiro
   - [ ] Falso

5. **O operador typeof sempre retorna uma string representando o tipo do operando.**
   - [x] Verdadeiro
   - [ ] Falso

## Questões de Associação

Associe os tipos de dados primitivos com suas características:

| Tipo de Dado | Característica                                        |
|--------------|-------------------------------------------------------|
| 1. Number    | A. Representa valores lógicos                         |
| 2. String    | B. Representa a ausência intencional de valor         |
| 3. Boolean   | C. Representa texto                                   |
| 4. Undefined | D. Representa identificadores únicos                  |
| 5. Null      | E. Representa números inteiros e de ponto flutuante   |
| 6. Symbol    | F. Representa uma variável declarada sem valor        |

Respostas:
- Number — E. Representa números inteiros e de ponto flutuante
- String — C. Representa texto
- Boolean — A. Representa valores lógicos
- Undefined — F. Representa uma variável declarada sem valor
- Null — B. Representa a ausência intencional de valor
- Symbol — D. Representa identificadores únicos
