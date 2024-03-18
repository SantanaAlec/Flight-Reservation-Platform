const express = require('express');
const FlightController = require('../controllers/flightController');

const router = express.Router();

router.post('/', FlightController.createFlight);
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlightById);
router.put('/:id', FlightController.updateFlight);
router.delete('/:id', FlightController.deleteFlight);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
