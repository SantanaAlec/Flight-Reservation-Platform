const express = require('express');
const FlightController = require('../controllers/flightController.js');

const router = express.Router();

router.post('/', FlightController.createFlight);
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlightById);
router.put('/:id', FlightController.updateFlight);
router.delete('/:id', FlightController.deleteFlight);

module.exports = router;