const mysql = require('mysql2');
require('dotenv').config({ path: './variables.env' });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

async function conectar(){
    await db.connect(error => {
        if (error) throw error;
        console.log("¡Conexión exitosa a la base de datos MySQL!");
    });
}

module.exports = {conectar, db};