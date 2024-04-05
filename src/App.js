import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
function App() {
  return(<>
    <Navbar />
    <div className="container">
     <Hero />
     <Skills />
     <Education />
     <ContactMe />
    </div>
    <Footer />
    </>
  );
}

export default App;