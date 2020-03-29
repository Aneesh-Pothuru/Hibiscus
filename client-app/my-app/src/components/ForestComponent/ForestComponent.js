import React from 'react';
import './ForestComponent.css';
import ForestImage from '../../forestWide.jpg';
import ImportImage from '../ImportImageComponent/ImportImageComponent';

const ForestComponent = () => {
  return (
    <div>
      <img className="forest" src={ForestImage}></img>
      <ImportImage />
    </div>
  );
};

export default ForestComponent;
