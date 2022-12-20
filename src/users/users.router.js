const router = require('express').Router()
const userServices = require('./users.services')

router.route('/') //* /api/v1/users
    .get(userServices.getAllUsers)  
    .post(userServices.postUser)

router.route('/:id') //* /api/v1/users/:id
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)


module.exports = router