import React from 'react';
import './ForestComponent.css';
import ForestImage from '../../forestWide.jpg';

const ForestComponent = () => {
  return (
    <div>
      <img className="forest" src={ForestImage}></img>
    </div>
  );
};

export default ForestComponent;
