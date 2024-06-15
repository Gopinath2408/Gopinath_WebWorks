import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import ProjectPage from './ProjectPage';
import './App.css'; // Import your main styles
import ContactForm from './ContactForm';
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div id="app-container">


      <button className="sidebar-toggle" onClick={toggleSidebar}>
        Menu
      </button>

      <div className="main-content">
        <div className={`sidebar ${sidebarVisible ? 'show' : ''}`}>
          <Sidebar />
        </div>
        <div className="header-and-content">

          <Routes>
            <Route path='/about' element={<ContactForm />} />
            <Route path='/' element={<MainContent />} />
            <Route path='/personal' element={<PersonalInfo />} />
          </Routes>

        </div>
      </div>
    </div>
  );
};

export default App;
