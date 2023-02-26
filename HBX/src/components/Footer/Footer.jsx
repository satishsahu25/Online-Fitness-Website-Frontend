import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footerc">
      <hr />
      <div className="footerb">
        <div className="social">
          <img src={instagram} alt="" />
          <img src={github} alt="" />
          <img src={facebook} alt="" />
        </div>
      <div className="logof">
        <img src={logo} alt="" />
      </div>
      </div>
      <div className="blur blurfoot1"></div>
      <div className="blur blurfoot2"></div>
    </div>
  );
};

export default Footer;
