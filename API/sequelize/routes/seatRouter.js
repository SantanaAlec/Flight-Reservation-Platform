const express = require('express');
const SeatController = require('../controllers/seatController');

const router = express.Router();

router.post('/', SeatController.createSeat);
router.get('/', SeatController.getAllSeats);
router.get('/:id', SeatController.getSeatById);
router.get('/plane/:idPlane', SeatController.getSeatsByPlaneId);
router.get('/user/:idUser', SeatController.getSeatsByUserId);
router.put('/:id', SeatController.updateSeat);
router.delete('/:id', SeatController.deleteSeat);

module.exports = router;