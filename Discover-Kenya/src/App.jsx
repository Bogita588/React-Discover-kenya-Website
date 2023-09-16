import React from 'react';


import { About, Faq, Footer, Innovations, Internships, Navigation, Search, Contacts, Home } from './components';
import './App.css';

const App = () => (
  <div>
    <Navigation />
    <Home />
     <About />
    <Search />
    <Internships />
    <Contacts />
    <Innovations />
    <Faq />
    <Footer />

   

    
    
  </div>
);

export default App;
