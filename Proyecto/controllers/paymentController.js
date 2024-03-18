const PaymentDAO = require('../dataAccess/paymentDAO');
const { AppError } = require('../utils/appError');

class PaymentController {
    static async createPayment(req, res, next) {
        try {
            const { idReservation, paymentMethod, transactionId } = req.body;
            if (!idReservation || !paymentMethod || !transactionId) {
                return next(new AppError('Todos los campos idReservación, método de pago, ID de transacción son requeridos', 400));
            }
            const payment = await PaymentDAO.createPayment(idReservation, paymentMethod, transactionId);
            res.status(201).json(payment);
        } catch (error) {
            next(new AppError('Error al crear el pago', 500));
        }
    }

    static async getUnpaidReservations(req, res, next) {
        try {
            const unpaidReservations = await PaymentDAO.getUnpaidReservations();
            res.status(200).json(unpaidReservations);
        } catch (error) {
            next(new AppError('Error al obtener las reservaciones sin pagar', 500));
        }
    }

    static async getAllPayments(req, res, next) {
        try {
            const payments = await PaymentDAO.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            next(new AppError('Error al obtener los pagos', 500));
        }
    }

    static async getPaymentById(req, res, next) {
        try {
            const id = req.params.id;
            const payment = await PaymentDAO.getPaymentById(id);
            if (!payment) {
                return next(new AppError('Pago no encontrado', 404));
            }
            res.status(200).json(payment);
        } catch (error) {
            next(new AppError('Error al obtener el pago', 500));
        }
    }

    static async updatePayment(req, res, next) {
        try {
            const id = req.params.id;
            const { idReservation, paymentMethod, transactionId } = req.body;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
                return next(new AppError('Pago no encontrado', 404));
            }
            const updatedPayment = await PaymentDAO.updatePayment(id, idReservation, paymentMethod, transactionId);
            res.status(200).json(updatedPayment);
        } catch (error) {
            next(new AppError('Error al actualizar el pago', 500));
        }
    }

    static async deletePayment(req, res, next) {
        try {
            const id = req.params.id;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
                return next(new AppError('Pago no encontrado', 404));
            }
            await PaymentDAO.deletePayment(id);
            res.status(200).json({ message: 'Pago eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar el pago', 500));
        }
    }
}

module.exports = PaymentController;
