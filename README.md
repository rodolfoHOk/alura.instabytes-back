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
