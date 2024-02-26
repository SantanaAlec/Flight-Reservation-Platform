const {Flight} = require('../models');

class FlightDAO {
    constructor() {}

    async createFlight(planeId, origin, destiny, departureDate, arrivalDate, luggage, cost) {
        try {
            const flight = await Flight.create({
                planeId,
                origin,
                destiny,
                departureDate,
                arrivalDate,
                luggage,
                cost
            });
            return flight;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getAllFlights() {
        try {
            const flights = await Flight.findAll();
            return flights;
        } catch (error) {
            console.log(error);
        }
    }

    async getFlightById(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log(error);
        }
    }

    async updateFlight(id, planeId, origin, destiny, departureDate, arrivalDate, luggage, cost) {
        try {
            const flight = await Flight.update(
                { planeId, origin, destiny, departureDate, arrivalDate, luggage, cost },
                { where: { id } }
            );
            const flightUpdated = await Flight.findByPk(id);
            return flightUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteFlight(id) {
        try {
            const flightDeleted = await Flight.findByPk(id);
            if (!flightDeleted) {
                console.log("Flight not found");
            }
            await flightDeleted.destroy()
            return flightDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}