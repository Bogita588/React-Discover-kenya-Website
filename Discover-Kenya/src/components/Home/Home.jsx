import React, { useState, useEffect } from 'react';

import './home.css';
import Nairobi1 from './Nairobi1.jpeg'; // Import the images correctly
import Nairobi3 from './Nairobi3.jpeg';
import Nyamira1 from './Nyamira1.jpg';
import eagle from './eagle.jpg';
import light from './light.jpg';

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImages = [Nairobi1, eagle, light, Nairobi3, Nyamira1]; // Use the imported variables

  useEffect(() => {
    // Function to cycle through background images
    const cycleBackground = () => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    // Set an interval to change the background every 5 seconds (adjust as needed)
    const interval = setInterval(cycleBackground, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}>
      <div className="header-content">
        <h1>Welcome to InternKenya, a Hub of opportunities for Students!</h1>
        <p>Your Premier Destination for Internship and Attachment Opportunities</p>
        <a href="#explore" className="explore-button">Explore Internships</a>
      </div>
    </header>
  );
};

export default Home;
