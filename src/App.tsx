import { useState } from "react";
import "./App.css";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import RoutesList from"./RoutesList";


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App -> { Navbar, Routes, Body }
 */

function App(): React.ReactElement {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  /** handleScroll: moves page to different sections */
  function handleScroll() {
    const aboutMe = document.querySelector("#about-me");
    aboutMe?.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Parallax page={2} className="Parallax-main">
        <ParallaxLayer
          className="tree-bg"
          offset={0}
          speed={0.25}
          factor={2}
          style={{
            backgroundImage=`url${background})`,
            backgroundSize:'cover',
          }}
        >
          <div className="container">
            <img className="profile-img col-8 mt-5"

          </div>
        </ParallaxLayer>
      </Parallax>
    </BrowserRouter>
  );
};

export default App;
