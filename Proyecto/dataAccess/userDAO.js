const { User } = require("../models");

class UserDAO {
    constructor() {}

    async registerUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async loginUser(username, password) {
        try {
            const user = await User.findOne({ where: { username, password } });
            return user;
        } catch (error) {
            throw error;
        }
    }
    
    async createUser(name, role, email, password) {
        try {
            const user = await User.create({ name, role, email, password });
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
            const users = await User.findAll({ where: { idReservation } });
            return users;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(id, userData) {
        try {
            await User.update(userData, { where: { id } });
            return "User updated successfully";
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
            return "User deleted successfully";
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserDAO();