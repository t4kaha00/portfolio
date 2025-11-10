import axios from 'axios'
import { axiosInstance } from '../config'
import React, { Component } from 'react';
import '../styles/resume.css';
import lang from '../lang/lang.json';

class Resume extends Component{
  constructor(props) {
    super(props);
    this.state = {
      languages: ['eng', 'fin'],
      option: 'eng'
    }
  }
  
  componentDidMount() {
    this.fetchIP()
  }
  
  fetchIP = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    const options = {
      clickedData:true,
      ipdata: res.data
    }

    await axiosInstance({
      url: 'https://mern-stack-trial.netlify.app/.netlify/functions/postIP',
      method: 'POST',
      data: options
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  copy = () => {
    navigator.clipboard.writeText("hkarmacharya@gmail.com")
    document.getElementsByClassName('copy')[0].className ='copied'
  }
  

  render() {
    const language = lang[this.state.option]
    const handleLanguageChange = (e) => {
      this.setState({option: e.target.value})
    }

    return (
      <div style={{ 'textAlign': 'left' }}>
        <select
          id='langSelect'
          onChange={handleLanguageChange}
          style={{ margin: '15px', padding: '10px' }}
        >
          {this.state.languages.map((option, index) => (
            <option key={index} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <div className='resume'>
          {/* Left column */}
          <div className='left'>
            {/* Details */}
            <div className='col1-row1 details'>
              <div className='col1-row1-row'>
                <h1>{language.name}</h1>
                <h4>{language.profession}</h4>
              </div>
              <div className='col1-row1-row'>
                <div className='col1-row1-row-row1'>
                  <img src="gmail.png" alt="mail" width="20px" />
                  <a
                    className="email"
                    href="mailto:hkarmacharya@gmail.com"
                    onClick={(e) => {
                      e.preventDefault();
                      this.copy();
                    }}>
                    {language.email}
                    <span className='copy'>
                      <img src='copy.jpg' width="14px" alt='copy' />
                    </span>
                  </a>
                </div>
                <br />
                <div className='col1-row1-row-row1'>
                  <img src="linkedin2.png" alt="linkedin" width="20px" />
                  <a href='http://www.linkedin.com/in/harjit-karmacharya' target="_blank" rel="noopener noreferrer">{language.linkedin}</a>
                </div>
                <br />
                <div className='col1-row1-row-row1'>
                  <img src="github.png" alt="github" width="20px" />
                  <a href='https://github.com/t4kaha00' target="_blank" rel="noopener noreferrer">{language.github}</a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className='col1-row2 skills'>
              <div className='col1-row2-row'>
                <h2><u>{language.skills.heading}</u></h2>
              </div>
              <div className='col1-row2-row'>
                <b>{language.skills.web}</b>
                <ul>
                  <li>React, Redux, Angular, Meteor</li>
                  <li>Typescript, Express</li>
                  <li>Python, Java</li>
                  <li>PHP</li>
                </ul>
              </div>
              <div className='col1-row2-row'>
                <b>{language.skills.software}</b>
                <ul>
                  <li>Java, C#</li>
                </ul>
              </div>
              <div className='col1-row2-row'>
                <b>{language.skills.cloud}</b>
                <ul>
                  <li>AWS, Docker</li>
                  <li>Heroku, Netlify</li>
                </ul>
              </div>
              <div className='col1-row2-row'>
                <p>{language.skills.database}</p>
                <ul><li>MySQL, MongoDB</li></ul>
              </div>
              <div className='col1-row2-row'>
                <p>{language.skills.mobile}</p>
                <ul><li>Android studio</li></ul>
              </div>
              <div className='col1-row2-row'>
                <b>{language.skills.game}</b>
                <ul><li>Unity, Blender</li></ul>
              </div>
              <div className='col1-row2-row'>
                <b>{language.skills.hardware}</b>
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
                <h2><u>{language.languages.heading}</u></h2>
              </div>
              <div className='col1-row3-row'>
                <div>
                  <p>{language.languages.english}</p>
                  <p className='dots'>••••◦</p>
                </div>
                <div>
                  <p>{language.languages.finnish}</p>
                  <p className='dots'>••◦◦◦</p>
                </div>
                <div>
                  <p>{language.languages.nepali}</p>
                  <p className='dots'>•••••</p>
                </div>
                <div>
                  <p>{language.languages.hindi}</p>
                  <p className='dots'>••••◦</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='right'>
            <div className='type'>
              <div className='typing-demo'>
                {language.download}↓
              </div>
            </div>
            <div className='save-icon'>
              <a href='harjitkarmacharya.pdf' target="_blank" rel="noopener noreferrer" onClick={this.fetchIP}>
                <img src="save.png" alt="mail" width="30px" />
              </a>
            </div>            

            <div className='col2-row2'>
              <h2>IT Engineer</h2>
              <div className='col2-row2-row'>
                <p style={{ margin: 0 }}>
                  An IT engineering graduate with expertise in full-stack web
                  development, cloud management, and scalable application
                  design. Skilled in driving end-to-end software development
                  projects, leveraging modern frameworks like React, Node.js,
                  and Azure to deliver innovative solutions. Passionate about
                  optimizing performance and delivering impactful digital
                  experiences.
                </p>
              </div>
            </div>

            {/* Work */}
            <div className='col2-row2'>
              <h2 className='right-heading'><u>{language.work.heading}</u></h2>
              <div className='col2-row2-row kassavirtanen'>
                <div>
                  <a href='https://www.kassavirtanen.fi/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>{language.work.job5}</h4>
                      <p>{language.work.date5}</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>{language.work.company5}</h2>
                      <ul>
                        <li><p>Expanded a financial application to support operations in multiple countries, driving business scalability.</p></li>
                        <li><p>Enhanced the ReactJS frontend with Redux-Saga middleware to optimize state management and user interactions.</p></li>
                        <li><p>Developed backend systems with C# and .NET framework, ensuring robust and maintainable solutions.</p></li>
                        <li><p>Implemented complex stored procedures in Microsoft SQL Server.</p></li>
                        <li><p>Introduced SSDT for versioning and tracking stored procedure changes, resulting in improved collaboration between developers and more reliable production releases.</p></li>
                        <li><p>Managed deployments and server configurations on Microsoft Azure.</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className='col2-row2-row nclean'>
                <div>
                  <a href='https://nclean.fi/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>{language.work.job4}</h4>
                      <p>{language.work.date4}</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>{language.work.company4}</h2>
                      <ul>
                        <li><p>Managing the housekeeping department for client hotels (Aalto Inn, Unihome Oy)</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div> */}
              <div className='col2-row2-row nadaasi'>
                <div>
                  <a href='https://nadaasi.com/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>{language.work.job3}</h4>
                      <p>{language.work.date3}</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>{language.work.company3}</h2>
                      <ul>
                        <li><p>Developed and deployed a self-managed webshop application using React and Node.js.</p></li>
                        <li><p>Designed backend systems with TypeScript and ExpressJS, reducing API response times.</p></li>
                        <li><p>Managed and optimized a MongoDB database, ensuring data integrity and scalability.</p></li>
                        <li><p>Created a custom NPM package to streamline development for future projects.</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row2-row nepgo'>
                <div>
                  <a href='https://www.nepgo.com/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>{language.work.job2}</h4>
                      <p>{language.work.date2}</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>{language.work.company2}</h2>
                      <ul>
                        <li><p>Developed a demo android application for the startup company oriented for charities.</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row2-row cajo'>
                <div>
                  <a href='https://cajotechnologies.com/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row2-row-row'>
                      <h4 className='right-heading1'>{language.work.job1}</h4>
                      <p>{language.work.date1}</p>
                    </div>
                    <div className='col2-row2-row-row'>
                      <h2>{language.work.company1}</h2>
                      <ul>
                        <li><p>Developed an online image modification portal using PHP and ThreeJS.</p></li>
                        <li><p>Rendered 3D objects and enabled custom image patching for 3D printing.</p></li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Education */}
            <div className='col2-row1'>
              <h2 className='col2-row1-row right-heading2'><u>{language.education.heading}</u></h2>
              <div className='col2-row1-row ouas'>
                <div>
                  <a href='https://www.oamk.fi/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row1-row-row'>
                      <h4 className='heading1'>{language.education.degree1}</h4>
                      <p>{language.education.date1}</p>
                    </div>
                    <div className='col2-row1-row-row'>
                      <h3>{language.education.school1}</h3>
                      <i>{language.education.subject1}</i>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col2-row1-row dit'>
                <div>
                  <a href='https://www.tudublin.ie/' target="_blank" rel="noopener noreferrer">
                    <div className='col2-row1-row-row'>
                      <h4 className='heading1'>{language.education.degree2}</h4>
                      <p>{language.education.date2}</p>
                    </div>
                    <div className='col2-row1-row-row'>
                      <h3>{language.education.school2}</h3>
                      <i>{language.education.subject2}</i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Projects */}
            {/* <div className='col2-row3'>
              <h2 className='col2-row3-row right-heading'><u>{language.projects.heading}</u></h2>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>{language.projects.app1}</b></p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>(Bootstrap and JS)</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>{language.projects.app2}</b></p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>(Unity & Blender)</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>{language.projects.app3}</b></p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>(Meteor JS)</i></p>
                </div>
              </div>
              <div className='col2-row3-row'>
                <div className='col2-row3-row-row'>
                  <p><b>{language.projects.app4}</b></p>
                </div>
                <div className='col2-row3-row-row'>
                  <p><i>(Android)</i></p>
                </div>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
