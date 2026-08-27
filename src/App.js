import { useEffect, useRef, useState } from "react";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import "./styles/App.css";
import "./styles/menu.css";
import Resume from "./components/Resume";

const MENU_ITEMS = [
  { to: "/", label: "Home", exact: true },
  { to: "/resume", label: "Resume", exact: false },
];

const SCRAMBLE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SCRAMBLE_INTERVAL_MS = 50;
const SCRAMBLE_PAUSE_MS = 3500;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <div className="nav">
          <nav className="navigation">
            <label>
              <input
                type="checkbox"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
              />
              <span className="menu">
                <span className="hamburger"></span>
              </span>
              <ul>
                {MENU_ITEMS.map(({ to, label, exact }) => (
                  <li key={to} onClick={() => setMenuOpen(false)}>
                    <NavLink
                      exact={exact}
                      activeClassName="nav_active"
                      to={to}
                      className="nav-item"
                    >
                      <u>{label}</u>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </label>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  const headingRef = useRef(null);
  const [cueVisible, setCueVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setCueVisible(window.scrollY < 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const h1 = headingRef.current;
    if (!h1) return undefined;

    const target = h1.dataset.value;
    let interval = null;
    let resetTimer = null;

    const scramble = () => {
      let iteration = 0;
      interval = setInterval(() => {
        h1.innerText = target
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target[index];
            }
            return SCRAMBLE_LETTERS[
              Math.floor(Math.random() * SCRAMBLE_LETTERS.length)
            ];
          })
          .join("");

        if (iteration >= target.length) {
          clearInterval(interval);
          resetTimer = setTimeout(scramble, SCRAMBLE_PAUSE_MS);
          return;
        }

        iteration += 0.5;
      }, SCRAMBLE_INTERVAL_MS);
    };

    scramble();

    return () => {
      clearInterval(interval);
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <div>
      <div className="header">
        {/* First container */}
        <div className="container container_solid">
          <div className="title_wrapper">
            <h1 ref={headingRef} data-value="Harjit Karmacharya">
              Harjit Karmacharya
            </h1>
          </div>
        </div>
        {/* Second container */}
        <div className="container container_image" aria-hidden="true">
          <div className="title_wrapper">
            <h1>Harjit Karmacharya</h1>
          </div>
        </div>

        {/* Scroll down cue */}
        <button
          className={`scroll-cue ${cueVisible ? "show" : "hide"}`}
          onClick={scrollToTimeline}
          aria-label="Scroll to journey"
        >
          <span className="scroll-cue-mouse">
            <span className="scroll-cue-wheel"></span>
          </span>
          <span className="scroll-cue-text">Scroll</span>
        </button>
      </div>

      {/* Timeline */}
      <Timeline />

      {/* H Logo */}
      <div
        style={{
          width: "100%",
          textAlign: "-webkit-center",
          marginBottom: "1em",
        }}
      >
        <NavLink to="/" aria-label="Home" className="logo_link">
          <div className="logo_container">
            <div className="logo_horizontal">
              <div className="horizontal_white white1"></div>
              <div className="horizontal_black black1"></div>
              <div className="horizontal_blank"></div>
              <div className="horizontal_black black2"></div>
              <div className="horizontal_white white2"></div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

function scrollToTimeline() {
  const timeline = document.querySelector(".timeline");
  if (timeline) {
    timeline.scrollIntoView({ behavior: "smooth" });
  }
}

function Timeline() {
  return (
    <div className="timeline" id="journey">
      {TIMELINE_ENTRIES.map(({ date, title, subtitle, detail }, index) => (
        <div
          key={`${date}-${title}`}
          className={`timeline_container ${index % 2 === 0 ? "right" : "left"}`}
        >
          <div className="date">{date}</div>
          <div className="content">
            <h2>{title}</h2>
            <p>
              {subtitle}
              <br />
              {detail && (
                <small>
                  <i>{detail}</i>
                </small>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const TIMELINE_ENTRIES = [
  {
    date: "1 Sep 2011",
    title: "Capital College and Research Center",
    subtitle: "High School",
    detail: "Physics and Mathematics Major",
  },
  {
    date: "27 Aug 2014",
    title: "Oulu University of Applied Sciences",
    subtitle: "Bachelors in Engineering",
    detail: "Information and Communications Technology",
  },
  {
    date: "5 Sep 2016",
    title: "Dublin Institute of Technology",
    subtitle: "Bachelors in Computer Sciences",
    detail: "Double Degree (Erasmus Computing)",
  },
  {
    date: "05 Jan 2019",
    title: "Nclean Oy",
    subtitle: "Supervisor",
    detail: null,
  },
  {
    date: "15 Sep 2022",
    title: "Kassavirtanen Oy",
    subtitle: "Full Stack Developer",
    detail: null,
  },
  {
    date: "01 Sep 2026",
    title: "University of Turku",
    subtitle: "Master of Science (Technology)",
    detail: "Robotics and Autonomous Systems",
  },
];

export default App;
