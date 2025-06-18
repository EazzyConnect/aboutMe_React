import { useEffect, useRef, useState } from "react";
import homeCSS from "./css-files/Home.module.css";
import useInView from "../hooks/useInView";
import Items from "./sub-components/Items";
import { Stack } from "./sub-components/Items";

const Home = ({ toggleTab }) => {
  const expertiseRef = useRef();
  const projectRef = useRef();

  const isExpertiseVisible = useInView(expertiseRef);
  const isProjectVisible = useInView(projectRef);

  // const titleRef = useRef();
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsVisible(entry.isIntersecting);
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const currentRef = titleRef.current;
  //   if (currentRef) observer.observe(currentRef);

  //   return () => {
  //     if (currentRef) observer.unobserve(currentRef);
  //   };
  // }, []);

  // const myTechStack = [
  //   {
  //     image: "images/node.png",
  //     alt: "Node.js",
  //   },
  //   {
  //     image: "images/react.png",
  //     alt: "React.js",
  //   },
  //   {
  //     image: "images/js.png",
  //     alt: "JavaScript",
  //   },
  //   {
  //     image: "images/mysql.png",
  //     alt: "mySql",
  //   },
  //   {
  //     image: "images/css.png",
  //     alt: "CSS",
  //   },
  //   {
  //     image: "images/mongoDb.jpg",
  //     alt: "MongoDB",
  //   },
  //   {
  //     image: "images/postman.png",
  //     alt: "PostMan",
  //   },
  //   {
  //     image: "images/github.png",
  //     alt: "GitHub",
  //   },
  //   {
  //     image: "images/vsCode.jpg",
  //     alt: "VsCode",
  //   },
  //   {
  //     image: "images/typescript.png",
  //     alt: "TypeScript",
  //   },
  // ];

  // const myProjects = [
  //   {
  //     projectImg: "images/buzinesshours.jpg",
  //     imgAlt: "buzinesshours",
  //     projectTitle: "BuzinessHours App",
  //     projectDesc:
  //       "A real-time app for businesses to give live updates to users (customers); including live chat",
  //     projectStack: "React, Node.js, Express.js",
  //     projectLink: "https://www.buzinesshours.com/",
  //     projectCode: "",
  //     livePreview: "Live Preview",
  //     viewCode: "View Code",
  //     class1: "fa-solid fa-link",
  //     class2: "fa-brands fa-github",
  //   },
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
  // {
  //   projectImg: "images/ai_img.png",
  //   imgAlt: "chatbot",
  //   projectTitle: "AI Chatbot",
  //   projectDesc:
  //     "A free chatbot designed to engage users in real-time interaction, dynamic and intelligent conversations",
  //   projectStack: "React, Node.js, Express.js",
  //   projectLink: "https://sail-aichatbot.onrender.com/",
  //   projectCode: "",
  //   livePreview: "Live Preview",
  //   viewCode: "View Code",
  //   class1: "fa-solid fa-link",
  //   class2: "fa-brands fa-github",
  // },
  // {
  //   projectImg: "images/project5.jpg",
  //   imgAlt: "EMS App",
  //   projectTitle: "Employment Management System",
  //   projectDesc:
  //     "The application allows employers to post jobs and job seekers to apply for jobs posted",
  //   projectStack: "React.js, Node.js, Express.js, MongoDb",
  //   projectLink: "https://work-force-hub.onrender.com/",
  //   projectCode: "https://github.com/EazzyConnect/workForceHub_App",
  //   livePreview: "Live Preview",
  //   viewCode: "View Code",
  //   class1: "fa-solid fa-link",
  //   class2: "fa-brands fa-github",
  // },
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
  // ];

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
              HEY, I'M{" "}
              <span className={homeCSS.nameUnderline}>ISAIAH OKON</span>,
            </h1>
            <p id={homeCSS.heroText}>
              A result-driven MERN Stack Engineer specializing in building and
              managing high-performance websites and web applications that drive
              product success. With a passion for innovation and excellence, I’m
              ready to help you transform bold ideas into impactful software
              that truly makes a difference. 🚀
            </p>

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
            <div id={homeCSS.heroLinks}>
              <a
                href="http://linkedin.com/in/isaiah-okon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={homeCSS.linkIcon}
                  src="icons/linkedIn.png"
                  alt="linkedIn"
                />
              </a>

              <a
                href="https://twitter.com/Izaya4real"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={homeCSS.linkIcon}
                  src="icons/twitter.png"
                  alt="twitter"
                />
              </a>

              <a
                href="https://github.com/EazzyConnect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={homeCSS.linkIcon}
                  src="icons/github.png"
                  alt="github"
                />
              </a>
            </div>
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
            <h3
              ref={expertiseRef}
              className={`${homeCSS.serviceTitle} ${
                isExpertiseVisible ? homeCSS.underline : ""
              }`}
            >
              My Expertise
            </h3>
          </div>

          <div className={homeCSS.serviceData}>
            <div className={homeCSS.serviceDataLeft}>
              <div className={homeCSS.serviceDataHeading}>
                <h3 className={homeCSS.serviceDataHeadingText}>
                  Get to Know me!
                </h3>
              </div>
              <div className={homeCSS.serviceAbout}>
                <p className={homeCSS.serviceAboutText}>
                  With solid expertise in both backend and frontend web
                  development, I specialize in building seamless digital
                  experiences that blend performance with visual excellence.
                </p>
                <p className={homeCSS.serviceAboutText}>
                  I bring ideas to life by developing robust server-side
                  architectures and intuitive user interfaces that not only
                  function flawlessly but also captivate and engage users.
                </p>
                <p className={homeCSS.serviceAboutText}>
                  On the backend, I develop secure, scalable systems that ensure
                  fast performance and reliable functionality behind the scenes.
                </p>
                <p className={homeCSS.serviceAboutText}>
                  On the frontend, I create clean, responsive designs that
                  prioritize usability and deliver an engaging experience across
                  all devices.
                </p>
              </div>
            </div>

            <div className={homeCSS.serviceDataRight}>
              <div className={homeCSS.serviceDataHeading}>
                <h3 className={homeCSS.serviceDataHeadingText}>My Skills</h3>
              </div>
              <div className={homeCSS.mySkills}>
                <p className={homeCSS.skill}>Node.js</p>
                <p className={homeCSS.skill}>Express.js</p>
                <p className={homeCSS.skill}>React.js</p>
                <p className={homeCSS.skill}>JavaScript</p>
                <p className={homeCSS.skill}>Typescript</p>
                <p className={homeCSS.skill}>Redux Toolkit</p>
                <p className={homeCSS.skill}>Cloud Service</p>
                <p className={homeCSS.skill}>Tailwind CSS</p>
                <p className={homeCSS.skill}>Github Actions</p>
                <p className={homeCSS.skill}>MySql</p>
                <p className={homeCSS.skill}>MongoDb</p>
              </div>
            </div>
          </div>

          <div id={homeCSS.myServices}>
            {/* <div id={homeCSS.serviceBox}>
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
            </div> */}
          </div>
        </div>

        {/* <div id={homeCSS.tools}>
          <div className={homeCSS.toolsHeading}>
            <h3 className={homeCSS.toolsTitle}>My Tech Stack</h3>
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
        </div> */}

        <div id={homeCSS.projects}>
          <div className={homeCSS.projectHeading}>
            <h3
              ref={projectRef}
              className={`${homeCSS.projectTitle} ${
                isProjectVisible ? homeCSS.underline : ""
              }`}
            >
              Projects
            </h3>
          </div>

          <div className={homeCSS.buzineshoursContainer}>
            <div className={homeCSS.buzineshoursImgContainer}>
              <img
                src="images/buzinesshours.jpg"
                alt="buzinesshours"
                className={homeCSS.buzineshoursImg}
              />
            </div>
            <div className={homeCSS.buzineshoursOverview}>
              <h3 className={homeCSS.buzineshoursOverviewTitle}>
                BuzinessHours App
              </h3>
              <p className={homeCSS.buzineshoursOverviewText}>
                A real-time app designed to help businesses stay connected with
                their customers through live updates and seamless communication.
                With features like live chat, in-app payments, and instant
                status updates, businesses can effortlessly share their opening,
                closing, away, and wait times - keeping users informed and
                engaged at every moment.
              </p>
              <div id={homeCSS.downloadCard}>
                <div className={homeCSS.iosDownloadLink}>
                  <a
                    href="https://apps.apple.com/us/app/buzinesshours/id6535651003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/appleStore.png"
                      alt="iOS"
                      className={homeCSS.iosDownloadIcon}
                    />
                  </a>
                </div>

                <div className={homeCSS.androidDownloadLink}>
                  <a
                    href="https://play.google.com/store/apps/details?id=app.buzinesshours.status"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/googleStore.png"
                      alt="android"
                      className={homeCSS.androidDownloadIcon}
                    />
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="https://www.buzinesshours.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={homeCSS.visitLink}
                >
                  View website here
                </a>
              </div>
            </div>
          </div>

          <div className={homeCSS.buzineshoursContainer}>
            <div className={homeCSS.buzineshoursImgContainer}>
              <img
                src="images/epicpay.png"
                alt="epicpay"
                className={homeCSS.buzineshoursImg}
              />
            </div>
            <div className={homeCSS.buzineshoursOverview}>
              <h3 className={homeCSS.buzineshoursOverviewTitle}>Epic Pay</h3>
              <p className={homeCSS.buzineshoursOverviewText}>
                An open banking platform for businesses and individuals to
                manage funds and carry out daily transactions.
              </p>
              <p className={homeCSS.buzineshoursOverviewText}>
                Individuals can manage all their bank accounts in one place,
                make instant transfer, pay bills and lots more.
              </p>

              <div>
                <a
                  href="https://www.epicpay.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={homeCSS.visitLink}
                >
                  View website here
                </a>
              </div>
            </div>
          </div>

          <div className={homeCSS.buzineshoursContainer}>
            <div className={homeCSS.buzineshoursImgContainer}>
              <img
                src="images/project5.jpg"
                alt="employmentMgtSys"
                className={homeCSS.buzineshoursImg}
              />
            </div>
            <div className={homeCSS.buzineshoursOverview}>
              <h3 className={homeCSS.buzineshoursOverviewTitle}>
                Employment Management System
              </h3>
              <p className={homeCSS.buzineshoursOverviewText}>
                A powerful and intuitive platform designed to connect employers
                with top talent. Employers can easily post job openings, manage
                listings, and track applications - all in one place -
                streamlining the hiring process from start to finish.
              </p>
              <p className={homeCSS.buzineshoursOverviewText}>
                Job seekers can explore a wide range of opportunities, submit
                applications seamlessly, and stay updated on their application
                status. Whether you're hiring or looking to get hired, this app
                simplifies recruitment and empowers career growth with ease and
                efficiency.
              </p>

              <div>
                <a
                  href="https://work-force-hub.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={homeCSS.visitLink}
                >
                  View website here
                </a>
              </div>
            </div>
          </div>

          <div className={homeCSS.buzineshoursContainer}>
            <div className={homeCSS.buzineshoursImgContainer}>
              <img
                src="images/autobuy.png"
                alt="chatbot"
                className={homeCSS.buzineshoursImg}
              />
            </div>
            <div className={homeCSS.buzineshoursOverview}>
              <h3 className={homeCSS.buzineshoursOverviewTitle}>CarXperto</h3>
              <p className={homeCSS.buzineshoursOverviewText}>
                The ultimate marketplace where car buyers, sellers, and expert
                brokers come together. Whether you're looking to buy your next
                vehicle or sell your current one, CarXperto connects you with
                real people and real deals - all in one seamless platform.
              </p>
              <p className={homeCSS.buzineshoursOverviewText}>
                What sets CarXperto apart is its network of trusted brokers who
                provide expert advice, helping users make informed decisions and
                land the best deals. From browsing to buying, CarXperto makes
                every step of the car trading experience smart, simple, and
                reliable.
              </p>

              <div>
                <a
                  href="https://autobuys.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={homeCSS.visitLink}
                >
                  View website here
                </a>
              </div>
            </div>
          </div>

          <div className={homeCSS.buzineshoursContainer}>
            <div className={homeCSS.buzineshoursImgContainer}>
              <img
                src="images/ai_img.png"
                alt="chatbot"
                className={homeCSS.buzineshoursImg}
              />
            </div>
            <div className={homeCSS.buzineshoursOverview}>
              <h3 className={homeCSS.buzineshoursOverviewTitle}>AI Chatbot</h3>
              <p className={homeCSS.buzineshoursOverviewText}>
                A smart, user-friendly assistant built to engage users in
                real-time, dynamic conversations. Whether you're seeking
                answers, exploring ideas, or just having a casual chat, this
                free chatbot delivers intelligent responses that feel natural
                and interactive.
              </p>
              <p className={homeCSS.buzineshoursOverviewText}>
                Powered by advanced AI, the chatbot adapts to user input,
                offering quick, relevant, and engaging replies. It’s the perfect
                tool for boosting engagement, answering questions, or simply
                enjoying seamless human-like interaction - anytime, anywhere.
              </p>

              <div>
                <a
                  href="https://sail-aichatbot.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={homeCSS.visitLink}
                >
                  View website here
                </a>
              </div>
            </div>
          </div>

          {/* <div className={homeCSS.projectSamples}>
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
          </div> */}

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
            <p className={homeCSS.rightOutroText}>© 2024</p>
            <p className={homeCSS.rightOutroText}>IsaiahOkon</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// itemClass1={"fa-solid fa-link"} itemClass2={"fa-brands fa-github"} itemPrevLink={"View Link"}
