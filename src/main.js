"use strict";
// src/main.ts
const message = 'Hello, TypeScript and Webpack!';
console.log(message);
const app = document.getElementById('app');
if (app) {
    app.textContent = message;
}
