import React from "react";

import Hero from "../components/Hero";

import Department from "../components/Department";
import AboutHos from "../components/AboutHos";
import AboutChr from "../components/AboutChr";
import QuickLink from "../components/QuickLink";
import Insights from "../components/Insights";
import Doctors from "../components/Doctors";
import Contact from "../components/Contact";
import GalleryLink from "../components/GalleryLink";

const Home = () => {
  return (
    <>
      
      <Hero />
      <QuickLink />
      <Insights />
      <Department />
      <Doctors />
      <AboutChr />
      <AboutHos />
      <GalleryLink />
      <Contact />
      
    </>
  );
};

export default Home;
