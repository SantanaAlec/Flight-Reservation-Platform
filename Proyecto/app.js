// app.js (o index.js)
const express = require('express');
const morgan = require('morgan');
const { globalErrorHandler } = require('./utils/appError');
require('dotenv').config({ path: './variables.env' });
const db = require('./config/db');
const routes = require('./routes');

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
