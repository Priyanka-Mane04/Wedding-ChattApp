import React, { useState } from "react";
import axios from "axios"; // For backend API calls

function Rsvp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "",
    attending: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Send RSVP details to the backend (Replace with your actual API)
      const response = await axios.post("http://localhost:5000/api/rsvp", formData);
      console.log("RSVP Success:", response.data);
      
      setSubmitted(true); // Show success message
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* RSVP Start */}
      <div className="container-fluid py-5" id="rsvp">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px" }}>RSVP</h6>
            <h1 className="font-secondary display-4">Join Our Party</h1>
            <i className="far fa-heart text-dark"></i>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                {submitted ? (
                  <div className="alert alert-success">🎉 RSVP Submitted! Thank you for joining us!</div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-sm-6">
                        <input 
                          type="text" 
                          className="form-control bg-secondary border-0 py-4 px-3" 
                          placeholder="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <input 
                          type="email" 
                          className="form-control bg-secondary border-0 py-4 px-3" 
                          placeholder="Your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group col-sm-6">
                        <select 
                          className="form-control bg-secondary border-0" 
                          style={{ height: "52px" }} 
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Number of Guests</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-6">
                        <select 
                          className="form-control bg-secondary border-0" 
                          style={{ height: "52px" }} 
                          name="attending"
                          value={formData.attending}
                          onChange={handleChange}
                          required
                        >
                          <option value="">I'm Attending</option>
                          <option value="All Events">All Events</option>
                          <option value="Wedding Party">Wedding Party</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <textarea 
                        className="form-control bg-secondary border-0 py-2 px-3" 
                        rows="5" 
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RSVP End */}
    </div>
  );
}

export default Rsvp;
