/*
Exercício 27: Simulador de Caixa Eletrônico
Nível: Intermediário

Crie um simulador de caixa eletrônico que:
1. Mostre um menu de operações (saque, depósito, saldo, pagamentos)
2. Processe a operação escolhida
3. Valide valores e limites
4. Forneça feedback apropriado
*/
class CaixaEletronico {
    constructor() {
        this.saldo = 1000; // Saldo inicial
        this.limiteSaque = 1000; // Limite por saque
        this.historicoTransacoes = [];
    }

    mostrarMenu() {
        return `
            =========================
            CAIXA ELETRÔNICO
            =========================
            1 - Consultar Saldo
            2 - Realizar Saque
            3 - Realizar Depósito
            4 - Realizar Pagamento
            5 - Extrato
            0 - Sair
            =========================
        `;
    }

    consultarSaldo() {
        return `Seu saldo atual é: R$ ${this.saldo.toFixed(2)}`;
    }

    realizarSaque(valor) {
        if (isNaN(valor) || valor <= 0) {
            return "Valor inválido para saque.";
        }

        if (valor > this.limiteSaque) {
            return `Limite máximo por saque é R$ ${this.limiteSaque.toFixed(2)}`;
        }

        if (valor > this.saldo) {
            return "Saldo insuficiente para realizar o saque.";
        }

        this.saldo -= valor;
        this.registrarTransacao("Saque", -valor);
        return `Saque de R$ ${valor.toFixed(2)} realizado com sucesso!\nSaldo atual: R$ ${this.saldo.toFixed(2)}`;
    }

    realizarDeposito(valor) {
        if (isNaN(valor) || valor <= 0) {
            return "Valor inválido para depósito.";
        }

        this.saldo += valor;
        this.registrarTransacao("Depósito", valor);
        return `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!\nSaldo atual: R$ ${this.saldo.toFixed(2)}`;
    }

    realizarPagamento(valor, descricao) {
        if (isNaN(valor) || valor <= 0) {
            return "Valor inválido para pagamento.";
        }

        if (valor > this.saldo) {
            return "Saldo insuficiente para realizar o pagamento.";
        }

        this.saldo -= valor;
        this.registrarTransacao(`Pagamento - ${descricao}`, -valor);
        return `Pagamento de R$ ${valor.toFixed(2)} realizado com sucesso!\nSaldo atual: R$ ${this.saldo.toFixed(2)}`;
    }

    registrarTransacao(tipo, valor) {
        const data = new Date().toLocaleString();
        this.historicoTransacoes.push({
            data,
            tipo,
            valor
        });
    }

    mostrarExtrato() {
        if (this.historicoTransacoes.length === 0) {
            return "Não há transações registradas.";
        }

        let extrato = "\n=== EXTRATO DE TRANSAÇÕES ===\n";
        this.historicoTransacoes.forEach(transacao => {
            extrato += `\nData: ${transacao.data}`;
            extrato += `\nTipo: ${transacao.tipo}`;
            extrato += `\nValor: R$ ${Math.abs(transacao.valor).toFixed(2)}`;
            extrato += `\n-------------------------`;
        });
        extrato += `\n\nSaldo atual: R$ ${this.saldo.toFixed(2)}`;
        return extrato;
    }
}

const caixa = new CaixaEletronico();


