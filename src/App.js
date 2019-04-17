import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <div className="logo">
            <a><img src="h.jpg" alt="logo"/></a>
          </div>
          <nav>
            <a href="#" className="nav-item">About</a>
            <a href="#" className="nav-item">Portfolio</a>
            <a href="#" className="nav-item contact">Contact</a>
            <a href="https://github.com/t4kaha00" className="nav-item">Github</a>
          </nav>
        </div>

        <div className="content">
          <div className="portfolio">
            <div className="portfolio-item one"></div>
            <div className="portfolio-item two"></div>
            <div className="portfolio-item three"></div>
            <div className="portfolio-item four"></div>
            <div className="portfolio-item five"></div>
            <div className="portfolio-item six"></div>
            <div className="portfolio-item seven"></div>
            <div className="portfolio-item eight"></div>    
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
