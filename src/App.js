import React from 'react';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import Background from './components/Background';
import DSN from './components/DSN';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Background/>
      <DSN/>
    </div>
  );
}

export default App;
