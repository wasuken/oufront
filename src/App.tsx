import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import EventList from "./components/EventList";
import Login from "./containers/Login";
import UserProfile from "./components/UserProfile";
import EventDetail from "./components/EventDetail";
import EventParticipate from "./components/EventParticipate";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<EventList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />

          <Route path="/event" element={<EventDetail />} />
          <Route path="/event/application" element={<EventParticipate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
