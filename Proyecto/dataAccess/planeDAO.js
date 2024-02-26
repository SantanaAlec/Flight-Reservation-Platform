const {Plane} = require('../models');

class PlaneDAO {
    constructor() {}

    async createPlane(seats, model) {
        try {
            const plane = await Plane.create({
                seats,
                model
            });
            return plane;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllPlanes() {
        try {
            const planes = await Plane.findAll();
            return planes;
        } catch (error) {
            console.log(error);
        }
    }

    async getPlaneById(id) {
        try {
            const plane = await Plane.findByPk(id);
            return plane;
        } catch (error) {
            console.log(error);
        }
    }

    async updatePlane(id, seats, model) {
        try {
            const plane = await Plane.update(
                { seats, model },
                { where: { id } }
            );
            const planeUpdated = await Plane.findByPk(id);
            return planeUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deletePlane(id) {
        try {
            const planeDeleted = await Plane.findByPk(id);
            if (!planeDeleted) {
                console.log("Plane not found");
            }
            await planeDeleted.destroy()
            return planeDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}