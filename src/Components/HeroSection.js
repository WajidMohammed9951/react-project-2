import React from "react";

const HeroSection = () => {
  return (
    <wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">WAJID MOHAMMED</h1>
          <p className="hero-para">
            I'm Mohammed Wajid.Frontend web developer,content creator
             
          </p>
          <button>
            <Navlink to="/contact">Hire me</Navlink>
          </button>
          {/* for image */}
          <div className="section-hero-image"></div>
        </div>
      </div>
    </wrapper>
  );
};

export default HeroSection;
