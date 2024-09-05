function contagemDeCaras(str) {
    const contagem = {};

    for (let c of str) {
        if (contagem[c]) {
            contagem[c]++;
        } else {
            contagem[c] = 1;
        }
    }

    return contagem;
}

const teste ="O onibus está indo contra a parede" 
const contagem = contagemDeCaras(teste)
console.log(contagem)