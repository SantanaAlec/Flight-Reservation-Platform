const {Seat} = require('../models/seat');

class SeatDAO {
    constructor() {}

    async create(number, classType, state, price, flightId, planeId, reservationId, userId, passengerId, seatId){
        try {
            const seat = await Seat.create({
                number,
                classType,
                state,
                price,
                flightId,
                planeId,
                reservationId,
                userId,
                passengerId,
                seatId
            });
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async getAll(){
        try {
            const seats = await Seat.findAll();
            return seats;
        } catch (error) {
            throw error;
        }
    }

    async getById(id){
        try {
            const seat = await Seat.findByPk(id);
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async update(id, number, classType, state, price, flightId, planeId, reservationId, userId, passengerId, seatId){
        try {
            const seat = await Seat.update(
                {
                    number,
                    classType,
                    state,
                    price,
                    flightId,
                    planeId,
                    reservationId,
                    userId,
                    passengerId,
                    seatId
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const seatUpdated = this.getById(id);
            return seatUpdated;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            const seat = await Seat.destroy({
                where: {
                    id,
                },
            });
            return seat;
        } catch (error) {
            throw error;
        }
    }
}