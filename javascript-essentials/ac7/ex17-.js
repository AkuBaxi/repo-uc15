/*
Exercício 17: Gerenciador de Estoque
Crie um objeto produto com propriedades nome, preço e quantidade, e um método que calcule o valor total (preço * quantidade). O programa deve mostrar os dados do produto e o valor total do estoque.
*/


let produto = {
    nome: "Caneta",
    preco: 1.99,
    quantidade: 112,
    calcularValorTotal: function() {
        return this.preco * this.quantidade;
    },
    mostrarDados: function() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
        console.log(`Valor Total em Estoque: R$ ${this.calcularValorTotal()}`);
    }
};
produto.mostrarDados();

