import React from "react";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="bg-[#CCE1F6] p-4 ">
       
          
           <Menubar />
          
          
        
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
