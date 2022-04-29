import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <div className='resume'>
          {/* Left column */}
          <div className='left'>
            {/* Details */}
            <div className='col1-row1 details'>
              <div className='col1-row1-row'>
                <h1>Harjit Karmacharya</h1>
                <h4>IT ENGINEER</h4>
              </div>
              <div className='col1-row1-row'>
                <div className='col1-row1-row-row1'>
                  <img src="gmail.png" alt="mail" width="20px"/>
                  <a href="mailto:hkarmacharya@gmail.com">Gmail</a>
                </div>
                <br/>
                <div className='col1-row1-row-row1'>
                  <img src="linkedin2.png" alt="linkedin" width="20px"/>
                  <a href='http://www.linkedin.com/in/harjit-karmacharya'>LinkedIn</a>
                </div>
                <br/>
                <div className='col1-row1-row-row1'>
                  <img src="github.png" alt="github" width="20px"/>
                  <a href='https://github.com/t4kaha00'>Github</a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className='col1-row2 skills'>
              <div className='col1-row2-row'>
               <h2><u>SKILLS</u></h2>
              </div>
              <div className='col1-row2-row'>
                <p>Mobile development</p>
                <ul><li>Android studio</li></ul>
              </div>
              <div className='col1-row2-row'>
                <b>Game development</b>
                <ul><li>Unity, Blender</li></ul>
              </div>
              <div className='col1-row2-row'>
                <b>Web Development</b>
                <ul>
                  <li>Angular, Meteor, React</li>
                  <li>Typescript, Express</li>
                  <li>Python, Java</li>
                </ul>
              </div>
              <div className='col1-row2-row'>
                <b>Cloud Managament</b>
                <ul>
                  <li>AWS, Docker</li>
                </ul>
              </div>
              <div className='col1-row2-row'>
                <b>Hardware</b>
                <ul>
                  <li>Arduino</li>
                  <li>Lego Robots</li>
                  <li>GoPiGo</li>
                </ul>
              </div>
            </div>
            {/* Languages */}
            <div className='col1-row3 languages'>
              <div className='col1-row3-row'>
                <h2><u>Languages</u></h2> 
              </div>
              <div className='col1-row3-row'>
                <div>
                  <p>English</p>
                  <p className='dots'>••••◦</p>
                </div>
                <div>
                  <p>Finnish</p>
                  <p className='dots'>••◦◦◦</p>
                </div>
                <div>
                  <p>Nepali</p>
                  <p className='dots'>•••••</p>
                </div>
                <div>
                  <p>Hindi</p>
                  <p className='dots'>••••◦</p>
                </div>
              </div>
            </div>
            {/* Live Projects */}
            <div className='col1-row4 live-projects'>
              <div className='col1-row4-row'>
                <h2><u>LIVE PROJECTS</u></h2>
              </div>
              <div className='col1-row4-row'>
                <ul>
                  <li>
                    <a href='https://nadaasi.com'><img src='nadaasi.png' width={100}/></a>
                  </li>
                  <br/>
                  <li>
                    <a href='https://lianatech.herokuapp.com'><img src='liana.svg' width={100}/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='right'>
            <div className='col2-row1'>
              {/* Education */}
              <h2 className='col2-row1-row right-heading2'><u>EDUCATION HISTORY</u></h2>
              <div className='col2-row1-row ouas'>
                <div>
                  <a href='https://www.oamk.fi/'>
                    <div className='col2-row1-row-row'>
                      <h4 className='heading1'>Bachelors of Engineering in Information and Communications Technology</h4>
                      <p>Aug 2014 - Aug 2020</p>
                    </div>
                    <div className='col2-row1-row-row'>
                      <h3>Oulu University of Applied Sciences</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row1-row dit'>
                <div>
                  <a href='https://www.tudublin.ie/'>
                    <div className='col2-row1-row-row'>
                      <h4 className='heading1'>Bachelors in Computer Science</h4>
                      <p>Sep 2016 - May 2017</p>
                    </div>
                    <div className='col2-row1-row-row'>
                      <h3>Dublin Institute of Technology</h3>
                      <i>Erasmus Computing</i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col2-row2'>
              {/* Work */}
              <h2 className='right-heading2'><u>WORK EXPERIENCE</u></h2>
              <div className='col2-row2-row cajo'>
                <div>
                  <a href='https://cajotechnologies.com/'>
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>IMAGE MODIFICATION PORTAL</h4>
                      <p>Jan 2017 - April 2017</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>Cajo Oy</h2>
                      <ul>
                        <li><p>Mapping images into 3D objects online</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row2-row nepgo'>
                <div>
                  <a href='https://www.nepgo.com/'>
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>ANDROID APPLICATION</h4>
                      <p>Jan 2017 - Mar 2017</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>Nepgo Oy</h2>   
                      <ul>
                        <li><p>A demo android application for the startup company oriented for charities</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row2-row nadaasi'>
                <div>
                  <a href='https://nadaasi.com/'>
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>WEBSHOP</h4>
                      <p>Jun 2020 - Dec 2020</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>Nadaasi Oy</h2>
                      <ul>
                        <li><p>Modern webshop based on javascript and mngoDB</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row2-row nclean'>
                <div>
                  <a href='https://nadaasi.com/'>
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>SUPERVISOR</h4>
                      <p>Jan 2019 - Apr 2021</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>Nclean Oy</h2>
                      <ul>
                        <li><p>Managing the housekeeping department for client hotels (Aalto Inn, Unihome Oy)</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col2-row3'>
              {/* Projects */}
              <h2 className='col2-row3-row right-heading2'><u>PROJECTS</u></h2>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>MOVIE SEAT BOOKING SYSTEM</b></p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 1st semester project</i></p> 
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                <p><b>PC game </b>(Unity)</p>                
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 2nd semester project</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                <p><b>Mealting </b>(Metero JS)</p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 4th semester project</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                <p><b>Easy Cook </b>(Android)</p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 6th semester project</i></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      {/* <Router> */}
        {/* Sidebar */}
        {/* <div className="sidebar"> */}
        
          {/* Logo */}
          {/* <div className="logo">
            <a><img src="h.jpg" alt="logo"/></a>
          </div> */}
          
          {/* Navigation */}
            {/* <nav>  
                <Link to="/" className="nav-item">About</Link>
                <Link to="/portfolio" className="nav-item">Portfolio</Link>
                <a href="mailto:hkarmacharya@gmail.com" className="nav-item contact">Contact</a>
                <a href="https://github.com/t4kaha00" className="nav-item">Github</a>
            </nav> */}
        {/* </div> */}
        {/* <Route exact path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} /> */}
        {/* </Router> */}

       

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
  return(
    <div className="content">
     <div className="portfolio">
      asdfasdfasdf
     </div>
   </div>
  );
  
}

function Contact() {

}

export default App;
