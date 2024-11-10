/*
Exercício 3: Sistema de Caixa de Restaurante
Nível: Intermediário

Crie um sistema de caixa para um restaurante que:
1. Permita adicionar itens ao pedido
2. Calcule o total
3. Aplique descontos baseados em condições
4. Permita diferentes formas de pagamento
5. Calcule o troco quando necessário
*/

const prompt = require('readline-sync');

// Cardápio do restaurante
const cardapio = {
    1: { nome: 'X-Burger', preco: 25.00 },
    2: { nome: 'X-Salada', preco: 28.00 },
    3: { nome: 'Hot Dog', preco: 18.00 },
    4: { nome: 'Batata Frita', preco: 15.00 },
    5: { nome: 'Refrigerante', preco: 8.00 },
    6: { nome: 'Suco Natural', preco: 10.00 }
};

// Sistema do Caixa
class CaixaRestaurante {
    constructor() {
        this.pedido = [];
        this.total = 0;
    }

    mostrarCardapio() {
        console.log('\n=== CARDÁPIO ===');
        for (let id in cardapio) {
            console.log(`${id}. ${cardapio[id].nome} - R$ ${cardapio[id].preco.toFixed(2)}`);
        }
    }

    adicionarItem() {
        this.mostrarCardapio();
        const id = prompt.questionInt('\nDigite o número do item (0 para finalizar): ');
        
        if (id === 0) return false;
        
        if (cardapio[id]) {
            const quantidade = prompt.questionInt(`Quantidade de ${cardapio[id].nome}: `);
            this.pedido.push({
                ...cardapio[id],
                quantidade,
                subtotal: cardapio[id].preco * quantidade
            });
            return true;
        } else {
            console.log('Item inválido!');
            return true;
        }
    }

    mostrarPedido() {
        console.log('\n=== RESUMO DO PEDIDO ===');
        this.pedido.forEach(item => {
            console.log(`${item.nome} x${item.quantidade} - R$ ${item.subtotal.toFixed(2)}`);
        });
    }

    calcularTotal() {
        this.total = this.pedido.reduce((sum, item) => sum + item.subtotal, 0);
        return this.total;
    }

    aplicarDesconto() {
        console.log('\n=== DESCONTOS DISPONÍVEIS ===');
        console.log('1. 10% para pedidos acima de R$ 100');
        console.log('2. 5% para pagamento em dinheiro');
        console.log('3. 15% para clientes VIP');
        
        const opcao = prompt.questionInt('Escolha o desconto (0 para nenhum): ');
        
        switch(opcao) {
            case 1:
                if (this.total > 100) {
                    this.total *= 0.9;
                    console.log('Desconto de 10% aplicado!');
                } else {
                    console.log('Pedido não atinge o valor mínimo para desconto!');
                }
                break;
            case 2:
                this.total *= 0.95;
                console.log('Desconto de 5% aplicado!');
                break;
            case 3:
                this.total *= 0.85;
                console.log('Desconto VIP de 15% aplicado!');
                break;
            case 0:
                console.log('Nenhum desconto aplicado.');
                break;
            default:
                console.log('Opção inválida!');
        }
    }

    processarPagamento() {
        console.log('\n=== FORMAS DE PAGAMENTO ===');
        console.log('1. Dinheiro');
        console.log('2. Cartão de Débito');
        console.log('3. Cartão de Crédito');
        console.log('4. PIX');
        
        const formaPagamento = prompt.questionInt('Escolha a forma de pagamento: ');
        
        if (formaPagamento === 1) {
            const valorPago = prompt.questionFloat(`Total: R$ ${this.total.toFixed(2)}\nValor recebido: R$ `);
            if (valorPago >= this.total) {
                const troco = valorPago - this.total;
                console.log(`Troco: R$ ${troco.toFixed(2)}`);
            } else {
                console.log('Valor insuficiente!');
                return false;
            }
        }
        
        return true;
    }

    finalizarPedido() {
        console.log('\n=== CUPOM FISCAL ===');
        this.mostrarPedido();
        console.log('------------------------');
        console.log(`TOTAL: R$ ${this.total.toFixed(2)}`);
        console.log('\nObrigado pela preferência!');
    }
}

function iniciarSistema() {
    const caixa = new CaixaRestaurante();
    console.log('=== SISTEMA DE CAIXA - RESTAURANTE ===');
    
    while (caixa.adicionarItem()) {}
    
    caixa.mostrarPedido();
    caixa.calcularTotal();
    
    caixa.aplicarDesconto();
    
    if (caixa.processarPagamento()) {
        caixa.finalizarPedido();
    }
}

iniciarSistema();