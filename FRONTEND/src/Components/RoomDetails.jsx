import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

const RoomDetails = ()=>{
    const{id} = useParams();
    const[room, setRooms] = useState(null);

    useEffect(()=>{
        const fetchRoomDetails = async()=>{
            try{
                const response = await fetch(`http://localhost:3001/api/rooms/${id}`);
                const data = await response.json();
                setRooms(data);

            }catch(error){
                console.log('Error fetching room details: ', error);
            }
        };
        fetchRoomDetails();
    },[id]);

    if(!room){
        return <div>Loading...</div>
    }

    return(
        <div className="container">
            <h1>{room.type}</h1>
            <p>Room ID:{room.roomId}</p>
            <p>Hotel ID:{room.hotelId}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Availabity: {room.availability}</p>
            <p>Price per night: ${room.pricePerNight}</p>
            <Link to={`/reservation/${room._id}`} className="btn btn-primary">Reserve</Link>
            </div>
    )
}


export default RoomDetails;