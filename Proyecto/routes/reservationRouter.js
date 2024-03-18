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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
