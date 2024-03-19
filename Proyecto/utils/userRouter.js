// userRouter.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const authenticateJWT = require('../middlewares/authMiddleware');

// Rutas protegidas
router.post('/protected-route', authenticateJWT, UserController.protectedRoute);

module.exports = router;
