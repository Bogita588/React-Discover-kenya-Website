// Internship.js
import React, { useState, useEffect } from 'react';
import { FaBuilding, FaMapMarker, FaRegClock } from 'react-icons/fa';




const Internship = ({ searchQuery, companyQuery, locationQuery, sortBy }) => {
  // Sample job data (add more jobs as needed)
  const jobsData = [
    {
      title: 'Software Developer Intern',
      location: 'New York, NY',
      company: 'TechCo Inc.',
      timePosted: '2 days ago',
      description:
        'TechCo Inc. is seeking a software developer intern to join our team. This internship...',
      duration: '6 months',
      type: 'Fully On-Site',
    },
    {
      title: 'Marketing Intern',
      location: 'San Francisco, CA',
      company: 'MarketingPro',
      timePosted: '1 week ago',
      description:
        'MarketingPro is looking for a talented marketing intern to assist with various marketing campaigns...',
      duration: '3 months',
      type: 'Hybrid',
    },
    {
      title: 'Software Developer Intern',
      location: 'San Francisco, CA',
      company: 'Tech Solutions Inc.',
      timePosted: '1 day ago',
      description:
        'Tech Solutions Inc. is seeking a Software Developer Intern to join our innovative team. This internship offers hands-on experience in web and mobile application development using the latest technologies.',
      duration: '3 months',
      type: 'Fully Remote',
    },
    {
      title: 'Software Engineering Intern',
      location: 'New York, NY',
      company: 'CodeCrafters Co.',
      timePosted: '2 days ago',
      description:
        'CodeCrafters Co. is looking for a Software Engineering Intern to assist in the development of our cutting-edge software solutions. You will work closely with our engineering team and gain exposure to various programming languages and frameworks.',
      duration: '6 months',
      type: 'Hybrid',
    },
    {
      title: 'Frontend Developer Intern',
      location: 'Los Angeles, CA',
      company: 'Web Wizards LLC',
      timePosted: '3 days ago',
      description:
        'Web Wizards LLC is searching for a Frontend Developer Intern who is passionate about creating responsive and user-friendly web interfaces. This internship provides the opportunity to work on real client projects and enhance your frontend development skills.',
      duration: '4 months',
      type: 'Fully On-Site',
    },
    {
      title: 'Software Development Internship',
      location: 'Chicago, IL',
      company: 'Tech Innovators Corp.',
      timePosted: '4 days ago',
      description:
        'Tech Innovators Corp. invites Software Development Internship applicants to join our team. You will have the chance to collaborate on exciting projects, develop software applications, and gain practical experience in the software development industry.',
      duration: '3 months',
      type: 'Fully Remote',
    },
    {
      title: 'Backend Developer Intern',
      location: 'Boston, MA',
      company: 'DataDriven Solutions Ltd.',
      timePosted: '5 days ago',
      description:
        'DataDriven Solutions Ltd. is seeking a Backend Developer Intern who will work on building robust server-side applications and optimizing data processes. This internship offers the opportunity to work with data engineers and backend developers on challenging projects.',
      duration: '6 months',
      type: 'Hybrid',
    },
  ];
  
  
  const sortJobs = (jobs, sortBy) => {
   
    return jobs;
  };

  
  const [filteredAndSortedJobs, setFilteredAndSortedJobs] = useState([]);

  useEffect(() => {
    const filteredJobs = jobsData.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        job.company.toLowerCase().includes(companyQuery.toLowerCase()) &&
        job.location.toLowerCase().includes(locationQuery.toLowerCase())
      );
    });

    const sortedJobs = sortJobs(filteredJobs, sortBy);

    setFilteredAndSortedJobs(sortedJobs);
  }, [searchQuery, companyQuery, locationQuery, sortBy]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="internships">
      {filteredAndSortedJobs.map((job, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md hover:bg-Silver -100 transition-colors duration-300 flex flex-col justify-center items-center"
        >
          <h2 className="text-lg text-purple font-semibold mb-2">{job.title}</h2>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <FaMapMarker className="mr-1" />
            {job.location}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <FaBuilding className="mr-1" />
            {job.company}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <FaRegClock className="mr-1" />
            {job.timePosted}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span className="mr-1">Duration:</span>
            {job.duration}
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <span className="mr-1">Type:</span>
            {job.type}
          </div>
          <hr className="w-full border-t border-gray-200 my-2" />
          <p className="text-sm text-gray-700 my-2 text-center">{job.description}</p>
          <button className="bg-blueColor text-white px-4 py-2 rounded-md hover:bg-purple transition-colors duration-300">
            Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default Internship;
