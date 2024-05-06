const PlaneDAO = require('../dataAccess/planeDAO');
const { AppError } = require('../utils/appError');

class PlaneController {
    static async createPlane(req, res, next) {
        try {
            const { type } = req.body;
            const sql = 'INSERT INTO planes (type) VALUES (?)';
            const values = [type];
            await db.query(sql, values);
            res.status(201).json({ message: 'Plane created successfully' });
        } catch (error) {
            next(new Error('Error creating plane'));
        }
    }
    static async createPlane(req, res, next) {
        try {
            const { type } = req.body;
            if (!type) {
                return next(new AppError('El campo tipo es requerido', 400));
            }
            const plane = await PlaneDAO.createPlane(type);
            res.status(201).json(plane);
        } catch (error) {
            next(new AppError('Error al crear el avión', 500));
        }
    }

    static async getAllPlanes(req, res, next) {
        try {
            const planes = await PlaneDAO.getAllPlanes();
            res.status(200).json(planes);
        } catch (error) {
            next(new AppError('Error al obtener los aviones', 500));
        }
    }

    static async getPlaneById(req, res, next) {
        try {
            const id = req.params.id;
            const plane = await PlaneDAO.getPlaneById(id);
            if (!plane) {
                return next(new AppError('Avión no encontrado', 404));
            }
            res.status(200).json(plane);
        } catch (error) {
            next(new AppError('Error al obtener el avión', 500));
        }
    }

    static async updatePlane(req, res, next) {
        try {
            const id = req.params.id;
            const planeData = req.body;
            const updatedPlane = await PlaneDAO.updatePlane(id, planeData);
            res.status(200).json(updatedPlane);
        } catch (error) {
            next(new AppError('Error al actualizar el avión', 500));
        }
    }

    static async deletePlane(req, res, next) {
        try {
            const id = req.params.id;
            await PlaneDAO.deletePlane(id);
            res.status(200).json({ message: 'Avión eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar el avión', 500));
        }
    }
}

module.exports = PlaneController;
