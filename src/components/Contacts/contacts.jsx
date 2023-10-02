import React, { useState } from 'react';
import './ContactUs.css'; 
import { FaPaperPlane } from 'react-icons/fa';

const   Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumberCode: '',
    phoneNumber: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitted(true);

    // Clear the form data after submission
    setFormData({
      name: '',
      email: '',
      phoneNumberCode: '',
      phoneNumber: '',
      message: '',
    });

    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 10000); 
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Phone: Select from national phone numbers</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        {isSubmitted && (
          <p className="success-message">Form Submitted Successfully</p>
        )}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumberCode">Phone Number Code:</label>
          <select
            id="phoneNumberCode"
            name="phoneNumberCode"
            value={formData.phoneNumberCode}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a National Phone Code
            </option>
            <option value="+2547">+254 (KEN)</option>
            
            
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Your Phone Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit">Send Message <FaPaperPlane /></button>
      </form>
    </div>
  );
};

export default Contacts;
