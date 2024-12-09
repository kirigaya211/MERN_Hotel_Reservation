import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setMessage("You must be logged in to view your reservations");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch("http://localhost:3001/api/reservations", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setReservations(data);
        } else {
          const error = await response.json();
          setMessage(error.message || "Failed to fetch reservations");
        }
      } catch (error) {
        setMessage("An error occurred while fetching your reservations");
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  const handleViewRoomDetails = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (message) {
    return <p>{message}</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Your Reservations</h2>
      {reservations.length === 0 ? (
        <p>You have no reservations at the moment.</p>
      ) : (
        <ul className="list-group">
          {reservations.map((reservation) => (
            <li key={reservation._id} className="list-group-item">
              <div>
                <h5>Room: {reservation.roomId.name}</h5>
                <p>
                  <strong>Check-in:</strong>{" "}
                  {new Date(reservation.checkInDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Check-out:</strong>{" "}
                  {new Date(reservation.checkOutDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Total Amount:</strong> ${reservation.totalAmount}
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleViewRoomDetails(reservation.roomId._id)}
                >
                  View Room Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reservation;
