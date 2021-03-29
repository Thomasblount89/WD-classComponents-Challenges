import React from 'react';

const DogsDisplay = (props) => {
 
    return (
        <div>
           <img src={props.image} alt=" Doggie Pictures" /> 
        </div>
    )
}

export default DogsDisplay;