#!/bin/bash

# Script para iniciar o projeto com Docker

echo "🚀 Iniciando projeto com Docker..."

# Verifica se o Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Por favor, inicie o Docker primeiro."
    exit 1
fi

# Verifica se existe arquivo .env
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado. Criando a partir do exemplo..."
    cat > .env << EOF
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
EOF
    echo "✅ Arquivo .env criado. Por favor, configure as variáveis de ambiente."
fi

# Constrói e inicia os containers
echo "📦 Construindo e iniciando containers..."
docker-compose up --build -d

echo "⏳ Aguardando serviços iniciarem..."
sleep 10

# Verifica o status dos containers
echo "📊 Status dos containers:"
docker-compose ps

echo ""
echo "✅ Projeto iniciado com sucesso!"
echo "🌐 Backend disponível em: http://localhost:3000"
echo "📝 Para ver os logs: docker-compose logs -f backend"
echo "🛑 Para parar: docker-compose down"

