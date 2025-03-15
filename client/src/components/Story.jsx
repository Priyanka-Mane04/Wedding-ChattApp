import React from "react";

function Story() {
  const storyData = [
    {
      title: "First Meet",
      date: "01 Jan 2050",
      description: "We met in a beautiful place where our journey began.",
      image: "/assets/img/story-1.jpg",
      reverse: false, // Determines the layout order
    },
    {
      title: "First Date",
      date: "14 Feb 2050",
      description: "Our first date was magical, full of laughter and love.",
      image: "/assets/img/story-2.jpg",
      reverse: true,
    },
    {
      title: "Proposal",
      date: "10 Dec 2050",
      description: "The most memorable day when we decided to be together forever.",
      image: "/assets/img/story-3.jpg",
      reverse: false,
    },
    {
      title: "Engagement",
      date: "25 Dec 2050",
      description: "A celebration of love with family and friends.",
      image: "/assets/img/story-4.jpg",
      reverse: true,
    },
  ];

  return (
    <div>
      {/* Story Start */}
      <div className="container-fluid py-5" id="story">
        <div className="container pt-5 pb-3">
          <div className="section-title position-relative text-center">
            <h6 className="text-uppercase text-primary mb-3" style={{ letterSpacing: "3px" }}>
              Story
            </h6>
            <h1 className="font-secondary display-4">Our Love Story</h1>
            <i className="far fa-heart text-dark"></i>
          </div>

          <div className="container timeline position-relative p-0">
            {storyData.map((story, index) => (
              <div className="row align-items-center my-4" key={index}>
                {/* Left side (Image or Text) */}
                <div className={`col-md-6 text-center ${story.reverse ? "text-md-left" : "text-md-right"}`}>
                  {story.reverse ? (
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                      <h4 className="mb-2">{story.title}</h4>
                      <p className="text-uppercase mb-2">{story.date}</p>
                      <p className="m-0">{story.description}</p>
                    </div>
                  ) : (
                    <img className="img-fluid" src={story.image} alt={story.title} loading="lazy" />
                  )}
                </div>

                {/* Right side (Image or Text) */}
                <div className={`col-md-6 text-center ${story.reverse ? "text-md-right" : "text-md-left"}`}>
                  {!story.reverse ? (
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                      <h4 className="mb-2">{story.title}</h4>
                      <p className="text-uppercase mb-2">{story.date}</p>
                      <p className="m-0">{story.description}</p>
                    </div>
                  ) : (
                    <img className="img-fluid" src={story.image} alt={story.title} loading="lazy" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Story End */}
    </div>
  );
}

export default Story;
