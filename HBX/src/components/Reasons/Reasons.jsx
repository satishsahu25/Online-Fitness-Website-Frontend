import React from "react";
import "./reasons.css";

import gym1 from "../../assets/gym1.jpg";
import gym2 from "../../assets/gym2.jpg";
import gym3 from "../../assets/gym3.jpg";
import gym4 from "../../assets/gym4.jpg";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left">
        <img src={gym1} alt="" />
        <img src={gym2} alt="" />
        <img src={gym3} alt="" />
        <img src={gym4} alt="" />
      </div>
      <div className="right">
        <span>Some Reasons</span>
        <div>
          <span className="stroketext">Why</span>
          <span> choose us?</span>
        </div>

        {/* points of reason */}

        <div className="details">
          <div>
            <i class="bx bx-check"></i>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <i class="bx bx-check"></i>
            <span>TRAIN SMARTER AND FASTER THA BEFORE</span>
          </div>
          <div>
            <i class="bx bx-check"></i>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <i class="bx bx-check"></i>
            <span>RELAIABLE PARTNERS</span>
          </div>
        </div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
        <i class='bx bxs-basketball' ></i>
        <i class='bx bxs-cricket-ball' ></i>
        <i class='bx bxl-meta' ></i>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
