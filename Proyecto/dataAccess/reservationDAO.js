const {Reservation} = require('../models');

class ReservationDAO {
    constructor() {}

    async createReservation(idUser, idFlight, state){
        try {
            const reservation = await Reservation.create({
                idUser,
                idFlight,
                state
            });
            return reservation;
        } catch (error) {
            throw error;
        }
    }

    async getAllReservations() {
        try {
            const reservations = await Reservation.findAll();
            return reservations;
        } catch (error) {
            throw error;
        }
    }

    async getReservationById(id) {
        try {
            const reservation = await Reservation.findByPk(id);
            return reservation;
        } catch (error) {
            throw error;
        }
    }

    getReservationsByFlightId(idFlight){
        try {
            const reservations = Reservation.findAll({
                where: {
                    idFlight,
                },
            });
            return reservations;
        } catch (error) {
            throw error;
        }
    }

    getReservationsByPlaneId(idPlane){
        try {
            const reservations = Reservation.findAll({
                where: {
                    idPlane,
                },
            });
            return reservations;
        } catch (error) {
            throw error;
        }
    }
    
    async updateReservation(id, idUser, idFlight, state) {
        try {
            const reservation = await Reservation.update(
                {
                    idUser,
                    idFlight,
                    state
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const reservationUpdated = Reservation.findByPk(id);
            return reservationUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deleteReservation(id) {
        try {
            const reservation = await Reservation.findByPk(id);
            if (!reservation) {
                throw new Error("Reservation not found");
            }
            await reservation.destroy();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ReservationDAO();