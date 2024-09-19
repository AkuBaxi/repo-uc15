# Exercícios Teóricos 6

## Questões Dissertativas

### Explique a diferença entre os operadores de igualdade (==) e igualdade estrita (===) em JavaScript. Forneça exemplos para ilustrar sua resposta.

**R:**

= (Igualdade): Compara dois valores após realizar conversão de tipo, se necessário. 

Exemplo:
```javascript
console.log(5 == '5'); // true, porque '5' é convertido para número
```

=== (Igualdade Estrita): Compara dois valores sem conversão de tipo; ambos os valores e tipos devem ser idênticos. 

Exemplo:
```javascript
console.log(5 === '5'); // false, porque são tipos diferentes (number vs string)
```

Recomenda-se usar === para evitar comparações inesperadas e garantir uma comparação mais precisa.

## Questões de Múltipla Escolha

### Qual é o resultado da expressão 10 > "5" em JavaScript?

- [x] true
- [ ] false
- [ ] undefined
- [ ] Error

## Questões de Caixa de Múltiplas Escolhas

### Quais das seguintes expressões retornam true em JavaScript? (Selecione todas as opções corretas)

- [ ] 5 === "5"
- [x] 5 == "5"
- [x] 10 >= 10
- [x] "a" < "b"
- [x] null == undefined
- [x] null === null

## Questões Verdadeiro ou Falso

### Determine se as seguintes afirmações são verdadeiras ou falsas:

- [x] O operador > pode ser usado para comparar strings.
- [ ] NaN === NaN retorna true.
- [x] O operador <= retorna true se o valor à esquerda for menor ou igual ao valor à direita.
- [ ] "10" === 10 retorna true.

## Questões de Associação

### Associe os operadores de comparação com suas descrições:

| Operador | Descrição |
|----------|-----------|
| 1. ==    | A. Igualdade estrita |
| 2. ===   | B. Maior que |
| 3. !=    | C. Menor ou igual a |
| 4. >     | D. Igualdade (com coerção) |
| 5. <=    | E. Desigualdade (com coerção) |

**Justificativa:**
1 = D
2 = A
3 = E
4 = B
5 = C
