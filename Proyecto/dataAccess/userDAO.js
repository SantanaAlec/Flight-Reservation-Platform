const { User } = require("../models");

class UserDAO {
    constructor() {}

    async createUser(nombre, role, email, password) {
        try {
            const user = await User.createUser({
                nombre,
                role,
                email,
                password,
            });
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async geyAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(id, nombre, role, email, password) {
        try {
            const user = await User.updateUser(
                { nombre, role, email, password },
                { where: { id } }
            );
            const userUpdated = await User.findByPk(id);
            return userUpdated;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(id) {
        try {
            const userDeleted = await User.findByPk(id);
            if (!userDeleted) {
                console.log("User not found");
            }
            await userDeleted.destroy()
            return userDeleted;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserDAO();
