import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Packages from "./components/Packages/Packages";
import Service from "./components/Service/Service";
import Subscribe from "./components/Subscribe/Subscribe";
import Testemonial from "./components/Testemonial/Testemonial";
import Box from "./components/Travel_Box/Box";





const App = () => {
  return (
    <>
    <div className="wrapper">
      <Modal/>
      <Header />
      <About/>
      <Box/>
      <Service/>
      <Gallery/>
      <Packages/>
      <Testemonial/>
      <Blog/>
      <Subscribe/>
      <Footer/>

    </div>
     
    </>
  );
};

export default App;
