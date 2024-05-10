# Kpop Generation API

Kpop Generation API é uma ferramenta de CRUD criada para disponibilizar dados para um front end. Esse site front end está em produção, o seu acesso será incluído aqui por um link assim que disponível.

## Endpoints

A API se encontra em produção hospedada no site Render.com e você pode testar pelos seguintes endpoits:

### GET: receber todos os grupos

Esse endpoint retorna informação básica de todos os grupos.
<https://kpopgenerationapi.onrender.com/groups>

### GET: receber grupos por geração

As gerações no kpop atualmente vão de 1 a 5. Substitua ali o valor da query generation para ver outras gerações.
<https://kpopgenerationapi.onrender.com/groups/generation?generation=5>

### GET: receber grupo por ID

Nesse exemplo, retorna um grupo utilizando a query id.
<https://kpopgenerationapi.onrender.com/group?id=663cc2448f8a51c315e736bb>

## Instalação

Para utilizar essa API é necessário que voce tenha instalado as seguintes ferramentas:

- Node JS
- Fastify
- Prisma IO
- TypeScript

Utilize o NPM para instalar essas dependências

## Configuração

Para utilizar com o seu Database, acesse o arquivo ".env" e substitua a variável de "DATABASE_URL" pelo valor fornecido pelo seu DB.

Nesse caso, foi utilizado o MongoDB como Database.

O Prisma, na sua instalação, criar esse arquivo ".env". No caso do MongoDB, a URL que você vai inserir ali tem essa configuração:

```javascript
DATABASE_URL =
  "mongodb+srv://<usuario>:<senha>@<nome-do-cluster>.fffva7y.mongodb.net/<nome-do-cluster>?retryWrites=true&w=majority&appName=<nome-do-app>";
```

Essa URL é gerada para você no momento da criação do seu cluster no MongoDB.

Se não estiver utilizando o MongoDB, lembre-se de atualizar o seu "provider" dentro do arquivo "schema.prisma" para o banco que você vai utilizar, como o postgresql

```javascript
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}
```

## Uso

Esse projeto é basicamente um CRUD onde é possível fazer as seguintes operações

### Create

Com o método POST no endpoint "/group", você pode criar um Grupo de kpop no DB.

### Read

#### Listar todos os grupos

Com o método GET, no endpoint "/groups", você vai listar todos os grupos recebendo apenas as propriedades "id", "name" e "image_url".

#### Listar grupo por geração

Com o método GET, no endpoint "/groups/generation?generation=5"
informando a query "generation", você vai listar todos os grupos daquela geração recebendo apenas as propriedades "id", "name" e "image_url".

#### Listar grupo por ID

Com o método GET, no endpoint "/group?id=1234"
informando a query "id", você vai listar apenas o grupo correspondente àquele ID todas as suas propriedades.

### Update

Com o método PUT no endpoint "/group?id=1234" informando a query "id", você pode atualizar as informações de um grupo de kpop no DB.

### Delete

Com o método DELETE no endpoint "/group?id=1234" informando a query "id", você pode excluir um grupo de kpop no DB.

## Licença e Créditos

Esse projeto foi feito por [Nycollas Kaique](https://linkedin.com/in/nycollaskaique) e é um projeto pessoal para o portfólio.

Por favor, caso tenha acesso a esse projeto, preserve os dados sensíveis contidos nele, como informações do acesso ao banco de dados.

[MIT](https://choosealicense.com/licenses/mit/)
