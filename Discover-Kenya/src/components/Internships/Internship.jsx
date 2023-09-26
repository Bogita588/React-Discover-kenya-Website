import React from 'react';

const internshipPositions = [
  {
    imageSrc: './java_programming.jpg', // Assuming the image is in the same folder
    title: 'Java Programming Internship',
    description: 'Join our team as a Java Programming intern and work on exciting projects.',
  },
  {
    imageSrc: './web_design.jpg',
    title: 'Web Design Internship',
    description: 'Learn web design techniques and collaborate on real client projects.',
  },
  {
    imageSrc: './marketing.jpg',
    title: 'Marketing Internship',
    description: 'Develop marketing strategies and promote innovative products.',
  },
  {
    imageSrc: './data_analysis.jpg',
    title: 'Data Analysis Internship',
    description: 'Analyze data, generate insights, and contribute to data-driven decisions.',
  },
  {
    imageSrc: './frontend_development.jpg',
    title: 'Frontend Development Internship',
    description: 'Create user-friendly interfaces and work with cutting-edge technologies.',
  },
  {
    imageSrc: './graphic_design.jpg',
    title: 'Graphic Design Internship',
    description: 'Design visually appealing graphics and illustrations for various projects.',
  },
];

function Internship() {
  const handleApplyClick = () => {
    // Implement the apply functionality, e.g., open an application form
  };

  return (
    <div className="internship-list">
      <h1>Internship Positions</h1>
      <div className="internship-grid">
        {internshipPositions.map((position, index) => (
          <div className="internship-card" key={index}>
            <img src={position.imageSrc} alt={position.title} className="internship-image" />
            <div className="internship-details">
              <h3 className="internship-title">{position.title}</h3>
              <p className="internship-description">{position.description}</p>
              <button className="apply-button" onClick={handleApplyClick}>
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Internship;
