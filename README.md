# Encurator de URL - DIO

## Propósito

Projeto desenvolvido durante Bootcamp da [DIO](https://www.dio.me/sign-in) (Digital Innovation One).

Esta aplicação é uma implementação de um encurtador de URLs, feita com TypeScript e MongoDB.

## Alterações

Considerando a base do projeto desenvolvida durante o Bootcamp, algumas alterações foram feitas:
- Adição de capturas de erros, tanto para requisições mal formadas quanto para problemas internos do servidor.
- Correção de algumas partes do código base que foram depreciadas (principalmente no pacote `typegoose`)
- Adição de coleção `URLAccess` para coletar dados dos redirecionamentos feitos pelas URLs encurtadas 
- Adição de pacote `dotenv` para gerência de variáveis de ambiente

## Execução

Para testar o projeto, baixe os arquivos deste repositório em uma máquina com Node.js e NPM instalados.

Após isso, siga o passo-a-passo:
1. Utilize o comando `npm install` para instalar as dependências
2. Crie um arquivo `.env` e preencha as variáveis de ambiente `API_URL` e `MONGO_CONNECTION`
3. Utilize os scripts presentes no arquivo `package.json` para compilar e executar o código-fonte de acordo com as suas necessidades

### Scripts

- Compilação de código TypeScript: `npm run build`
- Compilação de código TypeScript (recompilando mudanças no código-fonte): `npm run watch`
- Para executar com Nodemon (ambiente de desenvolvimento): `npm run dev`
- Para executar sem Nodemon (ambiente de produção): `npm start`