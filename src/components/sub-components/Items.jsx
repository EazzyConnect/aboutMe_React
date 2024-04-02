import React from 'react';
import itemCSS from '../css-files/Items.module.css';


const Items = ({ itemImg, itemAlt, itemTitle, itemDesc, itemStack, itemLivePreview, itemGithub, itemPrevLink, itemCode, itemClass1, itemClass2 }) => {

 return (
  <>
   <div id={itemCSS.itemDiv}>

    <img className={itemCSS.itemImg} src={itemImg} alt={itemAlt} />

    <div className={itemCSS.itemInner}>
     <h3 id={itemCSS.itemInnerTitle}>{itemTitle}</h3>
     <p id={itemCSS.itemInnerDesc}>{itemDesc}</p>
    </div>

    <div className={itemCSS.itemInner} id={itemCSS.itemInner2}>

     <h4 className={itemCSS.itemBottom}>Tech Stack: {itemStack}</h4>

     <div className={itemCSS.itemBottom} id={itemCSS.itemLinks}>
      <a href={itemLivePreview} target="_blank" rel="noopener noreferrer"><i className={itemClass1}> {itemPrevLink}</i></a>
      <a href={itemGithub} target="_blank" rel="noopener noreferrer"><i className={itemClass2}> {itemCode}</i></a>
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
