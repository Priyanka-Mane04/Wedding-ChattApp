
// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "lightbox2/dist/css/lightbox.min.css";
// import "lightbox2/dist/js/lightbox.min.js";

// function Gallery() {
//   const galleryImages = [
//     "/assets/img/gallery-1.jpg",
//     "/assets/img/gallery-2.jpg",
//     "/assets/img/gallery-3.jpg",
//     "/assets/img/gallery-4.jpg",
//     "/assets/img/gallery-5.jpg",
//     "/assets/img/gallery-6.jpg",
//   ];

//   return (
//     <div>
//       {/* Gallery Start */}
//       <div
//         className="container-fluid bg-gallery"
//         id="gallery"
//         style={{ padding: "120px 0", margin: "90px 0" }}
//       >
//         <div
//           className="section-title position-relative text-center"
//           style={{ marginBottom: "120px" }}
//         >
//           <h6
//             className="text-uppercase text-primary mb-3"
//             style={{ letterSpacing: "3px" }}
//           >
//             Gallery
//           </h6>
//           <h1 className="font-secondary display-4 text-white">
//             Our Photo Gallery
//           </h1>
//           <i className="far fa-heart text-white"></i>
//         </div>

//         {/* ✅ Updated OwlCarousel */}
//         <OwlCarousel
//           className="owl-theme"
//           loop
//           margin={10}
//           nav
//           autoplay
//           autoplayTimeout={3000}
//           dots={false}
//           items={3} // Show 3 items at once by default
//           responsive={{
//             0: { items: 1 },
//             600: { items: 2 },
//             1000: { items: 3 },
//           }}
//         >
//           {galleryImages.map((img, index) => (
//             <div className="gallery-item text-center" key={index}>
//               <a href={img} data-lightbox="gallery">
//                 <img
//                   className="img-fluid"
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "450px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <i
//                   className="fa fa-2x fa-plus text-white position-absolute"
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                   }}
//                 ></i>
//               </a>
//             </div>
//           ))}
//         </OwlCarousel>
//       </div>
//       {/* Gallery End */}
//     </div>
//   );
// }

// export default Gallery;


import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.min.js";

const galleryImages = [
  "/assets/img/gallery-1.jpg",
  "/assets/img/gallery-2.jpg",
  "/assets/img/gallery-3.jpg",
  "/assets/img/gallery-4.jpg",
  "/assets/img/gallery-5.jpg",
  "/assets/img/gallery-6.jpg",
];

function Gallery() {
  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.init();
    }
  }, []);

  return (
    <div>
      {/* Gallery Start */}
      <div className="container-fluid bg-gallery" id="gallery" style={{ padding: "120px 0", margin: "90px 0" }}>
        <div className="section-title position-relative text-center" style={{ marginBottom: "120px" }}>
          <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px" }}>Gallery</h6>
          <h1 className="font-secondary display-4 text-white">Our Photo Gallery</h1>
          <i className="far fa-heart text-white"></i>
        </div>

        {/* ✅ OwlCarousel Wrapper */}
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          autoplay
          autoplayTimeout={3000}
          dots={false}
          navText={["<", ">"]}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          }}
        >
          {galleryImages.map((img, index) => (
            <div className="gallery-item text-center" key={index}>
              <a href={img} data-lightbox="gallery">
                <img
                  className="img-fluid"
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  style={{ width: "100%", height: "450px", objectFit: "cover" }}
                />
                <i
                  className="fa fa-2x fa-plus text-white position-absolute"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                ></i>
              </a>
            </div>
          ))}
        </OwlCarousel>
      </div>
      {/* Gallery End */}
    </div>
  );
}

export default Gallery;
