/*
Exercício 26: Sistema de Notas Musicais
Nível: Iniciante/Intermediário

Desenvolva um programa que:
1. Receba uma nota musical (C, D, E, F, G, A, B)
2. Mostre a frequência fundamental da nota
3. Indique em qual oitava do piano ela se encontra
4. Mostre uma curiosidade sobre a nota
*/
function musica() {
    let nota = prompt("Digite uma nota musical (C, D, E, F, G,A, B):").toUpperCase();
        let frequencia = 0;
        let oitava = 0;
        let curiosidade = "";
        switch (nota) {
            case "C":
                frequencia = 261.63;
                oitava = 4;
                curiosidade = "A nota C é a nota mais baixa do piano.";
                break;
                case "D":
                    frequencia = 293.66;
                    oitava = 4;
                    curiosidade = "A nota D é a nota mais alta do piano.";
                    break;
                    case "E":
                        frequencia = 329.63;
                        oitava = 4;
                        curiosidade = "A nota E é a nota mais alta do piano.";
                        break;
                        case "F":
                            frequencia = 349.23;
                            oitava = 4;
                            curiosidade = "A nota F é a nota mais alta do piano.";
                            break;
                            case "G":
                                frequencia = 392;
                                oitava = 4;
                                curiosidade = "A nota G é a nota mais alta do piano.";
                                break;
                                case "A":
                                    frequencia = 440;
                                    oitava = 4;
                                    curiosidade = "A nota A é a nota mais alta do piano.";
                                    break;
                                    case "B":
                                        frequencia = 493.88;
                                        oitava = 4;
                                        curiosidade = "A nota B é a nota mais alta do piano.";
                                        break;
                                        default:
                                            console.log("Nota inválida.");
                                            }
                                            console.log(`A frequência fundamental da nota ${nota} é ${frequencia} Hz.`);
                                            console.log(`A nota ${nota} está na ${oitava} oitava.`);
                                            console.log(curiosidade);
                                            }
                                            musica();
