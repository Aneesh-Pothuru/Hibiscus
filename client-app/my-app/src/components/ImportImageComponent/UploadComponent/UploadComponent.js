import React from 'react';
import './UploadComponent.css';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

const ImportImageComponent = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Species Image</CardTitle>
          <CardSubtitle>Learn about the species and see if it is endangered</CardSubtitle>
          <CardText>
            Once you upload the image, it will return if the species is endangered or not and its name using a trained machiene leaning model.
          </CardText>
          <input type ="file" class="btn btn-primary" id = "real-file"/>
          <button type="button" class="btn btn-info">Upload Image</button>
          <span id="custom-text">No file chosen</span>
        </CardBody>
      </Card>
    </div>
  );
};

export default ImportImageComponent;