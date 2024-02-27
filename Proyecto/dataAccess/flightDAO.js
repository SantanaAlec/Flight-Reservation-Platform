const {Flight} = require('../models');

class FlightDAO {
    constructor() {}

    async createFlight(idPlane, origin, detiny, departureDate, arrivalDate, luggage, cost) {
        try {
            const flight = await Flight.create({
                idPlane,
                origin,
                detiny,
                departureDate,
                arrivalDate,
                luggage,
                cost
            });
            return flight;
        } catch (error) {
            throw error;
        }
    }

    async getAllFlights() {
        try {
            const flights = await Flight.findAll();
            return flights;
        } catch (error) {
            throw error;
        }
    }

    async getFlightById(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            throw error;
        }
    }

    async updateFlight(id, idPlane, origin, detiny, departureDate, arrivalDate, luggage, cost) {
        try {
            const flight = await Flight.update(
                {
                    idPlane,
                    origin,
                    detiny,
                    departureDate,
                    arrivalDate,
                    luggage,
                    cost
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const flightUpdated = Flight.findByPk(id);
            return flightUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deleteFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            if (!flight) {
                throw new Error("Flight not found");
            }
            await flight.destroy();
            return flight;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new FlightDAO();