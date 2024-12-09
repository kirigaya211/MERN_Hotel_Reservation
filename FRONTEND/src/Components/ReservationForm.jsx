import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ReservationForm = () => {
  const {id} = useParams();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3001/api/reservations/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          roomId: id,
          checkInDate,
          checkOutDate,
        }),
      });
      if (response.ok) {
        setMessage("Reservation created successful!");
        setCheckInDate("");
        setCheckOutDate("");
      } else {
        const error = await response.json();
        setMessage(error.message || "Error creating reservation");
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  return (
    <div className="container">
      <h1>Reservation Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="checkInDate" className="form-label">
            Check-In Date
          </label>
          <input
            type="date"
            className="form-control"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="checkOutDate" className="form-label">
            Check-Out Date
          </label>
          <input
            type="date"
            className="form-control"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reserve
        </button>
      </form>
      {message && (
                <div className="alert alert-info mt-3" role="alert">
                  {message}
                </div>
              )}
    </div>
  );
};

export default ReservationForm;
