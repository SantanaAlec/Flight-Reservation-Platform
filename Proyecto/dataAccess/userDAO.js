const {User} = require('../models');

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

    async updateUser(id, name, role, email, password) {
        try {
            const user = await User.update(
                {
                    name,
                    role,
                    email,
                    password,
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const userUpdated = User.findByPk(id);
            return userUpdated;
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