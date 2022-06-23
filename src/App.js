import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios'
import './styles/App.css';
import './styles/menu.css';
import Fibonacci from './components/Fibonacci'
import Resume from './components/Resume'



class App extends Component {
  constructor() {
    super();
    this.state = {
       ipaddress: '',
       ipcity: '',
       ipcountry:'',
       checked: false 
    };
  }

  componentDidMount() {
    this.get()
  }

  get = () => {
    axios.get('/app').then(() => {console.log("Database responded")})
  }

  uncheck = (e) => {
    e.preventDefault();
    this.setState({checked: !this.state.checked})
  }

  change = () => {
    this.setState({checked: !this.state.checked})
  }

  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <div className='nav'>
              <nav className='navigation'>
              <label>
                <input type="checkbox" checked={this.state.checked}
                onChange={this.change}/>
                <span className="menu">
                  <span className="hamburger"></span>
                </span>
                <ul>
                  <li onClick={this.uncheck} activeclassname='nav_active'>
                    <NavLink 
                      exact={true}
                      activeClassName='nav_active' 
                      to="/" className="nav-item">
                        <u>Home</u>
                    </NavLink>
                  </li>
                  <li onClick={this.uncheck} activeclassname='nav_active'> 
                    <NavLink 
                      activeClassName='nav_active'
                      to="/resume" className="nav-item">
                        <u>Resume</u>
                    </NavLink>
                  </li>
                  <li onClick={this.uncheck} activeclassname='nav_active'>
                    <NavLink
                      activeClassName='nav_active' 
                      to={{
                        pathname: "/fibonacci", 
                        state: this.state.images}} 
                        className="nav-item"><u>Fibonacci</u>
                    </NavLink>
                  </li>
                </ul>
                </label>
              </nav>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resume" component={Resume} />
              <Route path="/fibonacci" component={Fibonacci} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
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

    {/* H Logo  */}
    <div style={{width: '100%', textAlign: '-webkit-center', marginBottom: '1em'}}>
      <div className='logo_container'>
        <div className='logo_horizontal'>
          <div className='horizontal_white white1'></div>
          <div className='horizontal_black black1'></div>
          <div className='horizontal_blank'></div>
          <div className='horizontal_black black2'></div>
          <div className='horizontal_white white2'></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
