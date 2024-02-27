const {Payment} = require('../models');

class PaymentDAO {
    constructor() {}

    async createPayment(idReservation, paymentMethod, transactionId) {
        try {
            const payment = await Payment.create({
                idReservation,
                paymentMethod,
                transactionId
            });
            return payment;
        } catch (error) {
            throw error;
        }
    }

    async getAllPayments() {
        try {
            const payments = await Payment.findAll();
            return payments;
        } catch (error) {
            throw error;
        }
    }

    async getPaymentById(id) {
        try {
            const payment = await Payment.findByPk(id);
            return payment;
        } catch (error) {
            throw error;
        }
    }

    async updatePayment(id, idReservation, paymentMethod, transactionId) {
        try {
            const payment = await Payment.update(
                {
                    idReservation,
                    paymentMethod,
                    transactionId
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const paymentUpdated = Payment.findByPk(id);
            return paymentUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deletePayment(id) {
        try {
            const payment = await Payment.findByPk(id);
            if (!payment) {
                throw new Error("Payment not found");
            }
            await payment.destroy();
            return payment;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PaymentDAO();