const { payment } = require("../models/payment");

class PaymentDAO {
    constructor() {}

    async createPayment(flightId, payMethod, transactionId, amount) {
        try {
            const payment = await Payment.create({
                flightId,
                payMethod,
                transactionId,
                amount,
            });
            return payment;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllPayments() {
        try {
            const payments = await Payment.findAll();
            return payments;
        } catch (error) {
            console.log(error);
        }
    }

    async getPaymentById(id) {
        try {
            const payment = await Payment.findByPk(id);
            return payment;
        } catch (error) {
            console.log(error);
        }
    }

    async updatePayment(id, flightId, payMethod, transactionId, amount) {
        try {
            const payment = await Payment.update(
                { flightId, payMethod, transactionId, amount },
                { where: { id } }
            );
            const paymentUpdated = await Payment.findByPk(id);
            return paymentUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deletePayment(id) {
        try {
            const paymentDeleted = await Payment.findByPk(id);
            if (!paymentDeleted) {
                console.log("Payment not found");
            }
            await paymentDeleted.destroy();
            return paymentDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}
