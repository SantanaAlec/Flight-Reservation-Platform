const UserDAO = require('../dataAccess/userDAO');
const { AppError } = require('../utils/appError');

class UserController {
    static async createUser(req, res, next) {
        try {
            const { name, role, email, password } = req.body;

            if (!name || !role || !email || !password) {
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
        }
    }

    static async getUserById(req, res, next) {
        try {
            const id = req.params.id;
            const user = await UserDAO.getUserById(id);

            if (!user) {
                return next(new AppError('Usuario no encontrado', 404));
            }

            res.status(200).json(user);
        } catch (error) {
            next(new AppError('Error al obtener usuario', 500));
        }
    }

    static async updateUser(req, res, next) {
        try {
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
        }
    }

    static async deleteUser(req, res, next) {
        try {
            const id = req.params.id;
            const userExists = await UserDAO.getUserById(id);

            if (!userExists) {
                return next(new AppError('Usuario no encontrado', 404));
            }

            await UserDAO.deleteUser(id);

            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            next(new AppError('Error al eliminar usuario', 500));
        }
    }
}

module.exports = UserController;
