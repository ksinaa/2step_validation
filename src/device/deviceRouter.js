import express from "express";

const router = express.Router();

import Device from './Device.js'
import User from '../user/User.js'

router.post('/:userId', async (req, res, next) => {
    

    const id = req.params.userId;

    const device = {
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    }
    
    

    const neweUser = await User.findOneAndUpdate({_id: id}, {$push: {devices: device}});

    res.status(200).send({
        status: "device created",
        user: neweUser
    });



})

export default router;