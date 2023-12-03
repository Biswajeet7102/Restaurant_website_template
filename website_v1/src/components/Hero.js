import React from "react";

function Hero() {
  return (
    <div className="hero flex">
      <div className="hero-container flex">
        <div className="hero-heading">
          all in good taste<br />
          the Vintage style
        </div>
        <p className="hero-para">
        Vintage-inspired dining, blending elegance and flavor for an unforgettable culinary journey
        </p>

        <div className="subscribe">
          <input type="text" placeholder="Enter your address" />
          <span>Get Started</span>
        </div>
      </div>
      <div className="hero-img-container">
        <img
          src="https://themewagon.gitlab.io/restaurant/assets/img/food/plate.png"
          style={{ height: "400px", width: "400px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
