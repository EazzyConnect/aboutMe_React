import { useState, useEffect } from "react";
import Home from "./components/Home";
// import About from "./components/About";
// import Projects from './components/Projects';
import Contact from "./components/Contact";
import appCSS from "./App.module.css";
import myLogo from "/icons/logo.png";

const App = () => {
  const [tab, setTab] = useState("Home");
  const [sideMenu, setSideMenu] = useState(false);
  const [time, setTime] = useState("");

  const toggleTab = (switchTab) => {
    setTab(switchTab);
    setSideMenu(false);
  };

  const showMenu = () => {
    setSideMenu(!sideMenu);
  };

  useEffect(() => {
    const intervalId = setInterval(showTime, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const showTime = () => {
    const dateAndTime = new Date();
    const formattedTime = dateAndTime
      .toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toLowerCase();
    const formattedDate = dateAndTime.toLocaleDateString([], {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
    setTime(`${formattedTime} | ${formattedDate}`);
  };

  return (
    <>
      <div>
        <div className={appCSS.navBar}>
          <div id={appCSS.navImg}>
            <img
              id={appCSS.myLogo}
              src={myLogo}
              alt="logo"
              onClick={() => toggleTab("Home")}
            />
          </div>

          {/* <div id={appCSS.time}>{time}</div> */}

          <div id={appCSS.navBtn}>
            {sideMenu ? (
              <div className={appCSS.menuTabs}>
                <div id={appCSS.cancelDiv}>
                  <i
                    className="fa-solid fa-xmark"
                    id={appCSS.cancelMenu}
                    title="Cancel"
                    onClick={showMenu}
                  ></i>
                </div>

                <button
                  className={appCSS.showTab}
                  onClick={() => toggleTab("Home")}
                >
                  Home
                </button>
                {/* <button
                  className={appCSS.showTab}
                  onClick={() => toggleTab("About")}
                >
                  About
                </button> */}
                {/* <button className={appCSS.showTab} onClick={() => toggleTab("Projects")}>Projects</button> */}
                <button
                  className={appCSS.showTab}
                  onClick={() => toggleTab("Contact")}
                >
                  Contact
                </button>
              </div>
            ) : null}

            <button
              className={appCSS.fullScreen}
              onClick={() => toggleTab("Home")}
            >
              Home
            </button>
            {/* <button
              className={appCSS.fullScreen}
              onClick={() => toggleTab("About")}
            >
              About
            </button> */}
            {/* <button className={appCSS.fullScreen} onClick={() => toggleTab("Projects")}>Projects</button> */}
            <button
              className={appCSS.fullScreen}
              onClick={() => toggleTab("Contact")}
            >
              Contact
            </button>

            <button
              className={appCSS.mobile}
              title="Home"
              onClick={() => toggleTab("Home")}
            >
              <i className="fa-solid fa-house-user"></i>
            </button>
            {/* <button
              className={appCSS.mobile}
              title="About"
              onClick={() => toggleTab("About")}
            >
              <i className="fa-solid fa-user"></i>
            </button> */}
            {/* <button className={appCSS.mobile} title='Projects' onClick={() => toggleTab("Projects")}><i className="fa-solid fa-toolbox"></i></button> */}
            <button
              className={appCSS.mobile}
              title="Contact"
              onClick={() => toggleTab("Contact")}
            >
              <i className="fa-solid fa-envelope"></i>
            </button>

            <div>
              <i
                className="fa-solid fa-bars"
                id={appCSS.mobileMenu}
                title="Menu"
                onClick={showMenu}
              ></i>
            </div>
          </div>
        </div>

        {tab === "Home" && (
          <div>
            <Home toggleTab={toggleTab} />
          </div>
        )}

        {/* {tab === "About" && (
          <div>
            <About />
          </div>
        )} */}

        {/* {tab === "Projects" && (
          <div>
            <Projects />
          </div>
        )} */}

        {tab === "Contact" && (
          <div>
            <Contact />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
