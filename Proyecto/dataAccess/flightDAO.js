const { Flight } = require("../models");
const { PlaneDAO } = require("./planeDAO");
const { UserDAO } = require("./userDAO");

class FlightDAO {
    constructor() {}

    async createFlight(
        idPlane,
        origin,
        detiny,
        departureDate,
        arrivalDate,
        luggage,
        cost
    ) {
        try {
            //Comprobar si existe el avión, Y comprobar cuales asientos pertenecen a ese avión
            //comprobar si existe el usuario y si el usuario tiene asientos
            //registrar el vuelo
            const flight = await Flight.create({
                idPlane,
                origin,
                detiny,
                departureDate,
                arrivalDate,
                luggage,
                cost,
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

    async updateFlight(id, flightData) {
        try {
            const {
                idPlane,
                origin,
                detiny,
                departureDate,
                arrivalDate,
                luggage,
                cost,
            } = flightData;

            const flight = new Flight();

            if (idPlane) {
                const plane = await PlaneDAO.findByPk(idPlane);
                if (!plane) {
                    throw new Error("Plane not found");
                }
                flight.idPlane = idPlane;
            }

            if (origin) {
                flight.origin = origin;
            }

            if (detiny) {
                flight.detiny = detiny;
            }

            if (departureDate) {
                flight.departureDate = departureDate;
            }

            if (arrivalDate) {
                flight.arrivalDate = arrivalDate;
            }

            if (luggage) {
                flight.luggage = luggage;
            }

            if (cost) {
                flight.cost = cost;
            }

            const updateFlight = await Flight.update(
                {
                    flight
                },
                {
                    where: {
                        id,
                    },
                }
            );

            return updateFlight;
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
