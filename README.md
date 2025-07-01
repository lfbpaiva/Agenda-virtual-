# 📅 Agenda Virtual

Sistema de agenda virtual para registrar, visualizar, alterar e excluir compromissos com data e horário definidos. O projeto está dividido em **frontend (React + TypeScript)** e **backend (Node.js + Prisma + PostgreSQL)**.

---

## 📂 Estrutura do Projeto
```
agenda-projeto/
├── frontend/ → Interface do usuário (React + Vite + Tailwind)
└── backend/ → API e banco de dados (Node.js + Express + Prisma + PostgreSQL).
```

---

## 🚀 Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## 🔧 Como rodar o projeto localmente

### Pré-requisitos
- Node.js instalado
- PostgreSQL instalado e rodando localmente
- Git instalado

---

### 1️⃣ Clonar o repositório

```
git clone https://github.com/lfbpaiva/Agenda-virtual-.git
cd Agenda-virtual-
cd backend
npm install
Configure o arquivo .env com a URL do seu banco:
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/agenda_db?schema=public"
```

Depois:

```
npx prisma generate
npx prisma migrate dev --name init
npm run start
```

3️⃣ Rodar o Frontend
Abra outro terminal:
```
cd frontend
npm install
npm run dev
Acesse a aplicação em:
📍 http://localhost:5173
```

####📄 Variáveis de Ambiente

Crie um arquivo .env na pasta backend/ com o conteúdo:

DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/agenda_db?schema=public"

⚠️ Nunca envie o arquivo .env para o GitHub.

---

✅ Funcionalidades
✅ Adicionar novo evento com data e hora
✅ Listar todos os eventos
✅ Editar ou excluir eventos
✅ Interface simples e direta

📌 Autor
Desenvolvido por [@lfbpaiva](https://github.com/lfbpaiva) 💜

