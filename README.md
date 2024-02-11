Visão Geral do Projeto
Este projeto fornece uma API REST para gerenciar dados de clientes usando Fastify, Prisma e TypeScript. Ele oferece endpoints para criar, listar e excluir clientes.

Funcionalidades
Criar novos clientes com nome e email.
Listar todos os clientes existentes.
Excluir clientes por ID.
Tecnologias Usadas
Fastify: Um framework web rápido e de baixo custo para Node.js.
Prisma: Um ORM para Node.js que simplifica as interações com o banco de dados.
TypeScript: Um superconjunto do JavaScript que adiciona tipagem estática para melhor qualidade e manutenção do código.
Instalação e Configuração
Clone este repositório:

Bash
git clone https://github.com/<seu-nome-de-usuario>/<nome-do-seu-repositório>.git
Use o código com cuidado. Saiba mais
Instale as dependências:

Bash
npm install
Use o código com cuidado. Saiba mais
Configurar o Prisma:

Bash
npx prisma migrate dev
Use o código com cuidado. Saiba mais
Executando o Servidor
Bash
npm run dev
Use o código com cuidado. Saiba mais
O servidor começará a escutar na porta 3333 por padrão.

Endpoints
GET /teste

Retorna uma resposta JSON simples para verificar se o servidor está funcionando.
POST /costumer

Cria um novo cliente.
Corpo da requisição:
nome: string (obrigatório)
email: string (obrigatório)
Resposta: O objeto cliente criado.
GET /costumers

Lista todos os clientes existentes.
Resposta: Uma matriz de objetos de clientes.
DELETE /costumer

Exclui um cliente por ID.
Parâmetro de consulta:
id: string (obrigatório)
Resposta: Uma mensagem de sucesso.
Contribuições
Contribuições são bem-vindas! Siga estas etapas:

Faça um fork deste repositório.
Crie uma nova branch para suas alterações.
Faça suas alterações e faça commit delas.
Envie suas alterações para o seu fork.
Crie um pull request.
Licença
Este projeto é licenciado sob a Licença MIT.
