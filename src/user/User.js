import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Users = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    devices: [{
        deviceID:  Schema.ObjectId,
        status: {
            type: String,
            enum: ['on', 'off']
        } 
    }]
})

export default mongoose.model('users', Users)