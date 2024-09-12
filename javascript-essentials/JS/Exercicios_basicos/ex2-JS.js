// Exercício 2: Concatenar Múltiplas Arrays
// Descrição:Dado três arrays numbers1, numbers2, e numbers3, que contêm os números [5, 6], [7, 8] e [9, 10] respectivamente, use o método concat para combinar todos os três arrays em um único array chamado allNumbers. Exiba o resultado no console.

const numbers1 = [5,6]
const numbers2 = [7,8]
const numbers3 = [9,10]

const allNumbers = numbers1.concat(numbers2, numbers3)
console.log(allNumbers)