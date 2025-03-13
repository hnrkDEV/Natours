# Natours

Este projeto é uma réplica do **Natours**, um site de turismo, desenvolvido para praticar e demonstrar habilidades em desenvolvimento web.

## 🚀 Tecnologias Utilizadas

- **Frontend**: HTML, CSS, Pug
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB (Mongoose)
- **Autenticação**: JSON Web Token (JWT)

## 📌 Funcionalidades

✅ Cadastro e login de usuários
✅ Gerenciamento de tours
✅ Sistema de autenticação JWT
✅ Conexão com MongoDB para persistência de dados
✅ Interface dinâmica e responsiva

## 📂 Estrutura do Projeto

```
NatoursCopyProject/
├── controllers/      # Controladores da aplicação
├── models/           # Modelos de banco de dados
├── public/           # Arquivos estáticos (CSS, imagens, scripts)
├── routes/           # Definição das rotas
├── views/            # Templates Pug
├── app.js            # Arquivo principal da aplicação
└── server.js         # Configuração do servidor
```

## 🛠 Como Executar o Projeto Localmente

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/hnrkDEV/NatoursCopyProject.git
cd NatoursCopyProject
```

### 2️⃣ Instalar as Dependências
```bash
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente
Crie um arquivo **.env** na raiz do projeto e adicione suas configurações:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Executar a Aplicação
```bash
npm start
```
O servidor será iniciado em `http://localhost:3000`

## 🛠 Testes e Documentação
Para testar a API, recomenda-se utilizar **Postman** ou **Insomnia**. Se desejar adicionar documentação da API, pode-se integrar com **Swagger**.

## 🔗 Deploy
O projeto está disponível em produção via Vercel:
👉 [Natours Copy Project - Live](https://natours-copy-project.vercel.app/)

## 📞 Contato
📧 Email: jhenrique.caval@hotmail.com  
🔗 LinkedIn: [João Henrique](https://www.linkedin.com/in/joao-hrnk/)  
🔗 GitHub: [hnrkDEV](https://github.com/hnrkDEV)

