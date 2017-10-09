import React, { Component } from 'react';
import './index.css'


import Description from './components/Description.jsx'
import MenuList from './components/MenuList.jsx'
import LocationList from './components/LocationList.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import SplashImage from './components/SplashImage.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <SplashImage />
          <Description />
          <MenuList />
          <LocationList />
          <Contact />
       
      </div>

    );
  }
}

export default App;