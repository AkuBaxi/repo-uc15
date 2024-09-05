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

