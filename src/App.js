import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Document, Page } from 'react-pdf';
import resume from './resume.pdf'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      open : true,
      value: '',
      numbers: [1, 125, 24, 500] 
    };
  }

  // Updates the value everytime there is a change in the input field
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };

  // Adds the value from input field to the numbers array
  AddItem = () => {
    this.setState( state => {
      if(this.state.value.length > 0){
        // Adds the input value to the numbers array
        const numbers = state.numbers.concat(state.value);
        
        return {
          numbers,
          value: '',
        };
      } else {
        // Input validation for null value
        window.alert("Please input a value");
      }
    });

  };

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

        {/* Sorted arrays list with input */}
        <div className="content">
          <input 
            type="number" value={this.state.value} onChange={this.onChangeValue} />
          <br />
          <button type="button" onClick={this.AddItem} >Add</button>
          <br />
          <br />
          {/* Sorts the array of numbers in a descending order and maps it as a list */}
          {this.state.numbers.sort((a, b) => b - a ).map( (item, i) => (
            <li key={i}> {item}  </li>
          ))}
          <div>
            {/* Prints the second value from the sorted array which is in descending order */}
            <p>The second largest number is {this.state.numbers[1]}</p>
          </div>
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
