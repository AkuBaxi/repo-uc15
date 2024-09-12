// Exercício 6: Concatenar e Preservar Arrays Originais
// Descrição:Crie dois arrays arrayA com [30, 31] e arrayB com [32, 33]. Use concat para criar um novo array arrayC que combina arrayA e arrayB. Em seguida, exiba todos os três arrays no console para demonstrar que concat não modifica os arrays originais.

const arrayA = [30,31]
const arrayB = [32,33]

const arrayC = arrayA.concat(arrayB)
console.log(arrayC)

console.log(arrayA)
console.log(arrayB)