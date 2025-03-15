

//new code

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Rsvp from "./components/Rsvp";
import Story from "./components/Story";
import About from "./components/About";
import Family from "./components/Family";
import Contact from "./components/Contact";
import Event from "./components/Event";
import ChatApp from "./chat/ChatApp"; // Import Chat App

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Wedding App Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/family" element={<Family />} />
        <Route path="/event" element={<Event />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/contact" element={<Contact />} />

        {/* Chat App Route - Fixed Nested Routing */}
        <Route path="/chat/*" element={<ChatApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
