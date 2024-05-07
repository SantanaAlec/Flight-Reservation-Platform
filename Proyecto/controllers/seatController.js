const SeatDAO = require('../dataAccess/seatDAO');
const { appError } = require('../utils/appError');

class SeatController {
    static async createSeat(req, res, next) {
        try {
            const { idPlane, number, classType, state, price } = req.body;
            if (!idPlane || !number || !classType || state === undefined || !price) {
                return next(new appError('Todos los campos (ID del avión, número, tipo de clase, estado, precio) son requeridos', 400));
            }
            const seat = await SeatDAO.createSeat(idPlane, number, classType, state, price);
            res.status(201).json(seat);
        } catch (error) {
            next(new appError('Error al crear el asiento', 500));
        }
    }

    static async getAllSeats(req, res, next) {
        try {
            const seats = await SeatDAO.getAllSeats();
            res.status(200).json(seats);
        } catch (error) {
            next(new appError('Error al obtener los asientos', 500));
        }
    }

    static async getSeatById(req, res, next) {
        try {
            const id = req.params.id;
            const seat = await SeatDAO.getSeatById(id);
            if (!seat) {
                return next(new appError('Asiento no encontrado', 404));
            }
            res.status(200).json(seat);
        } catch (error) {
            next(new appError('Error al obtener el asiento', 500));
        }
    }

    static async getSeatsByPlaneId(req, res, next) {
        try {
            const idPlane = req.params.idPlane;
            const seats = await SeatDAO.getSeatsByPlaneId(idPlane);
            res.status(200).json(seats);
        } catch (error) {
            next(new appError('Error al obtener asientos por ID de avión', 500));
        }
    }

    static async getSeatsByUserId(req, res, next) {
        try {
            const idUser = req.params.idUser;
            const seats = await SeatDAO.getSeatsByUserId(idUser);
            res.status(200).json(seats);
        } catch (error) {
            next(new appError('Error al obtener asientos por ID de usuario', 500));
        }
    }

    static async updateSeat(req, res, next) {
        try {
            const id = req.params.id;
            const seatData = req.body;
            const seatExists = await SeatDAO.getSeatById(id);
            if (!seatExists) {
                return next(new appError('Asiento no encontrado', 404));
            }
            const updatedSeat = await SeatDAO.updateSeat(id, seatData);
            res.status(200).json(updatedSeat);
        } catch (error) {
            next(new appError('Error al actualizar el asiento', 500));
        }
    }

    static async deleteSeat(req, res, next) {
        try {
            const id = req.params.id;
            const seatExists = await SeatDAO.getSeatById(id);
            if (!seatExists) {
                return next(new appError('Asiento no encontrado', 404));
            }
            await SeatDAO.deleteSeat(id);
            res.status(200).json({ message: 'Asiento eliminado correctamente' });
        } catch (error) {
            next(new appError('Error al eliminar el asiento', 500));
        }
    }
}

module.exports = SeatController;
