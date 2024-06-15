import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div id="sidebar" className={sidebarVisible ? 'show' : ''}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        Menu
      </button>

      <ul className="sidebar-nav">
      <li>
          <Link to="/" className="nav-link" onClick={toggleSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/personal" className="nav-link" onClick={toggleSidebar}>
            Personal
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={toggleSidebar}>
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
