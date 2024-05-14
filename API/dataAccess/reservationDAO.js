const typeORM = require("../config/typeORM");
const Reservation = require("../models/reservation").Reservation;

const repository = typeORM.getRepository(Reservation);

class ReservationDAO {
    constructor() {}

    async createReservation(
        origin,
        destination,
        departureDate,
        returnDate,
        adults,
        children,
        infants
    ) {
        console.log(
            "DAO: ",
            origin,
            destination,
            departureDate,
            returnDate,
            adults,
            children,
            infants
        );

        const reservation = new Reservation();
        reservation.origin = origin;
        reservation.destination = destination;
        reservation.departureDate = departureDate;
        reservation.returnDate = returnDate;
        reservation.adults = adults;
        reservation.children = children;
        reservation.infants = infants;

        return await repository.save(reservation);
    }

    async getAllReservations() {
        return await repository.find();
    }

    async getReservationById(id) {
        return await repository.findOneBy({ id });
    }

    async updateReservation(
        id,
        origin,
        destination,
        departureDate,
        returnDate,
        adults,
        children,
        infants
    ) {
        const existingReservation = await getReservationById(id);

        if (!existingReservation) {
            throw Error();
        }

        existingReservation.origin = origin;
        existingReservation.destination = destination;
        existingReservation.departureDate = departureDate;
        existingReservation.returnDate = returnDate;
        existingReservation.adults = adults;
        existingReservation.children = children;
        existingReservation.infants = infants;

        return await repository.save(existingReservation);
    }

    async deleteReservation(id) {
        return await repository.delete(id);
    }
}

module.exports = new ReservationDAO();
