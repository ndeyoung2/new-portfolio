import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Landing from "./Landing";

const Home = () => {

  return (
    <BrowserRouter>
      <nav>
        <HashLink smooth to="/#home">
        </HashLink>
        <HashLink smooth to="/#about">
        </HashLink>
      </nav>

      <section id="home">
        <h1>{<Landing />}</h1>

      </section>

      <section id="about">
        <h1>About</h1>
        <p>Natalie DeYoung Ricci is a full stack software engineer living and
          working in Los Angeles.
        </p>

      </section>
    </BrowserRouter>
  );
}

export default Home;
