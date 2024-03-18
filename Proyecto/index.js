const express = require('express');
const app = express();
const morgan = require('morgan');
const {globalErrorHandler, AppError} = require('./utils/AppError');
require('dotenv').config();
const db = require('./config/db');
const userRouter = require('./routes/userRouter');

db.conectar()

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
    const error = new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    next(error);
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});