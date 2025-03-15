import React, { useRef } from "react";
import carousel1 from "/assets/img/carousel-1.jpg";
import carousel2 from "/assets/img/carousel-2.jpg";

function Home() {
  const videoRef = useRef(null);

  const handleVideoOpen = () => {
    if (videoRef.current) {
      videoRef.current.src = "https://www.youtube.com/embed/DWRcNpR6Kdc?autoplay=1";
    }
  };

  return (
    <div>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 pb-5" id="home">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* First Slide */}
            <div className="carousel-item position-relative active" style={{ height: "100vh", minHeight: "400px" }}>
              <img
                className="position-absolute w-100 h-100"
                src={carousel1}
                alt="Carousel 1"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: "2px" }}>
                      We're getting married
                    </h3>
                  </div>
                  {/* Open Video */}
                  <button className="btn-play mx-auto" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={handleVideoOpen}>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Second Slide */}
            <div className="carousel-item position-relative" style={{ height: "100vh", minHeight: "400px" }}>
              <img
                className="position-absolute w-100 h-100"
                src={carousel2}
                alt="Carousel 2"
                style={{ objectFit: "cover" }}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h1 className="display-1 font-secondary text-white mt-n3 mb-md-4">Jack & Rose</h1>
                  <div className="d-inline-block border-top border-bottom border-light py-3 px-4">
                    <h3 className="text-uppercase font-weight-normal text-white m-0" style={{ letterSpacing: "2px" }}>
                      We're getting married
                    </h3>
                  </div>
                  {/* Open Video */}
                  <button className="btn-play mx-auto" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={handleVideoOpen}>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <a className="carousel-control-prev justify-content-start" href="#header-carousel" role="button" data-bs-slide="prev">
            <div className="btn btn-primary px-0" style={{ width: "68px", height: "68px" }}>
              <span className="carousel-control-prev-icon mt-3"></span>
            </div>
          </a>
          <a className="carousel-control-next justify-content-end" href="#header-carousel" role="button" data-bs-slide="next">
            <div className="btn btn-primary px-0" style={{ width: "68px", height: "68px" }}>
              <span className="carousel-control-next-icon mt-3"></span>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel End */}

      {/* Video Modal */}
      <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button type="button" className="close p-3 text-white" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  ref={videoRef}
                  className="embed-responsive-item"
                  src=""
                  title="Wedding Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}
    </div>
  );
}

export default Home;
