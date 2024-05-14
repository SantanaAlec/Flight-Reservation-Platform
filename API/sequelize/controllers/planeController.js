const PlaneDAO = require('../dataAccess/planeDAO');
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
    }

    static async getAllPlanes(req, res, next) {
        try {
            const planes = await PlaneDAO.getAllPlanes();
            res.status(200).json(planes);
        } catch (error) {
            next(new AppError('Error getting planes', 500));
        }
    }

    static async getPlaneById(req, res, next) {
        try {
            const id = req.params.id;
            const plane = await PlaneDAO.getPlaneById(id);
            if (!plane) {
                return next(new AppError('plane not found', 404));
            }
            res.status(200).json(plane);
        } catch (error) {
            next(new AppError('Error getting plane', 500));
        }
    }

    static async updatePlane(req, res, next) {
        try {
            const id = req.params.id;
            const planeData = req.body;
            const updatedPlane = await PlaneDAO.updatePlane(id, planeData);
            res.status(200).json(updatedPlane);
        } catch (error) {
            next(new AppError('Error updating plane', 500));
        }
    }

    static async deletePlane(req, res, next) {
        try {
            const id = req.params.id;
            await PlaneDAO.deletePlane(id);
            res.status(200).json({ message: 'Plane successfully deleted' });
        } catch (error) {
            next(new AppError('Error deleting plane', 500));
        }
    }
}

module.exports = PlaneController;