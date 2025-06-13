import React from "react";
import homeCSS from "./css-files/Home.module.css";
import Items from "./sub-components/Items";
import { Stack } from "./sub-components/Items";
import myPic from "/images/eazzy.png";

const Home = ({ toggleTab }) => {
  const myTechStack = [
    {
      image: "images/node.png",
      alt: "Node.js",
    },
    {
      image: "images/react.png",
      alt: "React.js",
    },
    {
      image: "images/js.png",
      alt: "JavaScript",
    },
    {
      image: "images/mysql.png",
      alt: "mySql",
    },
    {
      image: "images/css.png",
      alt: "CSS",
    },
    {
      image: "images/mongoDb.jpg",
      alt: "MongoDB",
    },
    {
      image: "images/postman.png",
      alt: "PostMan",
    },
    {
      image: "images/github.png",
      alt: "GitHub",
    },
    {
      image: "images/vsCode.jpg",
      alt: "VsCode",
    },
    {
      image: "images/typescript.png",
      alt: "TypeScript",
    },
  ];

  const myProjects = [
    {
      projectImg: "images/buzinesshours.jpg",
      imgAlt: "buzinesshours",
      projectTitle: "BuzinessHours App",
      projectDesc:
        "A real-time app for businesses to give live updates to users (customers); including live chat",
      projectStack: "React, Node.js, Express.js",
      projectLink: "https://www.buzinesshours.com/",
      projectCode: "",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github",
    },
    // {
    //   projectImg: "images/project1.webp",
    //   imgAlt: "CV-Maker App",
    //   projectTitle: "CV-Creator Web Application",
    //   projectDesc:
    //     "The application allows users to register, create, edit and download their CV for free",
    //   projectStack: "Node.js, HBS, JavaScript, CSS, MongoDb",
    //   projectLink: "https://cv-maker-app.onrender.com/home",
    //   projectCode: "https://github.com/EazzyConnect/cvMaker_App",
    //   livePreview: "Live Preview",
    //   viewCode: "View Code",
    //   class1: "fa-solid fa-link",
    //   class2: "fa-brands fa-github",
    // },
    {
      projectImg: "images/ai_img.png",
      imgAlt: "chatbot",
      projectTitle: "AI Chatbot",
      projectDesc:
        "A free chatbot designed to engage users in real-time interaction, dynamic and intelligent conversations",
      projectStack: "React, Node.js, Express.js",
      projectLink: "https://sail-aichatbot.onrender.com/",
      projectCode: "",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github",
    },
    {
      projectImg: "images/project5.jpg",
      imgAlt: "EMS App",
      projectTitle: "Employment Management System",
      projectDesc:
        "The application allows employers to post jobs and job seekers to apply for jobs posted",
      projectStack: "React.js, Node.js, Express.js, MongoDb",
      projectLink: "https://work-force-hub.onrender.com/",
      projectCode: "https://github.com/EazzyConnect/workForceHub_App",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github",
    },
    // {
    //   projectImg: "images/project4.webp",
    //   imgAlt: "TipCalculator",
    //   projectTitle: "Tip Calculator",
    //   projectDesc:
    //     "The application is used to quickly determine the appropriate gratuity amount based on a percentage of the total bill",
    //   projectStack: "JavaScript, HTML, CSS",
    //   projectLink: "https://task-manager-zse1.onrender.com",
    //   projectCode: "https://github.com/EazzyConnect/taskManager",
    //   livePreview: "Live Preview",
    //   viewCode: "View Code",
    //   class1: "fa-solid fa-link",
    //   class2: "fa-brands fa-github",
    // },
    // {
    //   projectImg: "images/project9.jpg",
    //   imgAlt: "myTodoApp",
    //   projectTitle: "My Todo App",
    //   projectDesc:
    //     "A sleek and intuitive to-do app designed to streamline your productivity and organize your tasks effortlessly",
    //   projectStack: "Typescript, HTML, CSS",
    //   projectLink: "https://my-todo-application.onrender.com/",
    //   projectCode:
    //     "https://github.com/EazzyConnect/SAIL_todoTask/tree/main/isaiahTodoTask",
    //   livePreview: "Live Preview",
    //   viewCode: "View Code",
    //   class1: "fa-solid fa-link",
    //   class2: "fa-brands fa-github",
    // },
  ];

  const downloadCV = () => {
    const CV = document.createElement("a");
    CV.href = "cv/CV-Isaiah-Okon.pdf";
    CV.download = "Isaiah-Okon-CV.pdf";
    CV.click();
  };

  const connectWithMe = () => {
    toggleTab("Contact");
  };

  // const viewMoreProject = () => {
  //   toggleTab("Projects");
  // };

  return (
    <>
      <div>
        <div id={homeCSS.heroSection}>
          <div id={homeCSS.heroLeft}>
            <h1 className={homeCSS.welcomeText}>
              Hi👋,
              <br />
              I'm <span>Isaiah Okon</span>,
              <br />A Software Engineer
            </h1>

            <h4 id={homeCSS.textBottom}>
              {" "}
              Ready to create extraordinary solutions with you! Let's embark on
              a journey of innovation and excellence together, building
              remarkable software that transforms ideas into reality. Together,
              we'll craft technology that leaves a lasting impact on the world.
              Let's build something amazing! 🚀
            </h4>

            <div id={homeCSS.heroBtnsWeb}>
              <button id={homeCSS.downloadBtn} onClick={downloadCV}>
                Download CV
              </button>
              <button id={homeCSS.ConnectBtn} onClick={connectWithMe}>
                Connect With Me
              </button>
            </div>
          </div>

          <div id={homeCSS.heroRight}>
            <img id={homeCSS.myPic} src={myPic} alt="isaiahOkon" />

            {/* <div id={homeCSS.heroLinks}>

              <h4 id={homeCSS.followMe}>Follow me on: </h4>

              <div id={homeCSS.line}></div>

              <a href="http://linkedin.com/in/isaiah-okon" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="icons/linkedIn.png" alt="linkedIn" />
              </a>

              <a href="https://twitter.com/Izaya4real" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="icons/twitter.png" alt="twitter" />
              </a>

              <a href="https://github.com/EazzyConnect" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="icons/github.png" alt="github" />
              </a>

            </div> */}
          </div>

          <div id={homeCSS.heroBtns}>
            <button id={homeCSS.downloadBtn} onClick={downloadCV}>
              Download CV
            </button>
            <button id={homeCSS.ConnectBtn} onClick={connectWithMe}>
              Connect With Me
            </button>
          </div>
        </div>

        <div id={homeCSS.services}>
          <div className={homeCSS.serviceHeading}>
            <h3 className={homeCSS.serviceTitle}>My Services</h3>
            <p className={homeCSS.serviceDesc}>
              With expertise in both backend and frontend web development, I
              craft seamless digital experiences that marry functionality with
              aesthetic appeal. From robust server-side solutions to captivating
              user interfaces, I deliver dynamic websites that elevate your
              online presence.
            </p>
          </div>

          <div id={homeCSS.myServices}>
            <div id={homeCSS.serviceBox}>
              {/* <i className="fa-solid fa-database"></i> */}
              <img
                className={homeCSS.servIcon}
                src="images/database.webp"
                alt="database"
              />
              <h2>Backend Web Development</h2>
              <p className={homeCSS.serviceBoxText}>
                Building the server-side logic and infrastructure that powers
                web applications, ensures security and optimizng performance.
              </p>
            </div>

            <div id={homeCSS.serviceBox}>
              {/* <i className="fa-solid fa-code"></i> */}
              <img
                className={homeCSS.servIcon}
                src="images/webDev.jpg"
                alt="UI/UX"
              />
              <h2>Web Design</h2>
              <p className={homeCSS.serviceBoxText}>
                Creating responsive websites that are visually appealing and
                user-friendly.
              </p>
            </div>
          </div>
        </div>

        <div id={homeCSS.tools}>
          <div className={homeCSS.toolsHeading}>
            <h3 className={homeCSS.toolsTitle}>My Tech Stack</h3>
            {/* <h6 className={homeCSS.toolsDescription}>Technologies I've recently worked with</h6> */}
          </div>

          <div className={homeCSS.techTools}>
            {myTechStack.map((stack, index) => {
              return (
                <Stack
                  key={index}
                  stackImg={stack.image}
                  stackAlt={stack.alt}
                />
              );
            })}
          </div>
        </div>

        <div id={homeCSS.projects}>
          <div className={homeCSS.projectHeading}>
            <h3 className={homeCSS.projectTitle}>Projects</h3>
            {/* <h6 className={homeCSS.projectDescription}>Things I've built so far</h6> */}
          </div>

          <div className={homeCSS.projectSamples}>
            {myProjects.map((project, index) => {
              return (
                <Items
                  key={index}
                  itemImg={project.projectImg}
                  itemAlt={project.imgAlt}
                  itemTitle={project.projectTitle}
                  itemDesc={project.projectDesc}
                  // itemStack={project.projectStack}
                  itemLivePreview={project.projectLink}
                  itemClass1={project.class1}
                  itemPrevLink={project.livePreview}
                  itemGithub={project.projectCode}
                  itemClass2={project.class2}
                  itemCode={project.viewCode}
                />
              );
            })}
          </div>

          {/* <div className={homeCSS.viewMore}>
            <button id={homeCSS.viewMoreBtn} onClick={viewMoreProject}>View More</button>
          </div> */}
        </div>

        <div id={homeCSS.outro}>
          <div className={homeCSS.leftOutro}>
            <ul>
              <a
                className={homeCSS.linkIconHide}
                href="http://linkedin.com/in/isaiah-okon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img className={homeCSS.linkIcon} src="icons/linkedIn.png" alt="linkedIn" /> */}
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                className={homeCSS.linkIconHide}
                href="https://twitter.com/Izaya4real"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img className={homeCSS.linkIcon} src="icons/twitter.png" alt="twitter" /> */}
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                className={homeCSS.linkIconHide}
                href="https://github.com/EazzyConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img className={homeCSS.linkIcon} src="icons/github.png" alt="github" /> */}
                <i className="fa-brands fa-github"></i>
              </a>

              <li className={homeCSS.bottomList}>
                <a href="tel:+2348085202397">
                  <i className="fa-solid fa-phone"></i> +2348085202397
                </a>
              </li>

              <li className={homeCSS.bottomList}>
                <a href="mailto:okon.isaiah.samuel@gmail.com">
                  <i className="fa-solid fa-envelope"></i>{" "}
                  okon.isaiah.samuel@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className={homeCSS.rightOutro}>
            <h4 className={homeCSS.rightOutroText}>©️ 2024</h4>
            <h4 className={homeCSS.rightOutroText}>IsaiahOkon</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// itemClass1={"fa-solid fa-link"} itemClass2={"fa-brands fa-github"} itemPrevLink={"View Link"}
