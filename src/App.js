import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { open : true };
  }

  hide() {
    // Changes the state to opposite of current state
    this.setState({
      open: !this.state.open
    });
    
    setTimeout(function(){
      console.log("clicked");
    }, 1000);
    
  }

  render() {
    
    var open = {
      // Changes the visibility from visible to collapsed. Collapsed is used to maintain the content area
      visibility: this.state.open ? "visible" : "collapse"
    };

    return (
      <div className="App">
      {/* Sidebar */}
        <div className="sidebar">
        {/* Logo */}
          <div className="logo">
            <a><img src="h.jpg" alt="logo"/></a>
          </div>
          {/* Navigation */}
          <nav>
            <a href="#" className="nav-item">About</a>
            <a href="#" className="nav-item">Portfolio</a>
            <a href="#" className="nav-item contact">Contact</a>
            <a href="https://github.com/t4kaha00" className="nav-item">Github</a>
          </nav>
        </div>

        {/* Content Area */}
        <div className="content">
          <div className="portfolio">
            <div className="portfolio-item one" style={open} onClick={this.hide.bind(this)}></div>
            <div className="portfolio-item two"></div>
            <div className="portfolio-item three"></div>
            <div className="portfolio-item four"></div>
            <div className="portfolio-item five"></div>
            <div className="portfolio-item six"></div>
            <div className="portfolio-item seven"></div>
            <div className="portfolio-item eight"></div>
            <div className="portfolio-item nine"></div>    
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
