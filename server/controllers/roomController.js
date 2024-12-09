const Room = require("../models/room");
const mongoose = require("mongoose");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const roomId  = req.params.id;
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// const getRoomById = async (req, res) => {
//     const roomId = req.params.id;

//     // Validate if roomId is a valid ObjectId
//     if (!mongoose.Types.ObjectId.isValid(roomId)) {
//       return res.status(400).send({ error: "Invalid Room ID format." });
//     }

//     try {
//       const room = await Room.findById(roomId);
//       if (!room) {
//         return res.status(404).send({ error: "Room not found." });
//       }

//       res.json(room);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: "Internal Server Error" });
//     }
//   };

module.exports = { getAllRooms, getRoomById };
