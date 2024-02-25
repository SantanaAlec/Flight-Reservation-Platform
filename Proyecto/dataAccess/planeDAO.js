const { Plane } = require("../models");
const {Seats} = require("../models");

class PlaneDAO {
    constructor() {}

    async create(seats, model) {
        try {
            const plane = await Plane.create({
                seats,
                model,
            });
            return plane;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const planes = await Plane.findAll();
            return planes;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const plane = await Plane.findByPk(id);
            return plane;
        } catch (error) {
            throw error;
        }
    }

    async update(id, seats, model) {
        try {
            const plane = await Plane.update(
                {
                    seats,
                    model,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const planeUpdated = this.getById(id);
            return planeUpdated;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const plane = await Plane.destroy({
                where: {
                    id,
                },
            });
            return plane;
        } catch (error) {
            throw error;
        }
    }
}