import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const MainContent = () => {
  const resumeRef = useRef();
  const buttonRef = useRef();

  const handleDownloadPDF = () => {
    if (buttonRef.current) {
      buttonRef.current.style.display = "none";
    }

    const input = resumeRef.current;
    html2canvas(input, { scale: window.devicePixelRatio * 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Gopinath_S_Resume.pdf");

      if (buttonRef.current) {
        buttonRef.current.style.display = "block";
      }
    });
  };

  return (
    <div className="resume-container" ref={resumeRef}>
      <h1 className="resume-header">Gopinath S</h1>
      <p className="resume-info">+91-9994863872 | Mettur, Salem / <a href="mailto:gopinath240803@gmail.com">gopinath240803@gmail.com</a> / <a href="https://linkedin.com/in/gopinath-sakthivel-b53964224">LinkedIn</a> /  <a href="https://github.com/Gopinath2408">GitHub</a></p>

      <h2 className="section-title">Objective</h2>
      <p>To adapt to any kind of workspace by utilizing communicative skills and applying all the technical skills obtained to solve real-time challenges.</p>

      <h2 className="section-title">Education</h2>
      <p><strong>B.E - Computer Science and Engineering</strong> (Expected 2025)</p>
      <p>K S Rangasamy College of Technology - CGPA: 8.6/10</p>
      <p><strong>Higher Secondary School</strong> (2021)</p>
      <p>Malco Vidyalaya Matriculation Higher Secondary School - Percentage: 87.09%</p>
      <p><strong>Secondary School</strong> (2019)</p>
      <p>Malco Vidyalaya Matriculation Higher Secondary School - Percentage: 85%</p>

      <h2 className="section-title">Skills</h2>
      <ul className="skills-list">
        <li>Core Java</li>
        <li>MySQL</li>
        <li>HTML, CSS, JavaScript, PHP</li>
      </ul>

      <h2 className="section-title">Area of Interest</h2>
      <ul className="skills-list">
        <li>Full Stack Development</li>
        <li>Java Backend Development</li>
      </ul>

      <h2 className="section-title">Experience</h2>
      <p><strong>Full Stack Development Intern</strong> (Nov 2023 - Dec 2023)</p>
      <p>Calanjiyam Consultancies and Technologies, Erode</p>
      <ul className="experience-list">
        <li>Engaged in full stack web development using HTML, CSS, JavaScript, PHP,
          and MySQL. Developed responsive web pages, implemented interactive features, and created dynamic content.
          Managed server-side logic and database operations, including CRUD (Create, Read, Update, Delete) operations</li>
        <li>Partnered with senior developers to enhance UI/UX design, resulting in improved user engagement and user experience. Utilized best practices in web development and design to contribute
          to project success</li>
      </ul>

      <h2 className="section-title">Projects</h2>
      <p><strong>Online Shoe Mart</strong></p>
      <ul>
        <li>Developed a responsive site using HTML/CSS for design, JavaScript and AJAX for
          interactivity, PHP for server-side functions, and MySQL for database management. Implemented secure backend
          scripts for user management and orders.<a href="https://github.com/Gopinath2408/Online-Shoe-Mart">(GitHub)</a></li>


        <p><strong>HR Management Portal</strong></p>
        <li>Built a responsive portal using React for the frontend, Node.js for backend services,
          and MongoDB for database management. Designed the UI with React components and state management, and
          implemented RESTful APIs for employee data handling and user authentication.<a href="https://github.com/Gopinath2408/Hrportal-Management-System">(GitHub)</a></li>


      </ul>
      <h2 className="section-title">Achievements & Certifications</h2>
      <ul className="experience-list">
        <li>Completed “Programming in Java” with Elite certificate in NPTEL</li>
        <li>Intermediate Relational Database and SQL Course (Coursera)</li>
        <li>Introduction to Web Development with HTML, CSS, JavaScript (Coursera)</li>
      </ul>

      <button
        ref={buttonRef}
        onClick={handleDownloadPDF}
        className="download-btn"
      >
        Download Resume
      </button>
    </div>
  );
};

export default MainContent;
