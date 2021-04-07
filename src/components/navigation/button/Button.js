// import React, { useState } from 'react';

const handleClick = () => {
  console.log('clicked');
}

const Button = () => {
  return ( 
    <button 
      className="button-default" 
      onClick={handleClick}> View Project
    </button>
  );
}

export default Button;