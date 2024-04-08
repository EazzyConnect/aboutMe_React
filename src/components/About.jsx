import React from 'react';
import AboutMeProps from './sub-components/AboutMeProps';
import aboutCSS from './css-files/About.module.css';


const About = () => {

  const myExperience = [
    // {
    //   title: "Software Engineer (Backend)",
    //   organization: "Monocle",
    //   location: "Lagos, Nigeria",
    //   date: "March 2024 - Current",
    //   partFullTrainee: "Part-Time"
    // },
    {
      title: "Software Engineer (Full-Stack)",
      organization: "SAIL Innovation Lab",
      location: "Lagos, Nigeria",
      date: "Nov 2023 - Current",
      partFullTrainee: "Part-Time"
    },
    {
      title: "Software Engineer (Backend)",
      organization: "TechQuest STEM Academy",
      location: "Lagos, Nigeria",
      date: "Feb 2023 - Aug 2023",
      partFullTrainee: "Trainee"
    },
    {
      title: "Software Developer (Frontend)",
      organization: "Zuri Cohort Bootcamp",
      location: "Lagos, Nigeria",
      date: "Oct 2022 - Nov 2022",
      partFullTrainee: "Trainee"
    },
    {
      title: "Academic Tutor",
      organization: "Greater Scholar International School",
      location: "Lagos, Nigeria",
      date: "Sept 2019 - Aug 2022",
      partFullTrainee: "Full-Time"
    },
    {
      title: "National Service",
      organization: "National Youth Service Corps",
      location: "Imo, Nigeria",
      date: "May 2015 - May 2016",
      partFullTrainee: "Full-Time"
    },
  ];

  const myTrainingAndCert = [
    {
      title: "Certificate in Backend Web Development",
      organization: "TechQuest STEM Academy",
      location: "Lagos, Nigeria",
      date: "Aug 2023",
      partFullTrainee: "Trainee"
    },
    {
      title: "Diploma in Computer Application and Operations",
      organization: "Edutainment Computer School",
      location: "Lagos, Nigeria",
      date: "Sept 2009",
      partFullTrainee: "Trainee"
    }
  ];

  const myEducation = [
    {
      title: "Bachelor of Science (Economics)",
      organization: "Olabisi Onabanjo University",
      location: "Ogun, Nigeria",
      date: "Sept 2014",
      partFullTrainee: "Full-Time"
    }
  ];

  return (
    <>
      <div id={aboutCSS.about}>

        <div id={aboutCSS.abtMe}>

          <h1 id={aboutCSS.abtTitle}>About Me</h1>
          <h3 id={aboutCSS.abtText}>
            A dedicated and innovative software engineer striving to connect, unify and make a great impact in the world of technology. A creative thinker, adept in software development and working with various data structures.
          </h3>

        </div>

        <div className={aboutCSS.innerBox}>

          <h1 className={aboutCSS.expTitle}>Experience</h1>
          <div>
            {
              myExperience.map((item, index) => {
                return (
                  <AboutMeProps key={index} title={item.title} organization={item.organization} location={item.location} date={item.date} partFullTrainee={item.partFullTrainee} />
                )
              })
            }
          </div>
        </div>

        <div className={aboutCSS.innerBox}>

          <h1 className={aboutCSS.expTitle}>Training and Certification</h1>
          <div>
            {
              myTrainingAndCert.map((item, index) => {
                return (
                  <AboutMeProps key={index} title={item.title} organization={item.organization} location={item.location} date={item.date} partFullTrainee={item.partFullTrainee} />
                )
              })
            }
          </div>
        </div>

        <div className={aboutCSS.innerBox}>

          <h1 className={aboutCSS.expTitle}>Education</h1>

          <div>
            {
              myEducation.map((item, index) => {
                return (
                  <AboutMeProps key={index} title={item.title} organization={item.organization} location={item.location} date={item.date} partFullTrainee={item.partFullTrainee} />
                )
              })
            }
          </div>

        </div>

      </div>

      <div id={aboutCSS.outro}>


        <div className={aboutCSS.leftOutro}>

          <ul>
            <a href="http://linkedin.com/in/isaiah-okon" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>


            <a href="https://twitter.com/Izaya4real" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="https://github.com/EazzyConnect" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>

            <li className={aboutCSS.bottomList}><a href="tel:+2348085202397"><i className="fa-solid fa-phone"></i> +2348085202397</a></li>

            <li className={aboutCSS.bottomList}><a href="mailto:okon.isaiah.samuel@gmail.com"><i
              className="fa-solid fa-envelope"></i> okon.isaiah.samuel@gmail.com</a></li>
          </ul>

        </div>

        <div className={aboutCSS.rightOutro}>

          <h4 className={aboutCSS.rightOutroText}>©️ 2024</h4>
          <h4 className={aboutCSS.rightOutroText}>IsaiahOkon</h4>

        </div>

      </div>

    </>
  )
};

export default About;
