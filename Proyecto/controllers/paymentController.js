const PaymentDAO = require('../dataAccess/paymentDAO');
const { AppError } = require('../utils/appError');

class PaymentController {
    static async createPayment(req, res, next) {
        try {
            const { idReservation, paymentMethod, transactionId } = req.body;
            if (!idReservation || !paymentMethod || !transactionId) {
<<<<<<< HEAD
                return next(new AppError('Missing required fields (idReservación, método de pago, ID de transacción)', 400));
=======
                return next(new AppError('Todos los campos idReservación, método de pago, ID de transacción son requeridos', 400));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const payment = await PaymentDAO.createPayment(idReservation, paymentMethod, transactionId);
            res.status(201).json(payment);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error creating payment', 500));
=======
            next(new AppError('Error al crear el pago', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getUnpaidReservations(req, res, next) {
        try {
            const unpaidReservations = await PaymentDAO.getUnpaidReservations();
            res.status(200).json(unpaidReservations);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting unpaid reservations', 500));
=======
            next(new AppError('Error al obtener las reservaciones sin pagar', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getAllPayments(req, res, next) {
        try {
            const payments = await PaymentDAO.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting payments', 500));
=======
            next(new AppError('Error al obtener los pagos', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getPaymentById(req, res, next) {
        try {
            const id = req.params.id;
            const payment = await PaymentDAO.getPaymentById(id);
            if (!payment) {
<<<<<<< HEAD
                return next(new AppError('Payment not found', 404));
            }
            res.status(200).json(payment);
        } catch (error) {
            next(new AppError('Error getting payment', 500));
=======
                return next(new AppError('Pago no encontrado', 404));
            }
            res.status(200).json(payment);
        } catch (error) {
            next(new AppError('Error al obtener el pago', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async updatePayment(req, res, next) {
        try {
            const id = req.params.id;
            const { idReservation, paymentMethod, transactionId } = req.body;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
<<<<<<< HEAD
                return next(new AppError('Payment not found', 404));
=======
                return next(new AppError('Pago no encontrado', 404));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const updatedPayment = await PaymentDAO.updatePayment(id, idReservation, paymentMethod, transactionId);
            res.status(200).json(updatedPayment);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error updating payment', 500));
=======
            next(new AppError('Error al actualizar el pago', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async deletePayment(req, res, next) {
        try {
            const id = req.params.id;
            const paymentExists = await PaymentDAO.getPaymentById(id);
            if (!paymentExists) {
<<<<<<< HEAD
                return next(new AppError('Payment not found', 404));
            }
            await PaymentDAO.deletePayment(id);
            res.status(200).json({ message: 'Payment successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting payment', 500));
=======
                return next(new AppError('Pago no encontrado', 404));
            }
            await PaymentDAO.deletePayment(id);
            res.status(200).json({ message: 'Pago eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar el pago', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }
}

<<<<<<< HEAD
module.exports = PaymentController;
=======
module.exports = PaymentController;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
