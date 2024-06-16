import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);


  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (

      <ul className="sidebar-nav">
        <li>
          <Link to="/home" className="nav-link" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/personal" className="nav-link" onClick={closeSidebar}>
            Personal
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={closeSidebar}>
            Contact
          </Link>
        </li>
      </ul>

  );
};

export default Sidebar;


