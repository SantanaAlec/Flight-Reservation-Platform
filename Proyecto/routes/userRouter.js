const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.get('/:idReservation', UserController.getUsersByReservationId);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;