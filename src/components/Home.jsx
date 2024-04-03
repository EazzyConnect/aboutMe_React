import React from 'react';
import homeCSS from './css-files/Home.module.css';
import Items from './sub-components/Items';
import { Stack } from './sub-components/Items';
import myPic from '../assets/images/eazzy.png';


const Home = () => {

  const myTechStack = [
    {
      image: "./src/assets/images/node.png",
      alt: "Node.js"
    },
    {
      image: "./src/assets/images/react.png",
      alt: "React.js"
    },
    {
      image: "./src/assets/images/js.png",
      alt: "JavaScript"
    },
    {
      image: "./src/assets/images/html.png",
      alt: "HTML"
    },
    {
      image: "./src/assets/images/css.png",
      alt: "CSS"
    },
    {
      image: "./src/assets/images/typescript.png",
      alt: "TypeScript"
    },
    {
      image: "./src/assets/images/mongoDb.jpg",
      alt: "MongoDB"
    },
    {
      image: "./src/assets/images/postman.png",
      alt: "PostMan"
    },
    {
      image: "./src/assets/images/github.png",
      alt: "GitHub"
    },
    {
      image: "./src/assets/images/vsCode.jpg",
      alt: "VsCode"
    }
  ];

  const myProjects = [
    {
      projectImg: "./src/assets/images/project1.png",
      imgAlt: "CV-Maker App",
      projectTitle: "CV-Creator Web Application",
      projectDesc: "The application allows users to register, create, edit and download their CV for free.",
      projectStack: "Node.js, HBS, JavaScript, CSS, MongoDb",
      projectLink: "https://portfolio-2xds.onrender.com/home",
      projectCode: "https://github.com/EazzyConnect/FullWebApp",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github"
    },
    {
      projectImg: "./src/assets/images/project5.png",
      imgAlt: "EMS App",
      projectTitle: "Employment Management System",
      projectDesc: "The application allows employers to post jobs and job seekers to apply for jobs posted.",
      projectStack: "React.js, Node.js, Express.js, MongoDb",
      projectLink: "https://employment-mgt-sys.onrender.com/unauth/all-jobs",
      projectCode: "https://github.com/EazzyConnect/Employment-Mgt-System",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github"
    },
    {
      projectImg: "./src/assets/images/project4.png",
      imgAlt: "TipCalculator",
      projectTitle: "Tip Calculator",
      projectDesc: "The application is used to quickly determine the appropriate gratuity amount based on a percentage of the total bill.",
      projectStack: "JavaScript, HTML, CSS",
      projectLink: "https://task-manager-zse1.onrender.com",
      projectCode: "https://github.com/EazzyConnect/taskManager",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github"
    }
  ];

  const downloadCV = () => {
    const CV = document.createElement("a");
    CV.href = "./src/assets/images/IsaiahOkon-CV.pdf";
    CV.download = "IsaiahOkon-CV.pdf";
    CV.click()
  }


  return (
    <>
      <div>

        <div id={homeCSS.heroSection}>

          <div id={homeCSS.heroLeft}>
            <h1 className={homeCSS.welcomeText}>
              Hi👋,
              <br />
              I'm <span>Isaiah Okon</span>,
              <br />
              A Software Engineer
            </h1>
            <h4 id={homeCSS.textBottom}> Ready to create extraordinary solutions with you! Let's embark on a journey of innovation and excellence together, building remarkable software that transforms ideas into reality. Together, we'll craft technology that leaves a lasting impact on the world. Let's build something amazing! 🚀
            </h4>
            <button onClick={downloadCV}>Download CV</button>
          </div>

          <div id={homeCSS.heroRight}>

            <img id={homeCSS.myPic} src={myPic} alt="isaiahOkon" />

            <div id={homeCSS.heroLinks}>

              <h4 id={homeCSS.followMe}>Follow me on: </h4>

              <div id={homeCSS.line}></div>

              <a href="http://linkedin.com/in/isaiah-okon" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/linkedIn.png" alt="linkedIn" />
              </a>

              <a href="https://twitter.com/Izaya4real" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/twitter.png" alt="twitter" />
              </a>

              <a href="https://github.com/EazzyConnect" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/github.png" alt="github" />
              </a>

            </div>

          </div>

        </div>

        <div id={homeCSS.services}>

          <div className={homeCSS.serviceHeading}>
            <h3 className={homeCSS.serviceTitle}>My Services</h3>
            <p className={homeCSS.serviceDesc}>With expertise in both backend and frontend web development, I craft seamless digital experiences that marry functionality with aesthetic appeal. From robust server-side solutions to captivating user interfaces, I deliver dynamic websites that elevate your online presence.</p>
          </div>

          <div id={homeCSS.myServices}>

            <div id={homeCSS.serviceBox}>
              {/* <i className="fa-solid fa-database"></i> */}
              <img className={homeCSS.servIcon} src="./src/assets/images/database.webp" alt="database" />
              <h2>Backend Web Development</h2>
              <p className={homeCSS.serviceBoxText}>Building the server-side logic and infrastructure that powers web applications, ensures security and
                optimizng performance.</p>
            </div>

            <div id={homeCSS.serviceBox}>
              {/* <i className="fa-solid fa-code"></i> */}
              <img className={homeCSS.servIcon} src="./src/assets/images/webDev.jpg" alt="database" />
              <h2>Web Design</h2>
              <p className={homeCSS.serviceBoxText}>Creating responsive websites that are visually appealing and user-friendly.</p>
            </div>

          </div>

        </div>

        <div id={homeCSS.tools}>

          <div className={homeCSS.toolsHeading}>

            <h3 className={homeCSS.title}>My Tech Stack</h3>
            <h6 className={homeCSS.description}>Technologies I've recently worked with</h6>

          </div>

          <div className={homeCSS.techTools}>

            {
              myTechStack.map((stack, index) => {
                return (
                  <Stack key={index} stackImg={stack.image} stackAlt={stack.alt} />
                )
              })
            }

          </div>

        </div>

        <div id={homeCSS.projects}>

          <div className={homeCSS.projectHeading}>

            <h3 className={homeCSS.projectTitle}>Projects</h3>
            <h6 className={homeCSS.projectDescription}>Things I've built so far</h6>

          </div>

          <div className={homeCSS.projectSamples}>
            {
              myProjects.map((project, index) => {
                return (
                  <Items
                    key={index}
                    itemImg={project.projectImg}
                    itemAlt={project.imgAlt}
                    itemTitle={project.projectTitle}
                    itemDesc={project.projectDesc}
                    itemStack={project.projectStack}
                    itemLivePreview={project.projectLink}
                    itemClass1={project.class1}
                    itemPrevLink={project.livePreview}
                    itemGithub={project.projectCode}
                    itemClass2={project.class2}
                    itemCode={project.viewCode} />
                )
              })
            }
          </div>

          {/* <div>
            <button onClick={() => toggleTab("Projects")}>View More</button>
          </div> */}

        </div>

        <div id={homeCSS.outro}>

          <div className={homeCSS.leftOutro}>

            <ul>
              <a href="http://linkedin.com/in/isaiah-okon" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/linkedIn.png" alt="linkedIn" />
              </a>

              <a href="https://twitter.com/Izaya4real" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/twitter.png" alt="twitter" />
              </a>

              <a href="https://github.com/EazzyConnect" target="_blank" rel="noopener noreferrer">
                <img className={homeCSS.linkIcon} src="./src/assets/icons/github.png" alt="github" />
              </a>

              <li className={homeCSS.bottomList}><a href="tel:+2348085202397"><i className="fa-solid fa-phone"></i> +2348085202397</a></li>

              <li className={homeCSS.bottomList}><a href="mailto:okon.isaiah.samuel@gmail.com"><i className="fa-solid fa-envelope"></i> okon.isaiah.samuel@gmail.com</a></li>

            </ul>

          </div>

          <div className={homeCSS.rightOutro}>

            <h4 className={homeCSS.rightOutroText}>©️ 2024</h4>
            <h4 className={homeCSS.rightOutroText}>IsaiahOkon</h4>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home;


// itemClass1={"fa-solid fa-link"} itemClass2={"fa-brands fa-github"} itemPrevLink={"View Link"}