import React from "react";
import Rocket from "../assets/icons/PicsArt_04-14-04.421.svg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="Herostn">
      <div className="Section" id="FirstSec">
        <div className="Headings">
          <h1>Accelerate Innovation</h1>
          <h1>with Global AI Challenges</h1>
        </div>
        <div className="Description">
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.
          </p>
          <Link to="/createchallange" className="linksclass">
            <button>Create Challenge</button>
          </Link>
        </div>
      </div>
      <div className="Section" id="Secondsec">
        <img src={Rocket} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
