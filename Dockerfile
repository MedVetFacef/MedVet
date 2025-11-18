# Dockerfile para o backend Node.js (Produção)
FROM node:20-alpine

# Instala dependências do sistema necessárias para o Prisma
RUN apk add --no-cache openssl

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci --only=production

# Copia o schema do Prisma
COPY backend/prisma ./backend/prisma

# Copia o restante dos arquivos do projeto
COPY . .

# Gera o Prisma Client
RUN npx prisma generate --schema=./backend/prisma/schema.prisma

# Expõe a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]

