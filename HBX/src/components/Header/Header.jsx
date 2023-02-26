import React, { useEffect, useState } from "react";
import "./header.css";
import img1 from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Header = () => {
  var mobile=window.innerWidth <= 768 ? true : false;;
  const [menuopened, setmenuopened] = useState(false);
 

  return (
    <div className="header">
      <img src={img1} alt="" className="logo" />
      {menuopened === false && mobile === true ? (
        <div>
          <img className="menu"
          src={menu}
          onClick={() => setmenuopened(true)}
          alt=""
       />
        </div>
      ) : (
        <ul className="headermenu">
          <li>
            <Link
              span={true}
              smooth={true}
              to="hero"
              activeClass="active"
              onClick={() => setmenuopened(false)}
            >
              Home
            </Link>
          </li>
          <li >
            <Link
             span={true}
             smooth={true}
             to="programs"
             onClick={() => setmenuopened(false)}
            >
            Programs</Link>
          </li>
          <li>
            <Link
              span={true}
              smooth={true}
              to="reasons"
            onClick={() => setmenuopened(false)}
            >Why us
            </Link></li>
          <li>
            <Link
             onClick={() => setmenuopened(false)}
             span={true}
             smooth={true}
             to="plans"
            >Plans
            </Link></li>
          <li>
            <Link
              onClick={() => setmenuopened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
