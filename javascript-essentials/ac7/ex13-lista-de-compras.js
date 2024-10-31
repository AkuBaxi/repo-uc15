/*
Exercício 13: Lista de Compras
Crie um programa que contenha um array com uma lista de compras. 
O programa deve percorrer o array e mostrar cada item precedido pela mensagem "Preciso comprar: ".
*/

const listaDeCompras = [
    "maçã",
    "banana",
    "leite",
    "pão",
    "ovos"
];

listaDeCompras.forEach(item => {

    console.log(`Preciso comprar: ${item}`);

});