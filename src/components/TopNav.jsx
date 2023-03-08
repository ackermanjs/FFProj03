import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./TopNav.css";
import Auth from '../utils/auth';
import {Link}from "react-router-dom"
const TopNav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    <div className="container flex-row justify-space-between-lg justify-center align-center">
      <div>
        <Link className="text-light" to="/">
          <h1 className="m-0">Furever Friends</h1>
        </Link>
        <p className="m-0">No Pet Left Behind!</p>
      </div>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
 <Link className="btn btn-lg btn-info m-2" to="/dogs">
              Dogs
            </Link>
            <Link className="btn btn-lg btn-info m-2" to="/cats">
              cats
            </Link>

            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  </header>
  );
};

export default TopNav;



/* <div className="topnav-container">
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
      </div> */