import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Landing from "./Landing";
import About from "./About";

const Home = () => {
  return (
    <BrowserRouter>
      <nav>
        <HashLink smooth to="/#home"></HashLink>
        <HashLink smooth to="/#about"></HashLink>
      </nav>

      <section id="home">
        <div>{<Landing />}</div>
      </section>

      <section id="about">
        <div>{<About />}</div>
      </section>
    </BrowserRouter>
  );
};

export default Home;
