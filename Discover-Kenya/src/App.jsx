import React, { useState } from 'react';


import { About, Faq, Footer, Innovations, Internships, Navigation, Search, Contacts, Home } from './components';
import './App.css';

function App() {
  // Define state to hold filter and search-related information
  const [searchData, setSearchData] = useState({
    searchQuery: '',
    companyQuery: '',
    locationQuery: '',
    sortBy: '',
  });

  // Function to handle search and filter changes from the Search component
  const handleSearch = (searchFilters) => {
    setSearchData(searchFilters);
  };

return (
  <div>
    <Navigation />
    <Home />

    
      {/* Render the Search component and pass the handleSearch function as a prop */}
      <Search onSearch={handleSearch} />

      {/* Render the Internship component and pass searchData as props */}
      <Internships
        searchQuery={searchData.searchQuery}
        companyQuery={searchData.companyQuery}
        locationQuery={searchData.locationQuery}
        sortBy={searchData.sortBy}
      />
     <About />

    <Contacts />
    <Innovations />
    <Faq />
    <Footer />

   

    
    
  </div>
);
}
export default App;
