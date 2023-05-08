import React from "react";
import Nav from "react-bootstrap/Nav";
import "./topNav.css";
import { Navbar, Image } from "react-bootstrap";

//node_modules/bootstrap-icons/icons/git.svg

const TopNav = () => {
  return (
    <>
      <Nav className="topnav" id="navbar" variant="pills">
        <Navbar expand="lg">

          <Nav.Item className="nav-item-left">
            <Nav.Link href="/">
              <Image className="icon" src="assets/home.png" width="20"></Image>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-left">
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-left">
            <Nav.Link href="#tech">Tech</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-left">
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-left">
            <Nav.Link href="#writing">Writing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-left">
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-right">
            <Nav.Link href="https://github.com/ndeyoung2">
              <Image
                className="icon"
                src="assets/github_icon.png"
                width="20"
              ></Image>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item-right">
            <Nav.Link href="https://www.linkedin.com/in/natalie-deyoung-ricci/">
              <Image
                className="icon"
                src="assets/linkedin_icon.webp"
                width="20"
              ></Image>
            </Nav.Link>
          </Nav.Item>
        </Navbar>
      </Nav>
    </>
  );
};

export default TopNav;
