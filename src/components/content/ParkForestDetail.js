import React from 'react';
import { useContext } from "react";
import About from "../parkforestdetail/about/About";
import Contact from "../parkforestdetail/contact/Contact";
import Intro from "../parkforestdetail/intro/Intro";
import ProductList from "../parkforestdetail/productList/ProductList";
import Toggle from "../parkforestdetail/toggle/Toggle";
import { ThemeContext } from "../parkforestdetail/context";
import '../../App.css';

const ParkForestDetail = () => {
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

export default ParkForestDetail;