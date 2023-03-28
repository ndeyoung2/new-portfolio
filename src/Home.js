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
      <HashLink smooth to="/"></HashLink>
        <HashLink smooth to="/#about"></HashLink>
        <HashLink smooth to="/#contact"></HashLink>
      </nav>

      <section id="home">
        <div>{<Landing/>}</div>
      </section>

      <section id="about">
      {<About/>}
      </section>

      <section id="contact">
      {<Contact/>}
      </section>
    </BrowserRouter>
  );
};

export default Home;
