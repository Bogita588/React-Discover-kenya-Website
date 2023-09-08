import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md' 

import './App.css'

import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import CountiesList from './components/CountiesList/Counties'

import Search from './components/Search/Search';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Services from './components/Services/Services';
import Historical from './components/Historical/Historical';

function App() {
  

  return (
    
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/counties" component={CountiesList} />
      <Route path="/about" component={About} />
      <Route path="/cntyservices" exact component={Services} />
      <Route path="/events" exact component={Events} />
      <Route path="/places" exact component={Historical} />
      {/* Add more routes for other sections */}
    </Routes>
  </Router>
      
  )
}

export default App
