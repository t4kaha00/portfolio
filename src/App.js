import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="logo">
            <span>My Portfolio</span>
          </div>
          <nav>
            <a href="#" className="nav-item">Home</a>
            <a href="#" className="nav-item">About</a>
            <a href="#" className="nav-item">Portfolio</a>
            <a href="#" className="nav-item">Contact</a>
          </nav>
        </div>

        <div className="content">
          <div className="portfolio">
            <div class="portfolio-item one"></div>
            <div class="portfolio-item two"></div>
            <div class="portfolio-item three"></div>
            <div class="portfolio-item four"></div>
            <div class="portfolio-item five"></div>
            <div class="portfolio-item six"></div>
            <div class="portfolio-item seven"></div>
            <div class="portfolio-item eight"></div>    
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
