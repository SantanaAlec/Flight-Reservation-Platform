const express = require('express');
const ReservationController = require('../controllers/reservationController');

const router = express.Router();

router.post('/', ReservationController.createReservation);
router.get('/', ReservationController.getAllReservations);
router.get('/:id', ReservationController.getReservationById);
router.get('/flight/:idFlight', ReservationController.getReservationsByFlightId);
router.get('/plane/:idPlane', ReservationController.getReservationsByPlaneId);
router.put('/:id', ReservationController.updateReservation);
router.delete('/:id', ReservationController.deleteReservation);

module.exports = router;
