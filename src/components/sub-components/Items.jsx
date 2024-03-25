import React from 'react';
import itemCSS from '../css-files/Items.module.css'


const Items = ({ itemImg, itemAlt, itemTitle, itemDesc, itemStack, itemLivePreview, itemGithub, itemPrevLink, itemCode, itemClass1, itemClass2 }) => {

 return (
  <>
   <div>

    <img className={itemCSS.itemImg} src={itemImg} alt={itemAlt} />

    <div>
     <h3>{itemTitle}</h3>
     <p>{itemDesc}</p>
    </div>

    <div>

     <h4>{itemStack}</h4>

     <div>
      <a href={itemLivePreview} target="_blank" rel="noopener noreferrer"><i className={itemClass1}>{itemPrevLink}</i></a>
      <a href={itemGithub} target="_blank" rel="noopener noreferrer"><i className={itemClass2}>{itemCode}</i></a>
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
