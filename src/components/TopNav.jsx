import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./TopNav.css";
import { NavLink } from "react-router-dom";

// import NavLink from "react";
// import BrandLogo from "../images/pet-house.png";
// import {Link}from "react-router-dom"
import { Fragment } from "react";
const TopNav = () => {
  return (
    <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Furever Friends</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/about"><Nav.Link href="/about">About Us</Nav.Link></NavLink>
            <NavLink to="/cats"><Nav.Link href="/cats">Cats</Nav.Link></NavLink>
            <NavLink to="/dogs"><Nav.Link href="/dogs">Dogs</Nav.Link></NavLink>
          </Nav>
          <Nav>
          <Button variant="success">Sign In</Button>{' '}
          <Button variant="primary">Create an Account</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
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