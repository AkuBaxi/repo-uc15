## Exercícios Teóricos 11

# Questões Dissertativas

### Explique a diferença entre os métodos `push()` e `unshift()` em arrays JavaScript. Como eles afetam o desempenho do array?
**R:** O método `push()` adiciona um ou mais elementos no final de um array, sendo mais rápido que `unshift()`, que adiciona elementos no início, forçando a reordenação de todos os elementos subsequentes no array.

### Descreva o funcionamento do método `reduce()` e forneça um exemplo de uso prático que não seja uma simples soma de elementos.
**R:** O método `reduce()` permite iterar sobre os elementos de um array, acumulando valores com base em uma função de callback que é aplicada sucessivamente a cada elemento. Ele pode ser usado para transformar um array em um objeto ou realizar operações complexas, como contar a frequência de elementos.

```js
const produtos = [
  { nome: 'Camiseta', tipo: 'Vestuário', preco: 50 },
  { nome: 'Calça', tipo: 'Vestuário', preco: 100 },
  { nome: 'Celular', tipo: 'Eletrônicos', preco: 1500 },
  { nome: 'Tablet', tipo: 'Eletrônicos', preco: 2000 },
  { nome: 'Tênis', tipo: 'Vestuário', preco: 200 }
];

const produtosAgrupadosPorTipo = produtos.reduce((acumulador, produto) => {
  // Se a categoria ainda não existir no acumulador, criá-la como array vazio
  if (!acumulador[produto.tipo]) {
    acumulador[produto.tipo] = [];
  }
  // Adicionar o produto à categoria correspondente
  acumulador[produto.tipo].push(produto);
  return acumulador;
}, {});

console.log(produtosAgrupadosPorTipo);
```

### Compare e contraste os métodos `map()` e `forEach()`. Em que situações você escolheria usar um em vez do outro?
**R:** Use `map()` quando:

precisar transformar os dados de um array e deseja um novo array como resultado.
quando está lidando com operações que envolvem uma alteração em todos os elementos.

Use `forEach()` quando:

precisa realizar uma ação em cada elemento do array.
não precisa do valor de retorno, apenas deseja iterar pelos elementos.

### Explique o conceito de "sparse arrays" (arrays esparsos) em JavaScript e como eles podem ser criados. Quais são as implicações de se trabalhar com arrays esparsos?
**R:** Sparse arrays são arrays que têm índices não preenchidos, resultando em "buracos".
Eles podem ser criados de várias maneiras, como inicializando um array com um comprimento específico sem definir todos os elementos ou definindo apenas alguns índices.

### Discuta as vantagens e desvantagens de usar o método `sort()` para ordenar arrays em JavaScript. Como você lidaria com a ordenação de um array de objetos baseada em uma propriedade específica?
**R:** O método `sort()` é uma ferramenta poderosa e flexível para ordenar arrays, mas é importante estar ciente das suas limitações, especialmente no que diz respeito à ordenação de números e mutabilidade.
Para ordenar arrays de objetos, você deve usar uma função de comparação que define como as propriedades dos objetos devem ser comparadas. Isso permite que você ordene de maneira precisa e controlada, adaptando-se às suas necessidades específicas.

# Questões de Múltipla Escolha (apenas uma resposta correta)

### Qual método de array é usado para remover o último elemento de um array?
- [x] `pop()`
- [ ] `push()`
- [ ] `shift()`
- [ ] `unshift()`

### Qual é o resultado de `[1, 2, 3].indexOf(4)`?
- [ ] `3`
- [x] `-1`
- [ ] `undefined`
- [ ] `null`

### Qual método cria um novo array com os resultados da chamada de uma função para cada elemento?
- [ ] `forEach()`
- [x] `map()`
- [ ] `filter()`
- [ ] `reduce()`

### O que `[1, 2, 3].concat([4, 5])` retorna?
- [x] `[1, 2, 3, 4, 5]`
- [ ] `[1, 2, 3, [4, 5]]`
- [ ] `[1, 2, 3]`
- [ ] `Error`

### Qual é o output de `console.log([1, 2, 3, 4, 5].slice(2, 4))`?
- [x] `[3, 4]`
- [ ] `[3, 4, 5]`
- [ ] `[2, 3, 4]`
- [ ] `[2, 3]`

# Questões de Caixa de Múltiplas Escolhas (com duas até todas as respostas corretas)

### Quais dos seguintes métodos modificam o array original? (Selecione todas as opções corretas)
- [x] `push()`
- [ ] `map()`
- [x] `sort()`
- [ ] `filter()`
- [x] `reverse()`

### Quais afirmações sobre o método `reduce()` são verdadeiras? (Selecione todas as opções corretas)
- [x] Sempre retorna um único valor
- [x] Pode ser usado para transformar um array em um objeto
- [ ] Requer um valor inicial como segundo argumento
- [x] Pode implementar a funcionalidade de `map()` e `filter()`

### Quais dos seguintes são métodos válidos para criar um array em JavaScript? (Selecione todas as opções corretas)
- [x] `let arr = new Array();`
- [x] `let arr = [];`
- [ ] `let arr = Array.create();`
- [x] `let arr = Array(3);`
- [x] `let arr = Array.from("abc")`

# Questões Verdadeiro ou Falso

### O método `forEach()` sempre itera sobre todos os elementos do array, mesmo se a função de callback retornar `false`.
- [x] Verdadeiro
- [ ] Falso

### O método `find()` continua a busca mesmo depois de encontrar um elemento que satisfaça a condição.
- [ ] Verdadeiro
- [x] Falso

### Arrays em JavaScript podem conter elementos de diferentes tipos.
- [x] Verdadeiro
- [ ] Falso

### O método `slice()` modifica o array original.
- [ ] Verdadeiro
- [x] Falso

### O método `sort()` sem argumentos ordena os elementos como strings por padrão.
- [x] Verdadeiro
- [ ] Falso

# Questões de Associação entre Linhas e Colunas

| Método   | Descrição                                            |
|----------|------------------------------------------------------|
| 1. map() | B. Cria um novo array com os resultados da função     |
| 2. filter() | C. Cria um novo array com elementos que passam no teste |
| 3. shift() | A. Remove o primeiro elemento do array              |
| 4. reduce() | D. Executa uma função redutora no array            |
| 5. slice() | E. Retorna uma cópia superficial de uma porção do array |
