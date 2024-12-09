const Reservation = require("../models/reservation");
const Room = require("../models/room");
const dotenv = require("dotenv");

dotenv.config();

const createReservation = async (req, res, next) => {
  try {
    const { roomId, checkInDate, checkOutDate } = req.body;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ error: "Room not found" });
    }

    const numberOfNights = Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    );
    const totalAmount = numberOfNights * room.pricePerNight;

    const reservation = new Reservation({
      roomId,
      checkInDate,
      checkOutDate,
      totalAmount,
      user: req.userId,
    });
    await reservation.save();
    res
      .status(201)
      .json({ message: "Reservation created successfully", reservation });
  } catch (error) {
    next(error);
  }
};

const getUserReservations = async (req, res, next) => {
  try{
    const reservations = await Reservation.find({user:req.userId}).populate("roomId");
    if(!reservations||reservations.length===0){
      return res.status(404).json({message:"No reservations found"});
    }
    res.status(200).json(reservations);
  }catch(error){
    next(error);
  }
};



module.exports = { createReservation, getUserReservations};
