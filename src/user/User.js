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
        deviceID: Schema.ObjectId,
    }],
    loginCode: {
        type: String,
        required: false
    }
})

export default mongoose.model('users', Users)