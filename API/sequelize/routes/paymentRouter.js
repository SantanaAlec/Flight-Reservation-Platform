const express = require('express');
const PaymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/', PaymentController.createPayment);
router.get('/unpaid', PaymentController.getUnpaidReservations);
router.get('/', PaymentController.getAllPayments);
router.get('/:id', PaymentController.getPaymentById);
router.put('/:id', PaymentController.updatePayment);
router.delete('/:id', PaymentController.deletePayment);

module.exports = router;
