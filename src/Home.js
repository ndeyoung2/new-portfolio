import React from "react";
import { BrowserRouter} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Landing from "./Landing";
import TopNav from "./TopNav";

const Home = () => {
  return (
    <BrowserRouter>
    <section id="navbar">
    <TopNav />
    </section>
      <nav>
        <HashLink smooth to="/#home"></HashLink>
        <HashLink smooth to="/#about"></HashLink>
      </nav>

      <section id="home">
        <div>{<Landing />}</div>
      </section>

      <section id="about">
      </section>
    </BrowserRouter>
  );
};

export default Home;
