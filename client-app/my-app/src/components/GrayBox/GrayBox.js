import React from 'react';
import './GrayComp.css';
import GrayBoxPic from '../../GrayBox.jpg';

const GrayBox = () => {
  return (
    <div>
      <img className="box" src={GrayBoxPic}></img>
    </div>
  );
};

export default GrayBox;