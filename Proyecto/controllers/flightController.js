const FlightDAO = require('../dataAccess/flightDAO');
const { AppError } = require('../utils/appError');

class FlightController {
    static async createFlight(req, res, next) {
        try {
            const { idPlane, origin, destination, departureDate, arrivalDate, luggage, cost } = req.body;
            const sql = 'INSERT INTO flights (idPlane, origin, destination, departureDate, arrivalDate, luggage, cost) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const values = [idPlane, origin, destination, departureDate, arrivalDate, luggage, cost];
            await db.query(sql, values);
            res.status(201).json({ message: 'Flight created successfully' });
        } catch (error) {
            next(new Error('Error creating flight'));
        }
    }
    
    static async createFlight(req, res, next) {
        try {
            const { idPlane, origin, destiny, departureDate, arrivalDate, luggage, cost } = req.body;
            if (!idPlane || !origin || !destiny || !departureDate || !arrivalDate || luggage === undefined || cost === undefined) {
                return next(new AppError('Missing required fields (ID del avión, origen, destino, fecha de salida, fecha de llegada, equipaje, costo)', 400));
            }
            const flight = await FlightDAO.createFlight(idPlane, origin, destiny, departureDate, arrivalDate, luggage, cost);
            res.status(201).json(flight);
        } catch (error) {

            next(new AppError('Error creating flight', 500));

            next(new AppError('Error al crear el vuelo', 500));
        }
        try {
            const flights = await FlightDAO.getAllFlights();
            res.status(200).json(flights);
        } catch (error) {

            next(new AppError('Error getting flihghts', 500));

            next(new AppError('Error al obtener los vuelos', 500));

        }
    }

    static async getFlightById(req, res, next) {
        try {
            const id = req.params.id;
            const flight = await FlightDAO.getFlightById(id);
            if (!flight) {

                return next(new AppError('flight not found', 404));
            }
            res.status(200).json(flight);
        } catch (error) {
            next(new AppError('Error getting flight', 500));

                return next(new AppError('Vuelo no encontrado', 404));
            }
            res.status(200).json(flight);
        } catch (error) {
            next(new AppError('Error al obtener el vuelo', 500));

        }
    

    static async updateFlight(req, res, next) {
        try {
            const id = req.params.id;
            const flightData = req.body;
            const flightExists = await FlightDAO.getFlightById(id);
            if (!flightExists) {
                return next(new AppError('Flight not found', 404));
            }
            const updatedFlight = await FlightDAO.updateFlight(id, flightData);
            res.status(200).json(updatedFlight);
        } catch (error) {
            next(new AppError('Error updating flight', 500));
        }
    }

    static async deleteFlight(req, res, next) {
        try {
            const id = req.params.id;
            const flightExists = await FlightDAO.getFlightById(id);
            if (!flightExists) {
                return next(new AppError('Flight not found', 404));
            }
            await FlightDAO.deleteFlight(id);
            res.status(200).json({ message: 'Flight successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting flight', 500));
        }
    }
}

module.exports = FlightController;
