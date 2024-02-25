const {User} = require('../models/user');

class UserDAO {
    constructor() {}

    async create(name, email, password, roles){
        try {
            const user = await User.create({
                name,
                email,
                password,
                roles
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getAll(){
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async getById(id){
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async update(id, name, email, password, roles){
        try {
            const user = await User.update(
                {
                    name,
                    email,
                    password,
                    roles
                },
                {
                    where: {
                        id,
                    },
                }
            );
            const userUpdated = this.getById(id);
            return userUpdated;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            const user = await User.destroy({
                where: {
                    id,
                },
            });
            return user;
        } catch (error) {
            throw error;
        }
    }
}