import React from 'react';
 
const CatList = (props) => {

 return (
   <div>
    
      {props.theCatBreeds.map(cats => {
         return (<li key={cats}>{cats}</li>)} 
         )}  
    
   </div>
 )
}
 
 export default CatList;
