<<<<<<< HEAD
const UserDAO = require("../dataAccess/userDAO");
const ReservationDAO = require("../dataAccess/reservationDAO");
const { AppError } = require("../utils/appError");
=======
const UserDAO = require('../dataAccess/userDAO');
const { AppError } = require('../utils/appError');
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157

class UserController {
    static async createUser(req, res, next) {
        try {
            const { name, role, email, password } = req.body;

            if (!name || !role || !email || !password) {
<<<<<<< HEAD
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
=======
                return next(new AppError('Todos los campos nombre, rol, email y contraseña son requeridos', 400));
            }

            const userData = { name, role, email, password };
            const user = await UserDAO.createUser(userData.name, userData.role, userData.email, userData.password);
            res.status(201).json(user);
        } catch (error) {
            next(new AppError('Error al crear usuario', 500));
        }
    }

    static async getAllUsers(req, res, next) {
        try {
            const users = await UserDAO.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(new AppError('Error al obtener usuarios', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async getUserById(req, res, next) {
        try {
<<<<<<< HEAD
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
=======
            const id = req.params.id;
            const user = await UserDAO.getUserById(id);

            if (!user) {
                return next(new AppError('Usuario no encontrado', 404));
            }

            res.status(200).json(user);
        } catch (error) {
            next(new AppError('Error al obtener usuario', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async updateUser(req, res, next) {
        try {
<<<<<<< HEAD
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
=======
            const id = req.params.id;
            const userData = req.body;

            const userExists = await UserDAO.getUserById(id);

            if (!userExists) {
                return next(new AppError('Usuario no encontrado', 404));
            }

            const updatedUser = await UserDAO.updateUser(id, userData);

            res.status(200).json(updatedUser);
        } catch (error) {
            next(new AppError('Error al actualizar usuario', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }

    static async deleteUser(req, res, next) {
        try {
<<<<<<< HEAD
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
=======
            const id = req.params.id;
            const userExists = await UserDAO.getUserById(id);

            if (!userExists) {
                return next(new AppError('Usuario no encontrado', 404));
            }

            await UserDAO.deleteUser(id);

            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar usuario', 500));
>>>>>>> e2ced73d9c28666794732b3a710ad21b5f619157
        }
    }
}

module.exports = UserController;
