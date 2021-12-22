import React from 'react';
import { useContext } from "react";
import About from "../riversreamdetail/about/About";
import Contact from "../riversreamdetail/contact/Contact";
import Intro from "../riversreamdetail/intro/Intro";
import ProductList from "../riversreamdetail/productList/ProductList";
import Toggle from "../riversreamdetail/toggle/Toggle";
import { ThemeContext } from "../riversreamdetail/context";
import '../../App.css';

const RiverStreamDetail = () => {
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

export default RiverStreamDetail;