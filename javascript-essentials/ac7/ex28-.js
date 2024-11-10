/*
Exercício 28: Jogo de Adivinhação Aprimorado
Nível: Iniciante

Crie um jogo onde o computador escolhe um número aleatório e o jogador deve adivinhar.
O programa deve:
1. Gerar um número aleatório entre 1 e 100
2. Dar dicas se o palpite está alto ou baixo
3. Contar o número de tentativas
4. Limitar o número máximo de tentativas
*/

const prompt = require('readline-sync');

function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    const maxTentativas = 10;
    
    console.log("Bem-vindo ao Jogo de Adivinhação!");
    console.log(`Tente adivinhar o número entre 1 e 100. Você tem ${maxTentativas} tentativas.`);

    while (tentativas < maxTentativas) {
        let palpite = prompt.questionInt(`Tentativa ${tentativas + 1}/${maxTentativas}. Digite seu palpite: `);        
        tentativas++;
        
        if (palpite === numeroSecreto) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
            return;
        } else if (palpite < numeroSecreto) {
            console.log("Tente um número MAIOR!");
        } else {
            console.log("Tente um número MENOR!");
        }
        
        if (tentativas === maxTentativas) {
            console.log(`Suas tentativas acabaram! O número era ${numeroSecreto}`);
        }
    }
}

jogoAdivinhacao();