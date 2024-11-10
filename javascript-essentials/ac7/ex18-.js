/*
Exercício 18: Organizador de Contatos
Crie um objeto que funcione como uma agenda de contatos simples. O objeto deve ter arrays para diferentes categorias de contatos (amigos, família, trabalho) e um método para mostrar os contatos de uma categoria específica.
*/
// Objeto de Organizador de Contatos
const organizadorContatos = {
    // Arrays para diferentes categorias de contatos
    amigos: [
        { nome: "João Silva", telefone: "(11) 98765-4321" },
        { nome: "Maria Souza", telefone: "(21) 97654-3210" }
    ],
    familia: [
        { nome: "Pedro Santos", telefone: "(31) 96543-2109" },
        { nome: "Ana Oliveira", telefone: "(41) 95432-1098" }
    ],
    trabalho: [
        { nome: "Carlos Ferreira", telefone: "(51) 94321-0987" },
        { nome: "Juliana Costa", telefone: "(61) 93210-9876" }
    ],

    mostrarContatos: function(categoria) {
        if (!this[categoria]) {
            console.log(`Categoria "${categoria}" não encontrada.`);
            return;
        }

        console.log(`--- Contatos de ${categoria.charAt(0).toUpperCase() + categoria.slice(1)} ---`);

        this[categoria].forEach((contato, indice) => {
            console.log(`${indice + 1}. ${contato.nome} - ${contato.telefone}`);
        });
    },

    adicionarContato: function(categoria, nome, telefone) {
        if (!this[categoria]) {
            console.log(`Categoria "${categoria}" não existe.`);
            return;
        }

        // Adiciona o novo contato à categoria
        this[categoria].push({ nome, telefone });
        console.log(`Contato ${nome} adicionado à categoria ${categoria}.`);
    }
};

console.log("Demonstração do Organizador de Contatos:");

organizadorContatos.mostrarContatos('amigos');
organizadorContatos.mostrarContatos('familia');
organizadorContatos.mostrarContatos('trabalho');

organizadorContatos.adicionarContato('amigos', 'Fernando Lima', '(71) 92345-6789');
organizadorContatos.adicionarContato('trabalho', 'Ricardo Almeida', '(81) 91234-5678');

console.log("\nContatos após adicionar novos:");
organizadorContatos.mostrarContatos('amigos');
organizadorContatos.mostrarContatos('trabalho');