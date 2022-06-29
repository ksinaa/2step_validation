import express from "express";

const router = express.Router();

import userController from './userController.js';

router.get('', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('', userController.createUser);

router.patch('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


export default router;