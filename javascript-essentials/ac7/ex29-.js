/*
Exercício 29: Validador de Senha Forte
Nível: Iniciante/Intermediário

Desenvolva um programa que peça ao usuário para criar uma senha forte.
O programa deve:
1. Verificar se a senha tem pelo menos 8 caracteres
2. Conter letras maiúsculas e minúsculas
3. Conter números
4. Conter caracteres especiais
5. Continuar pedindo até que todos os critérios sejam atendidos
*/
const prompt = require('readline-sync');

function validarSenha() {
    console.log("=== Criador de Senha Forte ===");
    console.log("Sua senha deve conter:");
    console.log("- Mínimo de 8 caracteres");
    console.log("- Letras maiúsculas e minúsculas");
    console.log("- Números");
    console.log("- Caracteres especiais");

    while (true) {
        const senha = prompt.question("\nDigite sua senha: ", {
            hideEchoBack: true 
        });

        const temOitoCaracteres = senha.length >= 8;
        const temMaiuscula = /[A-Z]/.test(senha);
        const temMinuscula = /[a-z]/.test(senha);
        const temNumero = /[0-9]/.test(senha);
        const temEspecial = /[!@#$%^&*(),.?":{}|<>-+/]/.test(senha);

        let falhas = [];

        if (!temOitoCaracteres) falhas.push("- Mínimo de 8 caracteres");
        if (!temMaiuscula) falhas.push("- Pelo menos uma letra maiúscula");
        if (!temMinuscula) falhas.push("- Pelo menos uma letra minúscula");
        if (!temNumero) falhas.push("- Pelo menos um número");
        if (!temEspecial) falhas.push("- Pelo menos um caractere especial");

        if (falhas.length === 0) {
            console.log("\nSenha criada com sucesso! ✅");
            console.log("Sua senha atende a todos os critérios de segurança.");
            break;
        } else {
            console.log("\n❌ Sua senha não atende aos seguintes critérios:");
            falhas.forEach(falha => console.log(falha));
        }
    }
}

validarSenha();