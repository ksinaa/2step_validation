import User from './User.js'

const getAllUsers = (req, res, next) => {
    User.find().then(resualt => {
        res.status(200).send(resualt);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const getUserById = (req, res, next) => {
    User.findOne({_id: req.params.id}).then(resualt => {
        res.status(200).send(resualt);
    }).catch(err => {
        res.status(500).send(err);
    })
}

const createUser = (req, res, next) => {

    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const loginCode = "";


    const user = new User({
        fullName,
        email,
        password,
        devices: [],
        loginCode: loginCode
    })

    user.save().then(resualt => {
        
        res.status(200).send(resualt)
    }).catch(err => {
        res.status(500).send(err)
    })

}

const updateUser = (req, res, next) => {

}

const deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id}).then(resualt => {
        res.status(200).send(resualt);
    }).catch(err => {
        res.status(500).send(err);
    })
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}