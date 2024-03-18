const PaymentDAO = require('../dataAccess/paymentDAO');
const { AppError } = require('../utils/appError');

class PaymentController {
    static async createPayment(req, res, next) {
        try {
            const { idReservation, paymentMethod, transactionId } = req.body;
            if (!idReservation || !paymentMethod || !transactionId) {
                return next(new AppError('Missing required fields (idReservación, método de pago, ID de transacción)', 400));
            }
            const payment = await PaymentDAO.createPayment(idReservation, paymentMethod, transactionId);
            res.status(201).json(payment);
        } catch (error) {
            next(new AppError('Error creating payment', 500));
        }
    }

    static async getUnpaidReservations(req, res, next) {
        try {
            const unpaidReservations = await PaymentDAO.getUnpaidReservations();
            res.status(200).json(unpaidReservations);
        } catch (error) {
            next(new AppError('Error getting unpaid payments', 500));
        }
    }

    static async getAllPayments(req, res, next) {
        try {
            const payments = await PaymentDAO.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            next(new AppError('Error getting payments', 500));
        }
    }

    static async getPaymentById(req, res, next) {
        try {
            const id = req.params.id;
            const payment = await PaymentDAO.getPaymentById(id);
            if (!payment) {
                return next(new AppError('Payment not found', 404));
            }
            res.status(200).json(payment);
        } catch (error) {
            next(new AppError('Error getting payment', 500));
        }
    }

    static async updatePayment(req, res, next) {
        try {
            const id = req.params.id;
            const { idReservation, paymentMethod, transactionId } = req.body;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
                return next(new AppError('Payment not found', 404));
            }
            const updatedPayment = await PaymentDAO.updatePayment(id, idReservation, paymentMethod, transactionId);
            res.status(200).json(updatedPayment);
        } catch (error) {
            next(new AppError('Error updating payment', 500));
        }
    }

    static async deletePayment(req, res, next) {
        try {
            const id = req.params.id;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
                return next(new AppError('Payment not found', 404));
            }
            await PaymentDAO.deletePayment(id);
            res.status(200).json({ message: 'Payment successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting payment', 500));
        }
    }
}

module.exports = PaymentController;