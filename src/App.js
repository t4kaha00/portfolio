import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf';
import resume from './resume.pdf'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { open : true };
  }

  render() {
    return (
      <div className="App">
      <Router>
        {/* Sidebar */}
        <div className="sidebar">
        
          {/* Logo */}
          <div className="logo">
            <a><img src="h.jpg" alt="logo"/></a>
          </div>
          
          {/* Navigation */}
            <nav>  
                <Link to="/" className="nav-item">About</Link>
                <Link to="/portfolio" className="nav-item">Portfolio</Link>
                <a href="mailto:hkarmacharya@gmail.com" className="nav-item contact">Contact</a>
                <a href="https://github.com/t4kaha00" className="nav-item">Github</a>
            </nav>
        </div>

        <Route exact path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Router>

       

      </div>
    );
  }
}

function Portfolio() {
 
  return (
    //  Content area
     <div className="content">
     <div className="portfolio">
       <div className="portfolio-item one" ></div>
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
  );
}

function About() {

}

function Contact() {

}

export default App;
