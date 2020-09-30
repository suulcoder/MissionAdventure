import React from 'react';
import './index.css'

const logo = require('../../public/img/logo.png')
const spaceapps_logo = require('../../public/img/SquareBlack.png')

const Header = () => (
  <div className="header">
    <div className="header_section">
      <img src={logo} alt=""></img>
      <div className="header_title">ADVENTURE</div>
    </div>
    <button onClick={()=>window.location = "https://2020.spaceappschallenge.org/challenges/connect/can-you-hear-me-now/teams/adventure/project"}>
      <img src={spaceapps_logo} alt=""></img>
    </button>
  </div>
)

export default Header