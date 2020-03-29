import React from 'react';
import './ImportImageComponent.css';
import Upload from './UploadComponent/UploadComponent';

const ImportImageComponent = props => {
  return (
    <div className="outerDiv">
      <div className="Card">
        <Upload />
      </div>
    </div>
  );
};

export default ImportImageComponent;
