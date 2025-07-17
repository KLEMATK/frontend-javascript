// src/main.ts
const message: string = 'Hello, TypeScript and Webpack!';
console.log(message);

const app = document.getElementById('app');
if (app) {
  app.textContent = message;
}

