const express = require('express');
const app = express();
const db = require('../database/conexiondb');
 // Importa la configuración de la base de datos

db.connect()
  .then(() => console.log('Conexión a PostgreSQL exitosa'))
  .catch(err => console.error('Error al conectar a PostgreSQL', err));

// Aquí puedes continuar configurando tu servidor Express y definir rutas, etc.
