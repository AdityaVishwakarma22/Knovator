import React from "react";
//Pages
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Jobs from "./components/Job";
import Companies from "./components/Companies";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Card />
        <Jobs />
        <Companies />
        <Partners />
        <Footer />
    </>
  );
}

export default App;
