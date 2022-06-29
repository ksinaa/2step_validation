import bodyParser from "body-parser";
import express from "express";
import Mongoose from "mongoose";

import 'dotenv/config'


import userRouter from './user/userRouter.js';

const app = express()

const PORT = process.env.port;



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/user', userRouter);



Mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(PORT, async () => {
        console.log(`app is running on port ${PORT}`);
    })
}).catch(err => {
    console.log(err)
})

export default app;


