import React from 'react';
import { useContext } from "react";
import About from "../lakedetail/about/About";
import Contact from "../lakedetail/contact/Contact";
import Intro from "../lakedetail/intro/Intro";
import ProductList from "../lakedetail/productList/ProductList";
import Toggle from "../lakedetail/toggle/Toggle";
import { ThemeContext } from "../lakedetail/context";
import '../../App.css';

const LakeDetail = () => {
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

export default LakeDetail;