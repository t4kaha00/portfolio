import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Fibonacci from './Fibonacci'



class App extends Component {
  constructor() {
    super();
    this.state = { 
      // open : true,
      // value: '',
      // numbers: [1, 2, 6, 3, 4, 5],
      // images: [one, two, three, four, five, six, seven, eight]
    };
  }

  // handler() {
  //   console.log(this.state.images.indexOf(one))
  //   this.state.images.push(this.state.images.splice(this.state.images.indexOf(one), 1)[0]);      
  //   console.log(this.state.images.indexOf(one))
  // }

  // Updates the value everytime there is a change in the input field
  // onChangeValue = event => {
  //   this.setState({ value: event.target.value });
  // };

  // Adds the value from input field to the numbers array
  // AddItem = () => {
  //   this.setState( state => {
  //     if(this.state.value.length > 0){
  //       // Adds the input value to the numbers array
  //       const numbers = state.numbers.concat(state.value);
        
  //       return {
  //         numbers,
  //         value: '',
  //       };
  //     } else {
  //       // Input validation for null value
  //       window.alert("Please input a value");
  //     }
  //   });
// };

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <div className='nav'>
              <nav className='navigation'>
                <NavLink exact={true} activeClassName='nav_active' to="/" className="nav-item"><u>Home</u></NavLink>
                <NavLink activeClassName='nav_active' to="/resume" className="nav-item"><u>Resume</u></NavLink>
                <NavLink 
                  activeClassName='nav_active' 
                  to={{
                    // handler: this.state.handler,
                    pathname: "/fibonacci", 
                    state: this.state.images}} 
                  className="nav-item"><u>Fibonacci</u></NavLink>
              </nav>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route path="/fibonacci" component={Fibonacci} handler={this.state.handler} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

function Resume() {
  return (
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
                <h2><u>LANGUAGES</u></h2> 
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
                    <a href='https://nadaasi.com'><img src='nadaasi.png' width={100} alt="Nadaasi"/></a>
                  </li>
                  <br/>
                  <li>
                    <a href='https://lianatech.herokuapp.com'><img src='liana.svg' width={100} alt="Lianatech"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='right'>
            <div className='type'>
              <div className='typing-demo'>
                Download Resume↓
              </div>
            </div>
            <div className='save-icon'>
              <a href='harjitkarmacharya.pdf' download>
              <img src="save.png" alt="mail" width="30px"/>
            </a>
            </div>

            {/* Education */}
            <div className='col2-row1'>
              <h2 className='col2-row1-row right-heading2'><u>EDUCATION HISTORY</u></h2>
              <div className='col2-row1-row ouas'>
                <div>
                  <a href='https://www.oamk.fi/'>
                    <div className='col2-row1-row-row'>
                      <h4 className='heading1'>Bachelors of Engineering</h4>
                      <p>Aug 2014 - Aug 2020</p>
                    </div>
                    <div className='col2-row1-row-row'>
                      <h3>Oulu University of Applied Sciences</h3>
                      <i>Information and Communications Technology</i>
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
                      <i>Double Degree (Erasmus Computing)</i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Work */}
            <div className='col2-row2'>
              <h2 className='right-heading'><u>WORK EXPERIENCE</u></h2>
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
                        <li><p>Creating image portal in website using PHP</p></li>
                        <li><p>Image preview in 3D space using ThreeJS</p></li>
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
                        <li><p>A demo android application using Android studio</p></li>
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
                        <li><p>Modern webshop based on javascript and mongoDB</p></li>
                        <li><p>Backend development using Typescript and integration of MongoDB using ExpressJS</p></li>
                        <li><p>Frontend development using ReactJS</p></li>
                        <li><p>Creation and usage of an npm package</p></li>
                        <li><p>Docker for deployment</p></li>
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
              {/* Projects */}
            <div className='col2-row3'>
              <h2 className='col2-row3-row right-heading'><u>PROJECTS</u></h2>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>MOVIE SEAT BOOKING SYSTEM </b>(Bootstrap and JS)</p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 1st semester project</i></p> 
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                <p><b>PC game </b><br />(Unity & Blender)</p>                
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>- 2nd semester project</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                <p><b>Mealting </b>(Meteor JS)</p>
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
  )
}

function Home() {
  return (
    <div>
    <div className='header'>
      {/* First container */}
      <div className='container container_solid'>
        <div className='title_wrapper'>
          <h1>Harjit Karmacharya</h1>
        </div>
      </div>
      {/* Second container */}
      <div className='container container_image' aria-hidden="true">
        <div className='title_wrapper'>
          <h1>Harjit Karmacharya</h1>
        </div>
      </div>
    </div>
      {/* Timeline */}
      <div className='timeline'>
        <div className='timeline_container right'>
          <div className='date'>1 Sep 2011</div>  
          <div className="content">  
            <h2>Capital College and Research Center</h2>  
            <p>  
              High School<br />
              <small><i>Physics and Mathematics Major</i></small>
            </p>  
          </div>
        </div>
        <div className='timeline_container left'>
          <div className="date">27 Aug 2014</div>  
          <div className="content">  
            <h2>Oulu University of Applied Sciences</h2>  
            <p>  
              Bachelors in Engineering <br />
              <small><i>Information and Communications Technology</i></small>
            </p>  
          </div>
        </div>
        <div className='timeline_container right'>
          <div className="date">5 Sep 2016</div>  
          <div className="content">  
            <h2>Dublin Institute of Technology</h2>  
            <p>  
            Bachelors in Computer Sciences <br />
              <small><i>Double Degree (Erasmus Computing)</i></small>
            </p>  
          </div>
        </div>  
      </div>
    </div>
  )
}

export default App;
