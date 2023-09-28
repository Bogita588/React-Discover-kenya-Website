// Search.js
import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [companyQuery, setCompanyQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = () => {
    onSearch({
      searchQuery,
      companyQuery,
      locationQuery,
      sortBy,
    });
  };

  return (
    <div className="searchDiv grid gap-10 bg-Silver rounded-[10px] p-[3rem] md:p-[1rem]" id="search">
      <form action="">
        <div className="firstDiv flex flex-col md:flex-row justify-between items-center rounded-[8px] bg-white p-5 shadow-lg shadow-Silver-700">
          <div className="mb-4 md:mb-0 flex gap-2 items-center w-full md:w-[300px]">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Internship"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor-icon cursor-pointer"
                onClick={() => setSearchQuery('')}
              />
            )}
          </div>
          <div className="mb-4 md:mb-0 flex gap-2 items-center w-full md:w-[300px]">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by Company"
              value={companyQuery}
              onChange={(e) => setCompanyQuery(e.target.value)}
            />
            {companyQuery && (
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor-icon cursor-pointer"
                onClick={() => setCompanyQuery('')}
              />
            )}
          </div>
          <div className="mb-4 md:mb-0 flex gap-2 items-center w-full md:w-[300px]">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by Location"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            {locationQuery && (
              <AiOutlineCloseCircle
                className="text-[30px] text-[#a5a6a6] hover:text-textColor-icon cursor-pointer"
                onClick={() => setLocationQuery('')}
              />
            )}
          </div>
          <button
            className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-purple"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex flex-col md:flex-row items-center gap-10 justify-center">
        <div className="singleSearch mb-4 md:mb-0 flex gap-2 items-center">
          <label htmlFor="sortBy" className="text-[#800800] font-semibold">
            Sort by:
          </label>
          <select
            name="sortBy"
            id="sortBy"
            className="bg-white rounded-[3px] px-4 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Duration</option>
            <option value="duration">6 months</option>
            <option value="duration">3 months</option>
            <option value="duration">1 Year</option>
            <option value="duration">One Month</option>
          </select>
        </div>
        <div className="singleSearch mb-4 md:mb-0 flex gap-2 items-center">
          <label htmlFor="type" className="text-[#800800] font-semibold">
            Type:
          </label>
          <select
            name="type"
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Fully On-Site</option>
            <option value="">Hybrid</option>
            <option value="">Fully Remote</option>
            <option value="">Part-time</option>
          </select>
        </div>
        <div className="singleSearch mb-4 md:mb-0 flex gap-2 items-center">
          <label htmlFor="level" className="text-[#800800] font-semibold">
            Level:
          </label>
          <select
            name="level"
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Level</option>
            <option value="level">Graduate Trainee</option>
            <option value="level">Internship</option>
            <option value="level">Junior</option>
          </select>
        </div>
        <span className="text-[red bold-500] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
