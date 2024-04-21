const UserDAO = require("../dataAccess/userDAO");
const ReservationDAO = require("../dataAccess/reservationDAO");
const { AppError } = require("../utils/appError");

class UserController {
    static async createUser(req, res, next) {
        try {
            const { name, role, email, password } = req.body;

            if (!name || !role || !email || !password) {
                return next(new AppError("Missing required fields (nombre, rol, email or contraseña)", 400));
            }

            const userData = { name, role, email, password };
            const user = await UserDAO.createUser(userData);
            res.status(201).json(user);
        } catch (error) {
            next(new AppError("Error creating a user", 500));
        }
    }

    static async getUsers(req, res, next) {
        try {
            const users = await UserDAO.getAllUsers();

            if (!users) {
                return next(new AppError("No users found", 404));
            }

            res.status(200).json(users);
        } catch (error) {
            next(new AppError("Error getting users", 500));
        }
    }

    static async getUserById(req, res, next) {
        try {
            const { id } = req.params;
            const user = await UserDAO.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            next(new AppError("Error getting user", 404));
        }
    }

    static async getUsersByReservationId(req, res, next) {
        try {
            const { idReservation } = req.params.idReservation;
            const existingReservartion =
                await ReservationDAO.getReservationById(idReservation);

            if (!existingReservartion) {
                return next(new AppError("Reservation not found", 404));
            }

            const users = await UserDAO.getUsersByReservationId(idReservation);
            res.status(200).json(users);
        } catch (error) {
            next(new AppError("Error getting users", 500));
        }
    }

    static async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const existingUser = await UserDAO.getUserById(id);

            if (!existingUser) {
                return next(new AppError("User not found", 404));
            }

            const userData = req.body;
            const user = await UserDAO.updateUser(id, userData);

            if (!user) {
                return next(new AppError("User not found", 404));
            }

            res.status(200).json({
                user,
                message: "User updated successfully",
            });
        } catch (error) {
            next(new AppError("Error updating user", 500));
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            const existingUser = await UserDAO.getUserById(id);

            if (!existingUser) {
                return next(new AppError("User not found", 404));
            }

            const user = await UserDAO.deleteUser(id);
            res.status(200).json({
                user,
                message: "User deleted successfully",
            });
        } catch (error) {
            next(new AppError("Error deleting user", 500));
        }
    }
}

module.exports = UserController;
