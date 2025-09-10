# Projeto F1 API

Este projeto é uma API simples de Fórmula 1 desenvolvida com Node.js, TypeScript e Fastify. Ela fornece endpoints para consultar informações sobre equipes e pilotos da temporada 2025.

## Passo a passo para rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/pedrosalles068/projetof1.git
   cd projetof1
   ```
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Instale o CORS (se necessário)**
   ```bash
   npm i @fastify/cors
   ```
4. **Inicie o servidor**
   ```bash
   npm run start:dev
   ```
   O servidor estará disponível em `http://localhost:3000`.

## Endpoints disponíveis

- `GET /teams` — Lista todas as equipes
- `GET /drivers` — Lista todos os pilotos
- `GET /drivers/:id` — Detalhes de um piloto pelo ID

## Links úteis

- [Documentação do Fastify](https://www.fastify.io/docs/latest/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)

---

> Projeto criado como exemplo didático para consulta de dados de F1.
