# Projeto Backend C.R.U.D em typescript utilizando postgres e Docker


Principais técnologias utilizadas no projeto:
  Typescript,
  Docker,
  Express,
  Postgresql,
  Celebrate,
  Typeorm

Design pattern padrão MVC.
Teste unitários TDD.
Single Responsiblity Principle, SOLID.


#### Requerimentos

Docker - Containerização
Node 14.x - Execução dos testes
Postman - Realizar os testes da API


## Após clonar o repositório

Execute os comandos no terminal para instalar as dependências:

````bash
npm install
````
ou
```bash
yarn
```

## Criação dos containers com Docker para executar a aplicação

Executar o comando

```bash
docker-compose -f docker-compose.yml up -d
```

> O container node_api-teste será gerado no Docker


## Executar os testes

Execute o comando no terminal

```bash
npm test
```
```bash
yarn test
```

## Documentação com os endpoints da API no Postman

```https://documenter.getpostman.com/view/12668698/TzkyP1Ex```
