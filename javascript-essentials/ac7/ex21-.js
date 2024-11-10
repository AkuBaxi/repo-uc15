/*
Exercício 21: Conversor de Temperaturas
Desenvolva uma função que converta temperaturas entre Celsius e Fahrenheit.
A função deve receber um valor numérico, a unidade de origem ("C" ou "F") e a unidade de destino, retornando o valor convertido.
*/
function converterTemperatura(valor, origem, destino) {
    if (origem === "C" && destino === "F") {
        return valor * 9 / 5 + 32;
        } else if (origem === "F" && destino === "C") {
            return (valor - 32) * 5 / 9;
            } else {
                return "Unidade de origem ou destino inválida"
                }
                }
                console.log(converterTemperatura(30, "C", "F"))
            
        