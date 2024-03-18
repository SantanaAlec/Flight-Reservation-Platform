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

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
