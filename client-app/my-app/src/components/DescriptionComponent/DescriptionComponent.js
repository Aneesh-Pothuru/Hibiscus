import React from 'react';
import './DescriptionComponent.css';

const DescriptionComponent = props => {
  return (
    <div className="background">
      <h2 className="title"> What is Hibiscus? </h2>
      <p className="description">
      Web application that translates images of animals and determines if the species of the animal is endangered or not and gives feedback on the environment using trained machine learning models.
      </p>
      <h2 className="title"> What is Our Goal? </h2>
      <p className="description">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>
    </div>
  );
};

export default DescriptionComponent;
