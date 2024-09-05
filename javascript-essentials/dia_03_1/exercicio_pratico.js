// Exercícios Práticos


// 1 - Declare uma variável chamada nome usando let e atribua seu nome a ela. Em seguida, imprima o valor no console.
   
    let nome = "Haru"
    console.log(nome)

// 2 - Declare uma constante chamada PI e atribua o valor 3.14159 a ela. Tente reatribuir um novo valor a PI e observe o erro.

    const PI = 3.141559
    const PI = 3.14
    console.log(PI)

// 3 - Crie uma variável idade usando let e atribua sua idade a ela. Em seguida, incremente esta variável em 1 e imprima o resultado.
    
    let idade = 17
    console.log (idade+1)

// 4 - Declare uma variável temperatura sem atribuir um valor inicial. Imprima seu valor no console.

    let temperatura
    console.log(temperatura)

// 5 - Crie uma variável frutas como um array contendo três frutas. Use const para a declaração. Adicione uma nova fruta ao array e imprima o resultado.

    const frutas= ["maça","pera","abacate","abacaxi"]
    frutas.push("pitaya")
    console.log(frutas)

// 6 - Crie uma função que receba um parâmetro nome e declare uma variável local saudacao usando let. Retorne uma string combinando saudacao e nome.

    function saudacao(nome) {
    let saudacao = 'Olá '
    return saudacao + nome
  }
    console.log (saudacao("Haru"))

// 7 - Demonstre o comportamento de hoisting com uma variável declarada com var. Tente acessar a variável antes de sua declaração no código.

    console.log(numver)
    var numver = 7 

// 8 - Crie um objeto pessoa usando const com propriedades nome e idade. Modifique a idade e adicione uma nova propriedade cidade. Imprima o objeto antes e depois das modificações.

    const pessoa = { nome: 'João', idade: 30};
  
    console.log('Antes da modificação:', pessoa);
  
    pessoa.idade = 31
    pessoa.cidade = 'São Paulo'
  
    console.log('Depois da modificação:', pessoa);

// 9 - Demonstre a diferença de escopo entre var e let dentro de um bloco if.

if (true) {
    var x = 10;
    let y = 20;
    console.log(x)
    console.log(y)
  }
  
  console.log(x)
  console.log(y)

// 10 - Crie uma função que demonstre o conceito de closure, usando uma variável declarada com let.

