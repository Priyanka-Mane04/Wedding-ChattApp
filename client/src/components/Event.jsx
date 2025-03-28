import React from 'react';
import event1 from '/assets/img/event-1.jpg';
import event2 from '/assets/img/event-2.jpg';
function Event() {
  return (
    <div>
      {/* Event Start */}
      <div className="container-fluid py-5" id="event">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>
              Event
            </h6>
            <h1 className="font-secondary display-4">Our Wedding Event</h1>
            <i className="far fa-heart text-dark"></i>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h5 className="font-weight-normal text-muted mb-3 pb-3">
                Clita ipsum aliquyam dolor diam dolores elitr nonumy. Rebum sea vero ipsum eirmod tempor kasd.
                Diam amet lorem erat eos sit lorem elitr justo.
              </h5>
            </div>
          </div>

          <div className="row">
            {/* Reception */}
            <div className="col-md-6 border-md-right border-primary">
              <div className="text-center text-md-right mr-md-3 mb-4 mb-md-0">
                <img className="img-fluid mb-4" src={event1} alt="Reception" />
                <h4 className="mb-3">The Reception</h4>
                <p className="mb-2">123 Street, New York, USA</p>
                <p className="mb-0">12:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Wedding Party */}
            <div className="col-md-6">
              <div className="text-center text-md-left ml-md-3">
                <img className="img-fluid mb-4" src={event2} alt="Wedding Party" />
                <h4 className="mb-3">Wedding Party</h4>
                <p className="mb-2">123 Street, New York, USA</p>
                <p className="mb-0">7:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Event End */}
    </div>
  );
}

export default Event;
