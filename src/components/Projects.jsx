import React from 'react';
import projectCSS from './css-files/Projects.module.css';
// import Items from './sub-components/Items';
import { ProjectsList } from './sub-components/Items';



const Projects = () => {

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
      projectImg: "./src/assets/images/project5.png",
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
    },
    {
      projectImg: "./src/assets/images/project9.png",
      imgAlt: "myTodoApp",
      projectTitle: "My Todo App",
      projectDesc: "A sleek and intuitive to-do app designed to streamline your productivity and organize your tasks effortlessly",
      projectStack: "Typescript, HTML, CSS",
      projectLink: "https://my-todo-application.onrender.com/",
      projectCode: "https://github.com/EazzyConnect/SAIL_todoTask/tree/main/isaiahTodoTask",
      livePreview: "Live Preview",
      viewCode: "View Code",
      class1: "fa-solid fa-link",
      class2: "fa-brands fa-github"
    }
  ];

  return (
    <>
      <div id={projectCSS.projects}>

        <div className={projectCSS.projectHeading}>

          <h1 className={projectCSS.projectTitle}>My Projects</h1>
          <h5 className={projectCSS.projectInfo}>Live projects</h5>

        </div>

        <div className={projectCSS.projectSamples}>
          {
            myProjects.map((project, index) => {
              return (
                <ProjectsList
                  key={index}
                  projectImg={project.projectImg}
                  projectAlt={project.imgAlt}
                  projectTitle={project.projectTitle}
                  projectDesc={project.projectDesc}
                  projectStack={project.projectStack}
                  projectLivePreview={project.projectLink}
                  projectClass1={project.class1}
                  projectPrevLink={project.livePreview}
                  projectGithub={project.projectCode}
                  projectClass2={project.class2}
                  projectCode={project.viewCode} />
              )
            })
          }
        </div>

      </div>

      <div>

        <div>

          <h3 className={projectCSS.projectTitle}>Inspired creation</h3>

          <h5 className={projectCSS.projectInfo}>Explore a collection of cloned works, where I've recreated classic pieces of designs. </h5>

        </div>

        <div className={projectCSS.clonedWorks}>

          <div className={projectCSS.clonedWorks1}>

            <div className={projectCSS.clonedWorks1Left}>
              <img id={projectCSS.img1} src="./src/assets/images/project6A.png" alt="img.png" />
            </div>

            <div className={projectCSS.clonedWorks1Right}>

              <img id={projectCSS.img2} src="./src/assets/images/project6B.png" alt="img.png" />

              <p id={projectCSS.img2Text}>Discover my rendition of a responsive web application, meticulously crafted to maintain functionality across various devices.</p>

              <img id={projectCSS.img4} src="./src/assets/images/project2.png" alt="img.png" />

            </div>

          </div>

          <div className={projectCSS.clonedWorks2}>

            <img id={projectCSS.img3} src="./src/assets/images/project7.jpg" alt="adidas.png" />

          </div>

        </div>

        {/* <div className={projectCSS.clonedWorks3}>

          <img id={projectCSS.img5} src="./src/assets/images/project8.jpg" alt="img.png" />

        </div> */}

        <hr />

        <div className={projectCSS.clonedWorks4}>

          <h3 id={projectCSS.disneyText}>Disney landing page clone. (video)</h3>

          <video id={projectCSS.video1} src="./src/assets/videos/DisneyClone.mp4" controls></video>

        </div>

        <hr />

        <div className={projectCSS.clonedWorks5}>

          <h3 id={projectCSS.disneyText}>Facebook landing page clone (video)</h3>

          <video id={projectCSS.video2} src="./src/assets/videos/facebookClone.mp4" controls></video>

        </div>

      </div>



      <div id={projectCSS.outro}>

        <div className={projectCSS.leftOutro}>

          <ul>
            <a href="http://linkedin.com/in/isaiah-okon" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>


            <a href="https://twitter.com/Izaya4real" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter"></i>
            </a>

            <a href="https://github.com/EazzyConnect" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>

            <li className={projectCSS.bottomList}><a href="tel:+2348085202397"><i className="fa-solid fa-phone"></i> +2348085202397</a></li>

            <li className={projectCSS.bottomList}><a href="mailto:okon.isaiah.samuel@gmail.com"><i
              className="fa-solid fa-envelope"></i> okon.isaiah.samuel@gmail.com</a></li>
          </ul>

        </div>

        <div className={projectCSS.rightOutro}>

          <h4 className={projectCSS.rightOutroText}>©️ 2024</h4>
          <h4 className={projectCSS.rightOutroText}>IsaiahOkon</h4>

        </div>

      </div>


    </>
  )
};

export default Projects;
