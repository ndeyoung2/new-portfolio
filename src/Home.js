import React from "react";
import { BrowserRouter} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Landing from "./Landing";

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
      </section>
    </BrowserRouter>
  );
};

export default Home;
