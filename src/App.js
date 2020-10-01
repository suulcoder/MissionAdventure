import React from 'react';
import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import Background from './components/Background';
import DSN from './components/DSN';
import Solution from './components/Solution';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Background/>
      <DSN/>
      <Solution/>
      <Footer/>
    </div>
  );
}

export default App;
