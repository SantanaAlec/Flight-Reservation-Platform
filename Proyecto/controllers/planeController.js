const PlaneDAO = require('../dataAccess/planeDAO');
<<<<<<< HEAD
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
=======
const { AppError } = require('../utils/appError');

class PlaneController {
    static async createPlane(req, res, next) {
        try {
            const { type } = req.body;
            if (!type) {
                return next(new AppError('Missing required fields (type)', 400));
            }
            const plane = await PlaneDAO.createPlane(type);
            res.status(201).json(plane);
        } catch (error) {
            next(new AppError('Error creating plane', 500));
        }
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
    }

    static async getAllPlanes(req, res, next) {
        try {
            const planes = await PlaneDAO.getAllPlanes();
            res.status(200).json(planes);
        } catch (error) {
<<<<<<< HEAD
            next(new appError('Error al obtener los aviones', 500));
=======
            next(new AppError('Error getting planes', 500));
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
        }
    }

    static async getPlaneById(req, res, next) {
        try {
            const id = req.params.id;
            const plane = await PlaneDAO.getPlaneById(id);
            if (!plane) {
<<<<<<< HEAD
                return next(new appError('Avión no encontrado', 404));
            }
            res.status(200).json(plane);
        } catch (error) {
            next(new appError('Error al obtener el avión', 500));
=======
                return next(new AppError('plane not found', 404));
            }
            res.status(200).json(plane);
        } catch (error) {
            next(new AppError('Error getting plane', 500));
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
        }
    }

    static async updatePlane(req, res, next) {
        try {
            const id = req.params.id;
            const planeData = req.body;
            const updatedPlane = await PlaneDAO.updatePlane(id, planeData);
            res.status(200).json(updatedPlane);
        } catch (error) {
<<<<<<< HEAD
            next(new appError('Error al actualizar el avión', 500));
=======
            next(new AppError('Error updating plane', 500));
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
        }
    }

    static async deletePlane(req, res, next) {
        try {
            const id = req.params.id;
            await PlaneDAO.deletePlane(id);
<<<<<<< HEAD
            res.status(200).json({ message: 'Avión eliminado correctamente' });
        } catch (error) {
            next(new appError('Error al eliminar el avión', 500));
=======
            res.status(200).json({ message: 'Plane successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting plane', 500));
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
        }
    }
}

<<<<<<< HEAD
module.exports = PlaneController;
=======
module.exports = PlaneController;
>>>>>>> fbe8f8ae18b6b1ec180da221bd60a1451bde1aca
