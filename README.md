# Natours API – API de Turismo com Autenticação, Mapas e Checkout

Este é um projeto completo de uma aplicação Node.js/Express para gerenciamento de tours turísticos, com autenticação de usuários, sistema de reservas com Stripe, mapas interativos com MapLibre, envio de e-mails e painel com templates Pug.

---

## 🚀 Funcionalidades

- 🔐 Autenticação com JWT (login, cadastro, proteção de rotas)
- 📩 Envio de e-mails com reset de senha
- 📍 Mapas interativos usando MapLibre
- 🧾 Checkout de pagamento com Stripe
- 👤 Painel do usuário com upload de foto
- ✍️ Reviews dos tours
- 📦 Importação de dados mock
- 🎨 Front-end com templates em Pug + CSS customizado

---

## 📁 Estrutura de Pastas

```
.
├── controllers       # Lógica de cada funcionalidade da aplicação
├── dev-data          # Dados mock para importação
├── models            # Modelos do Mongoose
├── public            # Arquivos estáticos (CSS, imagens, JS do front-end)
├── routes            # Rotas da API e páginas
├── utils             # Funções utilitárias (erros, e-mail, async)
├── views             # Templates Pug
├── app.js            # Configuração principal da aplicação
├── server.js         # Arquivo de entrada do servidor
├── config.env        # Variáveis de ambiente
```

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Pug
- MapLibre GL JS
- Stripe API
- Nodemailer
- Axios
- Babel
- ESLint + Prettier

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/natours.git

# Instale as dependências
npm install

# Crie um arquivo .env
cp config.env.example config.env
```

---

## 📌 Scripts

```bash
npm run start           # Inicia o servidor em modo produção
npm run dev             # Inicia o servidor com Nodemon + Babel (dev)
npm run lint            # Executa o ESLint
npm run prettier        # Formata os arquivos com Prettier
```

---

## 🔐 Variáveis de Ambiente (`config.env`)

```env
PORT=8000
DATABASE=<your_mongo_uri>
DATABASE_PASSWORD=<your_password>
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
STRIPE_SECRET_KEY=<your_stripe_secret>
STRIPE_PUBLIC_KEY=<your_stripe_public>
EMAIL_USERNAME=<your_email>
EMAIL_PASSWORD=<your_pass>
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
NODE_ENV=development
```

---

## 🧪 Importar Dados de Desenvolvimento

```bash
node dev-data/data/import-dev-data.js --import
# ou
node dev-data/data/import-dev-data.js --delete
```

---

## 🖼️ Telas

- Página de login e cadastro
- Página de tours com mapa
- Detalhes do tour
- Checkout com Stripe
- Painel do usuário
- Reviews e guias turísticos

---

## 📄 Licença

MIT © João Henrique

