/*
Exercício 22: Verificador de Maioridade Internacional
Nível: Iniciante

Crie um programa que determine se uma pessoa pode beber álcool em diferentes países.
O programa deve:
1. Receber a idade da pessoa
2. Verificar e informar se ela pode beber nos seguintes lugares:
   - Brasil e EUA (21 anos)
   - Japão e Indonésia (20 anos)
   - Portugal e Alemanha (16 anos)
*/
function verificarMaioridade(idade, pais) {
    let maioridade;
    switch (pais) {
        case "Brasil":
            case "EUA":
                maioridade = 21;
                break;
                case "Japão":
                    case "Indonésia":
                        maioridade = 20;
                        break;
                        case "Portugal":
                            case "Alemanha":
                                maioridade = 16;
                                break;
                                default:
                                    return "País não encontrado";
                                    }
                                    if (idade >= maioridade) {
                                        return "Pode beber";
                                        } else {
                                            return "Não pode beber";
                                            }
                                            }
                                            let idade = 25;
                                            let pais = "Brasil";
                                            console.log(verificarMaioridade(idade, pais));

                                           