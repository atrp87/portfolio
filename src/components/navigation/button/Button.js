import React from 'react';

const Button = ({Rby}) => {
  return ( 
    <button 
      className="button-default" 
      onClick={Rby}> View Project
    </button>
  );
}

export default Button;