import express from "express";

const router = express.Router();

import userController from './userController.js';
import login from './login.js'

import auth from '../util/auth.js'

router.get('/', auth, userController.getAllUsers);

router.get('/:id', auth, userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', auth, userController.updateUser);

router.delete('/:id', auth, userController.deleteUser);


//login

router.post('/login', login.login);


export default router;