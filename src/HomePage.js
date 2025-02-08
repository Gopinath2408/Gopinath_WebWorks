import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero">
      <nav className="navbar">
        <div className="logo">GOPINATH</div>
        
        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/Gopinath_WebWorks/main-content" onClick={() => setMenuOpen(false)}>Resume</Link></li>
          <li><Link to="/Gopinath_WebWorks/Project" onClick={() => setMenuOpen(false)}>Project</Link></li>
          <li><Link to="/Gopinath_WebWorks/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      <div className="content">
        <h1>Hey</h1>
        <TypeAnimation
          sequence={["I'm Gopi", 2000, "a Web Developer!", 2000, "😊", 2000]}
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />
      </div>
    </div>
  );
};

export default HomePage;
