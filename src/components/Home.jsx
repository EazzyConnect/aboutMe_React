import React from 'react';
import homeCSS from './css-files/Home.module.css';
import Items from './sub-components/Items';
import myPic from '../assets/images/eazzy.png';

const Home = () => {

  const myTechStack = [
    {
      image: "./src/assets/images/node.png"
    },
    {
      image: "./src/assets/images/react.png"
    },
    {
      image: "./src/assets/images/js.png"
    },
    {
      image: "./src/assets/images/html.png"
    },
    {
      image: "./src/assets/images/css.png"
    },
    {
      image: "./src/assets/images/typescript.png"
    },
    {
      image: "./src/assets/images/mongoDb.jpg"
    },
    {
      image: "./src/assets/images/postman.png"
    },
    {
      image: "./src/assets/images/github.png"
    },
    {
      image: "./src/assets/images/vsCode.jpg"
    }
  ];

  const myProjects = [
    {
      projectImg: "./src/assets/images/project1.png",
      imgAlt: "CV-Maker App",
      projectTitle: "CV-Creator Web Application",
      projectDesc: "The application allows users to register, create, edit and download their CV for free.",
      projectStack: "NodeJs, HBS, JavaScript, CSS, MongoDb",
      projectLink: "https://portfolio-2xds.onrender.com/home",
      projectCode: "https://github.com/EazzyConnect/FullWebApp",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github"
    },
    {
      projectImg: "./src/assets/images/project3.png",
      imgAlt: "EMS App",
      projectTitle: "Employment Management System",
      projectDesc: "The application allows employers to post jobs and job seekers to apply for jobs posted. (For BACKEND consumption).",
      projectStack: "NodeJs, ExpressJs, MongoDb",
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

  return (
    <>
      <div>

        <div className={homeCSS.intro}>

          <div className={homeCSS.leftAbtMe}>
            <h1 className={homeCSS.welcomeText}>
              Hi👋,
              <br />
              I'm <span>Isaiah Okon</span>,
              <br />
              A Software Engineer
            </h1>
            <h6 id={homeCSS.textBottom}>Let's build something amazing together!
            </h6>
          </div>
          <div className={homeCSS.rightAbtMe}>
            <img src={myPic} alt="isaiahOkon" />
          </div>

        </div>

        <div className={homeCSS.tools}>

          <div className={homeCSS.toolsHeading}>

            <h3 className={homeCSS.title}>My Tech Stack</h3>
            <h6 className={homeCSS.description}>Technologies I've recently worked with</h6>

          </div>

          <div className={homeCSS.techTools}>

            {
              myTechStack.map((stack, index) => {
                return (
                  <Items key={index} itemImg={stack.image} />
                )
              })
            }

          </div>

        </div>

        <div className={homeCSS.projects}>

          <div className={homeCSS.projectHeading}>

            <h3 className={homeCSS.title}>Projects</h3>
            <h6 className={homeCSS.description}>Things I've built so far</h6>

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

        </div>

        <div className={homeCSS.outro}>


          <div className={homeCSS.rightOutro}>

            <ul>
              <li className={homeCSS.bottomList}><a href="tel:+2348085202397"><i className="fa-solid fa-phone"></i>
                +2348085202397</a></li>
              <li className={homeCSS.bottomList}><a href="mailto:okon.isaiah.samuel@gmail.com"><i
                className="fa-solid fa-envelope"></i> okon.isaiah.samuel@gmail.com</a></li>
            </ul>

          </div>


          <div className={homeCSS.bottomOutro}>

            <h5>©️ 2024</h5>
            <h5>IsaiahOkon</h5>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home;


// itemClass1={"fa-solid fa-link"} itemClass2={"fa-brands fa-github"} itemPrevLink={"View Link"}