const express = require('express');
const PlaneController = require('../controllers/planeController');

const router = express.Router();

router.post('/', PlaneController.createPlane);
router.get('/', PlaneController.getAllPlanes);
router.get('/:id', PlaneController.getPlaneById);
router.put('/:id', PlaneController.updatePlane);
router.delete('/:id', PlaneController.deletePlane);

module.exports = router;
