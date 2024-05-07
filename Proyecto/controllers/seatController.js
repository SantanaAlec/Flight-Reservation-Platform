const SeatDAO = require('../dataAccess/seatDAO');
const { AppError } = require('../utils/appError');

class SeatController {
    static async createSeat(req, res, next) {
        try {
            const { idPlane, number, classType, state, price } = req.body;
            if (!idPlane || !number || !classType || state === undefined || !price) {
<<<<<<< HEAD
                return next(new AppError('Missing required fields (Id del avión, número, tipo de clase, estado, precio)', 400));
=======
                return next(new AppError('Todos los campos (ID del avión, número, tipo de clase, estado, precio) son requeridos', 400));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const seat = await SeatDAO.createSeat(idPlane, number, classType, state, price);
            res.status(201).json(seat);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error creating seat', 500));
=======
            next(new AppError('Error al crear el asiento', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getAllSeats(req, res, next) {
        try {
            const seats = await SeatDAO.getAllSeats();
            res.status(200).json(seats);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting seats', 500));
=======
            next(new AppError('Error al obtener los asientos', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getSeatById(req, res, next) {
        try {
            const id = req.params.id;
            const seat = await SeatDAO.getSeatById(id);
            if (!seat) {
<<<<<<< HEAD
                return next(new AppError('Seat not found', 404));
            }
            res.status(200).json(seat);
        } catch (error) {
            next(new AppError('Error getting seat', 500));
=======
                return next(new AppError('Asiento no encontrado', 404));
            }
            res.status(200).json(seat);
        } catch (error) {
            next(new AppError('Error al obtener el asiento', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getSeatsByPlaneId(req, res, next) {
        try {
            const idPlane = req.params.idPlane;
            const seats = await SeatDAO.getSeatsByPlaneId(idPlane);
            res.status(200).json(seats);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting seat by planeId', 500));
=======
            next(new AppError('Error al obtener asientos por ID de avión', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getSeatsByUserId(req, res, next) {
        try {
            const idUser = req.params.idUser;
            const seats = await SeatDAO.getSeatsByUserId(idUser);
            res.status(200).json(seats);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error getting seat by userId', 500));
=======
            next(new AppError('Error al obtener asientos por ID de usuario', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async updateSeat(req, res, next) {
        try {
            const id = req.params.id;
            const seatData = req.body;
            const seatExists = await SeatDAO.getSeatById(id);
            if (!seatExists) {
<<<<<<< HEAD
                return next(new AppError('seat not found', 404));
=======
                return next(new AppError('Asiento no encontrado', 404));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
            }
            const updatedSeat = await SeatDAO.updateSeat(id, seatData);
            res.status(200).json(updatedSeat);
        } catch (error) {
<<<<<<< HEAD
            next(new AppError('Error updating seat', 500));
=======
            next(new AppError('Error al actualizar el asiento', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async deleteSeat(req, res, next) {
        try {
            const id = req.params.id;
            const seatExists = await SeatDAO.getSeatById(id);
            if (!seatExists) {
<<<<<<< HEAD
                return next(new AppError('seat not found', 404));
            }
            await SeatDAO.deleteSeat(id);
            res.status(200).json({ message: 'seat successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting seat', 500));
=======
                return next(new AppError('Asiento no encontrado', 404));
            }
            await SeatDAO.deleteSeat(id);
            res.status(200).json({ message: 'Asiento eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar el asiento', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }
}

<<<<<<< HEAD
module.exports = SeatController;
=======
module.exports = SeatController;
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
