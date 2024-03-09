// database/conexiondb.js

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'naranjadb',
  password: 'admin', // O deja esto vacío si usas autenticación sin contraseña
  port: 5432, // El puerto por defecto de PostgreSQL es 5432
});

module.exports = client;
