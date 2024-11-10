/*
Exercício 23: Calculadora de IMC com Recomendações
Nível: Iniciante/Intermediário

Desenvolva uma calculadora de IMC que além de mostrar o índice:
1. Receba peso e altura
2. Calcule o IMC
3. Classifique em categorias
4. Forneça uma recomendação personalizada para cada faixa
*/
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
    }
    function classificarIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
            } else if (imc < 25) {
                return "Peso normal";
                } else if (imc < 30) {
                    return "Sobrepeso";
                    } else if (imc < 35) {
                        return "Obesidade grau I";
                        } else if (imc < 40) {
                            return "Obesidade grau II";
                            } else {
                                return "Obesidade grau III";
                                }
                                }
                                function fornecerRecomendacao(imc) {
                                    if (imc < 18.5) {
                                        return "Aumente o consumo calórico e ganhe peso saudável";
                                        } else if (imc < 25) {
                                            return "Mantenha o peso atual";
                                            } else if (imc < 30) {
                                                return "Perca peso com exercícios regulares e alimentação saudável";
                                                } else if (imc < 35) {
                                                    return "Perca peso com exercícios regulares e alimentação saudável, e consulte um médico";
                                                    } else if (imc < 40) {
                                                        return "Perca peso com exercícios regulares e alimentação saudável, e consulte um médico";
                                                        } else {
                                                            return "Consulte um médico";
                                                            }
                                                            }
                                                            function main() {
                                                                const peso = 70;
                                                                const altura = 1.75;
                                                                const imc = calcularIMC(peso, altura);
                                                                const classificacao = classificarIMC(imc);
                                                                const recomendacao = fornecerRecomendacao(imc);
                                                                console.log(`IMC: ${imc.toFixed(2)}`);
                                                                console.log(`Classificação: ${classificacao}`);
                                                                console.log(`Recomendação: ${recomendacao}`);
                                                                }
                                                                main();  
                                                    