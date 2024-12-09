const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomId:{
        type: String,
        required: true,
        unique: true
    },
    hotelId:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    pricePerNight:{
        type: Number,
        required: true
    },
    availability:{
        type: Boolean,
        required: true
    },
},{timestamps: true}
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;