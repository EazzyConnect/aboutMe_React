import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import appCSS from './App.module.css';
import myLogo from './assets/icons/myLogo.png'


const App = () => {

  const [tab, setTab] = useState("Home");

  const toggleTab = (switchTab) => {
    setTab(switchTab);
  }

  return (
    <>
      <div>

        <div className={appCSS.navBar}>

          <div id={appCSS.navImg}>
            <img id={appCSS.myLogo} src={myLogo} alt="logo" />
          </div>

          <div id={appCSS.navBtn}>
            <button className={appCSS.fullScreen} onClick={() => toggleTab("Home")}>Home</button>
            <button className={appCSS.fullScreen} onClick={() => toggleTab("About")}>About</button>
            <button className={appCSS.fullScreen} onClick={() => toggleTab("Projects")}>Projects</button>
            <button className={appCSS.fullScreen} onClick={() => toggleTab("Contact")}>Contact</button>

            <button className={appCSS.mobile} title='Home' onClick={() => toggleTab("Home")}><i className="fa-solid fa-house-user"></i></button>
            <button className={appCSS.mobile} title='About' onClick={() => toggleTab("About")}><i className="fa-solid fa-user"></i></button>
            <button className={appCSS.mobile} title='Projects' onClick={() => toggleTab("Projects")}><i className="fa-solid fa-toolbox"></i></button>
            <button className={appCSS.mobile} title='Contact' onClick={() => toggleTab("Contact")}><i className="fa-solid fa-envelope"></i></button>
          </div>

        </div>

        {tab === "Home" && (
          <div>
            <Home toggleTab={toggleTab} />
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

