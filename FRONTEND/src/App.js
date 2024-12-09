import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router";
import RoomList from "./Components/RoomList";
import RoomDetails from "./Components/RoomDetails";
import Login from "./Components/Login";
import ReservationForm from "./Components/ReservationForm";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Reservation from "./Components/Reservation";
import Counter from "./Components/Counter";
import CounterControl from "./Components/CounterControl";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Register />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
                <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }/>
          <Route
          path="/counter"
          element={
            <>
              <Navbar />
              <Counter />
              <CounterControl/>
            </>
          }/>
          <Route
          path="/reservation"
          element={
            <>
              <Navbar />
              <Reservation />
            </>
          }/>
        <Route
          path="/rooms"
          element={
            <>
              <Navbar />
              <RoomList />
            </>
          }
        />
        <Route
          path="/rooms/:id"
          element={
            <>
              <Navbar />
              <RoomDetails />
            </>
          }
        />
        <Route
          path="/reservation/:id"
          element={
            <>
              <ReservationForm />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
