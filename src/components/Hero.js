import React from "react";
import image from "../assets/bannerIMG.png";

function Hero() {
  return (
    <div className="hero-section main-container">
      <div className="search-container">
        <h2>Find the perfect job for you</h2>
        <span>Search your career opportunity through 12,800 jobs</span>
        <div className="input-container">
          <div className="job-input">
            <input
              type="text"
              placeholder="Search by job title, company or keywords"
              id="left-input"
            />
          </div>
          <div className="loaction-input">
            <input
              type="text"
              placeholder="Province, city, or region"
              id="right-input"
            />
          </div>
        </div>
        <div>
          <h5 className="tag-title">Popular Searches</h5>

          <ul className="search-tag">
            <li>Designer</li>
            <li>Writer</li>
            <li>Team leader</li>
            <li>Senior</li>
            <li>Web designer</li>
          </ul>
        </div>
      </div>
      <img src={image} alt="banner" className="hero-image" width={"100%"} />
    </div>
  );
}

export default Hero;
