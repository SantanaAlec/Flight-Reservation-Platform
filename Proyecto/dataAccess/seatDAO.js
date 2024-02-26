const {Seat} = require('../models');

class SeatDAO {
    constructor() {}

    async createSeat(planeId, number, type, state, price) {
        try {
            const seat = await Seat.create({
                planeId,
                number,
                type,
                state,
                price
            });
            return seat;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllSeats() {
        try {
            const seats = await Seat.findAll();
            return seats;
        } catch (error) {
            console.log(error);
        }
    }

    async getSeatById(id) {
        try {
            const seat = await Seat.findByPk(id);
            return seat;
        } catch (error) {
            console.log(error);
        }
    }

    async updateSeat(id, planeId, number, type, state, price) {
        try {
            const seat = await Seat.update(
                { planeId, number, type, state, price },
                { where: { id } }
            );
            const seatUpdated = await Seat.findByPk(id);
            return seatUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteSeat(id) {
        try {
            const seatDeleted = await Seat.findByPk(id);
            if (!seatDeleted) {
                console.log("Seat not found");
            }
            await seatDeleted.destroy()
            return seatDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}