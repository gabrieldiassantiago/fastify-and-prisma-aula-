# Visão Geral do Projeto

Este projeto fornece uma **API REST** para gerenciar dados de clientes usando **Fastify**, **Prisma** e **TypeScript**. Ele oferece endpoints para criar, listar e excluir clientes.

## Funcionalidades

1. **Criar novos clientes** com nome e email.
2. **Listar todos os clientes** existentes.
3. **Excluir clientes por ID**.

## Tecnologias Usadas

- **Fastify**: Um framework web rápido e de baixo custo para Node.js.
- **Prisma**: Um ORM para Node.js que simplifica as interações com o banco de dados.
- **TypeScript**: Um superconjunto do JavaScript que adiciona tipagem estática para melhor qualidade e manutenção do código.

## Instalação e Configuração

1. **Clone este repositório**:

    ```bash
    git clone https://github.com/<seu-nome-de-usuario>/<nome-do-seu-repositório>.git
    ```

    Use o código com cuidado. Saiba mais.

2. **Instale as dependências**:

    ```bash
    npm install
    ```

    Use o código com cuidado. Saiba mais.

3. **Configurar o Prisma**:

    ```bash
    npx prisma migrate dev
    ```

    Use o código com cuidado. Saiba mais.

4. **Executando o Servidor**:

    ```bash
    npm run dev
    ```

    O servidor começará a escutar na porta 3333 por padrão.

## Endpoints

- **GET /teste**: Retorna uma resposta JSON simples para verificar se o servidor está funcionando.
- **POST /costumer**:
    - Cria um novo cliente.
    - Corpo da requisição:
        - `nome`: string (obrigatório)
        - `email`: string (obrigatório)
    - Resposta: O objeto cliente criado.
- **GET /costumers**: Lista todos os clientes existentes.
    - Resposta: Uma matriz de objetos de clientes.
- **DELETE /costumer**:
    - Exclui um cliente por ID.
    - Parâmetro de consulta:
        - `id`: string (obrigatório)
    - Resposta: Uma mensagem de sucesso.

## Contribuições

Contribuições são bem-vindas! Siga estas etapas:

1. Faça um **fork deste repositório**.
2. Crie uma nova branch para suas alterações.
3. Faça suas alterações e faça commit delas.
4. Envie suas alterações para o seu fork.
5. Crie um **pull request**.

## Licença

Este projeto é licenciado sob a **Licença MIT**.

Origem: conversação com o Bing, 11/02/2024
(1) thekeogh/fastify-prisma-typescript-boilerplate - GitHub. https://github.com/thekeogh/fastify-prisma-typescript-boilerplate.
(2) lebrancconvas/REST-API-Prisma-Typescript - GitHub. https://github.com/lebrancconvas/REST-API-Prisma-Typescript.
(3) GitHub - jharteaga/fastify-prisma-rest-api: REST API using Fastify and .... https://github.com/jharteaga/fastify-prisma-rest-api.
(4) GitHub - hmake98/fastify-typescript: Complete typescript template with .... https://github.com/hmake98/fastify-typescript.
(5) Build a RESTful API with Fastify, Prisma & TypeScript - YouTube. https://www.youtube.com/watch?v=LMoMHP44-xM.
