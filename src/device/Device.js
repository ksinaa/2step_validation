import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Devices = new Schema({
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
    },
})

export default mongoose.model('devices', Devices)