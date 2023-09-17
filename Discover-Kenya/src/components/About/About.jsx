import React from 'react';

const About = () => {
  return (
    <div className="about-us">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-grid">
        <div className="grid-item">
          <h3>Mission</h3>
          <p>
            Our mission at InternKenya is to connect ambitious students and graduates with exceptional internship and attachment opportunities across Kenya. We believe that meaningful internships are the stepping stones to a successful career, and we're dedicated to making these opportunities accessible to all.
          </p>
        </div>
        <div className="grid-item">
          <h3>About Us</h3>
          <p>
            At InternKenya, we're passionate about fostering talent and nurturing the future workforce. With years of experience in the industry, our team is committed to bridging the gap between students and employers. We provide a platform where students can explore, apply for, and excel in internships that match their skills and aspirations.
          </p>
        </div>
        <div className="grid-item">
          <h3>Word from the CEO</h3>
          <p>
            As the CEO of InternKenya, I'm thrilled to lead a team dedicated to empowering the youth of Kenya. Our vision is to create a brighter future for students and graduates by offering them valuable experiences and connections that will propel their careers. Together, we can shape a workforce that's ready to tackle the challenges of tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
