# Exercícios Teóricos 9

## Questões Dissertativas

1. **Explique a diferença principal entre um loop while e um loop for em JavaScript.**
   - A principal diferença entre um loop while e um for em JavaScript é que o while é mais simples, executando enquanto uma condição for verdadeira, enquanto o for é mais estruturado, combinando inicialização, condição e atualização. O while é preferível quando o número de iterações é desconhecido ou depende de condições externas.

2. **Em que situações você consideraria usar um loop while em vez de outras estruturas de repetição?**
   - Um loop while é mais apropriado quando o número de iterações não é conhecido previamente ou quando depende de condições externas que podem mudar durante a execução do loop.

3. **Descreva o que é um loop infinito e como evitá-lo ao usar a estrutura while.**
   - Um loop infinito ocorre quando a condição de parada nunca se torna falsa. Para evitá-lo, é importante garantir que a condição eventualmente mude, utilizando variáveis de controle adequadas e implementando mecanismos de segurança, como contadores ou timeouts, para forçar a saída do loop, se necessário.

## Questões de Múltipla Escolha

1. **Qual é a sintaxe correta para um loop while em JavaScript?**
   - [X] `while (condição) { }`
   - [ ] `while { condição }`
   - [ ] `while: condição { }`
   - [ ] `while condição do { }`

2. **O que acontece se a condição de um loop while for falsa desde o início?**
   - [ ] O loop executa uma vez e então para
   - [ ] O loop executa infinitamente
   - [X] O loop não executa nenhuma vez
   - [ ] Ocorre um erro de sintaxe

## Questões de Caixa de Múltiplas Escolhas

1. **Quais das seguintes afirmações sobre o loop while são verdadeiras? (Selecione todas as aplicáveis)**
   - [X] A condição é verificada no início de cada iteração
   - [ ] O loop sempre executa pelo menos uma vez
   - [X] Pode-se usar break para sair do loop prematuramente
   - [X] A condição deve ser uma expressão booleana

2. **Quais das seguintes são boas práticas ao usar loops while? (Selecione todas as aplicáveis)**
   - [X] Garantir que a condição eventualmente se torne falsa
   - [X] Usar variáveis de controle para gerenciar o loop
   - [X] Evitar modificar a variável de controle fora do loop
   - [ ] Preferir while sobre for em todas as situações

## Questões Verdadeiro ou Falso

- **F** a) Um loop while sempre executa seu bloco de código pelo menos uma vez
- **V** b) É possível usar múltiplas condições em um único loop while.
- **F** c) A palavra-chave continue faz com que o loop while termine imediatamente.
- **V** d) Um loop while pode ser transformado em um loop for equivalente em todos os casos.

## Questão de Associação

Associe os conceitos da Coluna A com suas descrições na Coluna B:

| Coluna A         | Coluna B                                             |
|-------------------|-----------------------------------------------------|
| 1. while          | e) Estrutura de repetição básica em JavaScript      |
| 2. do...while     | b) Executa o bloco pelo menos uma vez antes de verificar a condição |
| 3. break          | c) Sai imediatamente do loop                         |
| 4. continue       | d) Pula para a próxima iteração do loop             |
| 5. Condição       | a) Verifica-se no início de cada iteração           |

### Respostas

1 - while - e) Estrutura de repetição básica em JavaScript  
2 - do...while - b) Executa o bloco pelo menos uma vez antes de verificar a condição  
3 - break - c) Sai imediatamente do loop  
4 - continue - d) Pula para a próxima iteração do loop  
5 - Condição - a) Verifica-se no início de cada iteração  
