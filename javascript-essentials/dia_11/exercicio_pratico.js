// 1- Crie uma função que receba um array de números e retorne a soma de todos os elementos pares.

function somaPares(arr) {
    return arr.reduce((acc, current) => {
        if (current % 2 === 0) {
        return acc + current;
    }
    return acc;
    }, 0);
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(somaPares(arr)); 

// 2- Implemente uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculas.
function upperCaseStrings(arr) {
    return arr.map(str => str.toUpperCase());
}

const arr = ['hello', 'world', 'javascript'];
const upperCaseArr = upperCaseStrings(arr);
console.log(upperCaseArr); // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

// 3- Escreva uma função que receba um array de números e retorne o maior número do array.

function encontrarMaiorNumero(array) {
    // Verifica se o array está vazio
    if (array.length === 0) {
    return null;
    }
    
    return Math.max(...array);
}

  // Exemplo de uso:
const numeros = [5, 3, 8, 1, 10, 7];
const maiorNumero = encontrarMaiorNumero(numeros);
console.log(maiorNumero); 

// 4- Crie uma função que receba um array e remova todos os elementos duplicados.

function removerDuplicados(array) {
    return [...new Set(array)];
}

const numeros = [1, 1, 1, 2, 3, 2, 2, 2, 4, 1, 5, 6, 5];
const numerosSemDuplicados = removerDuplicados(numeros);
console.log(numerosSemDuplicados);


// 5- Implemente uma função que receba dois arrays e retorne um novo array com os elementos comuns entre eles.

function encontrarElementosComuns(array1, array2) {
    return array1.filter(elemento => array2.includes(elemento));
}

  // Exemplo de uso:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const elementosComuns = encontrarElementosComuns(array1, array2);
console.log(elementosComuns); 

// 6- Crie uma função que ordene um array de objetos com base em uma propriedade específica. Por exemplo, ordenar um array de pessoas pela idade.

function ordenarPorIdade(array) {
    return array.sort((a, b) => a.idade - b.idade);
}

const pessoas = [
    { nome: 'Carlos', idade: 25 },
    { nome: 'Ana', idade: 30 },
    { nome: 'Bruno', idade: 20 },
    { nome: 'Daniel', idade: 28 }
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);


// 7- Implemente uma função que "achate" um array de arrays em um único nível. Por exemplo, [[1, 2], [3, 4], [5, 6]] deve se tornar [1, 2, 3, 4, 5, 6].

function achatarArray(array) {
    return array.flat();
}

const arrayDeArrays = [[1, 2], [3, 4], [5, 6]];
const arrayAchatado = achatarArray(arrayDeArrays);
console.log(arrayAchatado);

// 8- Escreva uma função que implemente o algoritmo de busca binária em um array ordenado.

function buscaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
const meio = Math.floor((inicio + fim) / 2);

if (array[meio] === valor) {
        return meio; // Retorna o índice do valor encontrado
}

if (array[meio] < valor) {
        inicio = meio + 1; // Busca na metade superior
} else {
        fim = meio - 1; // Busca na metade inferior
}
    }
    
    return -1; // Retorna -1 se o valor não for encontrado
}

  // Exemplo de uso:
const numer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = buscaBinaria(numer, 7);
  console.log(resultado); // Resultado: 6 (índice do número 7)

const resultadoNaoEncontrado = buscaBinaria(numer, 11);
  console.log(resultadoNaoEncontrado); // Resultado: -1 (não encontrado)  


// 9- Crie uma função que agrupe os elementos de um array com base em uma função de agrupamento. Por exemplo, agrupar números por paridade.

function agruparPor(array, funcaoDeAgrupamento) {
    return array.reduce((acumulador, elemento) => {
    const chave = funcaoDeAgrupamento(elemento);

      // Se a chave não existir no acumulador, inicializa como um array vazio
if (!acumulador[chave]) {
        acumulador[chave] = [];
}

acumulador[chave].push(elemento);

return acumulador;
    }, {});
}

function agruparPorParidade(numero) {
    return numero % 2 === 0 ? 'par' : 'impar';
}


const numeross = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const agrupados = agruparPor(numeross, agruparPorParidade);
console.log(agrupados);

// 10- Implemente uma função que simule o comportamento do método reduce() sem usar o método nativo.

function meuReduce(array, callback, inicial) {
    let acumulador = inicial;
    let i = 0;
    
    if (acumulador === undefined) {
    acumulador = array[0];
    i = 1;
    }

    for (; i < array.length; i++) {
    acumulador = callback(acumulador, array[i], i, array);
    }

    return acumulador;
}


const numero = [1, 2, 3, 4, 5];

const soma = meuReduce(numero, (acc, curr) => acc + curr, 0);
console.log(soma);


const produto = meuReduce(numero, (acc, curr) => acc * curr, 1);
console.log(produto);

