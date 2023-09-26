import React, { useState } from 'react';
import './search.css'
import { FaSearch, FaBuilding, FaMapMarker } from 'react-icons/fa';

const Search = ({ onSearch, onSortChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [companyQuery, setCompanyQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = () => {
    // Pass the filter values to the parent component for searching
    onSearch({
      searchQuery,
      companyQuery,
      locationQuery,
    });
  };

  return (
    <div className="search-filter">
      <form action=''>
      <div className="filter-bar">
        
      <FaSearch onClick={handleSearch} />
        <input
          type="text"
          placeholder="Search by internship position"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaBuilding />
        <input
          type="text"
          placeholder="Search by company"
          value={companyQuery}
          onChange={(e) => setCompanyQuery(e.target.value)}
        />
        <FaMapMarker />
        <input
          type="text"
          placeholder="Search by location"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
        

        <button onClick={handleSearch}>Search</button>
      </div>


      </form>
      
      <div className="filter-options">
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select</option>
            <option value="level">Level</option>
            <option value="type">Type</option>
            <option value="date">Date</option>
            <option value="duration">Duration</option>
            <option value="stipend">Stipend</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select</option>
            <option value="level">Level</option>
            <option value="type">Type</option>
            <option value="date">Date</option>
            <option value="duration">Duration</option>
            <option value="stipend">Stipend</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Select</option>
            <option value="level">Level</option>
            <option value="type">Type</option>
            <option value="date">Date</option>
            <option value="duration">Duration</option>
            <option value="stipend">Stipend</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Search;
