import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import { API_BASE_URL, EMAIL, LINKEDIN_URL, GITHUB_URL, RESUME_PDF_URL } from '../constants'
import '../styles/resume.css'
import lang from '../lang/lang.json'

const LANGUAGE_OPTIONS = ['eng', 'fin']

// Defined outside component — never recreated on re-render
const SKILL_ITEMS = {
  web: ['React', 'Redux', 'Angular', 'Meteor', 'Typescript', 'Express'],
  software: ['Java', 'C#'],
  cloud: ['AWS', 'Docker', 'Heroku', 'Netlify'],
  database: ['MySQL', 'MongoDB'],
  mobile: ['Android Studio'],
  game: ['Unity', 'Blender'],
  hardware: ['Arduino', 'Lego Robots', 'GoPiGo']
}

const LANG_PROFICIENCY = [
  { key: 'english', dots: '••••◦' },
  { key: 'finnish', dots: '••◦◦◦' },
  { key: 'nepali', dots: '•••••' },
  { key: 'hindi', dots: '••••◦' }
]

const WORK_JOBS = [
  {
    jobKey: 'job5',
    companyKey: 'company5',
    dateKey: 'date5',
    url: 'https://www.kassavirtanen.fi/',
    cssClass: 'kassavirtanen'
  },
  {
    jobKey: 'job3',
    companyKey: 'company3',
    dateKey: 'date3',
    url: 'https://nadaasi.com/',
    cssClass: 'nadaasi'
  },
  {
    jobKey: 'job2',
    companyKey: 'company2',
    dateKey: 'date2',
    url: 'https://www.nepgo.com/',
    cssClass: 'nepgo'
  },
  {
    jobKey: 'job1',
    companyKey: 'company1',
    dateKey: 'date1',
    url: 'https://cajotechnologies.com/',
    cssClass: 'cajo'
  }
]

const EDUCATION = [
  {
    degreeKey: 'degree1',
    schoolKey: 'school1',
    dateKey: 'date1',
    subjectKey: 'subject1',
    url: 'https://www.oamk.fi/',
    cssClass: 'ouas'
  },
  {
    degreeKey: 'degree2',
    schoolKey: 'school2',
    dateKey: 'date2',
    subjectKey: 'subject2',
    url: 'https://www.tudublin.ie/',
    cssClass: 'dit'
  }
]

function Resume() {
  const [option, setOption] = useState('eng')
  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef(null)

  const language = useMemo(() => lang[option], [option])

  useEffect(() => {
    fetch(`${API_BASE_URL}/.netlify/functions/postIP/visit`).catch(() => {})

    return () => clearTimeout(copyTimerRef.current)
  }, [])

  const copyEmail = useCallback((e) => {
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(EMAIL).catch(() => {})
    }
    setCopied(true)
    clearTimeout(copyTimerRef.current)
    copyTimerRef.current = setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <div style={{ textAlign: 'left' }}>
      <div className="resume">
        <div className='lang-toggle'>
        {LANGUAGE_OPTIONS.map(opt => (
          <button
            key={opt}
            className={`lang-btn ${option === opt ? 'active' : ''}`}
            onClick={() => setOption(opt)}
            aria-pressed={option === opt}
          >
            {opt.toUpperCase()}
          </button>
        ))}
      </div>
        {/* Left column */}
        <div className="left">
          {/* Details */}
          <div className="col1-row1 details">
            <div className="col1-row1-row">
              <h1>{language.name}</h1>
              <h4>{language.profession}</h4>
            </div>
            <div className="col1-row1-row">
              <div className="col1-row1-row-row1">
                <img src="gmail.png" alt="mail" width="20px" />
                <a
                  className="email"
                  href={`mailto:${EMAIL}`}
                  onClick={copyEmail}
                >
                  {language.email}
                  <span className={copied ? 'copied' : 'copy'}>
                    <img src="copy.jpg" width="14px" alt="copy" />
                  </span>
                </a>
              </div>
              <br />
              <div className="col1-row1-row-row1">
                <img src="linkedin2.png" alt="linkedin" width="20px" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language.linkedin}
                </a>
              </div>
              <br />
              <div className="col1-row1-row-row1">
                <img src="github.png" alt="github" width="20px" />
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language.github}
                </a>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col1-row2 skills">
            <div className="col1-row2-row">
              <h2>
                <u>{language.skills.heading}</u>
              </h2>
            </div>
            {Object.entries(SKILL_ITEMS).map(([key, items]) => (
              <div className="col1-row2-row" key={key}>
                <b>{language.skills[key]}</b>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="col1-row3 languages">
            <div className="col1-row3-row">
              <h2>
                <u>{language.languages.heading}</u>
              </h2>
            </div>
            <div className="col1-row3-row">
              {LANG_PROFICIENCY.map(({ key, dots }) => (
                <div key={key}>
                  <p>{language.languages[key]}</p>
                  <p className="dots">{dots}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right">
          <div className="type">
            <div className="typing-demo">{language.download}↓</div>
          </div>
          <div className="save-icon">
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="save.png" alt="download" width="30px" />
            </a>
          </div>

          <div className="col2-row2">
            <h2>{language.profession}</h2>
            <div className="col2-row2-row">
              <p style={{ margin: 0 }}>{language.summary}</p>
            </div>
          </div>

          {/* Work */}
          <div className="col2-row2">
            <h2 className="right-heading">
              <u>{language.work.heading}</u>
            </h2>
            {WORK_JOBS.map(({ jobKey, companyKey, dateKey, url, cssClass }) => (
              <div className={`col2-row2-row ${cssClass}`} key={jobKey}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <div className="col2-row2-row-row">
                    <h4 className="right-heading1">{language.work[jobKey]}</h4>
                    <p>{language.work[dateKey]}</p>
                  </div>
                  <div className="col2-row2-row-row">
                    <h2>{language.work[companyKey]}</h2>
                    <ul>
                      {language.work.bullets[jobKey].map((bullet, i) => (
                        <li key={i}>
                          <p>{bullet}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="col2-row1">
            <h2 className="col2-row1-row right-heading2">
              <u>{language.education.heading}</u>
            </h2>
            {EDUCATION.map(
              ({
                degreeKey,
                schoolKey,
                dateKey,
                subjectKey,
                url,
                cssClass
              }) => (
                <div className={`col2-row1-row ${cssClass}`} key={degreeKey}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="col2-row1-row-row">
                      <h4 className="heading1">
                        {language.education[degreeKey]}
                      </h4>
                      <p>{language.education[dateKey]}</p>
                    </div>
                    <div className="col2-row1-row-row">
                      <h3>{language.education[schoolKey]}</h3>
                      <i>{language.education[subjectKey]}</i>
                    </div>
                  </a>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
