import React from 'react';
import { useContext } from "react";
import About from "../waterfalldetail/about/About";
import Contact from "../waterfalldetail/contact/Contact";
import Intro from "../waterfalldetail/intro/Intro";
import ProductList from "../waterfalldetail/productList/ProductList";
import Toggle from "../waterfalldetail/toggle/Toggle";
import { ThemeContext } from "../waterfalldetail/context";
import '../../App.css';

const WaterfallDetail = () => {
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

export default WaterfallDetail;