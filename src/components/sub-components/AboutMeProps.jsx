import React from 'react';
import AboutMeCSS from '../css-files/AboutMeProps.module.css'

const AboutMeProps = ({ title, organization, location, date, partFullTrainee }) => {
 return (
  <>
   <div id={AboutMeCSS.titleAndPeriod}>
    <h4 id={AboutMeCSS.title}>{title}</h4>
    <h6 id={AboutMeCSS.period}>{partFullTrainee}</h6>
   </div>

   <div id={AboutMeCSS.bottomItem}>
    <div id={AboutMeCSS.leftBottom}>
     <p> <i className="fa-regular fa-building"></i> {organization} </p>
     <p> <i className="fa-solid fa-location-dot"></i> {location} </p>
    </div>
    <p> <i className="fa-solid fa-calendar"></i> {date} </p>
   </div>

   <hr />
  </>
 )
};

export default AboutMeProps;
