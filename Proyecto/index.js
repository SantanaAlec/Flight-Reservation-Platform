const express = require('express');
const morgan = require('morgan');
const { globalErrorHandler, AppError } = require('./utils/appError');
require('dotenv').config({ path: './variables.env' });
const db = require('./config/db');

// Rutas importadas
const planeRouter = require('./routes/planeRouter');
const paymentRouter = require('./routes/paymentRouter');
const reservationRouter = require('./routes/reservationRouter');
const seatRouter = require('./routes/seatRouter');
const flightRouter = require('./routes/flightRouter');
const userRouter = require('./routes/userRouter'); 

db.conectar();

const app = express();

app.use(express.json());
app.use(morgan('combined'));

// Rutas
//Ejemplo de ruta = http://localhost:3000/api/tasks/
app.use('/api/planes', planeRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/reservations', reservationRouter);
app.use('/api/seats', seatRouter);
app.use('/api/flights', flightRouter);
app.use('/api/users', userRouter); 

app.all('*', (req, res, next) => {
    const error = new AppError(`No se encontro la ruta: ${req.originalUrl} en el servicio web`, 404);
    next(error);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor escuchando puerto: ${port}`);
});

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