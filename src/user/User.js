import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Users = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    devices: [{
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: true,
            enum: ['on', 'off']
        }
    }],
    loginCode: {
        type: String,
        required: false
    }
})

export default mongoose.model('users', Users)