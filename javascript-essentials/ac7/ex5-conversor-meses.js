const prompt = require('readline-sync');
/*
Exercício 5: Conversor de Meses
Desenvolva um programa que receba um número de 1 a 12 e retorne o nome do mês correspondente. Caso seja digitado um número fora desse intervalo, mostre a mensagem "Mês inválido".
*/
function converterMes() {
    let mes = prompt.question('fala um numero de 1 a 12 que tenha haver com o mês: ')

    if (mes === '1') {
        return "Janeiro"
    } else if (mes === '2') {
        return "Fevereiro"
    } else if (mes === '3') {
        return "Março"
    } else if (mes === '4'){
        return "Abril"
    } else if (mes === '5') {
        return "Maio"
    } else if (mes === '6') {
        return "Junho"
    } else if (mes === '7') {
        return "Julho"
    } else if (mes === '8') {
        return "Agosto"
    } else if (mes === '9') {
        return "Setembro"
    } else if (mes === '10') {
        return "Outubro"
    } else if (mes === '11') {
        return "Novembro"
    } else if (mes === '12') {
        return "Dezembro"
    } else {
        return "Mês inválido"
    }
}
console.log(converterMes());