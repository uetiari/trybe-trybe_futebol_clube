# Projeto Trybe Futebol Clube!

<h3> O `TFC` é um site informativo sobre partidas e classificações de futebol! </h3>

<br/>

## Descrição do Projeto

Conteudos aplicados: Typescript, POO, SOLID, Node, Camadas - arquitetura MSC, Api REST e Sequelize com Typescript.

<br/>

## Desenvolvimento

- Desenvolver uma API (utilizando o método `TDD`) e também integrar *- através do docker-compose -* as aplicações para que elas funcionem consumindo um banco de dados.

- Construir **um back-end dockerizado utilizando modelagem de dados através do Sequelize**. Respeitando as regras de negócio providas no projeto e **a API é capaz de ser consumida por um front-end já provido nesse projeto**.

- Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. 

- Tem um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

- O back-end deverá implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema.

Observações: 

- O Frontend e o Docker Compose foi fornecido pela Trybe, criamos o DockerFile do Backend e Frontend e ajustamos as configuracoes do Docker Compose;
- O desenvolvimento de todo o projeto se encontra dentro da pasta `app/backend/src`.

<br/>

## Habilidades desenvolvidas

- A realização da dockerização dos apps, network, volume e compose;
- A modelagem de dados com MySQL através do Sequelize;
- A criação e associação de tabelas usando models do sequelize;
- A construção de uma API REST com endpoints para consumir os models criados;
- A construção de um CRUD com TypeScript, utilizando ORM,
- Aplicacao de testes de integracao com cobertura de 80%.

<br/>

## Tecnologias utilizadas

- Typescript;
- Docker, Docker Compose;
- Node.js;
- Sequelize com Typescript;
- Mysql;
- JsonWebToken;
- Bcrypt-js;
- Testes com mocha, chai e sinon em Typescript;
- Eslint;
- Joi;
- POO.

<br/>
