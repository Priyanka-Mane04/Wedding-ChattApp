
//New updated code

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
        <a href="#home" className="navbar-brand d-block d-lg-none">
          <h1 className="font-secondary text-white mb-n2">
            Jack <span className="text-primary">&</span> Rose
          </h1>
        </a>

        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarCollapse"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav ml-auto py-0">
            <a href="#home" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="nav-item nav-link" onClick={() => setIsOpen(false)}>About</a>
            <a href="#story" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Story</a>
            <a href="#gallery" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Gallery</a>
          </div>

          <a href="#home" className="navbar-brand mx-5 d-none d-lg-block">
            <h1 className="font-secondary text-white mb-n2">
              Jack <span className="text-primary">&</span> Rose
            </h1>
          </a>

          <div className="navbar-nav mr-auto py-0">
            <a href="#family" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Family</a>
            <a href="#event" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Event</a>
            <a href="#rsvp" className="nav-item nav-link" onClick={() => setIsOpen(false)}>RSVP</a>
            <a href="#contact" className="nav-item nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </div>

          {/* Chat Button to Navigate to Chat App */}
          <button 
            className="btn btn-primary ml-3"
            onClick={() => navigate("/chat")}
          >
            Open Chat
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
