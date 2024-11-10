/*
Exercício 25: Conversor de Unidades
Nível: Iniciante

Crie um conversor de unidades que:
1. Receba um valor numérico
2. Receba a unidade de origem (kg, g, mg)
3. Receba a unidade de destino
4. Retorne o valor convertido
*/
function converterUnidade(valor, origem, destino) {
    const conversoes = {
        kg: {
            g: valor * 1000,
            mg: valor * 1e6,
            },
            g: {
                kg: valor / 1000,
                mg: valor * 1000,
                },
                mg: {
                    kg: valor / 1e6,
                    g: valor / 1000,
                    },
                    };
                    if (origem in conversoes && destino in conversoes[origem]) {
                        return conversoes[origem][destino];
                        } else {
                            return "Unidade de origem ou destino inválida";
                            }
                            }
                            console.log(converterUnidade(10, "kg", "g")); // 10000
                            