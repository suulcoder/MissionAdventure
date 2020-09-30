import React from 'react';
import './index.css'

const rocket = require('../../public/img/rocket.png')
const communication = require('../../public/img/communication.png')
const light = require('../../public/img/light.webp')
const mars = require('../../public/img/logo.png')
const inter = require('../../public/img/inter.gif')
const rotation = require('../../public/img/rotation.gif')
const lightGIF = require('../../public/img/light.gif')

const Background = () => (
  <div className="background">
    <div className="right">
      <img src={rocket} alt=""></img>
      <div className="Right-card">
        <strong> Between Earth and Mars:</strong> 
        <div>
        Conquering Mars has always been a dream for humanity. 
        We have dreamed of the moment when the first individual 
        steps on the surface of the red planet.
        The distance between the earth and the sun is approximately
         8 light minutes. And the distance between Mars and the sun
          is 11 light minutes. So the minimum duration that may 
          exist between Earth and Mars is 4 light minutes.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>What is light?</strong> 
        <div>
        Light is nothing more than a bunch of photons that behave like waves. And these waves have a property known as wavelength, this length determines whether the light belongs to radio waves, microwaves, infrared or the light that we can observe. You can see this in the diagram below.
        </div>
      </div>
      <img src={lightGIF} alt=""></img>
    </div>
    <div className="bar"></div>
    <img className="light" src={light} alt=""></img>
    <div className="bar"></div>
    <div className="right">
      <img src={communication} alt=""></img>
      <div className="Right-card">
        <strong>Communication, how we do it?</strong> 
        <div>
        Now that we know what light is, you should know that we use light to send messages. These messages are encrypted in 0's and 1's.
        Thanks to this we send messages that move at the speed of light.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>What's going on with this and Mars?</strong> 
        <div>
        Well, as we mentioned before, the minimum distance between Mars and the earth is 4 light minutes, that is, in the best of cases, a message would take 4 minutes from here to Mars. But on average a message takes 20 minutes round trip. Now imagine surfing the internet if it took 20 minutes per instruction?
        </div>
      </div>
      <img src={mars} alt=""></img>
    </div>
    <div className="bar"></div>
    <div className="right">
      <img src={inter} alt=""></img>
      <div className="Right-card">
        <strong>Other problems with this method</strong> 
        <div>
        As we said, we communicate using light, but the light waves add and subtract from each other, we call this interference, (as shown in the GIF). In space many light waves are emitted, the planets emit light, the sun emits light, etc. Then there is interference with the messages, so you cannot send very long messages.
        </div>
      </div>
    </div>
    <div className="bar"></div>
    <div className="left">
      <div className="Left-card">
        <strong>More problems</strong> 
        <div>
        Both the earth and Mars rotate on their own axis (rotation). This means that at times of day our emitters are not pointing towards Mars, or our receivers on Mars are not looking towards Earth.
        </div>
      </div>
      <img className="rot" src={rotation} alt=""></img>
    </div>
  </div>
)

export default Background