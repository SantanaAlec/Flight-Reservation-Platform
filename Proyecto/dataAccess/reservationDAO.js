const {Reservation} = require('../models');

class ReservationDAO {
    constructor() {}

    async createReservation(flightId, userId, state) {
        try {
            const reservation = await Reservation.create({
                flightId,
                userId,
                state,
            });
            return reservation;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllReservations() {
        try {
            const reservations = await Reservation.findAll();
            return reservations;
        } catch (error) {
            console.log(error);
        }
    }

    async getReservationById(id) {
        try {
            const reservation = await Reservation.findByPk(id);
            return reservation;
        } catch (error) {
            console.log(error);
        }
    }

    async updateReservation(id, flightId, userId, state) {
        try {
            const reservation = await Reservation.update(
                { flightId, userId, state },
                { where: { id } }
            );
            const reservationUpdated = await Reservation.findByPk(id);
            return reservationUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteReservation(id) {
        try {
            const reservationDeleted = await Reservation.findByPk(id);
            if (!reservationDeleted) {
                console.log("Reservation not found");
            }
            await reservationDeleted.destroy()
            return reservationDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}