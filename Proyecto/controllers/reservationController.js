const ReservationDAO = require('../dataAccess/reservationDAO');
const { appError } = require('../utils/appError');

class ReservationController {
    static async createReservation(req, res, next) {
        try {
            const { idUser, idFlight, state } = req.body;
            if (!idUser || !idFlight || !state) {
                return next(new appError('Missing required fields (ID de usuario, ID de vuelo, estado)', 400));
            }
            const reservation = await ReservationDAO.createReservation(idUser, idFlight, state);
            res.status(201).json(reservation);
        } catch (error) {
            next(new appError('Error creating reservation', 500));
        }
    }

    static async getAllReservations(req, res, next) {
        try {
            const reservations = await ReservationDAO.getAllReservations();
            res.status(200).json(reservations);
        } catch (error) {
            next(new appError('Error getting reservations', 500));
        }
    }

    static async getReservationById(req, res, next) {
        try {
            const id = req.params.id;
            const reservation = await ReservationDAO.getReservationById(id);
            if (!reservation) {
                return next(new appError('Reservation not found', 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new appError('Error getting reservation', 500));
        }
    }

    static async getReservationsByFlightId(req, res, next) {
        try {
            const idFlight = req.params.id;
            const reservations = await ReservationDAO.getReservationsByFlightId(idFlight);
            res.status(200).json(reservations);
        } catch (error) {
            next(new appError('Error getting reservation by flightId', 500));
        }
    }

    static async getReservationsByPlaneId(req, res, next) {
        try {
            const idPlane = req.params.id;
            const reservations = await ReservationDAO.getReservationsByPlaneId(idPlane);
            res.status(200).json(reservations);
        } catch (error) {
            next(new appError('Error getting reservation by planeId', 500));
        }
    }

    static async updateReservation(req, res, next) {
        try {
            const id = req.params.id;
            const { idUser, idFlight, state } = req.body;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
                return next(new appError('Reservation not found', 404));
            }
            const updatedReservation = await ReservationDAO.updateReservation(id, idUser, idFlight, state);
            res.status(200).json(updatedReservation);
        } catch (error) {
            next(new appError('Error updating reservation', 500));
        }
    }

    static async deleteReservation(req, res, next) {
        try {
            const id = req.params.id;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
                return next(new appError('Reservation not found', 404));
            }
            await ReservationDAO.deleteReservation(id);
            res.status(200).json({ message: 'Reservation successfully deleted' });
        } catch (error) {
            next(new appError('Error deleting reservation', 500));
        }
    }
}

module.exports = ReservationController;
