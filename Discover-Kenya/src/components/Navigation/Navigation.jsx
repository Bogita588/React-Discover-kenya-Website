

      import  { useState } from 'react';

import './navigation.css'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

 const Menu = () => (
  <>

   

      <p><a href="#home">Home</a></p>
      <p><a href="#Innovations">Our Mission</a></p>
      <p><a href="#about">About</a></p>
      <p><a href="#Internships">Internships</a></p>
      <p><a href="#contact">Contact</a></p>
      <p><a href="#faq">FAQ</a></p>
      <p><a href="#search">Search</a></p>
      <p><a href="#footer">Footer</a></p>

      
  
          
  </>
 )

 const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/*<img src={logo} alt="logo" />*/}
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>

      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='blue' size ={28} onClick={() => setToggleMenu (false)} />
        : <RiMenu3Line color='violet' size ={28} onClick={() => setToggleMenu (true)} />

        }
        { /* Add mobile menu */}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type='button'>Sign up</button>

      </div>


            </div>
          </div>
        )}
        

      </div>
    </div>
  )
}
export default Navigation
