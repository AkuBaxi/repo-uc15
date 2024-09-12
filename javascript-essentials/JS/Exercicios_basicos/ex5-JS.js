
// Exercício 5: Concatenar Arrays com Arrays Vazias
// Descrição:Dado um array baseArray com os valores [20, 21] e dois arrays vazios emptyArray1 e emptyArray2, use o método concat para combinar todos esses arrays em um novo array chamado resultArray. Exiba o resultado no console e explique o que acontece com arrays vazias no processo de concatenação.

const baseArray = [20,21]

const emptyArray1 = []
const emptyArray2 = []

const resultArray = baseArray.concat(emptyArray1, emptyArray2)
console.log(resultArray)
// Eles não aparecem por não terem nada, então a junção não existe