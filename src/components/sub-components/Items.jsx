import React from 'react'

const Items = ({ itemImg, itemAlt, itemTitle, itemDesc, itemStack, itemLivePreview, itemGithub, itemPrevLink, itemCode, itemClass1, itemClass2 }) => {
 return (
  <>
   <div>
    <img src={itemImg} alt={itemAlt} />
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

export default Items;
