# Imersão Dev Back-End

> Alura + Google Gemini

## Tecnologias

- Javascript
- Typescript
- Node.js
- Express
- MongoDB (Atlas)
- IAStudio (Google Gemini)

## Diferenças em relação as lives

- Uso do Typescript
- Uso de classes para camadas model e controller

## Iniciando aplicação Node.js com Typescript

- npm init -y

- npm install --save-dev typescript

- npx tsc --init

- edit tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- npm install express

- npm install --save-dev @types/express @types/node

- edit package.json:

```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc"
},
```

## Rodar

### Requisitos

- Node.js

### Comandos

- npm run build

- npm run start

## Deploy

- no browser acessar e logar no console.cloud.google.com
- criar projeto alura-instabytes
- acessar terminal do projeto
  - git clone https://github.com/rodolfoHOk/alura.instabytes-back
  - bash service.sh
- abrir editor:
  - criar .env com as variáveis
- terminal do editor:
  - rm .env
  - npm install
  - gcloud run deploy --source . --port=3000
  - service name: alura-instabytes-backend
  - region: 30
  - alow unauthenticated: y
  - acessar o service url fornecido
