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
    </BrowserRouter>
  );
};

export default App;
