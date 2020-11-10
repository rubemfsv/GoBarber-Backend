# GoBarber Backend

Antes de executar, tenha o MongoDB, PostgreSQL e Redis, crie um banco de dados localmente chamado "gostack_gobarber" e rode yarn typeorm migration:run.
Após, rode yarn dev:server.

# Requisitos

## Recuperação de Senha

**Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**Regras de Negócio**

- O link enviado por e-mail para resetar senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha.

## Atualização do Perfil

**Requisitos Funcionais**

- O usuário deve poder atualizar seu nome, email e senha;

**Regras de Negócio**

- O usuário não deve alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

## Painel do Prestador

**Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**Regras de Negócio**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

## Agendamento de Serviços

**Requisitos Funcionais**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;

**Regras de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

## :gear: Run the project locally

### Requirements
- [NodeJS in its LTS version](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Dbeaver](https://dbeaver.io/download/)
- Docker

### Commands

- Clone this repository

```
git clone https://github.com/rubemfsv/Mini-Diary-Backend.git
```

- Install the postgres image on your docker container by the following code (note we are using port 5436 in our postgres in this project):
```
docker run --name postgres_diary -e POSTGRES_PASSWORD=docker -p 5436:5432 -d postgres
```

- Start postgres image
```
docker start postgres_diary
```

- Open the Dbeaver and create a new connection with Postgres. Change the port to 5436 and in the password, you type "docker", as you have defined above when create a postgres image on docker.

- After that, create a new database in yout postgres connection inside Dbeaver. Write "mini_diary" in the database name. 

- In the project folder, install all the dependencies indicated in the package.json
```
yarn 
```

- Run the project
```
yarn start
```

## :computer: Technologies Used
 * Node.js
 * PostgresDB
 * Docker
 * Express
 * TypeORM

