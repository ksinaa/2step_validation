import bodyParser from "body-parser";
import express from "express";
import 'dotenv/config'


const app = express()

const PORT = process.env.port;


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})


