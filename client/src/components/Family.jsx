
import React from 'react';

function Family() {
  const groomsmen = [1, 2, 3];
  const bridesmaids = [1, 2, 3];

  return (
    <div>
      {/* Friends & Family Start */}
      <div className="container-fluid py-5" id="family">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: '3px' }}>
              Friends & Family
            </h6>
            <h1 className="font-secondary display-4">Groomsmen & Bridesmaid</h1>
            <i className="far fa-heart text-dark"></i>
          </div>

          <div className="row">
            <div className="col-12 text-center mb-2">
              <ul className="list-inline mb-4">
                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4">
                  Groomsmen
                </li>
                <li className="btn btn-outline-primary font-weight-bold m-1 py-2 px-4">
                  Bridesmaid
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            {/* Groomsmen Section */}
            {groomsmen.map((num) => (
              <div key={`groomsmen-${num}`} className="col-lg-4 col-md-6 mb-4">
                <div className="position-relative mb-2">
                  <img
                    className="img-fluid w-100"
                    src={`/assets/img/groomsmen-${num}.jpg`}
                    alt={`Groomsman ${num}`}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div>
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bridesmaid Section */}
            {bridesmaids.map((num) => (
              <div key={`bridesmaid-${num}`} className="col-lg-4 col-md-6 mb-4">
                <div className="position-relative mb-2">
                  <img
                    className="img-fluid w-100"
                    src={`/assets/img/bridesmaid-${num}.jpg`}
                    alt={`Bridesmaid ${num}`}
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  <div className="bg-secondary text-center p-4">
                    <h4 className="mb-3">Full Name</h4>
                    <p className="text-uppercase">Best Friend</p>
                    <div>
                      <a className="mx-2" href="#"><i className="fab fa-twitter"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                      <a className="mx-2" href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Friends & Family End */}
    </div>
  );
}

export default Family;

