@echo off
REM Script para iniciar o projeto com Docker no Windows

echo 🚀 Iniciando projeto com Docker...

REM Verifica se o Docker está rodando
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está rodando. Por favor, inicie o Docker primeiro.
    exit /b 1
)

REM Verifica se existe arquivo .env
if not exist .env (
    echo ⚠️  Arquivo .env não encontrado. Criando a partir do exemplo...
    (
        echo # Porta do servidor
        echo PORT=3000
        echo.
        echo # MongoDB Connection
        echo DB_URI=mongodb://mongodb:27017/medvet
        echo.
        echo # PostgreSQL Connection (Prisma)
        echo DATABASE_URL=postgresql://postgres:medvet123@postgres:5432/medvet?schema=public
        echo.
        echo # JWT Configuration
        echo JWT_SECRET=your_jwt_secret_here
        echo JWT_EXPIRES_TIME=7d
        echo.
        echo # Hugging Face API Configuration
        echo HUGGINGFACE_API_KEY=your_huggingface_api_key_here
        echo HUGGINGFACE_MODEL=google/flan-t5-large
    ) > .env
    echo ✅ Arquivo .env criado. Por favor, configure as variáveis de ambiente.
)

REM Constrói e inicia os containers
echo 📦 Construindo e iniciando containers...
docker-compose up --build -d

echo ⏳ Aguardando serviços iniciarem...
timeout /t 10 /nobreak >nul

REM Verifica o status dos containers
echo 📊 Status dos containers:
docker-compose ps

echo.
echo ✅ Projeto iniciado com sucesso!
echo 🌐 Backend disponível em: http://localhost:3000
echo 📝 Para ver os logs: docker-compose logs -f backend
echo 🛑 Para parar: docker-compose down

