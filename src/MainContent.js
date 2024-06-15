
import React from 'react';
import java from './images/java.png';
import html from './images/html.png';
import db from './images/database.png';
import react from './images/physics.png';
import php from './images/php.png';
import css from './images/css.png';
import Header from './Header';
import ProjectPage from './ProjectPage'; // Import the ProjectPage component

const MainContent = () => {
  return (
    <div id="content">
     
      <div id="navigation" className="nav-bar">
        <a href="#qualifications" className="nav-button">Qualifications</a>
        <a href="#skills" className="nav-button">Skills</a>
        <a href="#interests" className="nav-button">Interests</a>
        <a href="#awards" className="nav-button">Awards</a>
        <a href="#projects" className="nav-button">Projects</a> {/* Add Projects button */}
      </div>

      <section id="qualifications" className="section">
        <h1>QUALIFICATIONS</h1>
        <div className="qualification-item">
          <h3>Computer Science and Engineering</h3>
          <p>K.S.Rangasamy College of Technology (Autonomous), Tiruchengode</p>
          <p>Anna University, Chennai</p>
          <p>May 2023</p>
          <p>8.7 CGPA (up to 6th Sem)</p>
        </div>
        <div className="qualification-item">
          <h3>HSC</h3>
          <p>Malco Vidyalaya Matriculation Higher Secondary School, Mettur Dam – 2</p>
          <p>Tamil Nadu State Board</p>
          <p>May 2021</p>
          <p>85%</p>
        </div>
        <div className="qualification-item">
          <h3>SSLC</h3>
          <p>Malco Vidyalaya Matriculation Higher Secondary School, Mettur Dam – 2</p>
          <p>Tamil Nadu State Board</p>
          <p>May 2019</p>
          <p>87.09%</p>
        </div>
      </section>

      <hr className="divider" />

      <section id="skills" className="section">
        <h1>SKILL SETS</h1>
        <ul className="skill-list">
          <li><img src={java} alt="Java Icon" /></li>
          <li><img src={html} alt="HTML5 Icon" /></li>
          <li><img src={css} alt="CSS3 Icon" /></li>
          {/* <li><img src={} alt="JavaScript Icon" /></li> */}
          <li><img src={php} alt="PHP Icon" /></li>
          <li><img src={db} alt="SQL Icon" /></li>
          <li><img src={react} alt="React.js Icon" /></li>
        </ul>
      </section>

      <hr className="divider" />

      <section id="interests" className="section">
        <h1>AREAS OF INTEREST</h1>
        <ul>
          <li>Full Stack Development</li>
          <li>Testing and Debugging</li>
          <li>Software Development</li>
        </ul>
      </section>

      <section id="awards" className="section">
        <h1>AWARDS AND ACHIEVEMENTS</h1>
        <ul>
          <li>Completed "Programming in Java" with an Elite certificate from NPTEL.</li>
          <li>Successfully finished "MySQL Basics" course at Great Learning.</li>
          <li>Completed an online internship focused on "Internet of Things (IoT)" at Emertxe.</li>
          <li>Developed and launched an online footwear shop as a web development project.</li>
          <li>Contributed to the development of an HR portal during an internship at Calanjiyam Consultancy.</li>
        </ul>
      </section>

      <section id="projects" className="section"> {/* Projects section */}
        <ProjectPage />
      </section>

    </div>
  );
};

export default MainContent;


