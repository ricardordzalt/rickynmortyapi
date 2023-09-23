// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {initDB} = require('./db')
const rickymorty = require('./api/rickymorty');

// Cargar las variables de entorno desde .env
dotenv.config();

initDB();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Rutas de ejemplo
app.use('/rickymorty', rickymorty);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
