import React from "react";

function About() {
  return (
    <div>
      {/* About Start */}
      <div className="container-fluid py-5" id="about">
        <div className="container py-5">
          <div className="section-title position-relative text-center">
            <h6
              className="text-uppercase text-primary mb-3"
              style={{ letterSpacing: "3px" }}
            >
              About
            </h6>
            <h1 className="font-secondary display-4">Groom & Bride</h1>
            <i className="far fa-heart text-dark"></i>
          </div>

          {/* Groom Section */}
          <div className="row m-0 mb-4 mb-md-0 pb-2 pb-md-0">
            <div className="col-md-6 p-0 text-center text-md-right">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Groom</h3>
                <p>Lorem elitr magna stet rebum dolores sed...</p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-male text-primary pr-3"></i>Jack
                </h3>
                <div className="position-relative">
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0" style={{ minHeight: "400px" }}>
              <img
                className="position-absolute w-100 h-100"
                src="/assets/img/about-1.jpg"
                alt="Groom"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Bride Section */}
          <div className="row m-0">
            <div className="col-md-6 p-0" style={{ minHeight: "400px" }}>
              <img
                className="position-absolute w-100 h-100"
                src="/assets/img/about-2.jpg"
                alt="Bride"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="col-md-6 p-0 text-center text-md-left">
              <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-5">
                <h3 className="mb-3">The Bride</h3>
                <p>Lorem elitr magna stet rebum dolores sed...</p>
                <h3 className="font-secondary font-weight-normal text-muted mb-3">
                  <i className="fa fa-female text-primary pr-3"></i>Rose
                </h3>
                <div className="position-relative">
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square mr-1" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-square" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
}

export default About;
