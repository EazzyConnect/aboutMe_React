import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import appCSS from './App.module.css';


const App = () => {

  const [tab, setTab] = useState("Home");

  const toggleTab = (switchTab) => {
    setTab(switchTab);
  }

  return (
    <>
      <div>

        <div className={appCSS.navBtn}>

          <button onClick={() => toggleTab("Home")}>Home</button>
          <button onClick={() => toggleTab("About")}>About</button>
          <button onClick={() => toggleTab("Projects")}>Projects</button>
          <button onClick={() => toggleTab("Contact")}>Contact</button>

        </div>

        {tab === "Home" && (
          <div>
            <Home />
          </div>
        )}

        {tab === "About" && (
          <div>
            <About />
          </div>
        )}

        {tab === "Projects" && (
          <div>
            <Projects />
          </div>
        )}

        {tab === "Contact" && (
          <div>
            <Contact />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

