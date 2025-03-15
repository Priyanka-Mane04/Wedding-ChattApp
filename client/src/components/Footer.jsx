import React from 'react';

function Footer() {
    // Function to show an alert when clicking the chat button
    const handleChatAlert = () => {
        alert("Chat app will open soon! 😊");
    };

    return (
        <>
            <footer>
                {/* Footer Start */}
                <div className="container-fluid bg-dark text-white py-5" id="contact" style={{ marginTop: "90px" }}>
                    <div className="container text-center py-5">
                        <div className="section-title position-relative text-center">
                            <h1 className="font-secondary display-3 text-white">Thank You</h1>
                            <i className="far fa-heart text-white"></i>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <p className="text-white">info@example.com</p>
                            <span className="px-3">|</span>
                            <p className="text-white">+012 345 6789</p>
                        </div>
                        <p className="m-0">&copy; <a className="text-primary" href="#">Domain Name</a>. Designed by <a className="text-primary" href="#">#</a></p>

                        {/* Chat App Button */}
                        <div className="mt-4">
                            <button className="btn btn-primary btn-lg" onClick={handleChatAlert}>
                                Open Chat App 💬
                            </button>
                        </div>
                    </div>
                </div>
                {/* Footer End */}
            </footer>
        </>
    );
}

export default Footer;
