const { Flight } = require("../models");
const { UserDAO } = require("./userDAO");
const { PlaneDAO } = require("./planeDAO");
const { SeatDAO } = require("./seatDAO");
const { ReservationDAO } = require("./reservationDAO");

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
            //Si solo pongo un vuelo y luego calculo el presio en reservación en base a cuantos asientos tiene el usuario
            /** 
            const flight = await Flight.create({
                idPlane,
                origin,
                detiny,
                departureDate,
                arrivalDate,
                luggage,
                cost,
            });
            */

            const plane = await PlaneDAO.getPlaneById(idPlane);

            if (!plane) {
                throw new Error("Plane not found");
            }

            //obtener los asientos del avión
            const seats = SeatDAO.getSeatsByPlaneId(idPlane);

            if (!seats) {
                throw new Error("Seats not found");
            }

            //obtener las reservas relacionadas con el vuelo (CON EL VUELO O CON EL ÁVION?!)
            ReservationDAO.getReservationsByFlightId(idPlane);

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
                    flight,
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
