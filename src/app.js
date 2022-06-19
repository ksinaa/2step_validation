import bodyParser from "body-parser";
import express from "express";
import 'dotenv/config'

import { Sequelize } from "sequelize";

const sequlize = new Sequelize(process.env.postgresURL)


const app = express()

const PORT = process.env.port;


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




app.listen(PORT, () => {
    try {
        sequlize.authenticate();
        console.log(`connected to database on url: ${process.env.postgresURL}`);
    } catch (error) {
        console.error(error);
    }
    console.log(`server is running on port: ${PORT}`)
})


