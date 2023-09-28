import React, { useState } from 'react';



import { About, Faq, Footer, Innovations, Register, Internships, Navigation, Search, Contacts, Home } from './components';
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
    <Navigation  />
    <Home />

    
      
      <Search onSearch={handleSearch} />
      

     
      <Internships
        searchQuery={searchData.searchQuery}
        companyQuery={searchData.companyQuery}
        locationQuery={searchData.locationQuery}
        sortBy={searchData.sortBy}
      />
     <About />
    <Register />
    <Contacts />
    
    <Innovations />
    <Faq />
    <Footer />

   

    
    
  </div>
);
}
export default App;
