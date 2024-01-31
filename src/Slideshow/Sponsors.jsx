// Sponsors.jsx

import React from 'react';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="sponsor-category">
        <h2>Sponsors & Partners</h2>
        <div className="sponsor-images">
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo4.jpg" alt="Sponsor Logo 1" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo3.jpg" alt="Sponsor Logo 2" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo9.jpg" alt="Sponsor Logo 3" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/new/rntu.jpeg" alt="Sponsor Logo 4" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo2.jpg" alt="Sponsor Logo 5" />
          {/* Add more sponsor images */}
        </div>
      </div>

      <div className="sponsor-category">
        <h2>Medical Partner</h2>
        <div className="sponsor-images">
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo13.jpg" alt="Medical Partner Logo 1" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo14.jpg" alt="Medical Partner Logo 2" />
          {/* Add more medical partner images */}
        </div>
      </div>

      <div className="sponsor-category">
        <h2>Supporter</h2>
        <div className="sponsor-images">
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo5.jpg" alt="Supporter Logo 1" />
          <img src="https://www.runbhopalrun.com/assets/website/sponserlogo/logo6.jpg" alt="Supporter Logo 2" />
          {/* Add more supporter images */}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
