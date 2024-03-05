const { Plane } = require("../models");

class PlaneDAO {
    constructor() {}

    async createPlane(type) {
        try {
            const plane = await Plane.create({
                type,
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

    async updatePlane(id, planeData) {
        try {
            const { type } = planeData;

            const plane = new Plane();

            if (type) {
                plane.type = type;
            }

            const updatedPlane = await Plane.update(
                {
                    plane,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            return updatedPlane;
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
