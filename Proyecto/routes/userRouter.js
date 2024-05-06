const express = require('express');
const UserController = require('../controllers/userController');
const AuthController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Rutas de autenticación
router.post('/login', AuthController.loginUser);
router.post('/register', AuthController.registerUser);

// Middleware de autenticación para las rutas de usuario
router.use(authMiddleware);

// Rutas de usuario
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.get('/reservation/:idReservation', UserController.getUsersByReservationId);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
