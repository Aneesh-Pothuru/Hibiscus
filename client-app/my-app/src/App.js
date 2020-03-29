import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar/AppNavbar';
import './App.css';
import ForestComponent from './components/ForestComponent/ForestComponent';

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <ForestComponent />
    </div>
  );
};

export default App;
