const { Seat } = require("../models");
const { PlaneDAO } = require("./planeDAO");
const { UserDAO } = require("./userDAO");

class SeatDAO {
    constructor() {}

    async createSeat(idPlane, number, classType, state, price) {
        try {
            const seat = await Seat.create({
                idPlane,
                number,
                classType,
                state,
                price,
            });
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async getAllSeats() {
        try {
            const seats = await Seat.findAll();
            return seats;
        } catch (error) {
            throw error;
        }
    }

    async getSeatById(id) {
        try {
            const seat = await Seat.findByPk(id);
            return seat;
        } catch (error) {
            throw error;
        }
    }

    async getSeatsByPlaneId(idPlane) {
        try {
            const seats = await Seat.findAll({
                where: {
                    idPlane,
                },
            });
            return seats;
        } catch (error) {
            throw error;
        }
    }

    async getSeatsByUserId(idUser) {
        try {
            const seats = await Seat.findAll({
                where: {
                    idUser,
                },
            });
            return seats;
        } catch (error) {
            throw error;
        }
    }

    //Recrear este método
    async getSeatsByUsers(userArray) {
        try {
            const seats = await Seat.findAll({
                where: {
                    idUser: {
                        [Sequelize.Op.in]: userArray // Utiliza el operador in para seleccionar asientos donde idUser esté en el array proporcionado
                    },
                },
            });
            return seats;
        } catch (error) {
            throw error;
        }
    }
    

    async updateSeat(id, seatData) {
        try {
            const { idPlane, idUser, number, classType, state, price } =
                seatData;

            const seat = new Seat();

            if (idPlane) {
                const plane = await PlaneDAO.findByPk(idPlane);
                if (!plane) {
                    throw new Error("Plane not found");
                }
                seat.idPlane = idPlane;
            }

            if (idUser) {
                const user = await UserDAO.findByPk(idPlane);
                if (!user) {
                    throw new Error("User not found");
                }
                seat.idUser = idUser;
            }

            if (number) {
                seat.number = number;
            }
            if (classType) {
                seat.classType = classType;
            }
            if (state) {
                seat.state = state;
            }
            if (price) {
                seat.price = price;
            }

            const updatedSeat = await Seat.update(
                {
                    seat,
                },
                {
                    where: {
                        id,
                    },
                }
            );

            return updatedSeat;
        } catch (error) {
            throw error;
        }
    }

    async deleteSeat(id) {
        try {
            const seat = await Seat.findByPk(id);
            if (!seat) {
                throw new Error("Seat not found");
            }
            await seat.destroy();
            return seat;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SeatDAO();
