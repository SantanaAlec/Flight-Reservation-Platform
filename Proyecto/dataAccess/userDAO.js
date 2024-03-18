const { User } = require("../models");

class UserDAO {
    constructor() {}

    async createUser(name, role, email, password) {
        try {
            const user = await User.create({
                name,
                role,
                email,
                password,
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUsersByReservationId(idReservation) {
        try {
            const users = User.findAll({
                where: {
                    idReservation,
                },
            });
            return users;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, userData) {
        try {
            const { name, role, email, password } = userData;

            const user = new User();

            if (name) {
                user.name = name;
            }
            if (role) {
                user.role = role;
            }
            if (email) {
                user.email = email;
            }
            if (password) {
                user.password = password;
            }

            const updatedUser = await User.update(
                {
                    user,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error("User not found");
            }
            await user.destroy();
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserDAO();
