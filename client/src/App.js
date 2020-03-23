import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import Gallery from './Components/Gallery'
import ScrollspyNav from "react-scrollspy-nav";


function App() {
  return (
    <div className="App" >
      <ScrollspyNav
        scrollTargetIds={["services", "contact", "gallery"]}
        scrollDuration="1000"
        offset={-70}
      >

        <NavBar />
        <Landing />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Footer />

      </ScrollspyNav>
    </div>
  );
}

export default App;
