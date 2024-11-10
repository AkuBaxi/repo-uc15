/*
Exercício 3: Aprovação de Empréstimo
Nível: Intermediário

Crie um sistema que avalie a elegibilidade para empréstimo baseado em múltiplos critérios:
1. Receba: salário, idade, tempo de emprego e valor do empréstimo desejado
2. Analise os critérios
3. Forneça o resultado com feedback específico
4. Calcule e mostre o valor máximo disponível quando aplicável
*/
function avaliarElegibilidade(salario, idade, tempoEmprego, valorEmprest
    ) {
        let resultado = {
            aprovado: false,
            feedback: "",
            valorMaximo: 0
            };
            if (salario >= 5000 && idade >= 21 && tempoEmprego >=
                2 && valorEmprest <= 10000) {
                    resultado.aprovado = true;
                    resultado.feedback = "Você foi aprovado para o empréstimo!";
                    resultado.valorMaximo = 5000;
                    } else {
                        resultado.feedback = "Você não foi aprovado para o empréstimo.";
                        if (salario < 5000) {
                            resultado.feedback += " Você precisa ter um salário maior que R$ 5000.";
                            }   
                            if (idade < 21) {
                                resultado.feedback += " Você precisa ter mais de 21 anos.";
                                }
                                if (tempoEmprego < 2) {
                                    resultado.feedback += " Você precisa ter mais de 2 anos de emprego.";
                                    }
                                    if (valorEmprest > 10000) {
                                        resultado.feedback += " O valor do empréstimo é maior que R$ 10.000. Por favor, tente novamente.";
                                        }
                                        }
                                        return resultado;
                                        }
                                        // Teste da função
                                        let resultado = avaliarElegibilidade(6000, 25, 3,8000);
                                            console.log(resultado);