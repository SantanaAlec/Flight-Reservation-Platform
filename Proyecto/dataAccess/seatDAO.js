const {Seat} = require('../models');

class SeatDAO {
    constructor() {}

    async createSeat(idPlane, number, classType, state, price) {
        try {
            const seat = await Seat.create({
                idPlane,
                number,
                classType,
                state,
                price
            });
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async getAllSeats() {
        try {
            const seats = await Seat.findAll();
            return seats;
        } catch (error) {
            throw error;
        }
    }

    async getSeatById(id) {
        try {
            const seat = await Seat.findByPk(id);
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async updateSeat(id, idPlane, number, classType, state, price) {
        try {
            const seat = await Seat.update(
                {
                    idPlane,
                    number,
                    classType,
                    state,
                    price
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const seatUpdated = Seat.findByPk(id);
            return seatUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deleteSeat(id) {
        try {
            const seat = await Seat.findByPk(id);
            if (!seat) {
                throw new Error('Seat not found');
            }
            await seat.destroy();
            return seat;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SeatDAO();