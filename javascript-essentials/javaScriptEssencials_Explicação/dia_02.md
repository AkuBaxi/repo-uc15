# Dia 2: Configuração do Ambiente (VSCode, Node.js)

## Objetivos de Aprendizagem
Ao final desta lição, você será capaz de:
1. Instalar e configurar o Node.js em seu sistema
2. Instalar e configurar o Visual Studio Code (VSCode)
3. Criar e executar um script JavaScript simples
4. Utilizar o console do Node.js para testes rápidos

## 1. Instalação do Node.js

Node.js é um ambiente de execução JavaScript construído no motor V8 do Chrome. Ele permite executar JavaScript fora do navegador.

### Passos para instalação:

1. Acesse o [site oficial do Node.js](https://nodejs.org/pt-br/).
2. Baixe a versão LTS (Long Term Support) recomendada para a maioria dos usuários.
3. Execute o instalador e siga as instruções na tela.

### Verificação da instalação:

Abra o terminal (Prompt de Comando no Windows) e digite:

```bash
node --version
npm --version
```

Você deverá ver os números das versões do Node.js e npm (Node Package Manager) instaladas.

## 2. Instalação e Configuração do Visual Studio Code (VSCode)

O VSCode é um editor de código fonte leve mas poderoso, com suporte a várias linguagens, incluindo JavaScript.

### Passos para instalação:

1. Acesse o [site oficial do Visual Studio Code](https://code.visualstudio.com/).
2. Baixe a versão para o seu sistema operacional.
3. Execute o instalador e siga as instruções na tela.

### Configuração inicial:

1. Abra o VSCode.
2. Instale a extensão "Portuguese (Brazil) Language Pack" para ter a interface em português.
3. Instale a extensão "ESLint" para ajudar na detecção de erros no código JavaScript.

## 3. Criando e Executando um Script JavaScript

Vamos criar um script simples para testar nossa configuração.

### Exemplo: Olá, Mundo!

1. No VSCode, crie um novo arquivo chamado `ola_mundo.js`.
2. Digite o seguinte código:

```javascript
console.log("Olá, Mundo!");
```

3. Salve o arquivo.
4. Abra o terminal integrado do VSCode (View > Terminal ou Ctrl+`).
5. Navigate até a pasta onde salvou o arquivo.
6. Execute o script com o comando:

```bash
node ola_mundo.js
```

Você deverá ver "Olá, Mundo!" impresso no terminal.

## 4. Utilizando o Console do Node.js

O console do Node.js é ótimo para testes rápidos e experimentação.

### Como usar:

1. Abra o terminal.
2. Digite `node` e pressione Enter para iniciar o console interativo.
3. Agora você pode digitar código JavaScript diretamente e ver os resultados.

### Exemplo:

```javascript
> let nome = "Maria"
undefined
> console.log(`Olá, ${nome}!`)
Olá, Maria!
undefined
> 5 + 3
8
```
