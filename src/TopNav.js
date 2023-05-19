import React from "react";
import "./topNav.css";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

const TopNav = () => {
  return (
    <>
      <Navbar className="topnav" id="navbar" variant="pills">
        <Nav as="ul">
          <Nav.Link
            as="li"
            className="left"
            href="https://github.com/ndeyoung2"
          >
            <Image
              className="icon"
              src="assets/github_icon.png"
              width="20"
            ></Image>
          </Nav.Link>
          <Nav.Link
            as="li"
            className="left"
            href="https://www.linkedin.com/in/natalie-deyoung-ricci/"
          >
            <Image
              className="icon"
              src="assets/linkedin_icon.webp"
              width="20"
            ></Image>
          </Nav.Link>
          <Nav.Link as="li" className="right" href="/">
            <Image className="icon" src="assets/home.png" width="20"></Image>
          </Nav.Link>
          <Nav.Link as="li" className="right" href="#about">
            About
          </Nav.Link>
          <Nav.Link as="li" className="right" href="#tech">
            Tech
          </Nav.Link>
          <Nav.Link as="li" className="right" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link as="li" className="right" href="#writing">
            Writing
          </Nav.Link>
          <Nav.Link as="li" className="right" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default TopNav;
