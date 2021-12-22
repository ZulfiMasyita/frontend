import React from 'react';
import { useContext } from "react";
import About from "../mountaindetail/about/About";
import Contact from "../mountaindetail/contact/Contact";
import Intro from "../mountaindetail/intro/Intro";
import ProductList from "../mountaindetail/productList/ProductList";
import Toggle from "../mountaindetail/toggle/Toggle";
import { ThemeContext } from "../mountaindetail/context";
import '../../App.css';

const MountainDetail = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <About />
      <ProductList />
    </div>
  );
};

export default MountainDetail;