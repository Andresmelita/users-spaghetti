const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((users) => {
            res.status(200).json(users)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const getUserById = (req, res) => {
    const id = req.params.id
    userControllers.findUserById(id)
        .then((user) => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body
    userControllers.createUser({first_name, last_name, email, password, birthday})
        .then((newUser) => {
            res.status(201).json(newUser)
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message, 
                fields: {
                    first_name: 'string',
                    last_name: 'string',
                    email: 'example@academlo.com',
                    password: 'string',
                    birthday: 'YYYY/MM/DD'
                }})
        })
}

const patchUser = (req, res) => {
    const id = req.params.id 
    const {first_name, last_name, email, password, birthday} = req.body
    userControllers.updateUser(id, {first_name, last_name, email, password, birthday})
        .then((modifiedUser) => {
            if(modifiedUser){
                res.status(200).json({message: 'User Modified Succesfully'})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    userControllers.deleteUser(id)
        .then((data) => {
            if(data){
                res.status(200).json({message: 'User Deleted Succesfully'})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}