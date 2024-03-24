import React from 'react';

const AboutMeProps = ({ title, organization, location, date, partFullTrainee }) => {
 return (
  <>
   <div>
    <h4>{title}</h4>
    <h6>{partFullTrainee}</h6>
   </div>

   <div>
    <div>
     <h5><i className="fa-regular fa-building"></i>{organization}</h5>
     <h5><i className="fa-solid fa-location-dot"></i>{location}</h5>
    </div>
    <h5><i className="fa-solid fa-calendar"></i> {date}</h5>
   </div>
  </>
 )
};

export default AboutMeProps;
