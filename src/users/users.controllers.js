const { INTEGER } = require('sequelize')
const Users = require('../models/users.models')


const findAllUsers = async () => {
    const users = await Users.findAll()
    return users
}

const findUserById = async (id) => {
    const user = await Users.findOne()
    return user
}

const createUser = async (id) => {
    const newUser = await Users.create({
        id: obj.id,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return newUser
}

const updateUser = async (id, obj) => {
    const modifiedUser = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return modifiedUser[0]
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}


