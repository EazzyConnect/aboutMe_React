import React from 'react';
import itemCSS from '../css-files/Items.module.css';


const Items = ({ itemImg, itemAlt, itemTitle, itemDesc, itemStack, itemLivePreview, itemGithub, itemPrevLink, itemCode, itemClass1, itemClass2 }) => {

 return (
  <>
   <div id={itemCSS.itemDiv}>

    <div className={itemCSS.itemImgDiv}>
     <img className={itemCSS.itemImg} src={itemImg} alt={itemAlt} />
    </div>

    <div className={itemCSS.itemInner}>
     <h3 id={itemCSS.itemInnerTitle}>{itemTitle}</h3>
     <p id={itemCSS.itemInnerDesc}>{itemDesc}</p>
    </div>

    <div className={itemCSS.itemInnerLink} id={itemCSS.itemInner2}>

     {/* <h4 className={itemCSS.itemBottom}>Tech Stack: {itemStack}</h4> */}

     <div className={itemCSS.itemBottom} id={itemCSS.itemLinks}>
      <a href={itemLivePreview} target="_blank" rel="noopener noreferrer"><i className={itemClass1}> </i>{itemPrevLink}</a>
      {/* <a href={itemGithub} target="_blank" rel="noopener noreferrer"><i className={itemClass2}> </i>{itemCode}</a> */}
     </div>

    </div>

   </div>
  </>
 )
};


export const ProjectsList = ({ projectImg, projectAlt, projectTitle, projectDesc, projectStack, projectLivePreview, projectGithub, projectPrevLink, projectCode, projectClass1, projectClass2 }) => {

 return (
  <>

   <div id={itemCSS.projectDiv}>

    <div className={itemCSS.projectImgDiv}>
     <img className={itemCSS.projectImg} src={projectImg} alt={projectAlt} />
    </div>

    <div className={itemCSS.projectInner}>
     <h3 id={itemCSS.projectInnerTitle}>{projectTitle}</h3>
     <p id={itemCSS.projectInnerDesc}>{projectDesc}</p>
    </div>

    <div className={itemCSS.projectInnerLink} id={itemCSS.projectInner2}>

     {/* <h4 className={itemCSS.projectBottom}>Tech Stack: {projectStack}</h4> */}

     <div className={itemCSS.projectBottom} id={itemCSS.projectLinks}>
      <a href={projectLivePreview} target="_blank" rel="noopener noreferrer"><i className={projectClass1}> </i>{projectPrevLink}</a>
      <a href={projectGithub} target="_blank" rel="noopener noreferrer"><i className={projectClass2}> </i>{projectCode}</a>
     </div>

    </div>

   </div>
  </>
 )
};


export const Stack = ({ stackImg, stackAlt }) => {

 return (
  <>
   <div>

    <img className={itemCSS.stackImg} src={stackImg} alt={stackAlt} />

   </div>
  </>
 )
};


export default Items
