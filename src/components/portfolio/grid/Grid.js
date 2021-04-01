import placeholder1 from '../../../assets/placeholder.jpeg';
import GridCSS from './Grid.module.css';
import React from 'react';

const Grid = () => {
  return ( 
    <div className={GridCSS.grid}>
      <div className="col">
        <img src={placeholder1} alt="Portfolio Project Screenshot"/>
      </div>
      <div className="col">
        <img src={placeholder1} alt="Covid-19 Project Screenshot"/>
      </div>
      <div className="col">
        <img src={placeholder1} alt="Spending Tracker Project Screenshot"/>
      </div>
      <div className="col">
        <img src={placeholder1} alt="PYCP Project Screenshot"/>
      </div>
      <div className="col">
        <img src={placeholder1} alt="Blog Project Screenshot"/>
      </div>
    </div>
  );
}

export default Grid;