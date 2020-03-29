import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar/AppNavbar';
import ForestComponent from './components/ForestComponent/ForestComponent';
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent';
import GrayBox from './components/GrayBox/GrayBox';
import ImportImage from './components/ImportImageComponent/ImportImageComponent';

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <ForestComponent />
      <DescriptionComponent />
      <GrayBox />
      <ImportImage />
    </div>
  );
};

export default App;
