/*
Exercício 16: Sistema de Cadastro de Aluno
Crie um objeto que represente um aluno com propriedades para nome, idade, notas (array com 3 notas) e endereço (outro objeto com rua e número). 
O programa deve mostrar os dados do aluno e calcular sua média.
*/


let aluno = "Laura"
let idade = 20
let notas = [8, 7, 9]
let endereco = {
    rua: "Rua do Sol",
    numero: 123
    }
let media = (notas[0] + notas[1] + notas[2])
    let dadosAluno ={
        nome: aluno,
        idade: idade,
        notas: notas,
        }
        console.log(dadosAluno)
        console.log(`A média do aluno é: ${media / 3}`)  //
        console.log(`O endereço do aluno é: ${endereco.rua}, ${endereco.numero}`
            )  