# Exercícios Teóricos 5

## Questões Dissertativas

### Explique a diferença entre os operadores AND (&&) e OR (||) em JavaScript.

**R:**

AND (&&):
* Retorna true apenas se ambos os operandos forem true.
* Usa curto-circuito: se o primeiro operando for false, o segundo operando não é avaliado.

OR (||):
* Retorna true se pelo menos um dos operandos for true.
* Usa curto-circuito: se o primeiro operando for true, o segundo operando não é avaliado.

### Como funciona o curto-circuito (short-circuit evaluation) nos operadores lógicos em JavaScript?

**R:** O curto-circuito é uma característica útil que ajuda a melhorar a eficiência do código e evitar erros quando o resultado da expressão pode ser determinado sem a necessidade de avaliar todas as expressões envolvidas.

**AND (&&):**
* Se a primeira expressão (expr1) é false, a expressão completa é false e a segunda expressão (expr2) não é avaliada.
* Se a primeira expressão (expr1) é true, a segunda expressão (expr2) é avaliada e o resultado da expressão é o valor de expr2.

**OR (||):**
* Se a primeira expressão (expr1) é true, a expressão completa é true e a segunda expressão (expr2) não é avaliada.
* Se a primeira expressão (expr1) é false, a segunda expressão (expr2) é avaliada e o resultado da expressão é o valor de expr2.

## Questões de Múltipla Escolha

### Qual é o resultado da expressão: true && false || true?

- [x] true
- [ ] false
- [ ] undefined
- [ ] null

### Qual operador lógico tem a maior precedência em JavaScript?

- [ ] AND (&&)
- [ ] OR (||)
- [x] NOT (!)
- [ ] Todos têm a mesma precedência

## Questões de Caixa de Múltiplas Escolhas

### Quais das seguintes afirmações são verdadeiras sobre os operadores lógicos em JavaScript? (Selecione todas as opções corretas)

- [ ] O operador AND (&&) sempre retorna um valor booleano.
- [x] O operador OR (||) pode ser usado para definir valores padrão.
- [x] O operador NOT (!) inverte o valor de verdade do seu operando.
- [x] Os operadores lógicos em JavaScript usam avaliação de curto-circuito.
- [ ] O operador XOR (^) é um operador lógico nativo em JavaScript.

## Questões Verdadeiro ou Falso

### O operador AND (&&) em JavaScript retorna o último valor verdadeiro se todos os operandos forem verdadeiros.

- [ ] Verdadeiro
- [x] Falso

### Em JavaScript, uma string vazia é considerada um valor falsy.

- [x] Verdadeiro
- [ ] Falso

### O operador OR (||) sempre retorna um valor booleano.

- [ ] Verdadeiro
- [x] Falso
