import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import {
  API_BASE_URL,
  EMAIL,
  LINKEDIN_URL,
  GITHUB_URL_PERSONAL,
  GITHUB_URL_PROFESSIONAL,
  RESUME_PDF_URL,
} from "../constants";
import "../styles/resume.css";
import lang from "../lang/lang.json";

const LANGUAGE_OPTIONS = ["eng", "fin"];

// Defined outside component — never recreated on re-render
const SKILL_ITEMS = {
  web: ["React", "Redux", "Angular", "Meteor", "Typescript", "Express"],
  software: ["Java", "C#"],
  cloud: ["AWS", "Docker", "Heroku", "Netlify"],
  database: ["MySQL", "MongoDB"],
  mobile: ["Android Studio"],
  game: ["Unity", "Blender"],
  hardware: ["Arduino", "Lego Robots", "GoPiGo"],
};

const LANG_PROFICIENCY = [
  { key: "english", dots: "••••◦" },
  { key: "finnish", dots: "••◦◦◦" },
  { key: "nepali", dots: "•••••" },
  { key: "hindi", dots: "••••◦" },
];

const WORK_JOBS = [
  {
    jobKey: "job5",
    companyKey: "company5",
    dateKey: "date5",
    url: "https://www.kassavirtanen.fi/",
    cssClass: "kassavirtanen",
  },
  {
    jobKey: "job3",
    companyKey: "company3",
    dateKey: "date3",
    url: "https://nadaasi.com/",
    cssClass: "nadaasi",
  },
  {
    jobKey: "job2",
    companyKey: "company2",
    dateKey: "date2",
    url: "https://www.nepgo.com/",
    cssClass: "nepgo",
  },
  {
    jobKey: "job1",
    companyKey: "company1",
    dateKey: "date1",
    url: "https://cajotechnologies.com/",
    cssClass: "cajo",
  },
];

const EDUCATION = [
  {
    degreeKey: "degree1",
    schoolKey: "school1",
    dateKey: "date1",
    subjectKey: "subject1",
    url: "https://www.oamk.fi/",
    cssClass: "ouas",
  },
  {
    degreeKey: "degree2",
    schoolKey: "school2",
    dateKey: "date2",
    subjectKey: "subject2",
    url: "https://www.tudublin.ie/",
    cssClass: "dit",
  },
];

const RESUME_TABS = [
  { key: "education", labelKey: "education.heading" },
  { key: "projects", labelKey: "projects.heading" },
  { key: "livetools", labelKey: "live_projects.heading" },
];

function getByPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part]) || "", obj);
}

function Resume() {
  const [option, setOption] = useState("eng");
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [activeTab, setActiveTab] = useState("education");
  const copyTimerRef = useRef(null);

  const language = useMemo(() => lang[option], [option]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/.netlify/functions/postIP/visit`).catch(() => {});

    return () => clearTimeout(copyTimerRef.current);
  }, []);

  const showFeedback = useCallback((setter, ms = 2000) => {
    setter(true);
    clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setter(false), ms);
  }, []);

  const copyEmail = useCallback(
    (e) => {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(EMAIL).catch(() => {});
      }
      showFeedback(setCopied);
    },
    [showFeedback],
  );

  const onDownload = useCallback(
    (e) => {
      showFeedback(setDownloaded);
    },
    [showFeedback],
  );

  return (
    <div style={{ textAlign: "left" }}>
      <div className="resume">
        <div className="lang-toggle">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt}
              className={`lang-btn ${option === opt ? "active" : ""}`}
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
                  aria-label={`${language.email} — copy to clipboard`}
                >
                  <span className="email-text">{language.email}</span>
                  <span
                    className={`copy-feedback ${copied ? "show" : ""}`}
                    role="status"
                    aria-live="polite"
                  >
                    {copied ? "✓ Copied" : "Copy"}
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
                  href={GITHUB_URL_PERSONAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language.githubPersonal}
                </a>
              </div>
              <br />
              <div className="col1-row1-row-row1">
                <img src="github.png" alt="github" width="20px" />
                <a
                  href={GITHUB_URL_PROFESSIONAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language.githubProfessional}
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
            <a
              className={`download-demo ${downloaded ? "downloaded" : ""}`}
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownload}
            >
              {downloaded ? "✓" : `${language.download}↓`}
            </a>
          </div>
          <div className="save-icon">
            <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
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

          {/* Tabs: Education / Projects / Live Projects */}
          <div className="col2-row1">
            <div
              className="resume-tabs"
              role="tablist"
              aria-label="Resume sections"
            >
              {RESUME_TABS.map(({ key, labelKey }) => (
                <button
                  key={key}
                  role="tab"
                  className={`resume-tab ${activeTab === key ? "active" : ""}`}
                  aria-selected={activeTab === key}
                  onClick={() => setActiveTab(key)}
                >
                  {getByPath(language, labelKey)}
                </button>
              ))}
            </div>

            <div className="tab-panel" role="tabpanel">
              {activeTab === "education" && (
                <EducationPanel language={language} />
              )}
              {activeTab === "projects" && (
                <ProjectsPanel language={language} />
              )}
              {activeTab === "livetools" && (
                <LiveProjectsPanel language={language} />
              )}
            </div>
          </div>
        </div>

        <ScrollProgress />
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(pct);
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className={`scroll-progress ${visible ? "show" : ""}`}
        style={{ width: `${progress}%` }}
      />
      <button
        className={`back-to-top ${visible ? "show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

function EducationPanel({ language }) {
  return (
    <div className="tab-inner">
      {EDUCATION.map(
        ({ degreeKey, schoolKey, dateKey, subjectKey, url, cssClass }) => (
          <div className={`col2-row1-row ${cssClass}`} key={degreeKey}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div className="col2-row1-row-row">
                <h4 className="heading1">{language.education[degreeKey]}</h4>
                <p>{language.education[dateKey]}</p>
              </div>
              <div className="col2-row1-row-row">
                <h3>{language.education[schoolKey]}</h3>
                <i>{language.education[subjectKey]}</i>
              </div>
            </a>
          </div>
        ),
      )}
    </div>
  );
}

function ProjectsPanel({ language }) {
  const projects = ["app1", "app2", "app3", "app4"];
  return (
    <div className="tab-inner">
      <ul className="project-list">
        {projects.map((key) => (
          <li key={key}>{language.projects[key]}</li>
        ))}
      </ul>
    </div>
  );
}

function LiveProjectsPanel({ language }) {
  const links = [
    {
      url: "https://nadaasi.com/",
      labelKey: "live_projects.nadaasi",
    },
    {
      url: "https://mern-stack-trial.netlify.app/",
      labelKey: "live_projects.mern",
    },
  ];
  return (
    <div className="tab-inner">
      <ul className="project-list">
        {links.map(({ url, labelKey }) => (
          <li key={labelKey}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {getByPath(language, labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
