import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-react-router-dom";

import EventList from "./components/EventList";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import EventDetail from "./components/EventDetail";
import EventParticipate from "./components/EventParticipate";

function App() {
  return (
    <Router>
      <Route path="/" element={<EventList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<UserProfile />} />

      <Route path="/event" element={<EventDetail />} />
      <Route path="/event/application" element={<EventParticipate />} />
    </Router>
  );
}

export default App;
