import React from "react";
import logoMain from "../logo_final.png";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <div className="navbar flex">
      <div className="logo">
        <img src={logoMain} style={{ height: "175px", width: "175px" , marginTop: '15px',borderRadius: '100px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
      <div style={{top: '0px'}}>
        <ul className="navlinks flex" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/#about-us">About Us</Link>
          </li>
          <li>
            <Link to="/#our-services">Services</Link>
          </li>
          <li>
            <Link to="/#menu">Menu</Link>
          </li>
          <li>
            {" "}
            <Link to="/#testimonial">Testimonial</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
