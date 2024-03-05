const {Plane} = require('../models');

class PlaneDAO {
    constructor() {}

    async createPlane(type, seats) {
        try {
            const plane = await Plane.create({
                type,
                seats
            });
            return plane;
        } catch (error) {
            throw error;
        }
    }

    async getAllPlanes() {
        try {
            const planes = await Plane.findAll();
            return planes;
        } catch (error) {
            throw error;
        }
    }

    async getPlaneById(id) {
        try {
            const plane = await Plane.findByPk(id);
            return plane;
        } catch (error) {
            throw error;
        }
    }

    async updatePlane(id, type) {
        try {
            const plane = await Plane.update(
                {
                    type
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const planeUpdated = Plane.findByPk(id);
            return planeUpdated;
        } catch (error) {
            throw error;
        }
    }

    async deletePlane(id) {
        try {
            const plane = await Plane.findByPk(id);
            if (!plane) {
                throw new Error("Plane not found");
            }
            await plane.destroy();
            return plane;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PlaneDAO();