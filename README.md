# Projeto para a posição de Desenvolvedora Fullstack

### Objetivo deste projeto :dart: :
Criar um sitema de gerenciamento de usuários para a empresa do Seu Zé.

### Passos seguidos para completar o teste(marcados todos os que foram atendidos) :footprints: :
- [x] Criar uma API onde estarão os dados dos usuários já cadastrados e onde serão adicionados os novos usuráios.
- [x] Integrar esta API com o MongoDB.
- [x] Fazer a busca dos usuários na API (verificar se a integração está correta).
- [x] Autenticação do usuário via token.
- [x] Criação da página 'Faça seu Login na Plataforma'.
- [x] Card de login na página do login.
- [x] Criação da página 'Crie sua conta' - Página padrão, com o form direcionando para os outros cards.
- [ ] Direcionar para os cards corretamente após as ações.
- [x] Criação dos cards para criação de contas do fornecedor, cozinheiro e suprimentos.
- [x] Criação da página onde será exibida a listagem de usuários.
- [x] Trazer os dados para a tabela de acordo com o tipo de conta criada e consulta da API.
- [ ] Fazer a documentação completa da API com os endpoints.

### Ferramentas utilizadas :hammer_and_wrench: :  

#### Server Side
* JavaScript
* NodeJs
* Express
* MongoDB
* Mongoose

#### Client Side
* TypeScript
* Angular
* Angular Material
* SCSS

### Pontos de melhoria:
* Ajustes de interface, trabalhar com responsividade nas telas.
* Permitir que o usuário possa se cadastrar nos 3 grupos distintos.
* Fazer as validações nos formulários e também no backend.
* Refatorar as páginas para criação de usuário, para não repetir código.
* Implementar a rota post para criar um novo usuário.
* Fazer ajustes visuais nos inputs dos cards de cadastro por grupo de usuário.
* Trazer o nome do usuário corretamente no header da tela 'menu-list'.
* Editar o ID do usuário, transformando o dado que vem do banco de dados, em tipo number.
* Verificar a funcionalidade do botão usuário.
* Melhorar as mensagens de erros do backend.
* Testes unitários dos componentes e também do backend.

### Retorno da API
![api-create-user](/readme-assets/createUser.png)
![api-get-all-users](/readme-assets/getAllUsers.png)

### Tela de Login
![tela-de-login](/readme-assets/tela%20de%20login.png)

### Tela de Cadastro de Usuário
![tela-de-cadastro](/readme-assets/tela%20de%20registro.png)

### Tela com listagem de usuários
![tela-listagem](/readme-assets/tela%20listagem.png)

## Iniciando o projeto:
Este projeto foi iniciado com:

* FRONTEND:

 Angular CLI v14.2.6
- `npm i @angular/cli`

Angular Material
- `npm i @angular/material`

* BACKEND:

MongoDB

Mongoose v6.7.2
-`npm i mongoose`

Express v4.18.2
- `npm i express`

JsonwebToken v8.5.1
- `npm i jsonwebtoken`

Nodemon v2.0.20
- `npm i nodemon`

Para os demais pacotes instalados, use o comando:
- `npm install`

## Scripts

Para inicializar o frontend:

`ng s`

Para inicializar o banco de dados com o nodemon:

`npm run dev`
