# Docker Setup - Projeto Loja

Este documento explica como usar Docker para executar o projeto.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta do servidor
PORT=3000

# MongoDB Connection
DB_URI=mongodb://mongodb:27017/medvet

# PostgreSQL Connection (Prisma)
DATABASE_URL=postgresql://postgres:medvet123@postgres:5432/medvet?schema=public

# JWT Configuration
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_TIME=7d

# Hugging Face API Configuration
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
HUGGINGFACE_MODEL=google/flan-t5-large
```

## Uso

### Desenvolvimento

Para executar em modo desenvolvimento:

```bash
docker-compose up
```

Ou para executar em background:

```bash
docker-compose up -d
```

### Produção

Para executar em modo produção:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Comandos Úteis

### Ver logs
```bash
docker-compose logs -f backend
```

### Parar os containers
```bash
docker-compose down
```

### Parar e remover volumes (apaga dados)
```bash
docker-compose down -v
```

### Reconstruir as imagens
```bash
docker-compose build --no-cache
```

### Executar comandos no container
```bash
docker-compose exec backend sh
```

### Executar migrações do Prisma
```bash
docker-compose exec backend npx prisma migrate deploy
```

### Acessar o MongoDB
```bash
docker-compose exec mongodb mongosh
```

### Acessar o PostgreSQL
```bash
docker-compose exec postgres psql -U postgres -d medvet
```

## Estrutura dos Serviços

- **backend**: Aplicação Node.js na porta 3000
- **mongodb**: Banco de dados MongoDB na porta 27017
- **postgres**: Banco de dados PostgreSQL na porta 5432

## Volumes

Os dados dos bancos de dados são persistidos em volumes Docker:
- `mongodb_data`: Dados do MongoDB
- `postgres_data`: Dados do PostgreSQL

## Troubleshooting

### Porta já em uso
Se as portas 3000, 27017 ou 5432 já estiverem em uso, altere-as no arquivo `docker-compose.yml`.

### Erro de conexão com banco
Certifique-se de que os serviços estão saudáveis antes de iniciar o backend. Os healthchecks estão configurados para isso.

### Reconstruir tudo do zero
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

