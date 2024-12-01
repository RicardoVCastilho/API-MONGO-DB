# 🌟 **API de Gestão de Garantias Associadas a Clientes** 🌟

Esta API foi desenvolvida para gerenciar garantias associadas a clientes. A aplicação permite registrar, consultar, atualizar e excluir ordens de garantias com informações detalhadas sobre o cliente e os produtos adquiridos.

## 🚀 **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a manipulação de dados.

## ⚙️ **Funcionalidades da API**

A API oferece as seguintes funcionalidades para gerenciamento de ordens de garantia:

- **Criar uma nova ordem**: Cadastrar uma nova ordem de garantia com os dados do cliente.
- **Listar todas as ordens**: Recuperar todas as ordens registradas.
- **Exibir uma ordem específica**: Consultar os detalhes de uma ordem de garantia usando o ID único.
- **Atualizar uma ordem existente**: Modificar dados de uma ordem existente.
- **Excluir uma ordem**: Remover uma ordem do banco de dados.

---

## 📂 **Estrutura do Repositório**

```bash
/API + MongoDB
 ├── /newJsApi
 │   ├── /node_modules
 │   ├── /src
 │   │   ├── /db
 │   │   │   └── connection.js
 │   │   ├── /models
 │   │   │   └── orders.js
 │   │   ├── /mongo
 │   │   │   └── ordersSchema.js
 │   ├── .env
 │   ├── .gitignore
 │   ├── index.js
 │   ├── package-lock.json
 │   └── package.json
```

## **Arquivos Importantes:**
- /src/db/connection.js: Estabelece a conexão com o MongoDB.
- /src/models/orders.js: Contém um modelo com um exemplo de ordem de garantia.
- /src/mongo/ordersSchema.js: Define o esquema do MongoDB para a coleção de ordens.
- .env: Configurações de variáveis de ambiente, como a URI do MongoDB.
- .gitignore: Arquivo para ignorar arquivos não necessários no repositório.
- index.js: Arquivo principal do servidor, que define as rotas da API.
- package.json e package-lock.json: Gerenciam as dependências do projeto.

## **⚡ Como Testar**

1. Clone o Repositório
Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/RicardoVCastilho/API-MONGO-DB
```

2. Instale as Dependências
Entre na pasta do projeto e instale as dependências necessárias:
```bash
npm install
```

3. Configuração do Banco de Dados
Crie um arquivo .env na raiz do projeto e escreva a seguinte variável:
```bash
MONGO_DB_KEY = rsPeslp8c55zvNTk
```

4. Inicie o Servidor
Após configurar o .env, inicie o servidor com o comando:
```bash
npm start
```

O servidor estará disponível em http://localhost:3000.

## **🔧 Endpoints da API**

1. GET /orders
Retorna todas as ordens de garantia registradas.

Resposta:
200 OK: Lista de ordens.
404 Not Found: Se não houver ordens.

2. GET /orders/:id
Retorna os detalhes de uma ordem específica, utilizando o ID da ordem.

Parâmetros:

id: ID da ordem de garantia.
Resposta:
200 OK: Detalhes da ordem.
404 Not Found: Se a ordem não for encontrada.

3. POST /orders
Cria uma nova ordem de garantia.

Corpo da Requisição:

```bash
{
  "costumer": {
    "name": "Tiago Cal",
    "cpf": "123.456.789-12",
    "contact": {
      "phone": "81 9.1234-5678", 
      "email": "tiago@hotmail.com"
    },
    "address": "Corno st, number 73, ap. 104",
    "orders": {
      "repair": true,
      "exchange": false,
      "extendWarranty": false,
      "purchaseDate": "2024-01-01",
      "productType": "Product A",
      "invoiceNumber": "12345",
      "purchaseValue": 100
    }
  }
}
```

Resposta:
201 Created: Ordem criada com sucesso.

4. PUT /orders/:id
Atualiza uma ordem existente com base no ID.

Parâmetros:
id: ID da ordem a ser atualizada.
Corpo da Requisição: Atualize os campos da ordem.

Resposta:
200 OK: Ordem atualizada com sucesso.
404 Not Found: Se a ordem não for encontrada.

5. DELETE /orders/:id
Deleta uma ordem com base no ID.

Parâmetros:
id: ID da ordem a ser deletada.

Resposta:
200 OK: Ordem deletada com sucesso.
404 Not Found: Se a ordem não for encontrada.

## **🗂️ Modelo de Dados**
O banco de dados MongoDB armazena as ordens com a seguinte estrutura:

```bash
const orders = [
  {
    costumer: {
      name: "Tiago Cal",
      cpf: "123.456.789-12",
      contact: {
        phone: "81 9.1234-5678", 
        email: "tiago@hotmail.com"
      },
      address: "Corno st, number 73, ap. 104",
      orders: {
        repair: true,
        exchange: false,
        extendWarranty: false,
        purchaseDate: new Date("2024-01-01"),
        productType: "Product A",
        invoiceNumber: "12345",
        purchaseValue: 100,
      },
    },
  },
];
```

### Conexão com o MongoDB
A conexão com o MongoDB é realizada no arquivo src/db/connection.js. A API usa Mongoose para definir esquemas e interagir com o banco de dados de maneira estruturada.

## **Autor**
[Ricardo Vitor Castilho](https://github.com/RicardoVCastilho)