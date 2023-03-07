import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./TopNav.css";
import NavLink from "react";
import BrandLogo from "../images/pet-house.png";

const TopNav = () => {
  return (
    <>
      {/* <div className="topnav-container">
        <div className="topnav-branding">
          <h1 className="topnav-brand-name">Furever Friends</h1>
          <img className="topnav-brand-logo" src={BrandLogo} alt="logo" />
        </div>
        <div className="topnav-links">
          <a href="">Our Story</a>
          <a href="">Dogs</a>
          <a href="">Cats</a>
        </div>
        <div className="topnav-buttons">
          <button class="bone">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
            <div class="b1">
              <div class="b2">Sign In</div>
            </div>
          </button>
          <button class="bone">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
            <div class="c4"></div>
            <div class="b1">
              <div class="b2">Register</div>
            </div>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default TopNav;



<div>
  <div className="navbar">
    <div className="navbar-logo"><a href="">Furever Friends</a></div>
    <ul className="nav-links">
      <li><a href="">Our Story</a></li>
      <li><a href="">Cats</a></li>
      <li><a href="">Dogs</a></li>
    </ul>
  </div>
</div>