// app.js (o index.js)
const express = require('express');
const morgan = require('morgan');
const { globalErrorHandler } = require('./utils/appError');
require('dotenv').config({ path: './variables.env' });
const db = require('./config/db');
const routes = require('./routes');


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'david',
  password: 'root',
  database: 'flight_reservation_plane'
});

db.connect(error => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
      process.exit(1); // Termina el proceso con un código de error
    }
    console.log('¡Conexión exitosa a la base de datos!');
  });


db.conectar();

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use('/api', routes); // Montar las rutas bajo el prefijo '/api'

app.all('*', (req, res, next) => {
    const error = new AppError(`No se encontro la ruta: ${req.originalUrl} en el servicio web`, 404);
    next(error);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor escuchando puerto: ${port}`);
});


// db.query('SELECT * FROM reservations', (error, results) => {
//     if (error) {
//       console.error('Error al ejecutar la consulta:', error);
//       return;
//     }
//     // hacer algo con los resultados
//   });
  