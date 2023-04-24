import React from "react";
import Nav from "react-bootstrap/Nav";
import "./topNav.css";
import { Navbar } from "react-bootstrap";

const TopNav = () => {
  return (
    <>
      <Nav className="topnav" id="navbar" variant="pills">
        <Navbar expand="lg">
          <Nav.Item className="nav-item">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#tech">Tech</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item" >
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#writing">Writing</Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item" >
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Navbar>
      </Nav>
    </>
  );
};

export default TopNav;
