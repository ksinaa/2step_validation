import express from "express";

const router = express.Router();

import userController from './userController.js';
import login from './login.js'

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


//login

router.post('/login', login.login);


export default router;