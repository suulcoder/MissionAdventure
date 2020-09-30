import React from 'react';
import './index.css'

const mars = require('../../public/img/logo.png')
const earth = require('../../public/img/earth.png')
const satellite = require('../../public/img/satellite.png')

const Intro = () => (
  <div className="intro">
    <div className="intro_title">Adventure Mission</div>
    <div className="intro_subtitle">Human missions to Mars are moving from the realm of science fiction to science fact. Adventure will be a mission to improve the way we communicate with astronaouts on Mars based on quantum entanglement</div>
    <div className="intro_animation">
      <img src={earth} alt=""></img>
      <img src={satellite} alt=""></img>
      <img src={mars} alt=""></img>
    </div>
  </div>
)

export default Intro