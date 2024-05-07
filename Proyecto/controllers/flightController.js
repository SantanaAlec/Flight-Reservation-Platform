const FlightDAO = require('../dataAccess/flightDAO');
const { appError } = require('../utils/appError');
const db = require('../config/db');

class FlightController {
    static async createFlight(flightData) {
        const { idPlane, origin, destiny, departureDate, arrivalDate, luggage, cost } = flightData;
        if (!idPlane || !origin || !destiny || !departureDate || !arrivalDate || luggage === undefined || cost === undefined) {
            throw new appError('Faltan campos requeridos (ID del avión, origen, destino, fecha de salida, fecha de llegada, equipaje, costo)', 400);
        }

        // Verificar si el idPlane existe en la tabla plane
        const [planes] = await db.promise().query('SELECT * FROM Plane WHERE id = ?', [idPlane]);
        if (planes.length === 0) {
            throw new appError(`No existe un avión con el id ${idPlane}. Por favor, usa un idPlane existente o crea un nuevo avión en tu tabla 'plane'.`, 400);
        }

        const departureDateFormatted = new Date(departureDate).toISOString().slice(0, 19).replace('T', ' ');
        const arrivalDateFormatted = new Date(arrivalDate).toISOString().slice(0, 19).replace('T', ' ');

        const result = await db.promise().query('INSERT INTO Flight (idPlane, origin, destiny, departureDate, arrivalDate, luggage, cost) VALUES (?, ?, ?, ?, ?, ?, ?)', [idPlane, origin, destiny, departureDateFormatted, arrivalDateFormatted, luggage, cost]);
        return result;
    }
    
    

    static async getFlightById(req, res, next) {
        try {
            const id = req.params.id;
            const flight = await FlightDAO.getFlightById(id);
            if (!flight) {
                return next(new appError('Vuelo no encontrado', 404));
            }
            res.status(200).json(flight);
        } catch (error) {
            next(new AppError('Error al obtener el vuelo', 500));
        }
    }
    static async getAllFlights(req, res, next) {
        try {
            const flights = await FlightDAO.getAllFlights();
            res.status(200).json(flights);
        } catch (error) {
            next(new appError('Error al obtener los vuelos', 500));
        }
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
            next(new AppError('Error al actualizar el vuelo', 500));
        }
    }

    static async deleteFlight(req, res, next) {
        try {
            const id = req.params.id;
            const flightExists = await FlightDAO.getFlightById(id);
            if (!flightExists) {
                return next(new appError('Flight not found', 404));
            }
            await FlightDAO.deleteFlight(id);
            res.status(200).json({ message: 'Flight successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting flight', 500));
        }
    }
}

module.exports = FlightController;
