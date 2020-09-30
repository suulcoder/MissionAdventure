import React from 'react';
import './index.css'

const dsn = require('../../public/img/dsn.png')

const DSN = () => (
  <div className="dsn">
    <div className="dsn_title">DEEP SPACE NETWORK (DSN)</div>
    <a className="dsn_title_button" href="https://www.nasa.gov/directorates/heo/scan/services/networks/deep_space_network/about/"> click here for more information</a>
    <div className="dsn_text">
      <p>
      The DSN is the international array of giant radio antennas. It consists of three facilities spaced equidistant from each other – approximately 120 degrees apart in longitude – around the world. These sites are at Goldstone, near Barstow, California; near Madrid, Spain; and near Canberra, Australia. The strategic placement of these sites permits constant communication with spacecraft as our planet rotates – before a distant spacecraft sinks below the horizon at one DSN site, another site can pick up the signal and carry on communicating.
      The NASA uses this system to communicate with Mars.
      </p>
      <p>There are a number of limitations to the current DSN, and a number of challenges going forward:
      </p>
    <p>
    - The need to support "legacy" missions that have remained operational beyond their original lifetimes but are still returning scientific data.
    </p>
    <p>
    - Replacing major components can cause problems as it can leave an antenna out of service for months at a time.
    </p>
    <p>
    - The older 70M antennas are reaching the end of their lives. At some point these will need to be replaced.
    </p>
    <p>
    - New spacecraft intended for missions beyond geocentric orbits are being equipped to use the beacon mode service, which allows such missions to operate without the DSN most of the time.
    </p>
    </div>
    <img className="dsn_img" src={dsn} alt=""></img>
  </div>
)

export default DSN