const express = require('express');
<<<<<<< HEAD
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.get('/:idReservation', UserController.getUsersByReservationId);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
=======
const UserController = require('../controllers/userController'); 

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
