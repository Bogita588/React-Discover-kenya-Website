import React, { useState, useEffect } from 'react';

import './home.css';


import intern from './intern.jpg'

const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundImages = [ intern]; // Use the imported variables

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
    <header className="header" style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }} id="home">
      <div className="header-content">
        <h1>Welcome to InternKenya, a Hub of opportunities for Graduates & Students!</h1>
        <p>Your Premier Destination for Internship and Attachment Opportunities</p>
        <a href="#internships" className="explore-button">Explore Internships</a>
      </div>
    </header>
  );
};

export default Home;
