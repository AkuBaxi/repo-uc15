const prompt = require('readline-sync');
/*
Exercício 8: Jogo de Adivinhação
Desenvolva um jogo onde o computador escolhe um número fixo (por exemplo, 7) e o usuário deve adivinhar qual é este número. O programa deve continuar pedindo palpites até que o usuário acerte.
*/
let numeroSorteado = 5;
let tentativas = 0;
let acertou = false;
while (!acertou) {
    let numero = prompt.questionInt('Qual é o seu palpite? ');
    tentativas++;
    if (numero === numeroSorteado) {
        acertou = true;
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas`)
        } else if (numero < numeroSorteado) {
            console.log('O número sorteado é maior que o seu palpite')
            } else {
                console.log('O número sorteado é menor que o seu palpite')
                }
}