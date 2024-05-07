const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'david',
  database: 'flight_reservation_plane'
});

db.connect(error => {
  if (error) throw error;
  console.log("¡Conexión exitosa a la base de datos MySQL!");
});

module.exports = db;
