import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import FaqSec from "./components/FaqSec";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <FaqSec />
      </main>
      <Footer />
    </>
  );
};

export default App;
