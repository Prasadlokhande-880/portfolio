import React from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import WorkIn from "./component/WorkIn";
import WhatCa_iDO from "./component/WhatCa_iDO";
import Works from "./component/works";
import Services from "./component/Services";
import Products from "./component/Products";
import Respons from "./component/respons";
import About from './component/About';
import Footer from "./component/Footer1";
import "./App.css";

export default function App() {
  return (
    <>
     <Navbar />
<div className="header">
    <Header/>
    <WorkIn/>
    </div>
    <div className="App">
    <WhatCa_iDO/>
    <Works/>
    <Services/>
    <Products/>
    <Respons/>
    <About/>
    <Footer/>
    </div>
    </>
  );
}
