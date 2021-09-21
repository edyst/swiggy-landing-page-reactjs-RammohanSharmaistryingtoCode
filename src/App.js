import React, { Component } from 'react';
 import Jumbo from './Components/Jumbo/Jumbo.js'
import './App.css';
import Features from './Components/features/Features';
import Restaurants from './Components/Restaurants/Restaurants.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Jumbo/>
        <Features/>
        <Restaurants/>
        <Footer />
      </div>
    );
  }
}

export default App;
