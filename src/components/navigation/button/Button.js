import React from 'react';

const Button = (props) => {
  return ( 
    <button 
      className="button" 
      onCLick={props.handleClick}> View Project
    </button>
  );
}

export default Button;