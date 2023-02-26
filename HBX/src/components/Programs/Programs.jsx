import React from "react";
import "./programs.css";
import { programsData } from "../../data/Programdata";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* header */}
      <div className="programheader">
        <span className="stroketext">Explore our</span>
        <span>Programs</span>
        <span className="stroketext">to shape you</span>
      </div>

      {/* programscategory */}
     <div className="programcategory">
     {programsData.map((category) => (
        <div className="category">
          {category.image}
          <span>{category.heading}</span>
          <span>{category.details}</span>
          <div className="joinnow">
            <span>Join Now</span>
            <i class='bx bx-right-arrow-alt'></i>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Programs;
