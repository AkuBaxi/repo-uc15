  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let saldo = 1000;

  function exibirMenu() {
    console.log("\nEscolha uma opção:");
    console.log("1. Sacar");
    console.log("2. Depositar");
    console.log("3. Saldo");
    console.log("4. Sair");
    rl.question("Digite sua escolha: ", processarEscolha);
  }

  function processarEscolha(escolha) {
    switch (escolha) {
      case "1":
        rl.question("Digite o valor para saque: ", sacar);
        break;
      case "2":
        rl.question("Digite o valor para depósito: ", depositar);
        break;
      case "3":
        consultarSaldo();
        break;
      case "4":
        console.log("Obrigado por usar nosso caixa eletrônico. Até logo!");
        rl.close();
        return;
      default:
        console.log("Opção inválida. Por favor, tente novamente.");
        exibirMenu();
    }
  }

  function sacar(valor) {
    valor = parseFloat(valor);
    if (isNaN(valor) || valor <= 0) {
      console.log("Por favor, insira um valor válido.");
    } else if (valor > saldo) {
      console.log("Saldo insuficiente.");
    } else {
      saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
    exibirMenu();
  }

  function depositar(valor) {
    valor = parseFloat(valor);
    if (isNaN(valor) || valor <= 0) {
      console.log("Por favor, insira um valor válido.");
    } else {
      saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
    exibirMenu();
  }

  function consultarSaldo() {
    console.log(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
    exibirMenu();
  }

  console.log("Bem-vindo ao Caixa Eletrônico!");
  exibirMenu();