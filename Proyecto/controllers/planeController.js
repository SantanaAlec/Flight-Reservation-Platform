const PlaneDAO = require('../dataAccess/planeDAO');
const { appError } = require('../utils/appError');
const db = require('../config/db');

class PlaneController {
    static async createPlane(planeData) {
        const { type } = planeData;
        if (!type) {
            throw new appError('El campo tipo es requerido', 400);
        }

        const result = await db.promise().query('INSERT INTO Plane (type) VALUES (?)', [type]);
        return result;
    }

    static async getAllPlanes(req, res, next) {
        try {
            const planes = await PlaneDAO.getAllPlanes();
            res.status(200).json(planes);
        } catch (error) {
            next(new appError('Error al obtener los aviones', 500));
        }
    }

    static async getPlaneById(req, res, next) {
        try {
            const id = req.params.id;
            const plane = await PlaneDAO.getPlaneById(id);
            if (!plane) {
                return next(new appError('Avión no encontrado', 404));
            }
            res.status(200).json(plane);
        } catch (error) {
            next(new appError('Error al obtener el avión', 500));
        }
    }

    static async updatePlane(req, res, next) {
        try {
            const id = req.params.id;
            const planeData = req.body;
            const updatedPlane = await PlaneDAO.updatePlane(id, planeData);
            res.status(200).json(updatedPlane);
        } catch (error) {
            next(new appError('Error al actualizar el avión', 500));
        }
    }

    static async deletePlane(req, res, next) {
        try {
            const id = req.params.id;
            await PlaneDAO.deletePlane(id);
            res.status(200).json({ message: 'Avión eliminado correctamente' });
        } catch (error) {
            next(new appError('Error al eliminar el avión', 500));
        }
    }
}

module.exports = PlaneController;
