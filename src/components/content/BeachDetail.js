import React from 'react';
import { useContext } from "react";
import About from "../beachdetail/about/About";
import Contact from "../beachdetail/contact/Contact";
import Intro from "../beachdetail/intro/Intro";
import ProductList from "../beachdetail/productList/ProductList";
import Toggle from "../beachdetail/toggle/Toggle";
import { ThemeContext } from "../beachdetail/context";
import '../../App.css';

const BeachDetail = () => {
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

export default BeachDetail;