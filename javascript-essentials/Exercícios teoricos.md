# Exercícios Teóricos 3.1

## Questões Dissertativas

1. **Explique a diferença entre let, var e const na declaração de variáveis em JavaScript.**

   R: Diferenças de Escopo:
   - `var` tem escopo de função e global, podendo ser usada globalmente no código quando declarada dentro de uma função.
   - `let` tem escopo de bloco, sendo acessível apenas dentro do bloco em que foi declarada. 
   - `const` também tem escopo de bloco, mas é usada para variáveis que não podem ser alteradas, enquanto `let` é para variáveis cujo valor pode ser modificado.

2. **O que é hoisting em JavaScript e como ele afeta as variáveis?**

   R: É um comportamento que move as declarações de variáveis e funções para o topo do escopo antes da execução.

## Questões de Múltipla Escolha

1. **Qual das seguintes opções NÃO é uma forma válida de declarar uma variável em JavaScript moderno?**

   - [ ] let x = 5;
   - [ ] var y = 10;
   - [ ] const z = 15;
   - [x] int w = 20;

2. **Qual é o resultado do seguinte código?**
   ```javascript
   console.log(x);
   var x = 5;
   ```

   - [ ] 5
   - [x] undefined
   - [ ] Erro de referência
   - [ ] null

## Questões de Caixa de Múltiplas Escolhas

**Quais das seguintes afirmações sobre const são verdadeiras? (Selecione todas as corretas)**

- [x] Variáveis declaradas com const não podem ter seu valor alterado
- [x] const tem escopo de bloco
- [ ] Objetos declarados com const podem ter suas propriedades modificadas
- [ ] const pode ser redeclarado no mesmo escopo

## Questões Verdadeiro ou Falso

1. **Verdadeiro ou Falso: Variáveis declaradas com let podem ser acessadas antes de sua declaração no código.**

   - [ ] Verdadeiro
   - [x] Falso

2. **Verdadeiro ou Falso: Em JavaScript, é possível declarar múltiplas variáveis em uma única linha.**

   - [x] Verdadeiro
   - [ ] Falso

## Questões de Associação

Associe os conceitos da coluna A com suas descrições na coluna B:

| Coluna A  | Coluna B                                              |
|-----------|-------------------------------------------------------|
| 1. var    | a) Tem escopo de bloco e não pode ser redeclarada     |
| 2. let    | b) Usada para declarar constantes                     |
| 3. const  | c) Tem escopo de função ou global                     |
| 4. Hoisting| d) Pode ser redeclarada no mesmo escopo               |
| 5. Escopo | e) Movimentação de declarações para o topo            |

Respostas:
1 - c,
2 - a,
3 - b,
4 - e,
5 - d

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
