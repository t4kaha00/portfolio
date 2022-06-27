import axios from 'axios'
import { axiosInstance } from '../config'
import React, { Component } from 'react';
import '../styles/resume.css';

class Resume extends Component{
    fetchIP = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clickedData:true,
          ipaddress: res.data.IPv4,
          ipcountry: res.data.country_code,
          ipcity: res.data.city
        })
      }
    
      await axiosInstance({
        url: '/app/submit',
        method: 'POST',
        data: options
      }).then(res => console.log("Fetched!!"))
        .catch(error => {
          console.log(error)
        })
    }
    
    copy = () => {
      navigator.clipboard.writeText("hkarmacharya@gmail.com")
      document.getElementsByClassName('copy')[0].className ='copied'
    }

    render() {
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
                        <a className="email" onClick={this.copy}>
                          hkarmacharya@gmail.com
                          <span className='copy'>
                            <img src='copy.jpg' width="14px" alt='copy'/>
                          </span>
                        </a>
                      </div>
                      <br/>
                      <div className='col1-row1-row-row1'>
                        <img src="linkedin2.png" alt="linkedin" width="20px"/>
                        <a href='http://www.linkedin.com/in/harjit-karmacharya' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </div>
                      <br/>
                      <div className='col1-row1-row-row1'>
                        <img src="github.png" alt="github" width="20px"/>
                        <a href='https://github.com/t4kaha00' target="_blank" rel="noopener noreferrer">Github</a>
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
                          <a href='https://nadaasi.com' target="_blank" rel="noopener noreferrer"><img src='nadaasi.png' width={100} alt="Nadaasi"/></a>
                        </li>
                        <br/>
                        <li>
                          <a href='https://lianatech.herokuapp.com' target="_blank" rel="noopener noreferrer"><img src='liana.svg' width={100} alt="Lianatech"/></a>
                        </li>
                        <br/>
                        <li>
                          <a href='http://mern-stack-trial.herokuapp.com/' target="_blank" rel="noopener noreferrer">mern-stack-trial.herokuapp.com</a>
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
                    <a href='harjitkarmacharya.pdf'  target="_blank" rel="noopener noreferrer" onClick={this.fetchIP}>
                    {/* <a onClick={this.fetchIP}> */}
                    <img src="save.png" alt="mail" width="30px"/>
                  </a>
                  </div>
      
                  {/* Education */}
                  <div className='col2-row1'>
                    <h2 className='col2-row1-row right-heading2'><u>EDUCATION HISTORY</u></h2>
                    <div className='col2-row1-row ouas'>
                      <div>
                        <a href='https://www.oamk.fi/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://www.tudublin.ie/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://cajotechnologies.com/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://www.nepgo.com/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://nadaasi.com/' target="_blank" rel="noopener noreferrer">
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
                        <a href='https://nclean.fi/' target="_blank" rel="noopener noreferrer">
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
}

export default Resume