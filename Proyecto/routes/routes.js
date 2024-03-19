// routes.js
const express = require('express');
const planeRouter = require('./routes/planeRouter');
const paymentRouter = require('./routes/paymentRouter');
const reservationRouter = require('./routes/reservationRouter');
const seatRouter = require('./routes/seatRouter');
const flightRouter = require('./routes/flightRouter');
const userRouter = require('./routes/userRouter');

const router = express.Router();

router.use('/planes', planeRouter);
router.use('/payments', paymentRouter);
router.use('/reservations', reservationRouter);
router.use('/seats', seatRouter);
router.use('/flights', flightRouter);
router.use('/users', userRouter);

module.exports = router;
