import React from 'react';
import projectCSS from './css-files/Projects.module.css';
import Items from './sub-components/Items';



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
   <div className={projectCSS.projects}>

    <div className={projectCSS.projectHeading}>

     <h3 className={projectCSS.title}>Projects</h3>
     <h6 className={projectCSS.description}>Things I've built so far</h6>

    </div>

    <div className={projectCSS.projectSamples}>
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
  </>
 )
}

export default Projects;
