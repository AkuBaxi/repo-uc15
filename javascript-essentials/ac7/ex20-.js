/*
Exercício 20: Verificador de Palíndromo
Crie uma função que receba uma palavra ou frase e verifique se ela é um palíndromo (se pode ser lida da mesma forma de trás para frente, desconsiderando espaços e maiúsculas/minúsculas).
*/
function verificarPalindromo(frase) {
    let fraseSemEspacos = frase.replace(/\s/g, '').toLowerCase();
    let fraseInvertida = fraseSemEspacos.split('').reverse().join('');
    return fraseSemEspacos === fraseInvertida;
    }
    console.log(verificarPalindromo('Araaraa')); 
