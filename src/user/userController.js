import User from './User.js'

const getAllUsers = (req, res, next) => {
    User.find().then(resualt => {
        res.status(200).send(resualt);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const getUserById = (req, res, next) => {

}

const createUser = (req, res, next) => {

}

const updateUser = (req, res, next) => {

}

const deleteUser = (req, res, next) => {

}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}