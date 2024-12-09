const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
    {
        roomId:{
            type: String,
            required: true
        },
        checkInDate:{
            type: Date,
            required: true
        },
        checkOutDate:{
            type: Date,
            required: true
        },
        totalAmount:{
            type: Number,
            required: true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        
    },
    {timestamps: true}
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;