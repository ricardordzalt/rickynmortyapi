const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde .env
dotenv.config();

const initDB = () => {
  // Conectar a la base de datos MongoDB
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Conexión a la base de datos exitosa');
    })
    .catch((error) => {
      console.error('Error de conexión a la base de datos:', error);
    });
};

module.exports = {
  initDB,
}