import React from 'react';
import './index.css'

const mars = require('../../public/img/logo.png')
const earth = require('../../public/img/earth.png')
const satellite = require('../../public/img/satellite.png')
const entang = require('../../public/img/entang.png')
const sat = require('../../public/img/sat.jpeg')
const ins = require('../../public/img/installation.jpg')
const code = require('../../public/img/code.jpg')

const Solution = () => (
  <div className="solution">
    <div className="solution_title">Our Solution</div>
    <div className="solution_subtitle">Quantum entanglement offers us a new form of communication, using entangled photons. Just as Juan Yin and his collaborators did when placing a satellite that communicated two cities 1203km apart. In this experiment they used a system that allowed them to generate entangled pairs of photons by sending one to each city. This same principle can be used between Earth and Mars.</div>
    <div className="solution_animation">
      <img src={mars} alt=""></img>
      <img src={satellite} alt=""></img>
      <img src={earth} alt=""></img>
    </div>
    <div className="right">
      <img src={entang} alt=""></img>
      <div className="Right-card">
        <strong> Quantum entanglement:</strong> 
        <div>
        Quantum entanglement, first recognized by Einstein, Podolsky, and Roson and Schrödinger, is a physical phenomenon in which the quantum states of a many-particle system cannot be factorized into a product of single-particle wave functions, this means that the pair of photons, that we mencioned before, will be entangled. If you observe the state of one of the photons, the state of the other photon is setted. 
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>Adventure Satellite</strong> 
        <div>
        Adventure will place a satellite in the orbit of the earth, which will generate a pair of entangled photons, one of them will be sent to Mars and another to a facility on Earth. Where you can observe the state on Mars and the state of the other photon changes on earth. And where you can observe the state on earth and the state of the other changes on Mars.
        </div>
      </div>
      <img src={sat} alt=""></img>
    </div>
    <div className="bar"></div>
    <div className="right">
      <img src={earth} alt=""></img>
      <div className="Right-card">
        <strong>Our installation on earth:</strong> 
        <div>
        In our installation on earth, the photons produced on the satellite will be received and stored in a mirrored circuit. This circuit must be as optimal as possible, so taking into account that the mirrors have a reflectivity index, which will make the intensity of the light decrease, a circuit will have to be made with the minimum number of mirrors. So a triangle is the most viable solution.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>Our installation on mars:</strong> 
        <div>
        As on earth, Mars will have a similar station, but at this station before the photons are introduced into the circuit they must be amplified and solutions will have to be found to reduce the noise.
        </div>
      </div>
      <img src={ins} alt=""></img>
    </div>
    <div className="bar"></div>
    <div className="right">
      <img src={code} alt=""></img>
      <div className="Right-card">
        <strong>Ecoding the light:</strong> 
        <div>
        The satellite, before sending the entangled photons, will send a signal with a different and established wavelength, in this way we will know where the message begins. Within the cycle, a small fraction of the photons will hit a metal plate generating the photoelectric effect, and will be activated until it generates a certain voltage caused by the initial wavelength. When the system starts, the message will be read observing. This will be encrypted in binary and sent to a computer, then astronauts will write on the computer, which will write the message on the other cycle.
        </div>
      </div>
    </div>
  </div>
)

export default Solution