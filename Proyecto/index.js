const express = require('express');
const morgan = require('morgan');
const { globalErrorHandler, appError } = require('./utils/appError');
require('dotenv').config({ path: './variables.env' });
const db = require('./config/db');

// Rutas importadas
const planeRouter = require('./routes/planeRouter');
const paymentRouter = require('./routes/paymentRouter');
const reservationRouter = require('./routes/reservationRouter');
const seatRouter = require('./routes/seatRouter');
const flightRouter = require('./routes/flightRouter');
const userRouter = require('./routes/userRouter'); 


db.connect();

//SELEC TE PRUEBA
db.query('SELECT * FROM flight ', (error, results) => {
    if (error) throw error;
    console.log(results);
  });
const app = express();


app.all('*', (req, res, next) => {
    const error = new appError(`No se encontro la ruta: ${req.originalUrl} en el servicio web`, 404); // Usa appError, no AppError
    next(error);
});

//CREAR UN AVION
// const PlaneCreator = require('./controllers/planeController'); // Asegúrate de que esta ruta apunte a tu archivo PlaneCreator

// const planeData = {
//     type: 'Boeing 747'
// };

// PlaneCreator.createPlane(planeData)
//     .then(result => console.log('Avión creado con éxito', result))
//     .catch(error => console.error('Error al crear el avión', error));


//CREAR UN  vuelo
const FlightCreator = require('./controllers/flightController'); 

const flightData = {
    idPlane: 1,
    origin: "Ciudad de México",
    destiny: "Guadalajara",
    departureDate: "2024-12-01T14:30:00Z",
    arrivalDate: "2024-12-01T16:00:00Z",
    luggage: 1,
    cost: 1500
};

FlightCreator.createFlight(flightData)
    .then(result => console.log('Vuelo creado con éxito', result))
    .catch(error => console.error('Error al crear el vuelo', error));


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
    const error = new appError(`No se encontro la ruta: ${req.originalUrl} en el servicio web`, 404);
    next(error);
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor escuchando puerto: ${port}`);
});