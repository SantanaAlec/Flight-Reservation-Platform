const ReservationDAO = require('../dataAccess/reservationDAO');
const { AppError } = require('../utils/appError');

class ReservationController {
    static async createReservation(req, res, next) {
        try {
            const { idUser, idFlight, state } = req.body;
            if (!idUser || !idFlight || !state) {
                return next(new AppError('Todos los campos (ID de usuario, ID de vuelo, estado) son requeridos', 400));
            }
            const reservation = await ReservationDAO.createReservation(idUser, idFlight, state);
            res.status(201).json(reservation);
        } catch (error) {
            next(new AppError('Error al crear la reservación', 500));
        }
    }

    static async getAllReservations(req, res, next) {
        try {
            const reservations = await ReservationDAO.getAllReservations();
            res.status(200).json(reservations);
        } catch (error) {
            next(new AppError('Error al obtener las reservaciones', 500));
        }
    }

    static async getReservationById(req, res, next) {
        try {
            const id = req.params.id;
            const reservation = await ReservationDAO.getReservationById(id);
            if (!reservation) {
                return next(new AppError('Reservación no encontrada', 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError('Error al obtener la reservación', 500));
        }
    }

    static async getReservationsByFlightId(req, res, next) {
        try {
            const idFlight = req.params.id;
            const reservations = await ReservationDAO.getReservationsByFlightId(idFlight);
            res.status(200).json(reservations);
        } catch (error) {
            next(new AppError('Error al obtener reservaciones por ID de vuelo', 500));
        }
    }

    static async getReservationsByPlaneId(req, res, next) {
        try {
            const idPlane = req.params.id;
            const reservations = await ReservationDAO.getReservationsByPlaneId(idPlane);
            res.status(200).json(reservations);
        } catch (error) {
            next(new AppError('Error al obtener reservaciones por ID de avión', 500));
        }
    }

    static async updateReservation(req, res, next) {
        try {
            const id = req.params.id;
            const { idUser, idFlight, state } = req.body;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
                return next(new AppError('Reservación no encontrada', 404));
            }
            const updatedReservation = await ReservationDAO.updateReservation(id, idUser, idFlight, state);
            res.status(200).json(updatedReservation);
        } catch (error) {
            next(new AppError('Error al actualizar la reservación', 500));
        }
    }

    static async deleteReservation(req, res, next) {
        try {
            const id = req.params.id;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
                return next(new AppError('Reservación no encontrada', 404));
            }
            await ReservationDAO.deleteReservation(id);
            res.status(200).json({ message: 'Reservación eliminada correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar la reservación', 500));
        }
    }
}

module.exports = ReservationController;
