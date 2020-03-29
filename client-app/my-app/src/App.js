import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from './components/AppNavbar/AppNavbar';
import ForestComponent from './components/ForestComponent/ForestComponent';
import DescriptionComponent from './components/DescriptionComponent/DescriptionComponent';
import GrayBox from './components/GrayBox/GrayBox';
import ImportImage from './components/ImportImageComponent/ImportImageComponent';
import GrayBox1 from './components/GrayBox1/GrayBox1';

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <ForestComponent />
      <DescriptionComponent />
      <GrayBox />
      <GrayBox1 />
      <ImportImage />
    </div>
  );
};

export default App;
