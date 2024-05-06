const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'david',
  password: 'root',
  database: 'flight_reservation_plane'
});

module.exports = connection;
