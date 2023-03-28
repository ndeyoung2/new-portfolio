import React from "react";
import { BrowserRouter} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Landing from "./Landing";
import TopNav from "./TopNav";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <BrowserRouter>
    <section id="navbar">
    <TopNav />
    </section>
      <nav>
      <HashLink smooth to="/#home">{<Landing/>}</HashLink>
        <HashLink smooth to="/#about">{<About/>}</HashLink>
        <HashLink smooth to="/#contact">{<Contact/>}</HashLink>
      </nav>

      <section id="home">
        <div></div>
      </section>

      <section id="about">
      </section>

      <section id="contact">
      </section>
    </BrowserRouter>
  );
};

export default Home;
