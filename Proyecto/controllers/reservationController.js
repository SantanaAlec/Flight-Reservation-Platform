const ReservationDAO = require('../dataAccess/reservationDAO');
const { AppError } = require('../utils/appError');

class ReservationController {
    static async createReservation(req, res, next) {
        try {
            const { idUser, idFlight, state } = req.body;
            if (!idUser || !idFlight || !state) {
<<<<<<< HEAD
                return next(new AppError('Missing required fields (ID de usuario, ID de vuelo, estado)', 400));
=======
                return next(new AppError('Todos los campos (ID de usuario, ID de vuelo, estado) son requeridos', 400));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const reservation = await ReservationDAO.createReservation(idUser, idFlight, state);
            res.status(201).json(reservation);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error creating reservation', 500));
=======
            next(new AppError('Error al crear la reservación', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getAllReservations(req, res, next) {
        try {
            const reservations = await ReservationDAO.getAllReservations();
            res.status(200).json(reservations);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting reservations', 500));
=======
            next(new AppError('Error al obtener las reservaciones', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getReservationById(req, res, next) {
        try {
            const id = req.params.id;
            const reservation = await ReservationDAO.getReservationById(id);
            if (!reservation) {
<<<<<<< HEAD
                return next(new AppError('Reservation not found', 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError('Error getting reservation', 500));
=======
                return next(new AppError('Reservación no encontrada', 404));
            }
            res.status(200).json(reservation);
        } catch (error) {
            next(new AppError('Error al obtener la reservación', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getReservationsByFlightId(req, res, next) {
        try {
            const idFlight = req.params.id;
            const reservations = await ReservationDAO.getReservationsByFlightId(idFlight);
            res.status(200).json(reservations);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting reservation by flightId', 500));
=======
            next(new AppError('Error al obtener reservaciones por ID de vuelo', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getReservationsByPlaneId(req, res, next) {
        try {
            const idPlane = req.params.id;
            const reservations = await ReservationDAO.getReservationsByPlaneId(idPlane);
            res.status(200).json(reservations);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting reservation by planeId', 500));
=======
            next(new AppError('Error al obtener reservaciones por ID de avión', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async updateReservation(req, res, next) {
        try {
            const id = req.params.id;
            const { idUser, idFlight, state } = req.body;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
<<<<<<< HEAD
                return next(new AppError('Reservation not found', 404));
=======
                return next(new AppError('Reservación no encontrada', 404));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const updatedReservation = await ReservationDAO.updateReservation(id, idUser, idFlight, state);
            res.status(200).json(updatedReservation);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error updating reservation', 500));
=======
            next(new AppError('Error al actualizar la reservación', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async deleteReservation(req, res, next) {
        try {
            const id = req.params.id;
            const reservationExists = await ReservationDAO.getReservationById(id);
            if (!reservationExists) {
<<<<<<< HEAD
                return next(new AppError('Reservation not found', 404));
            }
            await ReservationDAO.deleteReservation(id);
            res.status(200).json({ message: 'Reservation successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting reservation', 500));
=======
                return next(new AppError('Reservación no encontrada', 404));
            }
            await ReservationDAO.deleteReservation(id);
            res.status(200).json({ message: 'Reservación eliminada correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar la reservación', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }
}

<<<<<<< HEAD
module.exports = ReservationController;
=======
module.exports = ReservationController;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
